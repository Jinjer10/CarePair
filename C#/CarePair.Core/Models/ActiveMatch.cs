using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Core.Models
{
    public class ActiveMatch
    {
        //שיבוצים פעילים?
        public int Id { get; set; }
        public int VolunteerId { get; set; }
        public int PatientId { get; set; }
        public DateTime MatchStartDate { get; set; }
    }
}
