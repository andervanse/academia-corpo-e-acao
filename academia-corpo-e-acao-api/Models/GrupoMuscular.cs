

using System.Collections.Generic;
using System.Runtime.Serialization;

namespace academia_corpo_e_acao
{
    
    public class GrupoMuscular
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public string Descricao { get; set; }
        public IList<Exercicio> Exercicios { get; set; }        
    }
}