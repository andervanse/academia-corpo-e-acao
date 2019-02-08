using System.Runtime.Serialization;

namespace dynamodb_test
{
    [DataContract]
    public class Exercicio
    {
        [DataMember(Name="descricao")]
        public string Descricao { get; set; }

        [DataMember(Name="ordem")]
        public int Ordem { get; set; }

        [DataMember(Name="repeticao")]
        public string Repeticao { get; set; }
    }
}