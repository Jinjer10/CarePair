using CarePair.API.Models;
using CarePair.Core.Service;
using CarePair.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
 // jwt ===============================================================================
namespace CarePair.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public readonly IPatientService _patientService;
        public AuthController(IConfiguration configuration, IPatientService patientService)
        {
            _configuration = configuration;
            _patientService = patientService;
        }

        [HttpPost]
        public IActionResult Login([FromBody] PatientPostModel loginModel)
        {
            var patient = _patientService.GetPatientList().FirstOrDefault(x => x.Email == loginModel.Email && x.Password == loginModel.Password);
            Console.WriteLine(patient);//===========================
            if (patient == null)
            {
                Console.WriteLine("patient == null");//=================
                return NotFound("user not found");
            }
            Console.WriteLine("PatientId: " + patient.Id);//===================
            var claims = new List<Claim>(){
                new Claim(ClaimTypes.Name, "string"),
                new Claim("PatientId", patient.Id.ToString())
            }; 
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("JWT:Key")));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokeOptions = new JwtSecurityToken(
                            issuer: _configuration.GetValue<string>("JWT:Issuer"),
                            audience: _configuration.GetValue<string>("JWT:Audience"),
                            claims: claims,
                            expires: DateTime.Now.AddMinutes(6),
            signingCredentials: signinCredentials
                        );
            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return Ok(new { Token = tokenString });//token,  להחזיר את המשתמש הממויין
        }
    }
}
