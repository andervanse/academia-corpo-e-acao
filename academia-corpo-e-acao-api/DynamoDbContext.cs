using System.Collections.Generic;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;

namespace dynamodb_test
{
    public class DynamoDbContext
    {
        private static AmazonDynamoDBConfig config = new AmazonDynamoDBConfig();

        public string TableName 
        { 
            get
            {
                return "db_test_app";
            } 
        }

        public DynamoDbContext()
        {
            config.ServiceURL = "http://dynamodb.sa-east-1.amazonaws.com";
        }

        public AmazonDynamoDBClient GetClientInstance()
        {
            return new AmazonDynamoDBClient(config);
        }

        public async Task<string[]> ListTables()
        {
            string[] tablesArray;

            using (var client = new AmazonDynamoDBClient(config))
            {
                var list = await client.ListTablesAsync();
                tablesArray = list.TableNames.ToArray();
            }

            return tablesArray;
        }


        public async Task<string> CreateTableIfExists()
        {
            string tableName = TableName;
            string[] listTables = await this.ListTables();
            bool tableFound = false;

            for (var i = 0; i < listTables.Length; i++)
            {
                if (listTables[i].Equals(tableName))
                {
                    tableFound = true;
                    break;
                }
            }

            if (!tableFound)
            {

                using (var client = new AmazonDynamoDBClient(config))
                {
                    var createTableReq = new CreateTableRequest
                    {
                        TableName = tableName,
                        KeySchema = new List<KeySchemaElement> {
                        new KeySchemaElement {
                            AttributeName = "type",
                            KeyType = "HASH"
                          },
                        new KeySchemaElement {
                            AttributeName = "id",
                            KeyType = "RANGE"
                          },
                    },
                        AttributeDefinitions = new List<AttributeDefinition>
                        {
                            new AttributeDefinition {
                                AttributeName = "type",
                                AttributeType = "S"
                            },
                            new AttributeDefinition {
                                AttributeName = "id",
                                AttributeType = "N"
                            }
                        },
                        ProvisionedThroughput = new ProvisionedThroughput
                        {
                            ReadCapacityUnits = 1,
                            WriteCapacityUnits = 1
                        }
                    };
                    var resp = await client.CreateTableAsync(createTableReq);
                    return resp.HttpStatusCode + " - " + resp.TableDescription.TableStatus;
                }
            }
            return "Table already exists.";
        }
    }

}