using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace academia_corpo_e_acao
{
    public class Usuario 
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string Email { get; set; } 
        public string Senha { get; set; }
        public string Salt { get; set; }
        public string HashedPassword { get; set; }
        public double? Altura { get; set; }
        public double? Peso { get; set; }
        public string Celular { get; set; }

        [JsonIgnore]
        public bool Administrador { get; set; }

    }
}