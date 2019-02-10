

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace academia_corpo_e_acao
{
    [Authorize]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class GrupoMuscularController :Controller
    {
        private readonly GrupoMuscularRepository _grpRepo;
        private readonly IEmailLoginConfirmation _emailLoginConfirmation;
        private readonly IConfiguration _configuration;

        public GrupoMuscularController(GrupoMuscularRepository grpRepo,
                                       IEmailLoginConfirmation emailLoginConfirmation,
                                       IConfiguration configuration)
        {
            _grpRepo = grpRepo;
            _emailLoginConfirmation = emailLoginConfirmation;
            _configuration = configuration;
        }


        [HttpGet("{userId}", Name = "ObterGrupoMuscular")]
        public IActionResult Get(int userId)
        {           
            var response = _grpRepo.ObterGrupoMuscularAsync(new Usuario { Id = userId }); 

            if (response.Result.HasError)
               return BadRequest(response.Result.ErrorMessages);

            return Ok(response.Result.Return);
        }  

        [HttpPost]
        public IActionResult Post([FromBody] GrupoMuscular grupoMuscular)
        {           
            var response = _grpRepo.SalvarAsync(grupoMuscular); 

            if (response.Result.HasError)
               return BadRequest(response.Result.ErrorMessages);

            return CreatedAtRoute(routeName: "ObterGrupoMuscular",
                                routeValues: new { userId = grupoMuscular.UsuarioId },
                                      value: new GrupoMuscular { Descricao = grupoMuscular.Descricao });
        }                      
    }
}