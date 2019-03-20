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
    public class PostagemHomeController :AcademiaControllerBase
    {
        private readonly IPostagemHomeRepository _postagemRepo;
        private readonly IConfiguration _configuration;
        private readonly ILogger _log;

        public DynamoDbContext _ctx { get; }

        public PostagemHomeController (
            IPostagemHomeRepository postagemRepo,
            IConfiguration configuration,
            ILoggerFactory logger) : base(configuration, logger)
        {
            _postagemRepo = postagemRepo;
            _configuration = configuration;
            _log = logger.CreateLogger("PostagemHomeController");
        }        


        [AllowAnonymous]
        [HttpGet(Name = "ObterPostagemHome")]
        public async Task<IActionResult> GetAsync()
        {           
            var response = await _postagemRepo.ObterAsync(null); 

            if (response.Return == null)
               return NotFound();

            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            return Ok(response.Return);
        } 

        [HttpGet("{postagemHomeId}", Name = "ObterPostagensHome")]
        public async Task<IActionResult> GetAsync(int postagemHomeId)
        {           
            var usr = this.ObterUsuario();
            var response = await _postagemRepo.ObterAsync(postagemHomeId); 

            if (response.Return == null)
               return NotFound();

            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            return Ok(response.Return);
        } 

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] PostagemHome postagemHome)
        {           
            if (postagemHome == null)
               return BadRequest("parâmetro inválido.");

            var response = await _postagemRepo.SalvarAsync(postagemHome); 

            if (response.Return == null)
               return NotFound();

            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            return CreatedAtRoute(routeName: "ObterPostagemHome",
                                routeValues: new { userId = postagemHome.UsuarioId },
                                      value: response.Return);
        }    


        [HttpDelete("{postagemHomeId}")]
        public async Task<IActionResult> DeleteAsync(int postagemHomeId)
        {           
            var response = await _postagemRepo.ExcluirAsync(postagemHomeId); 
               
            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            return Ok();
        }               
        
                              
    }
}