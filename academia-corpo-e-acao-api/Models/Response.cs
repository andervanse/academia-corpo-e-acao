
using System.Collections.Generic;

namespace academia_corpo_e_acao
{
    public class Response<T>
    {
        public Response()
        {            
            Messages = new List<string>();
            ErrorMessages = new List<string>();
        }

        public IList<string> Messages { get; set; }

        public IList<string> ErrorMessages { get; set; }

        public bool HasError 
        { 
            get
            {
                return this.ErrorMessages.Count > 0;
            } 
        }

        public T Return { get; set; }
    }
}