
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
    public class PatientController : ControllerBase

    {
        private readonly IPatientService _patientService;
        private readonly IVolunteerService _volunteerService;
        private readonly IMatchingService _matchingService;
        public PatientController(
                 IMatchingService matchingService,
                 IVolunteerService volunteerService,
                 IPatientService patientService)
        {
            _matchingService = matchingService ?? throw new ArgumentNullException(nameof(matchingService));
            _volunteerService = volunteerService ?? throw new ArgumentNullException(nameof(volunteerService));
            _patientService = patientService ?? throw new ArgumentNullException(nameof(patientService));
        }


        [Authorize]
        [HttpGet("me")]
        public ActionResult<PatientDto> GetById()
        {
            var idString = User.FindFirst("PatientId")?.Value;


            if (!int.TryParse(idString, out int id))
            {
                return BadRequest("Invalid user ID.");
            }

            var patient = _patientService.GetPatientById(id);
            if (patient == null)
                return NotFound();

            var dto = PatientMapper.ToDto(patient);
            return Ok(dto);
        }
        // GET: api/<PatientController>
        [HttpGet]
        public IEnumerable<Patient> Get()
        {
            return _patientService.GetPatientList();
        }

        // GET api/<PatientController>/5
        //[HttpGet("{id}")]
        //public ActionResult<PatientDto> GetById(int id)
        //{
        //    var patient = _patientService.GetPatientById(id);
        //    if (patient == null)
        //        return NotFound();

        //    var dto = PatientMapper.ToDto(patient);
        //    return Ok(dto);
        //}

        //POST api/<PatientController>
        [HttpPost]
        public void Post(Patient patient)
        {
            _patientService.AddPatient(patient);
            
        }

        // PUT api/<patientController>/5
        [HttpPut("{id}")]
        public void Put(Patient patient, int id)
        {
            _patientService.UpdatePatient(patient, id);
        }

        // DELETE api/<PatientController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _patientService.DeletePatient(id);
        }

        // GET: api/patients/{patientId}/pending-match
        [HttpGet("{patientId}/pending-match")]
        public IActionResult GetPendingMatchForPatient(int patientId)
        {
            var matchedUserId = _matchingService.GetMatchedUserId(patientId);
            if (matchedUserId.HasValue)
            {
                var volunteer = VolunteerMapper.ToDto(_volunteerService.GetVolunteerById(matchedUserId.Value));
                return Ok(new { PatientId = patientId, MatchedVolunteer = volunteer });
            }
            return NotFound(new { Message = $"לא נמצא שיבוץ ממתין עבור המטופל {patientId}" });
        }

        // GET: api/patients/{patientId}/active-match
        [HttpGet("{patientId}/active-match")]
        public IActionResult GetActiveMatchForPatient(int patientId)
        {
            var matchedUserId = _matchingService.GetActiveMatchedUserId(patientId);
            if (matchedUserId.HasValue)
            {
                var volunteer = VolunteerMapper.ToDto(_volunteerService.GetVolunteerById(matchedUserId.Value));
                return Ok(new { PatientId = patientId, MatchedVolunteer = volunteer });
            }
            return NotFound(new { Message = $"לא נמצא שיבוץ פעיל עבור המטופל {patientId}" });
        }
    }
}
