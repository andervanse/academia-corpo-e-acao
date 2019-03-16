using System.IO;
using System.Threading.Tasks;

namespace academia_corpo_e_acao
{
    public interface IUploadFile
    {
        Task<string> UploadFileAsync(Stream fileStream, string keyName);
        
    }
}