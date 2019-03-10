using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Threading.Tasks;
using Amazon.DynamoDBv2.Model;
using Microsoft.Extensions.Logging;

namespace academia_corpo_e_acao
{
    public class AvaliacaoFisicaRepository : IAvaliacaoFisicaRepository
    {
        private readonly DynamoDbContext _context;
        private readonly ILogger _log;
        private const string _type = "avaliacao-fisica";

        public AvaliacaoFisicaRepository(DynamoDbContext context, ILoggerFactory logger)
        {
            _context = context;
            _log = logger.CreateLogger("AvaliacaoFisicaRepository");
        }

        public async Task<Response<AvaliacaoFisica>> SalvarAsync(AvaliacaoFisica avaliacaoFisica)
        {
            var resp = new Response<AvaliacaoFisica>();

            if (avaliacaoFisica == null)
            {
                resp.ErrorMessages.Add("Grupo Muscular inválido.");
                return resp;
            }

            if (avaliacaoFisica.UsuarioId == 0)
            {
                resp.ErrorMessages.Add("Usuario não informado");
                return resp;
            }

            resp.Return = avaliacaoFisica;
            var attributeValues = new Dictionary<string, AttributeValue>();
            var attributeNames = new Dictionary<string, string>();
            string updExpr = String.Empty;

            avaliacaoFisica.DtAtualizacao = DateTime.Now;
            attributeNames.Add("#dtAt", "dt-atualizacao");
            attributeValues.Add(":dtAt", new AttributeValue { S = avaliacaoFisica.DtAtualizacao.ToString() });
            updExpr = "#dtAt = :dtAt";

            if (avaliacaoFisica.Id < 1)
            {
                avaliacaoFisica.Id = (Int32)DateTimeOffset.UtcNow.ToUnixTimeSeconds();

                attributeNames.Add("#usrId", "usuario-id");
                attributeValues.Add(":usrId", new AttributeValue { N = avaliacaoFisica.UsuarioId.ToString() });
                updExpr += ", #usrId = :usrId";
            }

            if (!String.IsNullOrEmpty(avaliacaoFisica.Observacao))
            {
                attributeNames.Add("#obs", "observacao");
                attributeValues.Add(":obs", new AttributeValue { S = avaliacaoFisica.Observacao });
                updExpr += ", #obs = :obs";
            }

            string avaliacaoFisicaJson = ConvertToJson(avaliacaoFisica, resp);
            
            if (!String.IsNullOrEmpty(avaliacaoFisicaJson))
            {
                attributeNames.Add("#avl", "avaliacao-fisica");
                attributeValues.Add(":avl", new AttributeValue { S = avaliacaoFisicaJson });
                updExpr += ", #avl = :avl";
            }

            var request = new UpdateItemRequest
            {
                TableName = _context.TableName,
                Key = new Dictionary<string, AttributeValue>
                    {
                        { "tipo", new AttributeValue { S = _type } },
                        { "id", new AttributeValue { N = avaliacaoFisica.Id.ToString() } }
                    },
                ExpressionAttributeNames = attributeNames,
                ExpressionAttributeValues = attributeValues,
                UpdateExpression = "SET " + updExpr
            };

            UpdateItemResponse updResponse = null;

            using (var client = _context.GetClientInstance())
            {
                try
                {
                    updResponse = await client.UpdateItemAsync(request);
                    resp.Messages.Add(updResponse.HttpStatusCode.ToString());
                }
                catch (Exception e)
                {
                    _log.LogError(e.Message);
                    resp.ErrorMessages.Add(e.Message);
                }
                return resp;
            }
        }

        private string ConvertToJson(AvaliacaoFisica avaliacaoFisica, Response<AvaliacaoFisica> resp)
        {
            string avaliacaoFisicaJson = "";

            try
            {
                using (MemoryStream ms = new MemoryStream())
                {
                    DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(AvaliacaoFisica));
                    ser.WriteObject(ms, avaliacaoFisica);
                    byte[] json = ms.ToArray();
                    ms.Close();
                    avaliacaoFisicaJson = Encoding.UTF8.GetString(json, 0, json.Length);
                }
            }
            catch (Exception e)
            {
                _log.LogError(e.Message);
                resp.ErrorMessages.Add(e.Message);
            }

            return avaliacaoFisicaJson;
        }

