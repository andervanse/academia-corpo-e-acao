using System;
using System.ComponentModel.DataAnnotations;

namespace academia_corpo_e_acao
{
    public class UsuarioViewModel 
    {
        [Required]
        [StringLength(20, MinimumLength = 6)]
        public string Login { get; set; }

        [Required]
        [UsuarioViewModelPassword]
        public string Senha { get; set; }      

        [Required]
        [Compare("Senha")]
        public string ConfirmaSenha { get; set; }      
    }

    public class UsuarioInfoViewModel
    {
        [Required]
        public string Login { get; set; }

        public string Nome { get; set; }

        [EmailAddress]
        public string Email { get; set; }
        public double Altura { get; set; }
        public double Peso { get; set; }     
        public string Celular { get; set; }   
        public string Observacao { get; set; }
    }

}