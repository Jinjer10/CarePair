using CarePair.Core.Models;
using System.Collections.Generic;

namespace CarePair.Core.Service
{
    public interface IMatchingService
    {
        bool ConfirmMatch(int userId, int matchedUserId, bool isVolunteer);
        void RemoveExpiredMatches();
        void ResetMonthlyMatches();
        int[] MatchVolunteersToPatients(List<Volunteer> volunteers, List<Patient> patients);
        int? GetMatchedUserId(int userId);
        int? GetActiveMatchedUserId(int userId);
    }
}
