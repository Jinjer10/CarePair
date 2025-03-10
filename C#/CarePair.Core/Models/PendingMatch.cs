using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Core.Models
{
    public class PendingMatch
    {
        public int Id { get; set; }
        public int VolunteerId { get; set; }
        public int PatientId { get; set; }
        public DateTime MatchTime { get; set; }
        public bool VolunteerConfirmed { get; set; }
        public bool PatientConfirmed { get; set; }
    }
}
