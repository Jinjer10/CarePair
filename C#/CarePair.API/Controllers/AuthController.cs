//using CarePair.API.Models;
//using CarePair.Core.Service;
//using CarePair.Service;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.IdentityModel.Tokens;
//using System.IdentityModel.Tokens.Jwt;
//using System.Security.Claims;
//using System.Text;
// // jwt ===============================================================================
//namespace CarePair.API.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class AuthController : ControllerBase
//    {
//        private readonly IConfiguration _configuration;
//        public readonly IPatientService _patientService;
//        public AuthController(IConfiguration configuration, IPatientService patientService,IVolunteerService volunteerService)
//        {
//            _configuration = configuration;
//            _patientService = patientService;
//        }

//        [HttpPost]
//        public IActionResult Login([FromBody] PatientPostModel loginModel)
//        {

//            var patient = _patientService.GetPatientList().FirstOrDefault(x => x.Email == loginModel.Email && x.Password == loginModel.Password);
//            Console.WriteLine($"Email: {loginModel.Email}, Password: {loginModel.Password}");

//            Console.WriteLine(patient);//===========================
//            if (patient == null)
//            {
//                Console.WriteLine("patient == null");//=================
//                return NotFound("user not found");
//            }
//            Console.WriteLine("PatientId: " + patient.Id);//===================
//            var claims = new List<Claim>(){
//                new Claim(ClaimTypes.Name, "string"),
//                new Claim("PatientId", patient.Id.ToString())
//            }; 
//            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("JWT:Key")));
//            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
//            var tokeOptions = new JwtSecurityToken(
//                            issuer: _configuration.GetValue<string>("JWT:Issuer"),
//                            audience: _configuration.GetValue<string>("JWT:Audience"),
//                            claims: claims,
//                            expires: DateTime.Now.AddMinutes(6),
//            signingCredentials: signinCredentials
//                        );
//            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
//            return Ok(new { Token = tokenString });//token,  להחזיר את המשתמש הממויין
//        }
//    }
//}
using CarePair.API.Models;
using CarePair.Core.Service;
using CarePair.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CarePair.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IPatientService _patientService;
        private readonly IVolunteerService _volunteerService;

        public AuthController(IConfiguration configuration, IPatientService patientService, IVolunteerService volunteerService)
        {
            _configuration = configuration;
            _patientService = patientService;
            _volunteerService = volunteerService;
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            // חיפוש מטופל
            var patient = _patientService.GetPatientList().FirstOrDefault(x => x.Email == loginModel.Email && x.Password == loginModel.Password);

            // חיפוש מתנדב
            var volunteer = _volunteerService.GetVolunteerList().FirstOrDefault(x => x.Email == loginModel.Email && x.Password == loginModel.Password);

            if (patient == null && volunteer == null)
            {
                return NotFound("User not found");
            }

            // יצירת claims לפי סוג המשתמש
            var claims = new List<Claim>();
            if (patient != null)
            {
                claims.Add(new Claim(ClaimTypes.Name, "Patient"));
                claims.Add(new Claim("PatientId", patient.Id.ToString()));
            }
            else if (volunteer != null)
            {
                claims.Add(new Claim(ClaimTypes.Name, "Volunteer"));
                claims.Add(new Claim("VolunteerId", volunteer.Id.ToString()));
            }

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

            return Ok(new { Token = tokenString });
        }
    }
}
