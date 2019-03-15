using System;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace academia_corpo_e_acao
{
    public class Usuario 
    {
        public int Id { get; set; }
        public string Nome { get; set; }        
        public string Login { get; set; }
        public DateTime? DtAtualizacao { get; set; }
        public Sexo? Sexo { get; set; }
        public DateTime? DtNascimento { get; set; }
        public string Email { get; set; } 
        public string Senha { get; set; }
        public string Salt { get; set; }
        public string HashedPassword { get; set; }
        public string Celular { get; set; }   
        public string UrlFoto {get; set; }     
        public string Observacao { get; set; }
        public bool Administrador { get; set; }
    }

    public enum Sexo { Masculino, Feminino }
}