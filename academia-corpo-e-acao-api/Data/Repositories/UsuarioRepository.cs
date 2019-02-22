using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Amazon.DynamoDBv2.Model;
using Microsoft.Extensions.Logging;

namespace academia_corpo_e_acao
{
    public class UsuarioRepository
    {
        private readonly DynamoDbContext _context;
        private readonly ILogger _log;

        public UsuarioRepository(DynamoDbContext context, ILoggerFactory logger)
        {
            _context = context;
            _log = logger.CreateLogger("UsuarioRepository");
        }

        public async Task<Response<Usuario>> SalvarAsync(Usuario user)
        {
            var resp = new Response<Usuario>();

            using (var client = this._context.GetClientInstance())
            {
                try
                {
                    if (user.Id == 0)
                    {
                        var salt = SecurityCrypt.GenerateSalt();
                        var hash = SecurityCrypt.GenerateHash(user.Senha + salt);

                        user.Id = (Int32)DateTimeOffset.UtcNow.ToUnixTimeSeconds();
                        user.CreatedAt = DateTime.Now;

                        var dic = new Dictionary<string, AttributeValue>();
                        dic.Add("tipo", new AttributeValue { S = "usuario" });
                        dic.Add("id", new AttributeValue { N = user.Id.ToString() });
                        dic.Add("login", new AttributeValue { S = user.Login });
                        dic.Add("createdAt", new AttributeValue { S = user.CreatedAt.ToString() });
                        dic.Add("salt", new AttributeValue { S = salt });
                        dic.Add("hashedPassword", new AttributeValue { S = hash });

                        var request = new PutItemRequest
                        {
                            TableName = _context.TableName,
                            Item = dic
                        };

                        var updResp = await client.PutItemAsync(request);
                        resp.Return = user;
                    }
                    else
                    {                       
                        var dicAttrValues = new Dictionary<string, AttributeValue>();

                        if (!String.IsNullOrEmpty(user.Nome))
                           dicAttrValues.Add(":nome", new AttributeValue { S = user.Nome });

                        if (!String.IsNullOrEmpty(user.Email))
                           dicAttrValues.Add(":email", new AttributeValue { S = user.Email });

                        if (user.Peso.HasValue)
                           dicAttrValues.Add(":peso", new AttributeValue { N = user.Peso.Value.ToString() });

                        if (user.Altura.HasValue)
                           dicAttrValues.Add(":altura", new AttributeValue { N = user.Altura.Value.ToString() });

                        if (!String.IsNullOrEmpty(user.Celular))
                           dicAttrValues.Add(":celular", new AttributeValue { S = user.Celular });

                        if (!String.IsNullOrEmpty(user.Observacao))
                           dicAttrValues.Add(":obs", new AttributeValue { S = user.Observacao });


                        var request = new UpdateItemRequest
                        {
                            TableName = _context.TableName,
                            Key = new Dictionary<string, AttributeValue>
                            {
                                { "tipo", new AttributeValue { S = "usuario" } },
                                { "id", new AttributeValue { N = user.Id.ToString() } }
                            },

                            ExpressionAttributeNames = new Dictionary<string, string>()
                            {
                                {"#nome", "nome"},
                                {"#email", "email"},
                                {"#peso", "peso"},
                                {"#altura", "altura"},
                                {"#celular", "celular"},
                                {"#obs", "obs"},
                            },
                            ExpressionAttributeValues = dicAttrValues,
                            UpdateExpression = "SET #nome = :nome, #email = :email, #peso = :peso, #altura = :altura, #celular = :celular, #obs = :obs"
                        };

                        var updResp = await client.UpdateItemAsync(request);
                        resp.Return = user;
                    }
                    return resp;
                }
                catch (Exception e)
                {
                    resp.Return = user;
                    resp.ErrorMessages.Add(e.Message);
                    _log.LogError(e.Message);
                    return resp;
                }
            }
        }
        
