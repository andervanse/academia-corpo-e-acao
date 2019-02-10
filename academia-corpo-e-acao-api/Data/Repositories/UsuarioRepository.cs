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
                        dic.Add("nome", new AttributeValue { S = user.Nome });
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

                        if (!String.IsNullOrEmpty(user.Email))
                           dicAttrValues.Add(":email", new AttributeValue { S = user.Email });

                        if (user.Peso.HasValue)
                           dicAttrValues.Add(":peso", new AttributeValue { N = user.Peso.Value.ToString() });

                        if (user.Altura.HasValue)
                           dicAttrValues.Add(":altura", new AttributeValue { N = user.Altura.Value.ToString() });

                        if (!String.IsNullOrEmpty(user.Celular))
                           dicAttrValues.Add(":celular", new AttributeValue { S = user.Celular });

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
                                {"#email", "email"},
                                {"#peso", "peso"},
                                {"#altura", "altura"},
                                {"#celular", "celular"},
                            },
                            ExpressionAttributeValues = dicAttrValues,
                            UpdateExpression = "SET #email = :email, #peso = :peso, #altura = :altura, #celular = :celular"
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
                var request = new QueryRequest
                {
                    TableName = _context.TableName,
                    KeyConditionExpression = "#tipo = :t",
                    ExpressionAttributeNames = new Dictionary<string, string> {
                        { "#id", "id" },
                        { "#tipo", "tipo" },
                        { "#nome", "nome" },
                        { "#hash", "hashedPassword" },
                        { "#salt", "salt" },
                        { "#admin", "admin" }
                    },
                    FilterExpression = "#nome = :nome",                    
                    ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                    {
                         { ":t", new AttributeValue { S = "usuario" } },
                         { ":nome", new AttributeValue { S = user.Nome } }
                    },
                    ProjectionExpression = "#id, #nome, #hash, #salt, #admin"
                };

                QueryResponse response = null;

                try
                {
                    response = await client.QueryAsync(request);                       
                    Usuario userDb = ExtractUserFrom(response.Items);

                    if (userDb != null)
                    {
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

        public async Task<Response<Usuario>> ObterUsuarioAsync(Usuario usuario)
        {
            var resp = new Response<Usuario>();
            Usuario user = null;

            string attrName = String.Empty;
            AttributeValue attrValue = new AttributeValue();
            Dictionary<string, string> attributes = new Dictionary<string, string> { { "#tipo", "tipo" } };

            if (usuario.Id > 0)
            {
                attrName = "id";
                attrValue.N = usuario.Id.ToString();
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

            using (var client = this._context.GetClientInstance())
            {
                var request = new QueryRequest
                {
                    TableName = _context.TableName,
                    KeyConditionExpression = "#tipo = :t",                   
                    FilterExpression = $"#{attrName} = :{attrName}",
                    ExpressionAttributeNames = new Dictionary<string, string> {
                        { "#id", "id" },
                        { "#tipo", "tipo" },
                        { "#nome", "nome" },
                        { "#hashedPassword", "hashedPassword" },
                        { "#salt", "salt" },
                        { "#email", "email" }
                    },
                    ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                    {
                         { ":t", new AttributeValue { S = "usuario" } },
                         { $":{attrName}", attrValue }
                    },
                    ProjectionExpression = "#id, #nome, #hashedPassword, #salt, #email"
                };

                QueryResponse response = null;

                try
                {
                    response = await client.QueryAsync(request);
                }
                catch (Exception e)
                {
                    resp.ErrorMessages.Add(e.Message);
                    _log.LogError(e.Message);
                    return resp;
                }
                user = ExtractUserFrom(response.Items); 
                resp.Return = user;
            }

            return resp;
        }

        private Usuario ExtractUserFrom(List<Dictionary<string, AttributeValue>> dictionary)
        {
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
            }
            return usuario;
        }
    }
}
