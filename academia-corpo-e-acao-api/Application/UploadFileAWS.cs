using System;
using System.IO;
using System.Threading.Tasks;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace academia_corpo_e_acao 
{
    public class UploadFileAWS :IUploadFile
    {
        private static IAmazonS3 s3Client;
        
        private readonly IConfiguration _configuration;
        private readonly ILogger _log;

        public UploadFileAWS (
            IConfiguration configuration,
            ILoggerFactory logger)
        {
            _configuration = configuration;
            _log = logger.CreateLogger("UploadFileAWS");            
        }

        public async Task<string> UploadFileAsync(Stream fileStream, string keyName)
        {
            string urlLocation = null;

            try
            {                
                using (var client = new AmazonS3Client(RegionEndpoint.SAEast1))
                {
                    var bucketName = _configuration["Website:S3Bucket"];
                    var fileTransferUtility = new TransferUtility(client);
                    var fileLocation = "usuarios/fotos/" + keyName;
                    await fileTransferUtility.UploadAsync(fileStream, bucketName, fileLocation);
                    urlLocation = $"{_configuration["Website:S3BucketUrl"]}/{fileLocation}";
                }
            }
            catch (AmazonS3Exception e)
            {
                _log.LogError("Error encountered on server. Message:'{0}' when writing an object", e.Message);
                
            }
            catch (Exception e)
            {
                _log.LogError("Unknown encountered on server. Message:'{0}' when writing an object", e.Message);
            }

            return urlLocation;

        }

    }

}