        public async Task<Response<bool>> AlterarSenhaAsync(Usuario usuario)
        {
            var resp = new Response<bool>();

            var respUserDb = this.ObterUsuarioAsync(usuario);

            if (respUserDb.Result.Return == null)
            {
                resp.ErrorMessages.Add("usuario inválido.");
                return resp;
            }
            
            using (var client = this._context.GetClientInstance())
            {
                try
                {
                    var userdb = respUserDb.Result.Return;
                    var salt = SecurityCrypt.GenerateSalt();
                    var hash = SecurityCrypt.GenerateHash(usuario.Senha + salt);

                    var request = new UpdateItemRequest
                    {
                        TableName = _context.TableName,
                        Key = new Dictionary<string, AttributeValue>
                            {
                                { "tipo", new AttributeValue { S = "usuario" } },
                                { "id", new AttributeValue { N = userdb.Id.ToString() } }
                            },
                        ExpressionAttributeNames = new Dictionary<string, string>()
                            {
                                {"#salt", "salt"},
                                {"#hash", "hashedPassword"}
                            },
                        ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                            {
                                { ":salt", new AttributeValue { S = salt } },
                                { ":hash", new AttributeValue { S = hash } }
                            },
                        UpdateExpression = "SET #salt = :salt, #hash = :hash"
                    };

                    await client.UpdateItemAsync(request);
                    resp.Return = true;
                    
                    return resp;
                }
                catch (Exception e)
                {
                    resp.Return = false;
                    resp.ErrorMessages.Add(e.Message);
                    _log.LogError(e.Message);
                    return resp;
                }
            }
        }

        public async Task<Response<Usuario>> UsuarioValidoAsync(Usuario user)
        {
            var resp = new Response<Usuario>();
            resp.Return = null;

            using (var client = this._context.GetClientInstance())
            {               
                QueryRequest request = ObterUsuarioQueryRequest("login", new AttributeValue { S = user.Login });
                QueryResponse response = null;

                try
                {
                    response = await client.QueryAsync(request);                       
                    List<Usuario> lstUser = ExtractUserFrom(response.Items);

                    if (lstUser != null && lstUser.Count > 0)
                    {
                        var userDb = lstUser[0];
                        var hash = SecurityCrypt.GenerateHash(user.Senha + userDb.Salt);

                        if (hash == userDb.HashedPassword) 
                        {
                           resp.Return = userDb;
                        }
                    }

                    return resp;
                }
                catch (Exception e)
                {                    
                    resp.ErrorMessages.Add(e.Message);
                    _log.LogError(e.Message);
                    return resp;
                }
            }
        }

        public async Task<Response<List<Usuario>>> ObterUsuariosAsync(Usuario usuario)
        {
            var resp = new Response<List<Usuario>>();
            QueryResponse response = await ObterUsuarioResponse<List<Usuario>>(usuario, resp);
            List<Usuario> lstUser = ExtractUserFrom(response.Items);
            resp.Return = lstUser;
            return resp;
        }

        public async Task<Response<Usuario>> ObterUsuarioAsync(Usuario usuario)
        {
            var resp = new Response<Usuario>();
            QueryResponse response = await ObterUsuarioResponse<Usuario>(usuario, resp);
            List<Usuario> lstUser = ExtractUserFrom(response.Items);

            if (lstUser.Count > 0)
               resp.Return = lstUser[0];
            else
               resp.Messages.Add("Nenhum registro encontrado.");

            return resp;
        }        

