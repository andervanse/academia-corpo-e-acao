
using System.Collections.Generic;

namespace dynamodb_test
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

        public T ResponseObj { get; set; }
    }
}