        public async Task<Response<List<AvaliacaoFisica>>> ObterAsync(Usuario usuario, int? avaliacaoId)
        {
            var resp = new Response<List<AvaliacaoFisica>>();
            var list = new List<AvaliacaoFisica>();

            if (usuario.Id == 0)
            {
                resp.ErrorMessages.Add("Usuario não informado");
                return resp;
            }

            var attrNames = new Dictionary<string, string>();
            attrNames.Add("#type", "tipo");
            attrNames.Add("#uid", "usuario-id");

            var attrValues = new Dictionary<string, AttributeValue>();
            attrValues.Add(":t", new AttributeValue { S = _type });
            attrValues.Add(":uid", new AttributeValue { N = usuario.Id.ToString() });

            string keyExpr = "#type = :t";

            if (avaliacaoId.HasValue)
            {
                attrNames.Add("#id", "id");
                attrValues.Add(":id", new AttributeValue { N = avaliacaoId.Value.ToString() });
                keyExpr += " AND #id = :id";
            }

            using (var client = _context.GetClientInstance())
            {
                var request = new QueryRequest
                {
                    TableName = _context.TableName,
                    KeyConditionExpression = keyExpr,
                    FilterExpression = "#uid = :uid",
                    ExpressionAttributeNames = attrNames,
                    ExpressionAttributeValues = attrValues
                };

                QueryResponse response = null;

                try
                {
                    response = await client.QueryAsync(request);
                }
                catch (Exception e)
                {
                    _log.LogError(e.Message);
                    resp.ErrorMessages.Add(e.Message);
                    return resp;
                }

                foreach (Dictionary<string, AttributeValue> item in response.Items)
                {
                    var avaliacaoFisica = new AvaliacaoFisica();

                    foreach (KeyValuePair<string, AttributeValue> kvp in item)
                    {
                        string attributeName = kvp.Key;
                        AttributeValue value = kvp.Value;

                        if (attributeName == "id")
                        {
                            avaliacaoFisica.Id = int.Parse(value.N);
                        }
                        else if (attributeName == "observacao")
                        {
                            avaliacaoFisica.Observacao = value.S;
                        }
                        else if (attributeName == "dt-atualizacao")
                        {
                            DateTime dtAtualizacao;
                            DateTime.TryParse(value.S, out dtAtualizacao);
                            avaliacaoFisica.DtAtualizacao = dtAtualizacao;
                        }
                        else if (attributeName == "usuario-id")
                        {
                            avaliacaoFisica.UsuarioId = int.Parse(value.N);
                        }
                        else if (attributeName == "avaliacao-fisica")
                        {
                            if (!String.IsNullOrEmpty(value.S))
                            {
                                try
                                {
                                    using (MemoryStream ms = new MemoryStream(Encoding.UTF8.GetBytes(value.S)))
                                    {
                                        DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(AvaliacaoFisica));
                                        var avlFisica = (AvaliacaoFisica)ser.ReadObject(ms);
                                        ms.Close();
                                        avaliacaoFisica = avlFisica;
                                    }
                                }
                                catch (Exception e)
                                {
                                    _log.LogError(e.Message);
                                    resp.ErrorMessages.Add(e.Message);
                                }
                            }
                        }
                    }
                    list.Add(avaliacaoFisica);
                }

                if (list.Count > 0)
                   resp.Return = list;
                else
                   resp.Messages.Add("Pesquisa não retornou registros.");

                return resp;
            }
        }
    
        public async Task<Response<bool>> ExcluirAsync(int avaliacaoId)
        {
            using (var client = _context.GetClientInstance())
            {
                DeleteItemRequest request = new DeleteItemRequest
                {
                    TableName = _context.TableName,
                    Key = new Dictionary<string, AttributeValue>
                    {
                        { "tipo", new AttributeValue { S = _type } },
                        { "id", new AttributeValue { N = avaliacaoId.ToString() } }
                    },
                };

                Response<bool> resp = new Response<bool>();

                try
                {
                    var delResponse = await client.DeleteItemAsync(request);
                    resp.Messages.Add(delResponse.HttpStatusCode.ToString());
                    resp.Return = true;
                }
                catch (Exception e)
                {
                    resp.Return = false;
                    _log.LogError(e.Message);
                    resp.ErrorMessages.Add(e.Message);
                }
                return resp;                
            }
        }

    }
}