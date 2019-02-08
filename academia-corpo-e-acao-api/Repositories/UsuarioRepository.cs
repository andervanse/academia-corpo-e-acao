

using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Amazon.DynamoDBv2.Model;

namespace dynamodb_test
{
    public class UsuarioRepository
    {
        private readonly DynamoDbContext _context;

        public UsuarioRepository(DynamoDbContext context)
        {
            _context = context;
        }

        public async Task<Response<bool>> SalvarAsync(Usuario user)
        {
            var resp = new Response<bool>();

            using (var client = this._context.GetClientInstance())
            {
                try
                {
                    if (user.Id == 0)
                    {
                        var salt = SecurityCrypt.GenerateSalt();
                        var hash = SecurityCrypt.GenerateHash(user.Password + salt);

                        user.Id = (Int32)DateTimeOffset.UtcNow.ToUnixTimeSeconds();

                        var request = new PutItemRequest
                        {
                            TableName = _context.TableName,
                            Item = new Dictionary<string, AttributeValue>
                            {
                                { "type", new AttributeValue { S = "usuario" } },
                                { "id", new AttributeValue { N = user.Id.ToString() } },
                                { "name", new AttributeValue { S = user.Name } },
                                { "createdAt", new AttributeValue { S = user.CreatedAt.ToString() } },
                                { "email", new AttributeValue { S = user.Email } },
                                { "salt", new AttributeValue { S = salt } },
                                { "hashedPassword", new AttributeValue { S = hash } }
                            }
                        };

                        await client.PutItemAsync(request);
                    }
                    else
                    {
                        var request = new UpdateItemRequest
                        {
                            TableName = _context.TableName,
                            Key = new Dictionary<string, AttributeValue>
                            {
                                { "type", new AttributeValue { S = "usuario" } },
                                { "id", new AttributeValue { N = user.Id.ToString() } }
                            },

                            ExpressionAttributeNames = new Dictionary<string, string>()
                            {
                                {"#name", "name"},
                                {"#createdAt", "createdAt"},
                                {"#email", "email"}
                            },
                            ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                            {
                                { ":name", new AttributeValue { S = user.Name } },
                                { ":createdAt", new AttributeValue { S = user.CreatedAt.ToString() } },
                                { ":email", new AttributeValue { S = user.Email } }
                            },
                            UpdateExpression = "SET #name = :name, #createdAt = :createdAt, #email = :email"
                        };

                        await client.UpdateItemAsync(request);
                    }
                    return resp;
                }
                catch (Exception e)
                {
                    resp.ErrorMessages.Add(e.Message);
                    return resp;
                }
            }
        }
        
        public async Task<Response<bool>> UsuarioValidoAsync(Usuario user)
        {
            var resp = new Response<bool>();

            using (var client = this._context.GetClientInstance())
            {
                var request = new QueryRequest
                {
                    TableName = _context.TableName,
                    KeyConditionExpression = "#type = :t",
                    ExpressionAttributeNames = new Dictionary<string, string> {
                        { "#id", "id" },
                        { "#type", "type" },
                        { "#name", "name" },
                        { "#email", "email" },
                        { "#hashedPassword", "hashedPassword" },
                        { "#salt", "salt" }
                    },
                    FilterExpression = "#email = :email",
                    ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                    {
                         { ":t", new AttributeValue { S = "usuario" } },
                         { ":email", new AttributeValue { S = user.Email } }
                    },
                    ProjectionExpression = "#id, #name, #hashedPassword, #salt"
                };

                QueryResponse response = null;

                try
                {
                    response = await client.QueryAsync(request);                    
                    Usuario userDb = null;

                    foreach (Dictionary<string, AttributeValue> item in response.Items)
                    {
                        userDb = new Usuario();
                        foreach (KeyValuePair<string, AttributeValue> kvp in item)
                        {
                            string attributeName = kvp.Key;
                            AttributeValue value = kvp.Value;

                            if (attributeName == "id")
                            {
                                userDb.Id = int.Parse(value.N);
                            }
                            else if (attributeName == "email")
                            {
                                userDb.Email = value.S;
                            }
                            else if (attributeName == "hashedPassword")
                            {
                                userDb.HashedPassword = value.S;
                            }
                            else if (attributeName == "salt")
                            {
                                userDb.Salt = value.S;
                            }
                        }
                    }

                    if (userDb != null)
                    {
                        var hash = SecurityCrypt.GenerateHash(user.Password + userDb.Salt);
                        resp.ResponseObj = (hash == userDb.HashedPassword);
                    }

                    return resp;
                }
                catch (Exception e)
                {
                    resp.ErrorMessages.Add(e.Message);
                    return resp;
                }
            }
        }

        public async Task<Response<IList<Usuario>>> ObterUsuarioAsync()
        {
            var resp = new Response<IList<Usuario>>();
            IList<Usuario> users = new List<Usuario>();
            resp.ResponseObj = users;


            using (var client = this._context.GetClientInstance())
            {
                var request = new QueryRequest
                {
                    TableName = _context.TableName,
                    KeyConditionExpression = "#type = :t",
                    ExpressionAttributeNames = new Dictionary<string, string> { { "#type", "type" } },
                    ExpressionAttributeValues = new Dictionary<string, AttributeValue>
                    {
                         { ":t", new AttributeValue { S = "usuario" } }
                    }
                };

                QueryResponse response = null;

                try
                {
                    response = await client.QueryAsync(request);
                }
                catch (Exception e)
                {
                    resp.ErrorMessages.Add(e.Message);
                    return resp;
                }

                foreach (Dictionary<string, AttributeValue> item in response.Items)
                {
                    // Process the result.
                    var user = new Usuario();

                    foreach (KeyValuePair<string, AttributeValue> kvp in item)
                    {
                        string attributeName = kvp.Key;
                        AttributeValue value = kvp.Value;

                        if (attributeName == "id")
                        {
                            user.Id = int.Parse(value.N);
                        }
                        else if (attributeName == "name")
                        {
                            user.Name = value.S;
                        }
                        else if (attributeName == "createdAt")
                        {
                            DateTime createdDt;
                            DateTime.TryParse(value.S, out createdDt);
                            user.CreatedAt = createdDt;
                        }
                        else if (attributeName == "email")
                        {
                            user.Email = value.S;
                        }
                        else if (attributeName == "hashedPassword")
                        {
                            user.HashedPassword = value.S;
                        }
                        else if (attributeName == "salt")
                        {
                            user.Salt = value.S;
                        }
                    }
                    users.Add(user);
                }
            }

            return resp;
        }
    }
}