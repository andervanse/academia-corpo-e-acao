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
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats;
using SixLabors.ImageSharp.Formats.Bmp;
using SixLabors.ImageSharp.Formats.Jpeg;
using SixLabors.ImageSharp.Formats.Png;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;

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
            ILogger<UploadFileController> log) : base(configuration, log)
        {
            _uploadFile = uploadFile;
            _userRepo = userRepo;
            _config = configuration;
            _log = log;
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

                    var resizeOptions = new ResizeOptions
                    {
                        Size = new SixLabors.Primitives.Size { Width = 512, Height = 512 },
                        Mode = ResizeMode.Stretch
                    };

                    try
                    {
                        using (var mmStream = new MemoryStream())
                        {
                            var ext = Path.GetExtension(formFile.FileName);
                            var fileId = $"{Guid.NewGuid()}{ext}";
                            await formFile.CopyToAsync(mmStream); 
                            mmStream.Seek(0, SeekOrigin.Begin);                           
                            urlLocation = await _uploadFile.UploadFileAsync(mmStream, $"{fileId}");
                        }
                    }
                    catch (Exception e)
                    {
                        var msgErro = "Falha ao processar imagem.";
                        _log.LogError(e.Message, msgErro);
                        return StatusCode(500, new { message = msgErro });
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