using System;

namespace academia_corpo_e_acao
{
    public class Usuario 
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Email { get; set; } 
        public string Senha { get; set; }
        public string Salt { get; set; }
        public string HashedPassword { get; set; }
        public bool IsEmailConfirmed
        {
            get
            {
                return true;
            }
        }

        public double? Altura { get; set; }
        public double? Peso { get; set; }
        public string Celular { get; set; }

        public bool Administrador { get; set; }

    }
}