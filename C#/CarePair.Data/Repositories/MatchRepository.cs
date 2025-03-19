using CarePair.Core.Models;
using CarePair.Core.Repositories;
using CarePair.Data;
using Microsoft.EntityFrameworkCore;


namespace CarePair.Data
{
    public class MatchRepository : IMatchRepository
    {
        private readonly DataContext _context;

        public MatchRepository(DataContext context)
        {
            _context = context;
        }

        public void AddPendingMatch(PendingMatch match)
        {
            _context.PendingMatch.Add(match);
            _context.SaveChanges();
        }

        public PendingMatch GetPendingMatch(int volunteerId, int patientId)
        {
            return _context.PendingMatch
                .FirstOrDefault(m => m.VolunteerId == volunteerId && m.PatientId == patientId);
        }

        public void RemovePendingMatch(int volunteerId, int patientId)
        {
            var match = GetPendingMatch(volunteerId, patientId);
            if (match != null)
            {
                _context.PendingMatch.Remove(match);
                _context.SaveChanges();
            }
        }

        public void ConfirmMatch(int volunteerId, int patientId, bool isVolunteer)
        {
            var match = GetPendingMatch(volunteerId, patientId);
            if (match != null)
            {
                if (isVolunteer)
                {
                    match.VolunteerConfirmed = true;
                }
                else
                {
                    match.PatientConfirmed = true;
                }
                _context.SaveChanges();
            }
        }

        public void MoveToActiveMatch(int volunteerId, int patientId)
        {
            var activeMatch = new ActiveMatch { VolunteerId = volunteerId, PatientId = patientId };
            _context.ActiveMatch.Add(activeMatch);
            _context.SaveChanges();
        }

        public void RemoveExpiredMatches()
        {
            var expired = _context.PendingMatch.Where(m => m.MatchTime < DateTime.Now);
            _context.PendingMatch.RemoveRange(expired);
            _context.SaveChanges();
        }

        public List<ActiveMatch> GetAllActiveMatches()
        {
            return _context.ActiveMatch.ToList();
        }

        public void RemoveActiveMatch(int volunteerId, int patientId)
        {
            var match = _context.ActiveMatch
                .FirstOrDefault(m => m.VolunteerId == volunteerId && m.PatientId == patientId);
            if (match != null)
            {
                _context.ActiveMatch.Remove(match);
                _context.SaveChanges();
            }
        }

        public PendingMatch GetPendingMatchByUserId(int userId)
        {
            return _context.PendingMatch
                .FirstOrDefault(m => m.VolunteerId == userId || m.PatientId == userId);
        }

        public ActiveMatch GetActiveMatchByUserId(int userId)
        {
            return _context.ActiveMatch
                .FirstOrDefault(m => m.VolunteerId == userId || m.PatientId == userId);
        }
    }
}