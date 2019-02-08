using System;

namespace dynamodb_test
{
    public class Usuario 
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Email { get; set; } 
        public string Password { get; set; }
        public string Salt { get; set; }
        public string HashedPassword { get; set; }
    }
}