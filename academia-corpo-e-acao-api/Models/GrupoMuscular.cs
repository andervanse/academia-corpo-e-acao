

using System.Collections.Generic;
using System.Runtime.Serialization;

namespace academia_corpo_e_acao
{
    [DataContract]
    public class GrupoMuscular
    {
        [DataMember(Name="descricao")]
        public string Descricao { get; set; }

        [DataMember(Name="exercicios")]
        public IList<Exercicio> Exercicios { get; set; }        
    }
}