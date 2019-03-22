using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace academia_corpo_e_acao
{
    [Authorize]
    [Route("api/[controller]")]
    [Produces("application/json")]    
    public class AvaliacaoFisicaController : AcademiaControllerBase
    {
        private readonly IAvaliacaoFisicaRepository _avaliacaoRepo;
        private readonly IConfiguration _configuration;
        private readonly ILogger _log;

        public AvaliacaoFisicaController(
            IAvaliacaoFisicaRepository avaliacaoRepo,
            IConfiguration configuration,
            ILogger<AvaliacaoFisicaController> log) : base(configuration, log)
        {
            _avaliacaoRepo = avaliacaoRepo;
            _configuration = configuration;
            _log = log;
        }

        [HttpGet("{userId}/{avaliacaoId?}", Name = "ObterAvaliacaoFisica")]
        public async Task<IActionResult> GetAsync(int userId, int? avaliacaoId)
        {           
            if (userId <= 0)
              return BadRequest("usuário inválido.");

            var response = await _avaliacaoRepo.ObterAsync(new Usuario { Id = userId }, avaliacaoId); 

            if (response.Return == null)
               return NotFound();

            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            return Ok(response.Return);
        }  

        [Authorize(Roles = Role.Admin)]
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] AvaliacaoFisica avaliacaoFisica)
        {           
            if (avaliacaoFisica == null)
               return BadRequest("parâmetro inválido.");

            var response = await _avaliacaoRepo.SalvarAsync(avaliacaoFisica); 

            if (response.Return == null)
               return NotFound();

            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            return CreatedAtRoute(routeName: "ObterAvaliacaoFisica",
                                routeValues: new { userId = avaliacaoFisica.UsuarioId },
                                      value: response.Return);
        }  

        [Authorize(Roles = Role.Admin)]
        [HttpDelete("{avaliacaoFisicaId}")]
        public async Task<IActionResult> DeleteAsync(int avaliacaoFisicaId)
        {           
            var response = await _avaliacaoRepo.ExcluirAsync(avaliacaoFisicaId); 
               
            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            return Ok();
        }                  

    }
}