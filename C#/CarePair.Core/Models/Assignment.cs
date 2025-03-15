using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Core.Models
{
    public class Assignment
    {
        public int Id { get; set; }  // מזהה השיבוץ
        public int VolunteerId { get; set; }  // מזהה המתנדב
        public int PatientId { get; set; }  // מזהה החולה
        public DateTime AssignmentDate { get; set; }  // תאריך השיבוץ
        public double MatchScore { get; set; }  // ציון התאמה (ניקוד מהאלגוריתם)

        // קשרים ליישויות המתנדב והחולה (Navigation Properties)
        public Volunteer Volunteer { get; set; }
        public Patient Patient { get; set; }
    }

}
