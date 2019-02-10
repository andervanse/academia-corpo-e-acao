
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace academia_corpo_e_acao
{
    [Authorize]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly UsuarioRepository _userRepo;
        private readonly IConfiguration _config;
        private readonly IEmailLoginConfirmation _emailLoginConfirmation;

        public AuthController(UsuarioRepository userRepo,
                              IConfiguration configuration,
                              IEmailLoginConfirmation emailLoginConfirmation)
        {
            _userRepo = userRepo;
            _config = configuration;
            _emailLoginConfirmation = emailLoginConfirmation;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Authentication([FromBody] LoginCredentials credentials)
        {
            if (credentials == null) return BadRequest();

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = new Usuario
            {
                Nome = credentials.Login,
                Senha = credentials.Senha
            };

            var response = await _userRepo.UsuarioValidoAsync(user);

            if (response.HasError)
                return BadRequest(response.Messages);
            
            if (response.Return != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Sub, credentials.Login),                    
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.NameId, response.Return.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.UniqueName, response.Return.Nome)
                };

                if (response.Return.Administrador)
                {
                    claims.Add(new Claim(ClaimTypes.Role, Role.Admin));
                }

                var token = new JwtSecurityToken(
                                  issuer: _config["Token:Issuer"],
                                  audience: _config["Token:Audience"],
                                  claims: claims,
                                  expires: DateTime.UtcNow.AddMinutes(30),
                                  signingCredentials: new SigningCredentials(
                                                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Token:Key"])),
                                                    SecurityAlgorithms.HmacSha256));

                var handler = new JwtSecurityTokenHandler();
                var jwtToken = handler.WriteToken(token);
                return Ok(new { token = jwtToken });
            }
            else
            {
                return BadRequest();
            }
        }

        [AllowAnonymous]
        [HttpPatch]
        public async Task<IActionResult> Patch([FromBody] UserCredentials credentials)
        {
            if (credentials == null) return BadRequest();

            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = new Usuario
            {
                Email = credentials.Login,
                Senha = credentials.Senha
            };

            var response = await _userRepo.ObterUsuarioAsync(user);

            if (response.HasError)
                return BadRequest(response.Messages);

            if (response.Return == null)
            {
                return BadRequest(response.Messages);
            }
            else
            {
                user.Id = response.Return.Id;

                var saveResponse = await _userRepo.SalvarAsync(user);

                if (saveResponse.HasError)
                    return BadRequest(saveResponse.Messages);
            }

            return Ok();
        }
    }
}