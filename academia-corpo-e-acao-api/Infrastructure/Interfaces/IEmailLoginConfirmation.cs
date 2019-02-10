
using System.Threading.Tasks;

namespace academia_corpo_e_acao
{
    public interface IEmailLoginConfirmation
    {
        Task<bool> SendAsync(string email, string confirmationUrl, bool hasPasswordChanged);
    }
}