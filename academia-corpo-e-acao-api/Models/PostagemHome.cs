
using System;

namespace academia_corpo_e_acao
{
    public class PostagemHome 
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public DateTime DataAtualizacao { get; set; }
        public int Ordem { get; set; }
        public string Titulo { get; set; }
        public string Texto { get; set; }
        public string UrlImagem { get; set; }
    }
}