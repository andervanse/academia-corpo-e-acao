using System.Collections.Generic;
using System.Threading.Tasks;

namespace academia_corpo_e_acao
{
    public interface IAvaliacaoFisicaRepository
    {
        Task<Response<AvaliacaoFisica>> SalvarAsync(AvaliacaoFisica avaliacaoFisica);

        Task<Response<List<AvaliacaoFisica>>> ObterAsync(Usuario usuario, int? avaliacaoId);

        Task<Response<bool>> ExcluirAsync(int avaliacaoId);
        
    }
}
