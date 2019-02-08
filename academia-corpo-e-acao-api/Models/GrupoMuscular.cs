

using System.Collections.Generic;
using System.Runtime.Serialization;

namespace dynamodb_test
{
    [DataContract]
    public class GrupoMuscular
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public string Descricao { get; set; }
        public IList<Exercicio> Exercicios { get; set; }        
    }
}