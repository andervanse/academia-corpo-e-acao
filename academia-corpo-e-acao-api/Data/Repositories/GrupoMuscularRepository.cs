
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
    public class GrupoMuscularRepository
    {
        private readonly DynamoDbContext _context;
        private readonly ILogger _log;
        private const string _type = "grupo-muscular";

        public GrupoMuscularRepository(DynamoDbContext context, ILoggerFactory logger)
        {
            _context = context;
            _log = logger.CreateLogger("UsuarioRepository");
        }

        public async Task<Response<bool>> SalvarAsync(GrupoMuscular grupoMuscular)
        {
            var resp = new Response<bool>();

            if (grupoMuscular == null)
            {
                resp.ErrorMessages.Add("Grupo Muscular inválido.");
                return resp;
            }            

            if (grupoMuscular.UsuarioId == 0)
            {
                resp.ErrorMessages.Add("Usuario não informado");
                return resp;
            }

            string exercicios = "";

            using (MemoryStream ms = new MemoryStream())
            {
                DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(List<Exercicio>));
                ser.WriteObject(ms, grupoMuscular.Exercicios);
                byte[] json = ms.ToArray();
                ms.Close();
                exercicios = Encoding.UTF8.GetString(json, 0, json.Length);
            }

            if (grupoMuscular.Id == 0)
            {
                grupoMuscular.Id = (Int32)DateTimeOffset.UtcNow.ToUnixTimeSeconds();

                var request = new PutItemRequest
                {
                    TableName = _context.TableName,
                    Item = new Dictionary<string, AttributeValue>
                    {
                        { "tipo", new AttributeValue { S = _type } },
                        { "id", new AttributeValue { N = grupoMuscular.Id.ToString() } },
                        { "usuario-id", new AttributeValue { N = grupoMuscular.UsuarioId.ToString() } },
                        { "descricao", new AttributeValue { S = grupoMuscular.Descricao } },
                        { "exercicios", new AttributeValue {  S = exercicios } }
                    }
                };

                PutItemResponse putResponse = null;

                using (var client = _context.GetClientInstance())
                {
                    try
                    {
                        putResponse = await client.PutItemAsync(request);
                        resp.Messages.Add(putResponse.HttpStatusCode.ToString());
                    }
                    catch (Exception e)
                    {
                        _log.LogError(e.Message);
                        resp.ErrorMessages.Add(e.Message);
                    }
                    return resp;
                }
            }
            else
            {
                var request = new UpdateItemRequest
                {
                    TableName = _context.TableName,
                    Key = new Dictionary<string, AttributeValue>
                    {
                        { "tipo", new AttributeValue { S = _type } },
                        { "id", new AttributeValue { N = grupoMuscular.Id.ToString() } }
                    },
                    ExpressionAttributeNames = new Dictionary<string, string>()
                    {
                        {"#desc", "descricao"},
                        {"#exercicios", "exercicios"}
                    },
                    ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                    {
                        { ":desc", new AttributeValue { S = grupoMuscular.Descricao } },
                        { ":exercicios", new AttributeValue {  S = exercicios } }
                    },
                    UpdateExpression = "SET #desc = :desc, #exercicios = :exercicios"
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
        }

        public async Task<Response<List<GrupoMuscular>>> ObterGrupoMuscularAsync(Usuario usuario)
        {
            var resp = new Response<List<GrupoMuscular>>();
            resp.Return = new List<GrupoMuscular>();

            if (usuario.Id == 0)
            {
                resp.ErrorMessages.Add("Usuario não informado");
                return resp;
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
                         { ":t", new AttributeValue { S = "grupo-muscular" } },
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
                    return resp;
                }

                foreach (Dictionary<string, AttributeValue> item in response.Items)
                {
                    var grupo = new GrupoMuscular();

                    foreach (KeyValuePair<string, AttributeValue> kvp in item)
                    {
                        string attributeName = kvp.Key;
                        AttributeValue value = kvp.Value;

                        if (attributeName == "id")
                        {
                            grupo.Id = int.Parse(value.N);
                        }
                        else if (attributeName == "descricao")
                        {
                            grupo.Descricao = value.S;
                        }
                        else if (attributeName == "usuario-id")
                        {
                            grupo.UsuarioId = int.Parse(value.N);
                        }
                        else if (attributeName == "exercicios")
                        {
                            if (!String.IsNullOrEmpty(value.S))
                            {
                                using (MemoryStream ms = new MemoryStream(Encoding.UTF8.GetBytes(value.S)))
                                {
                                    DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(List<Exercicio>));
                                    var list = (List<Exercicio>)ser.ReadObject(ms);
                                    ms.Close();
                                    grupo.Exercicios = list;                                    
                                }                                
                            }
                        }
                    }
                    resp.Return.Add(grupo);
                }

                return resp;
            }
        }
    }

}