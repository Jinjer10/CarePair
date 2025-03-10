//using CarePair.Service;
//using Microsoft.AspNetCore.Mvc;
//using CarePair.API.Models;  


//namespace CarePair.API.Controllers
//{

//    [ApiController]
//    [Route("api/match")]
//    public class MatchController : ControllerBase
//    {
//        private readonly MatchingService _matchingService;

//        public MatchController(MatchingService matchingService)
//        {
//            _matchingService = matchingService;
//        }

//        [HttpPost("confirm")]
//        public IActionResult ConfirmMatch([FromBody] ConfirmMatchRequest request)
//        {
//            bool success = _matchingService.ConfirmMatch(request.UserId, request.MatchedUserId, request.IsVolunteer);

//            if (success)
//            {
//                return Ok(new { message = "השיבוץ אושר בהצלחה!" });
//            }
//            return BadRequest(new { message = "השיבוץ ממתין לאישור הצד השני." });
//        }

//        [HttpPost("remove-expired")]
//        public IActionResult RemoveExpiredMatches()
//        {
//            _matchingService.RemoveExpiredMatches();
//            return Ok(new { message = "שיבוצים שפגו תוקף הוסרו." });
//        }

//        [HttpPost("reset-monthly")]
//        public IActionResult ResetMonthlyMatches()
//        {
//            _matchingService.ResetMonthlyMatches();
//            return Ok(new { message = "השיבוצים אופסו לחודש החדש." });
//        }
//    }
//}

using CarePair.Service;
using CarePair.Core.Models; // הוסף את זה
using Microsoft.AspNetCore.Mvc;

namespace CarePair.API.Controllers
{
    [ApiController]
    [Route("api/match")]
    public class MatchController : ControllerBase
    {
        private readonly MatchingService _matchingService;

        public MatchController(MatchingService matchingService)
        {
            _matchingService = matchingService;
        }

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
            _matchingService.ResetMonthlyMatches();
            return Ok(new { message = "השיבוצים אופסו לחודש החדש." });
        }
    }
}