

using CarePair.Core.Repositories;
using CarePair.Core.Service;
using CarePair.Data.Repositories;
using CarePair.Data;
using CarePair.Service;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

//                -CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost4200", policy =>
    {
        policy.WithOrigins("http://localhost:4200")  //                -frontend    
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add authentication with JWT
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["JWT:Issuer"],
        ValidAudience = builder.Configuration["JWT:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"]))
    };
});

// Configure Swagger/OpenAPI with Bearer Authentication
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Description = "Bearer Authentication with JWT Token",
        Type = SecuritySchemeType.Http
    });

    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Id = "Bearer",
                    Type = ReferenceType.SecurityScheme
                }
            },
            new List<string>()
        }
    });
});

// Add scoped services for the application
builder.Services.AddScoped<IPatientService, PatientService>();
builder.Services.AddScoped<IPatientRepository, PatientRepository>();

builder.Services.AddScoped<ITimeService, TimeService>();
builder.Services.AddScoped<ITimeRepository, TimeRepository>();

builder.Services.AddScoped<IVolunteerService, VolunteerService>();
builder.Services.AddScoped<IVolunteerRepository, VolunteerRepository>();

builder.Services.AddScoped<IMatchRepository, MatchRepository>();
builder.Services.AddScoped<IMatchingService, MatchingService>();

// Configure the DbContext to use SQL Server
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlServer(@"Server=EBLAPTOP\SQLEXPRESS;Database=CarePair;TrustServerCertificate=True;Trusted_Connection=True"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//        -CORS
app.UseCors("AllowLocalhost4200");  //          -CORS    

// Use authentication and authorization
app.UseAuthentication();  // Add this to enable authentication
app.UseAuthorization();   // Add this to enable authorization

app.MapControllers();

app.Run();


