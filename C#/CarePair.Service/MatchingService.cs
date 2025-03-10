//using CarePair.Core.Models;
//using CarePair.Core.Repositories;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace CarePair.Service
//{
//    public class MatchingService
//    {
//        private readonly IMatchRepository _matchRepository;

//        public MatchingService(IMatchRepository matchRepository)
//        {
//            _matchRepository = matchRepository;
//        }

//        public bool ConfirmMatch(int userId, int matchedUserId, bool isVolunteer)
//        {
//            var match = _matchRepository.GetPendingMatch(userId, matchedUserId);
//            if (match == null)
//            {
//                return false;
//            }

//            if (isVolunteer)
//            {
//                match.VolunteerConfirmed = true;
//            }
//            else
//            {
//                match.PatientConfirmed = true;
//            }

//            if (match.VolunteerConfirmed && match.PatientConfirmed)
//            {
//                _matchRepository.MoveToActiveMatch(match.VolunteerId, match.PatientId);
//                return true;
//            }

//            return false;
//        }

//        public void RemoveExpiredMatches()
//        {
//            _matchRepository.RemoveExpiredMatches();
//        }

//        public void ResetMonthlyMatches()
//        {
//            List<ActiveMatch> matches = _matchRepository.GetAllActiveMatches();

//            foreach (var match in matches)
//            {
//                _matchRepository.RemoveActiveMatch(match.VolunteerId, match.PatientId);
//            }
//        }
//    }
//}
using CarePair.Core.Models;
using CarePair.Core.Repositories;

namespace CarePair.Service
{
    public class MatchingService
    {
        private readonly IMatchRepository _matchRepository;

        public MatchingService(IMatchRepository matchRepository)
        {
            _matchRepository = matchRepository;
        }

        public bool ConfirmMatch(int userId, int matchedUserId, bool isVolunteer)
        {
            // קביעת מי המתנדב ומי המטופל לפי isVolunteer
            int volunteerId = isVolunteer ? userId : matchedUserId;
            int patientId = isVolunteer ? matchedUserId : userId;

            var match = _matchRepository.GetPendingMatch(volunteerId, patientId);
            if (match == null)
            {
                return false;
            }

            _matchRepository.ConfirmMatch(volunteerId, patientId, isVolunteer);

            if (match.VolunteerConfirmed && match.PatientConfirmed)
            {
                _matchRepository.MoveToActiveMatch(volunteerId, patientId);
                _matchRepository.RemovePendingMatch(volunteerId, patientId); // הסר את ההתאמה הממתינה
                return true;
            }

            return false;
        }

        public void RemoveExpiredMatches()
        {
            _matchRepository.RemoveExpiredMatches();
        }

        public void ResetMonthlyMatches()
        {
            List<ActiveMatch> matches = _matchRepository.GetAllActiveMatches();

            foreach (var match in matches)
            {
                _matchRepository.RemoveActiveMatch(match.VolunteerId, match.PatientId);
            }
        }
    }
}