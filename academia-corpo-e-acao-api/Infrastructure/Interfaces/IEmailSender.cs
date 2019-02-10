using System.Threading.Tasks;

namespace academia_corpo_e_acao
{
    public interface IEmailSender
    {
        Task<bool> SendEmailAsync(string email, string subject, string message);
    }
}