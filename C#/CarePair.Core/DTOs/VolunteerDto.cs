using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Core.DTOs
{
    public class VolunteerDto
    {
        public int Id { get; set; } // מזהה ייחודי
        public string FullName { get; set; }
        public double Age { get; set; }
        public string Phone { get; set; }
        public DateOnly BirthDate { get; set; }

        public string? ExtraDetailse { get; set; }

        // אובייקטים (enum או מחלקות) שמומרים מ-JSON
        public string? Area { get; set; }
        public string? City { get; set; }
        public string? Gender { get; set; }
        public string? Religiosity { get; set; }

        // רשימות
        public List<string> AvailableTimes { get; set; }
        public List<string> Language { get; set; }
        public List<string> LanguagePreference { get; set; }
        public List<string> Interests { get; set; }
        public List<string> GenderPreference { get; set; }
        public List<string> AgePreference { get; set; }
        public List<string> ReligiosityPreference { get; set; }
        public List<string> WardPreference { get; set; }

        public string AgeGroup { get; set; }
    }
}
