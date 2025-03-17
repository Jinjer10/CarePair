using CarePair.Core.Service;
using CarePair.API.Models;
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
            _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
            _patientService = patientService ?? throw new ArgumentNullException(nameof(patientService));
            _volunteerService = volunteerService ?? throw new ArgumentNullException(nameof(volunteerService));
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginModel loginModel)
        {
            if (loginModel == null || string.IsNullOrEmpty(loginModel.Email) || string.IsNullOrEmpty(loginModel.Password))
            {
                return BadRequest("Invalid login request");
            }

            // חיפוש מטופל
            var patient = _patientService.GetPatientList()
                .FirstOrDefault(x => x.Email == loginModel.Email && x.Password == loginModel.Password);

            // חיפוש מתנדב
            var volunteer = _volunteerService.GetVolunteerList()
                .FirstOrDefault(x => x.Email == loginModel.Email && x.Password == loginModel.Password);

            if (patient == null && volunteer == null)
            {
                return NotFound("User not found");
            }

            // יצירת claims לפי סוג המשתמש
            var claims = new List<Claim>();
            string userType;
            string userId;

            if (patient != null)
            {
                userType = "Patient";
                userId = patient.Id.ToString();
                claims.Add(new Claim("PatientId", userId));
            }
            else
            {
                userType = "Volunteer";
                userId = volunteer.Id.ToString();
                claims.Add(new Claim("VolunteerId", userId));
            }

            claims.Add(new Claim(ClaimTypes.Name, userType));

            // יצירת JWT
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Key"]));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var tokenOptions = new JwtSecurityToken(
                issuer: _configuration["JWT:Issuer"],
                audience: _configuration["JWT:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(300),
                signingCredentials: signinCredentials
            );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return Ok(new { Token = tokenString });
        }
    }
}