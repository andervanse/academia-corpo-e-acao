
using System;

namespace academia_corpo_e_acao
{
    public class AvaliacaoFisica  
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public DateTime DtAtualizacao { get; set; }            
        public Medidas Medidas { get; set; }
        public ComposicaoCorporal ComposicaoCorporal { get; set; }
        public MedidasAntropometricas MedidasAntropometricas { get; set; }
        public string Observacao { get; set; }
    }

    public class Medidas
    {
        public double Peso { get; set; }
        public double Estatura { get; set; }                
        public double IMC
        {
            get { return this.Peso / (this.Estatura * 2); }
        }
        public double IGC { get; set; }
    }

    public class ComposicaoCorporal
    {
        public double Subescapular { get; set; }
        public double AuxiliarMedia { get; set; }
        public double suprailiaca { get; set; }
        public double Triceps { get; set; }  
        public double Coxa { get; set; }  
        public double Panturilha { get; set; }  
    }

    public class MedidasAntropometricas
    {
        public double Ombro { get; set; }
        public double Torax { get; set; }
        public double Cintura { get; set; }
        public double Quadril { get; set; }
        public double AntebracoDireito { get; set; }
        public double AntebracoEsquerdo { get; set; }
        public double BracoDireito { get; set; }
        public double BracoEsquerdo { get; set; }
        public double CoxaDireita { get; set; }
        public double CoxaEsquerda { get; set; }
        public double PernaDireita { get; set; }
        public double PernaEsquerda { get; set; }
        public double ICQ 
        {
            get { return this.Cintura / this.Quadril; }
        }
    }
}