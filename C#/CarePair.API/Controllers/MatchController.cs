using CarePair.Core.Models; // הוסף את זה
using Microsoft.AspNetCore.Mvc;
using CarePair.Core.Service;



namespace CarePair.API.Controllers
{
   
    [ApiController]
    [Route("api/match/[controller]")]
    public class MatchController : ControllerBase
    {
        private readonly IMatchingService _matchingService;

        private readonly IPatientService _patientService;
        private readonly IVolunteerService _volunteerService;
        public MatchController(
       IMatchingService matchingService,
       IPatientService patientService,
       IVolunteerService volunteerService)
        {
            _matchingService = matchingService;
            _patientService = patientService;
            _volunteerService = volunteerService;
        }
        //// GET: api/matches/pending/{userId}
        //[HttpGet("pending/{userId}")]
        //public IActionResult GetPendingMatch(int userId)
        //{
        //    var matchedUserId = _matchingService.GetMatchedUserId(userId);

        //    if (matchedUserId.HasValue)
        //    {
        //        return Ok(new { UserId = userId, MatchedUserId = matchedUserId.Value });
        //    }

        //    return NotFound(new { Message = $"לא נמצא שיבוץ ממתין עבור המשתמש {userId}" });
        //}

        //// GET: api/matches/active/{userId}
        //[HttpGet("active/{userId}")]
        //public IActionResult GetActiveMatch(int userId)
        //{
        //    var matchedUserId = _matchingService.GetActiveMatchedUserId(userId);

        //    if (matchedUserId.HasValue)
        //    {
        //        return Ok(new { UserId = userId, MatchedUserId = matchedUserId.Value });
        //    }

        //    return NotFound(new { Message = $"לא נמצא שיבוץ פעיל עבור המשתמש {userId}" });
        //}
        [HttpPost("confirm")]
        public IActionResult ConfirmMatch([FromBody] ConfirmMatchRequest request)
        {
            bool success = _matchingService.ConfirmMatch(request.UserId, request.MatchedUserId, request.IsVolunteer);

            if (success)
            {
                return Ok(new { message = "השיבוץ אושר בהצלחה!" });
            }
            return BadRequest(new { message = "השיבוץ ממתין לאישור הצד השני." });
        }
        
        [HttpPost("remove-expired")]
        public IActionResult RemoveExpiredMatches()
        {
            _matchingService.RemoveExpiredMatches();
            return Ok(new { message = "שיבוצים שפגו תוקף הוסרו." });
        }

        [HttpPost("reset-monthly")]
        public IActionResult ResetMonthlyMatches()
        {

            //_matchingService.MatchVolunteersToPatients();
            _matchingService.ResetMonthlyMatches();
            return Ok(new { message = "השיבוצים אופסו לחודש החדש." });
        }
        [HttpPost("MatchVolunteersToPatients")]
        public IActionResult Match()
        {
            //List<Volunteer> volunteer = new LinkedList<>;
            //List<Patient> patient = new LinkedList<>;
            List <Volunteer> volunteer = _volunteerService.GetVolunteerList();
            List <Patient> patient = _patientService.GetPatientList();
           var matchResults= _matchingService.MatchVolunteersToPatients(volunteer, patient);
            return Ok(new
            {
                message = "השיבוצים בוצעו בהצלחה.",
                matches = matchResults
            });
        }
    }
}