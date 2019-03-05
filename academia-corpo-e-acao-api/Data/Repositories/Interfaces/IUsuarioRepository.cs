
using System.Collections.Generic;
using System.Threading.Tasks;

namespace academia_corpo_e_acao
{
    public interface IUsuarioRepository
    {
        Task<Response<Usuario>> SalvarAsync(Usuario user);
        Task<Response<Usuario>> UsuarioValidoAsync(Usuario user);        
        Task<Response<List<Usuario>>> ObterUsuariosAsync(Usuario usuario);
        Task<Response<Usuario>> ObterUsuarioAsync(Usuario usuario);
    }
}