using System.Collections.Generic;
using System.Threading.Tasks;

namespace academia_corpo_e_acao
{
    public interface IPostagemHomeRepository
    {
        Task<Response<PostagemHome>> SalvarAsync(PostagemHome postagemHome);

        Task<Response<List<PostagemHome>>> ObterAsync(Usuario usuario, int? postagemHomeId);

        Task<Response<bool>> ExcluirAsync(int postagemHomeId);        
    }
}