using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace academia_corpo_e_acao
{
    [Authorize(Roles = Role.Admin)]
    [Route("api/[controller]")]
    [Produces("application/json")] 
    public class HomeController :ControllerBase
    {
 
        [HttpGet]
        [Authorize]
        public IActionResult Get()
        {            
            return Ok(new { message = "super secret information" });
        }  

        [HttpGet]
        [Route("Administrador")]
        public IActionResult IsAdmin()
        {            
            return Ok(new { message = "[Admin] super secret information" });
        }
                              
    }
}