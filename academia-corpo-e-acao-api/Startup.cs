using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace academia_corpo_e_acao
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public static IConfiguration Configuration { get; private set; }

        // This method gets called by the runtime. Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            services.AddScoped<IEmailSender, ZohoEmailSender>();
            services.AddScoped<IEmailLoginConfirmation, EmailLoginConfirmation>();
            services.AddScoped<IUsuarioRepository, UsuarioRepository>();
            services.AddScoped<IPlanoTreinoRepository, PlanoTreinoRepository>();
            services.AddScoped<IAvaliacaoFisicaRepository, AvaliacaoFisicaRepository>();
            services.AddSingleton<IConfiguration>(x => Configuration);
            services.AddScoped<DynamoDbContext>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(opt => {
                        opt.TokenValidationParameters = new TokenValidationParameters {
                            ClockSkew = TimeSpan.FromHours(6),
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Token:Key"])),
                            ValidateAudience = true,
                            ValidAudience = Configuration["Token:Audience"],
                            ValidateIssuer = true,
                            ValidIssuer = Configuration["Token:Issuer"],
                            RequireSignedTokens = true,                            
                            RequireExpirationTime = true,
                            ValidateLifetime = true
                        };
                    });

            services.AddCors();

            services.AddMvc()
               .AddJsonOptions(options => {
                   options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
               });            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            Debug.WriteLine($"ValidIssuer.: { Configuration["Token:ValidIssuer"] }");
            Debug.WriteLine($"ValidAudience.: { Configuration["Token:Audience"] }");
            Debug.WriteLine($"Cors.: { Configuration["Website:CorsOrigin"] }");
            
            app.UseAuthentication();

            app.UseCors(builder =>
                builder.WithOrigins(Configuration["Website:CorsOrigin"])
                       .AllowAnyMethod()
                       .AllowAnyHeader());

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
