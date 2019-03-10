using System;
using System.ComponentModel.DataAnnotations;

namespace academia_corpo_e_acao
{
    public class UsuarioViewModel 
    {
        public int Id { get; set; }
        public string Nome { get; set; }        
        public string Login { get; set; }
        public string Email { get; set; } 
        public string Senha { get; set; }
        public string Celular { get; set; }
        public string Sexo { get; set; }
        public DateTime? DtNascimento { get; set; }
        public string Observacao { get; set; }
        public DateTime DtAtualizacao { get; set; }
        public bool Administrador { get; set; }
    }     

}