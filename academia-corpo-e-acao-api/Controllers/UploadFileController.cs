using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace academia_corpo_e_acao
{
    [Authorize(Roles = Role.Admin)]
    [Route("api/[controller]")]
    public class UploadFileController : AcademiaControllerBase
    {
        private readonly IUploadFile _uploadFile;
        private readonly IUsuarioRepository _userRepo;
        private readonly IConfiguration _config;

        public UploadFileController(
            IUploadFile uploadFile,
            IUsuarioRepository userRepo,
            IConfiguration configuration,
            ILoggerFactory logger) : base(configuration, logger)
        {
            _uploadFile = uploadFile;
            _userRepo = userRepo;
            _config = configuration;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] IFormCollection form)
        {
            long size =  form.Files.Sum(f => f.Length);

            if (size > 0)
            {
                var formFile = form.Files[0];
                var urlLocation = "";

                if (formFile.Length > 0 && !String.IsNullOrEmpty(formFile.FileName))
                {
                    if (ImageHelper.CheckIfImageFile(formFile))
                    {                        
                        using (var stream = formFile.OpenReadStream())
                        {
                            var fileId = Guid.NewGuid();
                            urlLocation = await _uploadFile.UploadFileAsync(stream, $"{fileId}");
                        }
                    }
                }
                return Ok(new { urlLocation = urlLocation });
            }
            else
            {
                return BadRequest("Empty file");
            }
        }
    }
}