using CarePair.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarePair.Core.Models;


namespace CarePair.Core.Repositories
{
    public interface IMatchRepository
    {
        public void AddPendingMatch(PendingMatch match);
        public PendingMatch GetPendingMatch(int volunteerId, int patientId);
        public void RemovePendingMatch(int volunteerId, int patientId);
        public void ConfirmMatch(int volunteerId, int patientId, bool isVolunteer);
        public void MoveToActiveMatch(int volunteerId, int patientId);
        public void RemoveExpiredMatches();
        public List<ActiveMatch> GetAllActiveMatches();
        public void RemoveActiveMatch(int volunteerId, int patientId);
    }
}
