
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
    public class PlanoTreinoRepository : IPlanoTreinoRepository
    {
        private readonly DynamoDbContext _context;
        private readonly ILogger _log;

        public PlanoTreinoRepository(DynamoDbContext context, ILoggerFactory logger)
        {
            _context = context;
            _log = logger.CreateLogger("UsuarioRepository");
        }
        
        public async Task<Response<PlanoTreino>> SalvarAsync(PlanoTreino planoTreino)
        {
            var resp = new Response<PlanoTreino>();

            if (planoTreino == null)
            {
                resp.ErrorMessages.Add("Grupo Muscular inválido.");
                return resp;
            }

            if (planoTreino.UsuarioId == 0)
            {
                resp.ErrorMessages.Add("Usuario não informado");
                return resp;
            }

            string gruposMuscularesJson = "";

            try
            {
                using (MemoryStream ms = new MemoryStream())
                {
                    DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(List<GrupoMuscular>));
                    ser.WriteObject(ms, planoTreino.GruposMusculares);
                    byte[] json = ms.ToArray();
                    ms.Close();
                    gruposMuscularesJson = Encoding.UTF8.GetString(json, 0, json.Length);
                }
            }
            catch (Exception e)
            {
                _log.LogError(e.Message);
                resp.ErrorMessages.Add(e.Message);
            }

            resp.Return = planoTreino;
            var attributeValues = new Dictionary<string, AttributeValue>();
            var attributeNames = new Dictionary<string, string>();
            string updExpr = String.Empty;

            planoTreino.DtAtualizacao = DateTime.Now;
            attributeNames.Add("#dtAt", "dt-atualizacao");
            attributeValues.Add(":dtAt", new AttributeValue { S = planoTreino.DtAtualizacao.ToString() });
            updExpr = "#dtAt = :dtAt";

            if (planoTreino.Id < 1)
            {
                planoTreino.Id = (Int32)DateTimeOffset.UtcNow.ToUnixTimeSeconds();

                attributeNames.Add("#usrId", "usuario-id");
                attributeValues.Add(":usrId", new AttributeValue { N = planoTreino.UsuarioId.ToString() });
                updExpr += ", #usrId = :usrId";
            }

            if (!String.IsNullOrEmpty(planoTreino.Descricao))
            {
                attributeNames.Add("#descr", "descricao");
                attributeValues.Add(":descr", new AttributeValue { S = planoTreino.Descricao });
                updExpr += ", #descr = :descr";
            }

            if (!String.IsNullOrEmpty(planoTreino.Observacao))
            {
                attributeNames.Add("#obs", "observacao");
                attributeValues.Add(":obs", new AttributeValue { S = planoTreino.Observacao });
                updExpr += ", #obs = :obs";
            }

            if (!String.IsNullOrEmpty(gruposMuscularesJson))
            {
                attributeNames.Add("#grp", "grupos-musculares");
                attributeValues.Add(":grp", new AttributeValue { S = gruposMuscularesJson });
                updExpr += ", #grp = :grp";
            }

            var request = new UpdateItemRequest
            {
                TableName = _context.TableName,
                Key = new Dictionary<string, AttributeValue>
                    {
                        { "tipo", new AttributeValue { S = TipoPlanoTreino(planoTreino) } },
                        { "id", new AttributeValue { N = planoTreino.Id.ToString() } }
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

        public async Task<Response<PlanoTreino>> ObterTemplateAsync(int planoTreinoId)
        {
            var resp = new Response<PlanoTreino>();

            using (var client = _context.GetClientInstance())
            {
                var request = new QueryRequest
                {
                    TableName = _context.TableName,
                    KeyConditionExpression = "#type = :t AND #id = :id",
                    ExpressionAttributeNames = new Dictionary<string, string> { { "#type", "tipo" }, { "#id", "id" } },
                    ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                    {
                         { ":t", new AttributeValue { S = "plano-treino-template" } },
                         { ":id", new AttributeValue { N = planoTreinoId.ToString() } }
                    }
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

                var lstPlanoTreino = ExtractPlanoTreino<PlanoTreino>(resp, response);

                if (lstPlanoTreino.Count > 0)
                    resp.Return = lstPlanoTreino[0];
                else
                    resp.Messages.Add("Nenhum registro encontrado.");

                return resp;
            }
        }

        public async Task<Response<PlanoTreino>> ObterAsync(Usuario usuario)
        {
            var resp = new Response<PlanoTreino>();
            var lst = await this.ObterPlanosTreinoAsync<PlanoTreino>(usuario, resp, "plano-treino");

            if (lst.Count > 0)
                resp.Return = lst[0];
            else
                resp.Messages.Add("Nenhum registro encontrado.");

            return resp;
        }

        public async Task<Response<List<PlanoTreino>>> ObterTemplatesAsync(Usuario usuario)
        {
            var resp = new Response<List<PlanoTreino>>();
            var lst = new List<PlanoTreino>();

            if (usuario.Administrador)
            {
                lst = await this.ObterPlanosTreinoAsync<List<PlanoTreino>>(usuario, resp, "plano-treino-template");
            }
            else
            {
                resp.ErrorMessages.Add("Usuário não autorizado.");
            }

            resp.Return = lst;
            return resp;
        }

        public async Task<Response<bool>> ExcluirAsync(PlanoTreino planoTreino)
        {
            using (var client = _context.GetClientInstance())
            {
                DeleteItemRequest request = new DeleteItemRequest
                {
                    TableName = _context.TableName,
                    Key = new Dictionary<string, AttributeValue>
                    {
                        { "tipo", new AttributeValue { S = TipoPlanoTreino(planoTreino) } },
                        { "id", new AttributeValue { N = planoTreino.Id.ToString() } }
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
        
        private async Task<List<PlanoTreino>> ObterPlanosTreinoAsync<T>(Usuario usuario, Response<T> resp, string tipoTreino)
        {
            List<PlanoTreino> lstPlanoTreino = new List<PlanoTreino>();

            if (usuario.Id == 0)
            {
                resp.ErrorMessages.Add("Usuario não informado");
                return lstPlanoTreino;
            }

            using (var client = _context.GetClientInstance())
            {
                var request = new QueryRequest
                {
                    TableName = _context.TableName,
                    KeyConditionExpression = "#type = :t",
                    FilterExpression = "#uid = :uid",
                    ExpressionAttributeNames = new Dictionary<string, string> { { "#type", "tipo" }, { "#uid", "usuario-id" } },
                    ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                    {
                         { ":t", new AttributeValue { S = tipoTreino } },
                         { ":uid", new AttributeValue { N = usuario.Id.ToString() } }
                    }
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
                    return lstPlanoTreino;
                }

                lstPlanoTreino = ExtractPlanoTreino<T>(resp, response);
                return lstPlanoTreino;
            }
        }

        private List<PlanoTreino> ExtractPlanoTreino<T>(Response<T> resp, QueryResponse response)
        {
            List<PlanoTreino> lstPlanoTreino = new List<PlanoTreino>();

            foreach (Dictionary<string, AttributeValue> item in response.Items)
            {
                var planoTreino = new PlanoTreino();

                foreach (KeyValuePair<string, AttributeValue> kvp in item)
                {
                    string attributeName = kvp.Key;
                    AttributeValue value = kvp.Value;

                    if (attributeName == "id")
                    {
                        planoTreino.Id = int.Parse(value.N);
                    }
                    else if (attributeName == "observacao")
                    {
                        planoTreino.Observacao = value.S;
                    }
                    else if (attributeName == "descricao")
                    {
                        planoTreino.Descricao = value.S;
                    }
                    else if (attributeName == "dt-atualizacao")
                    {
                        DateTime dtAtual;
                        DateTime.TryParse(value.S, out dtAtual);
                        planoTreino.DtAtualizacao = dtAtual;
                    }
                    else if (attributeName == "usuario-id")
                    {
                        planoTreino.UsuarioId = int.Parse(value.N);
                    }
                    else if (attributeName == "grupos-musculares")
                    {
                        if (!String.IsNullOrEmpty(value.S))
                        {
                            try
                            {
                                using (MemoryStream ms = new MemoryStream(Encoding.UTF8.GetBytes(value.S)))
                                {
                                    DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(List<GrupoMuscular>));
                                    var list = (List<GrupoMuscular>)ser.ReadObject(ms);
                                    ms.Close();
                                    planoTreino.GruposMusculares = list;
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
                lstPlanoTreino.Add(planoTreino);
            }

            return lstPlanoTreino;
        }
    
        private string TipoPlanoTreino(PlanoTreino planoTreino)
        {
            string tpPlanoTreino = "plano-treino";

            if ((planoTreino.UsuarioId == planoTreino.usuario.Id) && (planoTreino.usuario.Administrador)) {
                tpPlanoTreino = "plano-treino-template";                
            }

            return tpPlanoTreino;
        }
    }

}