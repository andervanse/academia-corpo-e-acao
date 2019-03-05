
using System;

namespace academia_corpo_e_acao
{
    public class AvaliacaoFisica  
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public DateTime DtAtual { get; set; }
        public double Altura { get; set; }
        public double Peso { get; set; }
        public Medidas Medidas { get; set; }
        public string Observacao { get; set; }
    }

    public class Medidas
    {
        public double Ombro { get; set; }
        public double Peitoral { get; set; }
        public double Braco { get; set; }
        public double Cintura { get; set; }
        public double Quadril { get; set; }
        public double Coxa { get; set; }
    }
}