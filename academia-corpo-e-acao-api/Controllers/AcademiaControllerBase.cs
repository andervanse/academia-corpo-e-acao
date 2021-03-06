using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace academia_corpo_e_acao
{
    public class AcademiaControllerBase : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly ILogger _log;

        public AcademiaControllerBase(IConfiguration configuration,
                                      ILogger<AcademiaControllerBase> logger)
        {
            _config = configuration;
            _log = logger;
        }

        protected Usuario ObterUsuario()
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
                    ValidIssuer = _config["Token:Issuer"],
                    ValidateAudience = true,
                    ValidAudience = _config["Token:Audience"]
                };
                
                ClaimsPrincipal principal = handler.ValidateToken(tokenHash, validations, out tokenSecure);

                var usuario = new Usuario();
                string id = principal.Claims.FirstOrDefault(x => x.Properties.FirstOrDefault().Value == JwtRegisteredClaimNames.NameId)?.Value;
                string login = principal.Claims.FirstOrDefault(x => x.Properties.FirstOrDefault().Value == JwtRegisteredClaimNames.UniqueName)?.Value;
                bool admin = principal.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Role)?.Value == "Admin";

                usuario.Id = int.Parse(id);
                usuario.Login = login; 
                usuario.Administrador = admin;

                return usuario;
            }
            catch (Exception e)
            {
                _log.LogError(e.Message);
                return null;
            }
        }        
    }


}