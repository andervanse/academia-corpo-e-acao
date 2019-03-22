

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
    public class PlanoTreinoController :AcademiaControllerBase
    {
        private readonly IPlanoTreinoRepository _planoTreinoRepository;
        private readonly IConfiguration _configuration;
        private readonly ILogger _log;        

        public PlanoTreinoController(IPlanoTreinoRepository grpRepo,
                                     IConfiguration configuration,
                                     ILogger<PlanoTreinoController> log) :base(configuration, log)
        {
            _planoTreinoRepository = grpRepo;
            _configuration = configuration;
            _log = log;
        }

        [HttpGet("usuario/{userId}", Name = "ObterPlanoTreino")]
        public async Task<IActionResult> GetAsync(int userId)
        {           
            if (userId <= 0)
              return BadRequest("usuário inválido.");

            var response = await _planoTreinoRepository.ObterAsync(new Usuario { Id = userId }); 
            
            if (response.Return == null)
               return NotFound();

            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            return Ok(response.Return);
        }  

        [Authorize(Roles = Role.Admin)]
        [HttpGet("templates/{templateId}")]
        public async Task<IActionResult> GetTemplateAsync(int templateId)
        {           
            if (templateId <= 0)
              return BadRequest("identificador inválido.");

            var response = await _planoTreinoRepository.ObterTemplateAsync(templateId); 

            if (response.Return == null)
               return NotFound();

            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            return Ok(response.Return);
        }          

        [Authorize(Roles = Role.Admin)]
        [HttpGet("templates")]
        public async Task<IActionResult> GetTemplatesAsync()
        {           
            var usr = this.ObterUsuario();
            var response = await _planoTreinoRepository.ObterTemplatesAsync(usr); 

            if (response.Return == null)
               return NotFound();

            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            return Ok(response.Return);
        }          

        [Authorize(Roles = Role.Admin)]
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] PlanoTreino planoTreino)
        {    
            var usr = this.ObterUsuario();
            planoTreino.usuario = usr;       
            var response = await _planoTreinoRepository.SalvarAsync(planoTreino); 

            if (response.Return == null)
               return NotFound();
               
            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            return CreatedAtRoute(routeName: "ObterPlanoTreino",
                                routeValues: new { userId = planoTreino.UsuarioId },
                                      value: response.Return);
        } 

        [Authorize(Roles = Role.Admin)]
        [HttpDelete("{planoTreinoId}")]
        public async Task<IActionResult> DeleteAsync(int planoTreinoId)
        {    
            if (planoTreinoId < 0) {
                return BadRequest("identificador inválido.");
            }

            var usr = this.ObterUsuario();
            var planoTreino = new PlanoTreino();
            planoTreino.Id = planoTreinoId;
            planoTreino.usuario = usr;     
            planoTreino.UsuarioId = usr.Id;  
            var response = await _planoTreinoRepository.ExcluirAsync(planoTreino); 

            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            return Ok();
        }                                      
    }
}