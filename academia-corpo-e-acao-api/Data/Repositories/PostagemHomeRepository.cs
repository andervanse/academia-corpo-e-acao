using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Globalization;
using System.Threading.Tasks;
using Amazon.DynamoDBv2.Model;
using Amazon.Runtime.Internal.Util;
using Microsoft.Extensions.Logging;

namespace academia_corpo_e_acao 
{
    public class PostagemHomeRepository : IPostagemHomeRepository
    {
        private readonly DynamoDbContext _context;
        private readonly Microsoft.Extensions.Logging.ILogger _log;
        private const string _type = "postagem-home";

        public PostagemHomeRepository(DynamoDbContext context, ILoggerFactory logger)
        {
            _context = context;
            _log = logger.CreateLogger("PostagemHomeRepository");
        }

        public async Task<Response<PostagemHome>> SalvarAsync(PostagemHome postagemHome)
        {
            var resp = new Response<PostagemHome>();

            if (postagemHome == null)
            {
                resp.ErrorMessages.Add("postagem nula.");
                return resp;
            }

            if (postagemHome.UsuarioId == 0)
            {
                resp.ErrorMessages.Add("Usuario não informado");
                return resp;
            }

            resp.Return = postagemHome;
            var attributeValues = new Dictionary<string, AttributeValue>();
            var attributeNames = new Dictionary<string, string>();
            string updExpr = String.Empty;

            postagemHome.DataAtualizacao = DateTime.Now;
            attributeNames.Add("#dtAt", "dt-atualizacao");
            attributeValues.Add(":dtAt", new AttributeValue { S = postagemHome.DataAtualizacao.ToString("dd/MM/yyyy hh:mm:ss") });
            updExpr = "#dtAt = :dtAt";

            attributeNames.Add("#ordem", "ordem");
            attributeValues.Add(":ordem", new AttributeValue { N = postagemHome.Ordem.ToString() });
            updExpr += ", #ordem = :ordem";

            if (postagemHome.Id < 1)
            {
                postagemHome.Id = (Int32)DateTimeOffset.UtcNow.ToUnixTimeSeconds();

                attributeNames.Add("#usrId", "usuario-id");
                attributeValues.Add(":usrId", new AttributeValue { N = postagemHome.UsuarioId.ToString() });
                updExpr += ", #usrId = :usrId";
            }

            if (!String.IsNullOrEmpty(postagemHome.Titulo))
            {
                attributeNames.Add("#titulo", "titulo");
                attributeValues.Add(":titulo", new AttributeValue { S = postagemHome.Titulo });
                updExpr += ", #titulo = :titulo";
            }  

            if (!String.IsNullOrEmpty(postagemHome.Texto))
            {
                attributeNames.Add("#texto", "texto");
                attributeValues.Add(":texto", new AttributeValue { S = postagemHome.Texto });
                updExpr += ", #texto = :texto";
            }                       
            
            attributeNames.Add("#urlImagem", "url-imagem");

            if (!String.IsNullOrEmpty(postagemHome.UrlImagem))
            {
                attributeValues.Add(":urlImagem", new AttributeValue { S = postagemHome.UrlImagem });  
                updExpr += ", #urlImagem = :urlImagem";              
            } else {
                updExpr += " REMOVE #urlImagem";
            }

            var request = new UpdateItemRequest
            {
                TableName = _context.TableName,
                Key = new Dictionary<string, AttributeValue>
                    {
                        { "tipo", new AttributeValue { S = _type } },
                        { "id", new AttributeValue { N = postagemHome.Id.ToString() } }
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

        public async Task<Response<List<PostagemHome>>> ObterAsync(int? postagemHomeId)
        {
            var resp = new Response<List<PostagemHome>>();
            var list = new List<PostagemHome>();

            var attrNames = new Dictionary<string, string>();
            attrNames.Add("#type", "tipo");

            var attrValues = new Dictionary<string, AttributeValue>();
            attrValues.Add(":t", new AttributeValue { S = _type });

            string keyExpr = "#type = :t";

            if (postagemHomeId.HasValue)
            {
                attrNames.Add("#id", "id");
                attrValues.Add(":id", new AttributeValue { N = postagemHomeId.Value.ToString() });
                keyExpr += " AND #id = :id";
            }

            using (var client = _context.GetClientInstance())
            {
                var request = new QueryRequest
                {
                    TableName = _context.TableName,
                    KeyConditionExpression = keyExpr,
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
                    var postagemHome = new PostagemHome();

                    foreach (KeyValuePair<string, AttributeValue> kvp in item)
                    {
                        string attributeName = kvp.Key;
                        AttributeValue value = kvp.Value;

                        if (attributeName == "id")
                        {
                            postagemHome.Id = int.Parse(value.N);
                        }
                        else if (attributeName == "ordem")
                        {
                            postagemHome.Ordem = int.Parse(value.N);
                        }
                        else if (attributeName == "titulo")
                        {
                            postagemHome.Titulo = value.S;
                        }
                        else if (attributeName == "texto")
                        {
                            postagemHome.Texto = value.S;
                        }   
                        else if (attributeName == "url-imagem")
                        {
                            postagemHome.UrlImagem = value.S;
                        }                                              
                        else if (attributeName == "dt-atualizacao")
                        {
                            DateTime dtAtualizacao;
                            DateTime.TryParseExact(value.S, 
                                                   "dd/MM/yyyy hh:mm:ss",
                                                   CultureInfo.InvariantCulture, 
                                                   DateTimeStyles.None,
                                                   out dtAtualizacao);

                            postagemHome.DataAtualizacao = dtAtualizacao;
                        }
                        else if (attributeName == "usuario-id")
                        {
                            postagemHome.UsuarioId = int.Parse(value.N);
                        }                        
                    }
                    list.Add(postagemHome);
                }

                if (list.Count > 0)
                   resp.Return = list;
                else
                   resp.Messages.Add("Pesquisa não retornou registros.");

                return resp;
            }
        }
    
        public async Task<Response<bool>> ExcluirAsync(int postagemHomeId)
        {
            using (var client = _context.GetClientInstance())
            {
                DeleteItemRequest request = new DeleteItemRequest
                {
                    TableName = _context.TableName,
                    Key = new Dictionary<string, AttributeValue>
                    {
                        { "tipo", new AttributeValue { S = _type } },
                        { "id", new AttributeValue { N = postagemHomeId.ToString() } }
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