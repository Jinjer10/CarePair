using CarePair.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Core.DTOs
{
    public class PatientDto
    {
        public string FullName { get; set; }
        public double Age { get; set; }
        public string Phone { get; set; }

        // מידע כללי להצגה
        public string? Area { get; set; }
        public string? City { get; set; }
        public string? Hospitall { get; set; }
        public string? Ward { get; set; }

        // שדות Enum לצורך התאמות
        public string? Gender { get; set; }
        public string? Religiosity { get; set; }

        // רשימות של Enums
        public List<string> RequiredTimes { get; set; }
        public List<string> Language { get; set; }
        public List<string> LanguagePreference { get; set; }
        public List<string> Interests { get; set; }
        public List<string> GenderPreference { get; set; }
        public List<string> ReligiosityPreference { get; set; }
        public List<string> AgePreference { get; set; }

        public string AgeGroup { get; set; }
    }
}