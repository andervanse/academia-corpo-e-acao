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

            _log.LogInformation("File Name: {0}", keyName);

            try
            {                
                using (var client = new AmazonS3Client(RegionEndpoint.SAEast1))
                {
                    var bucketName = _configuration["Website:S3Bucket"];
                    var fileTransferUtility = new TransferUtility(client);                    
                    var fileLocation = "usuarios/fotos/" + keyName;
                    _log.LogInformation("location: {0}", fileLocation);
                    urlLocation = $"{_configuration["Website:S3BucketUrl"]}/{fileLocation}";

                    var uploadRequest = new TransferUtilityUploadRequest();
                    uploadRequest.ContentType = "image/png";
                    uploadRequest.InputStream = fileStream;
                    uploadRequest.Key = fileLocation;
                    uploadRequest.CannedACL = S3CannedACL.PublicRead;
                    uploadRequest.BucketName = bucketName;
                    await fileTransferUtility.UploadAsync(uploadRequest);
                }
            }
            catch (AmazonS3Exception e)
            {
                _log.LogError("Error encountered on server when writing an object. Message:'{0}'", e.Message);                
            }
            catch (Exception e)
            {
                _log.LogError("Unknown error encountered on server when writing an object. Message:'{0}'", e.Message);
            }

            return urlLocation;
        }

        public async Task<string> DeleteFileAsync(string keyName)
        {
            string urlLocation = null;

            try
            {                
                using (var client = new AmazonS3Client(RegionEndpoint.SAEast1))
                {
                    var bucketName = _configuration["Website:S3Bucket"];
                    var fileLocation = $"usuarios/fotos/{keyName}";
                    var resp = await client.DeleteObjectAsync(bucketName, fileLocation);
                }
            }
            catch (AmazonS3Exception e)
            {
                _log.LogError("Error encountered when deleting object. Message:'{0}'", e.Message);
                
            }
            catch (Exception e)
            {
                _log.LogError("Unknown error encountered on server when deleting object. Message:'{0}'", e.Message);
            }
            return urlLocation;
        }        

    }

}