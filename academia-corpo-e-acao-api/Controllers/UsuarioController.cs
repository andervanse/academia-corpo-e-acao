using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace academia_corpo_e_acao
{

    [Authorize(Roles = Role.Admin)]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class UsuarioController :AcademiaControllerBase
    {
        private readonly IUsuarioRepository _userRepo;
        private readonly IEmailLoginConfirmation _emailLoginConfirmation;
        private readonly IConfiguration _config;
        private readonly ILogger _log;

        public UsuarioController(IUsuarioRepository userRepo,
                                 IEmailLoginConfirmation emailLoginConfirmation,
                                 IConfiguration configuration,
                                 ILoggerFactory logger): base(configuration, logger)
        {
            _userRepo = userRepo;
            _emailLoginConfirmation = emailLoginConfirmation;
            _config = configuration;
            _log = logger.CreateLogger("UsuarioController");
        }

        [HttpGet("{nome}", Name = "GetUser")]
        public async Task<IActionResult> Get(string nome)
        {            
            if (string.IsNullOrEmpty(nome)) return BadRequest();

            var response = await _userRepo.ObterUsuariosAsync(new Usuario { Nome = nome });

            if (!response.HasError) 
            {
                List<UsuarioViewModel> lstUsuario = new List<UsuarioViewModel>();

                foreach (var usr in response.Return)
                {
                    var usrVm = ConvertToViewModel(usr);
                    lstUsuario.Add(usrVm);
                }

                return Ok(lstUsuario);      
            }
            else
            {
                return BadRequest(response.ErrorMessages);
            }              
        }

        [HttpGet("{id:int}", Name = "GetUserById")]
        public async Task<IActionResult> Get(int id)
        {            
            if (id < 1) return BadRequest();
            Response<Usuario> response = await _userRepo.ObterUsuarioAsync(new Usuario { Id = id });
            return Ok(ConvertToViewModel(response.Return));
        }    

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Get()
        {            
            var nome = ObterNomeUsuario();

            if (string.IsNullOrEmpty(nome)) return BadRequest();

            Response<Usuario> response = await _userRepo.ObterUsuarioAsync(new Usuario { Nome = nome });
            return Ok(ConvertToViewModel(response.Return));            
        }                

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] UsuarioViewModel userVm)
        {
            if (userVm == null) return BadRequest();

            if (!ModelState.IsValid) return BadRequest(ModelState);

            Usuario user = ConvertToDomain(userVm);
            Response<Usuario> saveResponse = await _userRepo.SalvarAsync(user);

            if (saveResponse.HasError)
                return BadRequest(saveResponse.ErrorMessages);

            return CreatedAtRoute(routeName: "GetUser",
                                routeValues: new { nome = user.Nome },
                                      value: new { user = new { nome = user.Nome } });
        }    

       [HttpPut]
        public async Task<IActionResult> Put([FromBody] UsuarioViewModel usuario)
        {
            if (usuario == null) return BadRequest();

            if (!ModelState.IsValid) return BadRequest(ModelState);

            Usuario user = ConvertToDomain(usuario);
            Response<Usuario> saveResponse = await _userRepo.SalvarAsync(user);

            if (saveResponse.HasError)            
               return BadRequest(saveResponse.ErrorMessages);
             
            return Ok();
        } 

        //Helper Methods
        protected string ObterNomeUsuario()
        {
            try
            {
                var tokenStr = HttpContext.Request.Headers["Authorization"];
                var tokenHash = tokenStr[0].Substring(7, tokenStr[0].Length - 7);
                var key = Encoding.ASCII.GetBytes(_config["Token:Key"]);
                var handler = new JwtSecurityTokenHandler();
                var tokenSecure = handler.ReadToken(tokenHash) as SecurityToken;

                var validations = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = true,
                    ValidateAudience = true
                };
                
                var claims = handler.ValidateToken(tokenHash, validations, out tokenSecure);

                return claims.Identity.Name;
            }
            catch (Exception e)
            {
                _log.LogError(e.Message);
                return String.Empty;
            }
        }

        private static Usuario ConvertToDomain(UsuarioViewModel usuario) 
        {
            if (usuario == null) return null;

            var usr =  new Usuario 
            {
                Id = usuario.Id,
                Senha = usuario.Senha,
                Login = usuario.Login,
                Nome = usuario.Nome,
                Email = usuario.Email,
                Celular = usuario.Celular,            
                DtNascimento = usuario.DtNascimento,                
                DtAtualizacao = usuario.DtAtualizacao,
                Observacao = usuario.Observacao
            };

            if (!string.IsNullOrEmpty(usuario.Sexo)) {
                Object sx;
                Enum.TryParse(typeof(Sexo), usuario.Sexo, true, out sx);
                usr.Sexo = (Sexo)sx;
            }            

            return usr;
        } 

        private static UsuarioViewModel ConvertToViewModel(Usuario usuario) 
        {
            if (usuario == null) return null;

            return new UsuarioViewModel 
            {
                Id = usuario.Id,
                Senha = usuario.Senha,
                Login = usuario.Login,
                Nome = usuario.Nome,
                Email = usuario.Email,
                Celular = usuario.Celular,
                Sexo = usuario.Sexo.ToString(),
                DtNascimento = usuario.DtNascimento, 
                Observacao = usuario.Observacao
            };
        }             
    }
}