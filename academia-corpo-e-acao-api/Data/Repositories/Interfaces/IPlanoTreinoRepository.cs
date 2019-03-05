
using System.Collections.Generic;
using System.Threading.Tasks;

namespace academia_corpo_e_acao
{
    public interface IPlanoTreinoRepository
    {
        Task<Response<PlanoTreino>> SalvarAsync(PlanoTreino planoTreino);

        Task<Response<PlanoTreino>> ObterAsync(Usuario usuario);        

        Task<Response<PlanoTreino>> ObterTemplateAsync(int planoTreinoId);      

        Task<Response<List<PlanoTreino>>> ObterTemplatesAsync(Usuario usuario); 

        Task<Response<bool>> ExcluirAsync(PlanoTreino planoTreino);        
    }
}