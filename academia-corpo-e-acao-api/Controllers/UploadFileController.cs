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
    [Authorize]
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
        public async Task<IActionResult> Post(List<IFormFile> files)
        {
            long size = files.Sum(f => f.Length);
            var filePath = Path.GetTempFileName();
            var user = this.ObterUsuario();
            var formFile = files[0];

            if (formFile.Length > 0 && !String.IsNullOrEmpty(formFile.FileName))
            {
                if (ImageHelper.CheckIfImageFile(formFile))
                {
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await _uploadFile.UploadFileAsync(stream, $"{user.Id}_{formFile.FileName}");
                    }
                }
            }

            var resp = await _userRepo.SalvarAsync(user);

            return Ok(new { size, filePath });
        }
    }
}