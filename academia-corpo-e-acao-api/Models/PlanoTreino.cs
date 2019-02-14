using System;
using System.Collections.Generic;

namespace academia_corpo_e_acao
{
    public class PlanoTreino
    {
        public int Id { get; set; }
        public int UsuarioId { get; set; }
        public DateTime DataInicio { get; set; }
        public List<GrupoMuscular> GruposMusculares { get; set; }
        public string Observacao { get; set; }
    }
}