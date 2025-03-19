using CarePair.Core.DTOs;
using CarePair.Core.Models;
using CarePair.Core.Service;
using CarePair.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;

namespace CarePair.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VolunteerController : ControllerBase
    {
        private readonly IVolunteerService _volunteerService;
        private readonly IPatientService _patientService;
        private readonly IMatchingService _matchingService;

        public VolunteerController(
            IMatchingService matchingService,
            IVolunteerService volunteerService,
            IPatientService patientService)
        {
            _matchingService = matchingService ?? throw new ArgumentNullException(nameof(matchingService));
            _volunteerService = volunteerService ?? throw new ArgumentNullException(nameof(volunteerService));
            _patientService = patientService ?? throw new ArgumentNullException(nameof(patientService));
        }
        //public VolunteerController(IVolunteerService volunteerService)
        //{
        //    _volunteerService = volunteerService;
        //}

        // GET: api/<VolunteerController>
        [HttpGet]
        public IEnumerable<Volunteer> Get()
        {
            return _volunteerService.GetVolunteerList();
        }
        [Authorize]
        [HttpGet("me")]
        public ActionResult<VolunteerDto> GetById()
        {
            var idString = User.FindFirst("VolunteerId")?.Value;


            if (!int.TryParse(idString, out int id))
            {
                return BadRequest("Invalid user ID.");
            }

            var volunteer = _volunteerService.GetVolunteerById(id);
            if (volunteer == null)
                return NotFound();

            var dto = VolunteerMapper.ToDto(volunteer);
            return Ok(dto);
        }
        //// GET api/<VolunteerController>/5
        //[HttpGet("{id}")]
        //public ActionResult<VolunteerDto> GetById(int id)
        //{
        //    var volunteer = _volunteerService.GetVolunteerById(id);
        //    if (volunteer == null)
        //        return NotFound();

        //    var dto = VolunteerMapper.ToDto(volunteer);
        //    return Ok(dto);
        //}

        // POST api/<VolunteerController>
        [HttpPost]
        public void Post(Volunteer volunteer)
        {
            _volunteerService.AddVolunteer(volunteer);
        }

        //// PUT api/<VolunteerController>/5
        //[HttpPut("{id}")]
        //public void Put(Volunteer volunteer, int id)
        //{
        //    _volunteerService.UpdateVolunteer(volunteer, id);
        //}

        // PUT api/volunteer/me
        [HttpPut("me")]
        public IActionResult UpdateMe([FromBody] Volunteer volunteer)
        {
            // שליפת ה-ID של המתנדב מהטוקן
            var token = HttpContext.Request.Headers["Authorization"].ToString().Replace("Bearer ", "");
            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);
            var volunteerIdClaim = jwtToken.Claims.FirstOrDefault(c => c.Type == "VolunteerId");

            if (volunteerIdClaim == null)
            {
                return Unauthorized("לא נמצא VolunteerId בטוקן");
            }

            int volunteerId = int.Parse(volunteerIdClaim.Value);

            try
            {
                // עדכון המתנדב בשרת
                _volunteerService.UpdateVolunteer(volunteer, volunteerId);
                return Ok("הפרטים עודכנו בהצלחה");
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "שגיאה בעדכון הפרטים: " + ex.Message });
            }
        }

        //// DELETE api/<VolunteerController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //    _volunteerService.DeleteVolunteer(id);
        //}

        [HttpDelete("me")]
        [Authorize] // דורש טוקן תקף
        public IActionResult Delete()
        {
            // שליפת ה-ID מהטוקן
            var token = Request.Headers["Authorization"].ToString().Replace("Bearer ", "");
            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);
            var volunteerIdClaim = jwtToken.Claims.FirstOrDefault(c => c.Type == "VolunteerId");

            if (volunteerIdClaim == null)
            {
                return Unauthorized("טוקן לא תקף או חסר VolunteerId");
            }

            int volunteerId = int.Parse(volunteerIdClaim.Value);
            _volunteerService.DeleteVolunteer(volunteerId);
            return Ok(new { message = "חשבון נמחק בהצלחה" }); // החזרת JSON
        }

        // GET: api/volunteers/{volunteerId}/pending-match
        [HttpGet("{volunteerId}/pending-match")]
        public IActionResult GetPendingMatchForVolunteer(int volunteerId)
        {
            var matchedUserId = _matchingService.GetMatchedUserId(volunteerId);
            if (matchedUserId.HasValue)
            {
                var patient =  PatientMapper.ToDto(_patientService.GetPatientById(matchedUserId.Value));
               
                return Ok(new { VolunteerId = volunteerId, MatchedPatient = patient });
            }
            return NotFound(new { Message = $"לא נמצא שיבוץ ממתין עבור המתנדב {volunteerId}" });
        }

        // GET: api/volunteers/{volunteerId}/active-match
        [HttpGet("{volunteerId}/active-match")]
        public IActionResult GetActiveMatchForVolunteer(int volunteerId)
        {
            var matchedUserId = _matchingService.GetActiveMatchedUserId(volunteerId);
            if (matchedUserId.HasValue)
            {
                var patient = PatientMapper.ToDto(_patientService.GetPatientById(matchedUserId.Value));
                return Ok(new { VolunteerId = volunteerId, MatchedPatient = patient });
            }
            return NotFound(new { Message = $"לא נמצא שיבוץ פעיל עבור המתנדב {volunteerId}" });
        }
    }
}