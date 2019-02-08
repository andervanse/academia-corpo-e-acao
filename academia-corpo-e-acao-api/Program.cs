using System;
using System.Collections.Generic;

namespace dynamodb_test
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("DynamoDb Test");          
            //ListTables();
            //InsertUser();
            //UpdateUser();
            //ListUsers();
            //VerifyUser();
            //GrupoMuscularSave();
            GetGrupoMuscular();

            Console.ReadKey();
        }

        static void ListTables()
        {
            DynamoDbContext ctx = new DynamoDbContext();
            string[] tables = ctx.ListTables().Result;

            for(var i = 0; i < tables.Length; i++)
            {
                Console.WriteLine("Table.: {0}", tables[i]);
            }
        }

        static void CreateTestTable()
        {
            DynamoDbContext ctx = new DynamoDbContext();
            string strResult = ctx.CreateTableIfExists().Result;
            Console.WriteLine("Creating Table.: {0}", strResult);
        }

        static void InsertUser()
        {            
            DynamoDbContext ctx = new DynamoDbContext();
            UsuarioRepository repo = new UsuarioRepository(ctx);

            var user = new Usuario {
                Id = 0,
                Name = "TestUser",
                CreatedAt = DateTime.Now,
                Email ="test-user@email.com",
                Password="secretpassword"
            };

            var resp = repo.SalvarAsync(user);
            if (resp.Result.ResponseObj)
               Console.WriteLine("Created {0}", user.Name);
            else
               Console.WriteLine("ERROR");
        }   

        static void VerifyUser() 
        {
            DynamoDbContext ctx = new DynamoDbContext();
            UsuarioRepository repo = new UsuarioRepository(ctx);

            var user = new Usuario {
                Email = "test-user-updated@email.com",
                Password= "secretpassword"
            };
            
            var user2 = new Usuario {
                Email = "test-fake-user@email.com",
                Password= "somepassword"
            };

            var resp = repo.UsuarioValidoAsync(user).Result;
            Console.WriteLine("is {0} user.: {1}",user.Email, resp);

            resp = repo.UsuarioValidoAsync(user2).Result;
            Console.WriteLine("is {0} user.: {1}",user2.Email, resp);
        } 

        static void UpdateUser()
        {            
            DynamoDbContext ctx = new DynamoDbContext();
            UsuarioRepository repo = new UsuarioRepository(ctx);

            var user = new Usuario {
                Id = 7200,
                Name = "TestUser-updated",
                CreatedAt = DateTime.Now,
                Email ="test-user-updated@email.com",
                Password="secretpassword"
            };

            var resp = repo.SalvarAsync(user).Result;
            
            if (resp.ResponseObj)
               Console.WriteLine("Created {0}", user.Name);
            else
               Console.WriteLine("ERROR");
        }   
        static void ListUsers()
        {            
            DynamoDbContext ctx = new DynamoDbContext();
            UsuarioRepository repo = new UsuarioRepository(ctx);

            var users = repo.ObterUsuarioAsync().Result;
            
            foreach(var user in users.ResponseObj)
            {
                Console.WriteLine("Id: {0}, Name: {1}, Email: {2}", user.Id, user.Name, user.Email);
            }
        }  

        static void GrupoMuscularSave()
        {
            DynamoDbContext ctx = new DynamoDbContext();
            GrupoMuscularRepository repo = new GrupoMuscularRepository(ctx);

            var grp = new GrupoMuscular();
            grp.Descricao = "Membros Inferiores (Pernas)";
            grp.UsuarioId = 7200;
            grp.Exercicios = new List<Exercicio>
            {
                new Exercicio {
                    Descricao = "Agachamento",
                    Ordem = 1,
                    Repeticao = "4 x 12"
                },
                new Exercicio {
                    Descricao = "Abdutora Cross",
                    Ordem = 2,
                    Repeticao = "3 x 10"
                },
                new Exercicio {
                    Descricao = "Adutora Cross",
                    Ordem = 3,
                    Repeticao = "3 x 10"
                },
                new Exercicio {
                    Descricao = "Extensor Quadril (Glúteo)",
                    Ordem = 4,
                    Repeticao = "3 x 10"
                }               
            };

            var resp = repo.SalvarAsync(grp).Result;

            Console.WriteLine("Has Error: {0}", resp.HasError);
            Console.WriteLine("Message: {0}", resp.ErrorMessages.Count > 0 ? resp.ErrorMessages[0] : "");
        }        

        static void GetGrupoMuscular()
        {
            DynamoDbContext ctx = new DynamoDbContext();
            GrupoMuscularRepository repo = new GrupoMuscularRepository(ctx);

            var resp = repo.ObterGrupoMuscularAsync(new Usuario { Id = 7200 }).Result;
            Console.WriteLine("Has Error: {0}", resp.HasError);
            Console.WriteLine("Message: {0}", resp.ErrorMessages.Count > 0 ? resp.ErrorMessages[0] : "");
        }      
    }
}
