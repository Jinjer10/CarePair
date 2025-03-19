using CarePair.Core.DTOs;
using CarePair.Core.Models;
using CarePair.Core.Service;
using CarePair.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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

        // PUT api/<VolunteerController>/5
        [HttpPut("{id}")]
        public void Put(Volunteer volunteer, int id)
        {
            _volunteerService.UpdateVolunteer(volunteer, id);
        }

        // DELETE api/<VolunteerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _volunteerService.DeleteVolunteer(id);
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