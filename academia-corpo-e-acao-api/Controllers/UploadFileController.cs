using System;
using System.Collections.Generic;
using System.Drawing;
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
        private readonly ILogger _log;

        public UploadFileController(
            IUploadFile uploadFile,
            IUsuarioRepository userRepo,
            IConfiguration configuration,
            ILoggerFactory logger) : base(configuration, logger)
        {
            _uploadFile = uploadFile;
            _userRepo = userRepo;
            _config = configuration;
            _log = logger.CreateLogger("UploadFileController");
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] IFormCollection form)
        {
            long size = form.Files.Sum(f => f.Length);

            if (size > 0)
            {
                var formFile = form.Files[0];
                var urlLocation = "";

                if (formFile.Length > 0 && !String.IsNullOrEmpty(formFile.FileName))
                {
                    if (ImageHelper.CheckIfImageFile(formFile))
                    {
                        using (var img = Image.FromStream(formFile.OpenReadStream()))
                        {
                            var ext = Path.GetExtension(formFile.FileName);
                            var fileId = $"{Guid.NewGuid()}{ext}";

                            try
                            {
                                using (Stream ms = new MemoryStream())
                                {
                                    img.Resize(512, 512).Save(ms, img.RawFormat);
                                    urlLocation = await _uploadFile.UploadFileAsync(ms, $"{fileId}");
                                }
                            }
                            catch (Exception e)
                            {
                                _log.LogError(e.Message);
                                return BadRequest(e.Message);
                            }
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

        [HttpDelete("{keyName}")]
        public async Task<IActionResult> Delete(string keyName)
        {
            try
            {
                await _uploadFile.DeleteFileAsync(keyName);
            }
            catch (Exception e)
            {
                _log.LogError(e.Message);
                return BadRequest(e.Message);
            }

            return Ok();
        }        
    }
}