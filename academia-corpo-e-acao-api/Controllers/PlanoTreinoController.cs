

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace academia_corpo_e_acao
{
    [Authorize]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class PlanoTreinoController :Controller
    {
        private readonly PlanoTreinoRepository _grpRepo;
        private readonly IEmailLoginConfirmation _emailLoginConfirmation;
        private readonly IConfiguration _configuration;

        public PlanoTreinoController(PlanoTreinoRepository grpRepo,
                                     IEmailLoginConfirmation emailLoginConfirmation,
                                     IConfiguration configuration)
        {
            _grpRepo = grpRepo;
            _emailLoginConfirmation = emailLoginConfirmation;
            _configuration = configuration;
        }

        [HttpGet("{userId}", Name = "ObterPlanoTreino")]
        public IActionResult Get(int userId)
        {           
            if (userId <= 0)
              return BadRequest("usuário inválido.");

            var response = _grpRepo.ObterPlanoTreinoAsync(new Usuario { Id = userId }); 

            if (response.Result.HasError)
               return BadRequest(response.Result.ErrorMessages);

            return Ok(response.Result.Return);
        }  

        [HttpPost]
        public IActionResult Post([FromBody] PlanoTreino planoTreino)
        {           
            var response = _grpRepo.SalvarAsync(planoTreino); 

            if (response.Result.HasError)
               return BadRequest(response.Result.ErrorMessages);

            return CreatedAtRoute(routeName: "ObterPlanoTreino",
                                routeValues: new { userId = planoTreino.UsuarioId },
                                      value: response);
        }                      
    }
}