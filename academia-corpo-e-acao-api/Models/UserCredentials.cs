using System.ComponentModel.DataAnnotations;

namespace academia_corpo_e_acao
{
    public class UserCredentials
    {
        [Required]
        public string Login { get; set; }

        [Required]
        [MinLength(8)]
        public string Senha { get; set; }

        [Compare("Password")]
        public string ConfirmaSenha { get; set; }
    }

    public class LoginCredentials
    {
        [Required]
        public string Login { get; set; }

        [Required]
        [MinLength(8)]
        public string Senha { get; set; }
    }    

}    