using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Amazon.DynamoDBv2.Model;
using Microsoft.Extensions.Logging;

namespace academia_corpo_e_acao
{
    public class UsuarioRepository : IUsuarioRepository
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
                    StringBuilder updExp = new StringBuilder("SET ");
                    var exprAttrValues = new Dictionary<string, AttributeValue>();
                    var exprAttrNames = new Dictionary<string, string>();

                    if (user.Id < 1)
                    {
                        user.Id = (Int32)DateTimeOffset.UtcNow.ToUnixTimeSeconds();
                    }

                    user.DtAtualizacao = DateTime.Now;
                    exprAttrValues.Add(":dtAt", new AttributeValue { S = user.DtAtualizacao.Value.ToString("dd/MM/yyyy hh:mm:ss") });
                    updExp.Append(" #dtAt = :dtAt,");
                    exprAttrNames.Add("#dtAt", "dt-atualizacao");

                    if (user.Sexo.HasValue) {
                        exprAttrValues.Add(":sexo", new AttributeValue { S = user.Sexo.ToString() });
                        updExp.Append(" #sexo = :sexo,");
                        exprAttrNames.Add("#sexo", "sexo");
                    }
                    
                    if (!String.IsNullOrEmpty(user.Senha))
                    {
                        var salt = SecurityCrypt.GenerateSalt();
                        exprAttrValues.Add(":salt", new AttributeValue { S = salt });
                        updExp.Append(" #salt = :salt,");
                        exprAttrNames.Add("#salt", "salt");

                        var hash = SecurityCrypt.GenerateHash(user.Senha + salt);
                        exprAttrValues.Add(":hash", new AttributeValue { S = hash });
                        updExp.Append(" #hash = :hash,");
                        exprAttrNames.Add("#hash", "hashedPassword");
                    }

                    if (!String.IsNullOrEmpty(user.Login))
                    {
                        exprAttrValues.Add(":login", new AttributeValue { S = user.Login });
                        updExp.Append(" #login = :login,");
                        exprAttrNames.Add("#login", "login");
                    }

                    if (!String.IsNullOrEmpty(user.Nome))
                    {
                        exprAttrValues.Add(":nome", new AttributeValue { S = user.Nome });
                        updExp.Append(" #nome = :nome,");
                        exprAttrNames.Add("#nome", "nome");
                    }

                    if (user.DtNascimento.HasValue)
                    {
                        exprAttrValues.Add(":dtNasc", new AttributeValue { S = user.DtNascimento.ToString() });
                        updExp.Append(" #dtNasc = :dtNasc,");
                        exprAttrNames.Add("#dtNasc", "dt-nascimento");
                    }

                    if (!String.IsNullOrEmpty(user.Email))
                    {
                        exprAttrValues.Add(":email", new AttributeValue { S = user.Email });
                        updExp.Append(" #email = :email,");
                        exprAttrNames.Add("#email", "email");
                    }

                    if (!String.IsNullOrEmpty(user.Celular))
                    {
                        exprAttrValues.Add(":celular", new AttributeValue { S = user.Celular });
                        updExp.Append(" #celular = :celular,");
                        exprAttrNames.Add("#celular", "celular");
                    }

                    if (!String.IsNullOrEmpty(user.UrlFoto))
                    {
                        exprAttrValues.Add(":urlFoto", new AttributeValue { S = user.UrlFoto });
                        updExp.Append(" #urlFoto = :urlFoto,");
                        exprAttrNames.Add("#urlFoto", "url-foto");
                    }                    

                    if (!String.IsNullOrEmpty(user.Observacao))
                    {
                        exprAttrValues.Add(":obs", new AttributeValue { S = user.Observacao });
                        updExp.Append(" #obs = :obs,");
                        exprAttrNames.Add("#obs", "obs");
                    }                                  

