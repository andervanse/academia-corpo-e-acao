using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace academia_corpo_e_acao
{
    public class AWSEmailSender : IEmailSender
    {
        private readonly IConfiguration _configuration;

        public ILogger _log { get; }

        public AWSEmailSender(IConfiguration configuration, ILoggerFactory logger)
        {
            _configuration = configuration;
            _log = logger.CreateLogger("AWSEmailSender");
        }

        public async Task<bool> SendEmailAsync(string email, string subject, string message)
        {
            String FROM = _configuration["AWS:SES:From"];
            String FROMNAME = _configuration["AWS:SES:FromName"];
            String SMTP_USERNAME = _configuration["AWS:SES:Username"];
            String SMTP_PASSWORD = _configuration["AWS:SES:Password"];
            String HOST = _configuration["AWS:SES:Host"];
            int PORT = int.Parse(_configuration["AWS:SES:Port"]);

            MailMessage msg = new MailMessage();
            msg.IsBodyHtml = true;
            msg.From = new MailAddress(FROM, FROMNAME);
            msg.To.Add(new MailAddress(email));
            msg.Subject = subject;
            msg.Body = message;

            // Create and configure a new SmtpClient
            SmtpClient client = new SmtpClient(HOST, PORT);
            client.Credentials = new NetworkCredential(SMTP_USERNAME, SMTP_PASSWORD);
            client.EnableSsl = true;

            try
            {
                client.Send(msg);
                return await Task.FromResult(true);
            }
            catch (Exception ex)
            {
                _log.LogError(ex.Message);
                return await Task.FromResult(false);
            }
            
        }
    }
}