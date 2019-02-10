using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace academia_corpo_e_acao
{
    [Route("api/[controller]")]
    public class HomeController :Controller
    {
        public DynamoDbContext _ctx { get; }

        public HomeController(DynamoDbContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        [Authorize]
        public IActionResult Get()
        {            
            return Ok(new { message = "super secret information" });
        }  

        [HttpGet]
        [Route("Administrador")]
        [Authorize(Roles = Role.Admin)]
        public IActionResult IsAdmin()
        {            
            return Ok(new { message = "[Admin] super secret information" });
        }                      
    }
}