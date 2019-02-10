using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace academia_corpo_e_acao
{

    [Authorize]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UsuarioController :Controller
    {
        private readonly UsuarioRepository _userRepo;
        private readonly IEmailLoginConfirmation _emailLoginConfirmation;
        private readonly IConfiguration _configuration;

        public UsuarioController(UsuarioRepository userRepo,
                                 IEmailLoginConfirmation emailLoginConfirmation,
                                 IConfiguration configuration)
        {
            _userRepo = userRepo;
            _emailLoginConfirmation = emailLoginConfirmation;
            _configuration = configuration;
        }

        [HttpGet("{nome}", Name = "GetUser")]
        public async Task<IActionResult> Get(string nome)
        {            
            if (string.IsNullOrEmpty(nome)) return BadRequest();

            var response = await _userRepo.ObterUsuarioAsync(new Usuario {Nome = nome});
            return Ok(new[] { response.Return });            
        }

        [HttpPost]
        [Authorize(Roles = Role.Admin)]
        public async Task<IActionResult> Post([FromBody] UsuarioViewModel userVm)
        {
            if (userVm == null) return BadRequest();

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = new Usuario 
            {
                Nome = userVm.Login,
                Senha = userVm.Senha                
            };

            var response = await _userRepo.ObterUsuarioAsync(user);

            if (response.HasError)
               return BadRequest(response.ErrorMessages);

            if (response.Return == null)
            {
                var saveResponse = await _userRepo.SalvarAsync(user);

                if (saveResponse.HasError)
                   return BadRequest(saveResponse.ErrorMessages);
            }

            return CreatedAtRoute(routeName: "GetUser",
                                routeValues: new { nome = user.Nome },
                                      value: new { user = new { name = user.Nome } });
        }    

       [HttpPut]
        public async Task<IActionResult> Put([FromBody] UsuarioInfoViewModel usuario)
        {
            if (usuario == null) return BadRequest();

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = new Usuario 
            {
                Nome = usuario.Login,
                Email = usuario.Email,
                Peso = usuario.Peso,
                Altura = usuario.Altura,
                Celular = usuario.Celular
            };

            var response = await _userRepo.ObterUsuarioAsync(user);

            if (response.HasError) return BadRequest(response.ErrorMessages);

            user.Id = response.Return.Id;

            var saveResponse = await _userRepo.SalvarAsync(user);

            if (saveResponse.HasError)            
               return BadRequest(saveResponse.ErrorMessages);
             
            return Ok();
        } 

        [HttpPatch]
        public async Task<IActionResult> Patch([FromBody] UsuarioViewModel senhaUsuarioVm)
        {
            if (senhaUsuarioVm == null) return BadRequest();

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = new Usuario 
            {
                Nome = senhaUsuarioVm.Login,
                Senha = senhaUsuarioVm.Senha       
            };

            var saveResponse = await _userRepo.AlterarSenhaAsync(user);

            if (saveResponse.HasError)            
               return BadRequest(saveResponse.ErrorMessages);
             
            return Ok();
        }                     
    }
}