        private async Task<QueryResponse> ObterUsuarioResponse<T>(Usuario usuario, Response<T> resp)
        {
            var attrName = String.Empty;
            var attrValue = new AttributeValue();
            Dictionary<string, string> attributes = new Dictionary<string, string> { { "#tipo", "tipo" } };

            if (usuario.Id > 0)
            {
                attrName = "id";
                attrValue.N = usuario.Id.ToString();
            }
            else if (!String.IsNullOrEmpty(usuario.Login))
            {
                attrName = "login";
                attrValue.S = usuario.Login;
            }            
            else if (!String.IsNullOrEmpty(usuario.Nome))
            {
                attrName = "nome";
                attrValue.S = usuario.Nome;
            }
            else if (!String.IsNullOrEmpty(usuario.Email))
            {
                attrName = "email";
                attrValue.S = usuario.Email;
            }

            attributes.Add($"#{attrName}", $":{attrName}");
            QueryResponse response = null;

            using (var client = this._context.GetClientInstance())
            {
                QueryRequest request = ObterUsuarioQueryRequest(attrName, attrValue);

                try
                {
                    response = await client.QueryAsync(request);
                }
                catch (Exception e)
                {
                    resp.ErrorMessages.Add(e.Message);
                    _log.LogError(e.Message);
                }
            }  

            return  response;         
        }

        private QueryRequest ObterUsuarioQueryRequest(string attrName, AttributeValue attrValue)
        {
            var filterExpr = $"#{attrName} = :{attrName}";

            if (attrName == "nome")
               filterExpr = $"begins_with(#{attrName}, :{attrName})";

            return new QueryRequest
            {
                TableName = _context.TableName,
                KeyConditionExpression = "#tipo = :t",                
                FilterExpression = filterExpr,
                ExpressionAttributeNames = new Dictionary<string, string> {
                        { "#id", "id" },
                        { "#tipo", "tipo" },
                        { "#login", "login" },
                        { "#nome", "nome" },
                        { "#createdAt", "createdAt" },
                        { "#hashedPassword", "hashedPassword" },
                        { "#salt", "salt" },
                        { "#email", "email" },
                        { "#peso", "peso" },
                        { "#altura", "altura" },
                        { "#celular", "celular" },
                        { "#obs", "obs" },                        
                        { "#isAdmin", "admin" }
                    },
                ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                    {
                         { ":t", new AttributeValue { S = "usuario" } },
                         { $":{attrName}", attrValue }
                    },
                ProjectionExpression = "#id, #login, #nome, #hashedPassword, #salt, #email, #createdAt, #peso, #altura, #celular, #isAdmin, #obs"
            };
        }

        private List<Usuario> ExtractUserFrom(List<Dictionary<string, AttributeValue>> dictionary)
        {
            List<Usuario> list = new List<Usuario>();
            Usuario usuario = null;

            foreach (var item in dictionary)
            {
                usuario = new Usuario();

                foreach (KeyValuePair<string, AttributeValue> kvp in item)
                {
                    string attributeName = kvp.Key;
                    AttributeValue value = kvp.Value;

                    if (attributeName == "id")
                    {
                        usuario.Id = int.Parse(value.N);
                    }
                    else if (attributeName == "nome")
                    {
                        usuario.Nome = value.S;
                    }
                    else if (attributeName == "login")
                    {
                        usuario.Login = value.S;
                    }   
                    else if (attributeName == "peso")
                    {
                        double peso = 0;
                        double.TryParse(value.N, out peso);
                        usuario.Peso = peso;
                    }    
                    else if (attributeName == "altura")
                    {
                        double alt = 0;
                        double.TryParse(value.N, out alt);
                        usuario.Altura = alt;
                    }       
                    else if (attributeName == "obs")
                    {
                        usuario.Observacao = value.S;
                    }                                                                    
                    else if (attributeName == "createdAt")
                    {
                        DateTime createdDt;
                        DateTime.TryParse(value.S, out createdDt);
                        usuario.CreatedAt = createdDt;
                    }
                    else if (attributeName == "email")
                    {
                        usuario.Email = value.S;
                    }
                    else if (attributeName == "hashedPassword")
                    {
                        usuario.HashedPassword = value.S;
                    }
                    else if (attributeName == "salt")
                    {
                        usuario.Salt = value.S;
                    }
                    else if (attributeName == "admin")
                    {
                        usuario.Administrador = value.BOOL;
                    }
                }
                list.Add(usuario);
            }
            return list;
        }
    }
}
