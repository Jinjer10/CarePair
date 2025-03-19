//using CarePair.Core.Models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace CarePair.Core.DTOs
//{
//    public class PatientDto
//    {
//        public string FullName { get; set; }
//using CarePair.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace CarePair.Core.DTOs
{
    public class PatientDto
    {
        // מידע בסיסי
        public int Id { get; set; }
        public string FullName { get; set; }
        public double Age { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        // מידע כללי להצגה
        public string? Area { get; set; }       // ישתמש ב-Enum Area
        public string? City { get; set; }       // ישתמש ב-Enum City
        public string? Hospital { get; set; }   // ישתמש ב-Enum Hospital (תיקון שם משגיאת כתיב Hospitall)
        public string? Ward { get; set; }       // ישתמש ב-Enum Ward

        // שדות Enum לצורך התאמות
        public string? Gender { get; set; }     // ישתמש ב-Enum Gender
        public string? Religiosity { get; set; } // ישתמש ב-Enum Religiosity

        // רשימות של Enums
        public List<string> RequiredTimes { get; set; }  // שונה מ-Time ל-RequiredTimes להתאמה לגרסה השנייה
        public List<string> Language { get; set; }       // ישתמש ב-Enum Language
        public List<string> LanguagePreference { get; set; } // ישתמש ב-Enum Language
        public List<string> Interests { get; set; }      // ישתמש ב-Enum Interests
        public List<string> GenderPreference { get; set; } // ישתמש ב-Enum Gender
        public List<string> ReligiosityPreference { get; set; } // ישתמש ב-Enum Religiosity
        public List<string> AgePreference { get; set; }  // ישתמש ב-Enum AgeGroup

        public string AgeGroup { get; set; }  // ישתמש ב-Enum AgeGroup
    }
}
