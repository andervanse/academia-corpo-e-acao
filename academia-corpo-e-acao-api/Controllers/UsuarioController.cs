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
    public class UsuarioController :Controller
    {
        private readonly UsuarioRepository _userRepo;
        private readonly IEmailLoginConfirmation _emailLoginConfirmation;
        private readonly IConfiguration _config;
        private readonly ILogger _log;

        public UsuarioController(UsuarioRepository userRepo,
                                 IEmailLoginConfirmation emailLoginConfirmation,
                                 IConfiguration configuration,
                                 ILoggerFactory logger)
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

            var response = await _userRepo.ObterUsuariosAsync(new Usuario {Nome = nome});

            if (!response.HasError) 
            {
                List<Usuario> lstUsuario = new List<Usuario>();

                foreach (var usr in response.Return)
                {
                    lstUsuario.Add(new Usuario
                    {
                        Id = usr.Id,
                        Nome = usr.Nome,
                        Email = usr.Email,
                        CreatedAt = usr.CreatedAt,
                        Altura = usr.Altura,
                        Peso = usr.Peso,
                        Celular = usr.Celular,
                        Administrador = usr.Administrador
                    });
                }

                return Ok(lstUsuario);      
            }
            else
            {
                return BadRequest(response.ErrorMessages);
            }      
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> Get()
        {            
            var nome = ObterNomeUsuario();

            if (string.IsNullOrEmpty(nome)) return BadRequest();

            var response = await _userRepo.ObterUsuarioAsync(new Usuario {Nome = nome});

            return Ok(new Usuario 
            { 
                Id = response.Return.Id,
                Nome = response.Return.Nome,  
                Email = response.Return.Email,
                CreatedAt = response.Return.CreatedAt,
                Altura = response.Return.Altura,
                Peso = response.Return.Peso,
                Celular = response.Return.Celular
            });            
        }        

        [HttpPost]
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
                    ValidateIssuer = false,
                    ValidateAudience = false
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
    }
}