                    var request = new UpdateItemRequest
                    {
                        TableName = _context.TableName,
                        Key = new Dictionary<string, AttributeValue>
                            {
                                { "tipo", new AttributeValue { S = "usuario" } },
                                { "id", new AttributeValue { N = user.Id.ToString() } }
                            },

                        ExpressionAttributeNames = exprAttrNames,
                        ExpressionAttributeValues = exprAttrValues,
                        UpdateExpression = updExp.ToString().Substring(0, updExp.ToString().Length - 1)
                    };

                    var updResp = await client.UpdateItemAsync(request);
                    resp.Return = user;

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
            QueryResponse response = await ObterUsuarioResponseAsync<List<Usuario>>(usuario, resp);
            List<Usuario> lstUser = ExtractUserFrom(response.Items);
            resp.Return = lstUser;
            return resp;
        }

        public async Task<Response<Usuario>> ObterUsuarioAsync(Usuario usuario)
        {
            var resp = new Response<Usuario>();
            QueryResponse response = await ObterUsuarioResponseAsync<Usuario>(usuario, resp);
            List<Usuario> lstUser = ExtractUserFrom(response.Items);

            if (lstUser.Count > 0)
                resp.Return = lstUser[0];
            else
                resp.Messages.Add("Nenhum registro encontrado.");

            return resp;
        }

        private async Task<QueryResponse> ObterUsuarioResponseAsync<T>(Usuario usuario, Response<T> resp)
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

            return response;
        }

        private QueryRequest ObterUsuarioQueryRequest(string attrName, AttributeValue attrValue)
        {
            string filterExpr = null;
            string keyExpr = "#tipo = :t";

            if (attrName == "id") {
                keyExpr = "#tipo = :t AND #id = :id";
            } else {
                filterExpr = $"#{attrName} = :{attrName}";
            }

            if (attrName == "nome")
                filterExpr = $"begins_with(#{attrName}, :{attrName})";

            return new QueryRequest
            {
                TableName = _context.TableName,
                KeyConditionExpression = keyExpr,
                FilterExpression = filterExpr,
                ExpressionAttributeNames = new Dictionary<string, string> {
                        { "#id", "id" },
                        { "#tipo", "tipo" },
                        { "#login", "login" },
                        { "#nome", "nome" },
                        { "#dtAt", "dt-atualizacao" },
                        { "#dtNasc", "dt-nascimento" },
                        { "#sexo", "sexo" },
                        { "#hashedPassword", "hashedPassword" },
                        { "#salt", "salt" },
                        { "#email", "email" },
                        { "#celular", "celular" },
                        { "#urlFoto", "url-foto" },
                        { "#obs", "obs" },
                        { "#isAdmin", "admin" }
                    },
                ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                    {
                         { ":t", new AttributeValue { S = "usuario" } },
                         { $":{attrName}", attrValue }
                    },
                ProjectionExpression = "#id, #login, #nome, #dtAt, #dtNasc, #sexo, #hashedPassword, #salt, #email, #celular, #urlFoto, #obs, #isAdmin"
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
                    else if (attributeName == "obs")
                    {
                        usuario.Observacao = value.S;
                    }
                    else if (attributeName == "url-foto")
                    {
                        usuario.UrlFoto = value.S;
                    }                    
                    else if (attributeName == "dt-atualizacao")
                    {
                        DateTime dtAtual;
                        DateTime.TryParse(value.S, out dtAtual);
                        usuario.DtAtualizacao = dtAtual;
                    }
                    else if (attributeName == "dt-nascimento")
                    {
                        DateTime dtNasc;
                        DateTime.TryParse(value.S, out dtNasc);
                        usuario.DtNascimento = dtNasc;
                    }                    
                    else if (attributeName == "sexo")
                    {
                        Object sx = null;
                        Enum.TryParse(typeof(Sexo), value.S, true, out sx);
                        usuario.Sexo = (Sexo)sx;
                    }                    
                    else if (attributeName == "email")
                    {
                        usuario.Email = value.S;
                    }
                    else if (attributeName == "celular")
                    {
                        usuario.Celular = value.S;
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
