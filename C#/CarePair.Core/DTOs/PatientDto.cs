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
        // ���� �����
        public int Id { get; set; }
        public string FullName { get; set; }
        public double Age { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        // ���� ���� �����
        public string? Area { get; set; }       // ����� �-Enum Area
        public string? City { get; set; }       // ����� �-Enum City
        public string? Hospital { get; set; }   // ����� �-Enum Hospital (����� �� ������ ���� Hospitall)
        public string? Ward { get; set; }       // ����� �-Enum Ward

        // ���� Enum ����� ������
        public string? Gender { get; set; }     // ����� �-Enum Gender
        public string? Religiosity { get; set; } // ����� �-Enum Religiosity

        // ������ �� Enums
        public List<string> RequiredTimes { get; set; }  // ���� �-Time �-RequiredTimes ������ ����� ������
        public List<string> Language { get; set; }       // ����� �-Enum Language
        public List<string> LanguagePreference { get; set; } // ����� �-Enum Language
        public List<string> Interests { get; set; }      // ����� �-Enum Interests
        public List<string> GenderPreference { get; set; } // ����� �-Enum Gender
        public List<string> ReligiosityPreference { get; set; } // ����� �-Enum Religiosity
        public List<string> AgePreference { get; set; }  // ����� �-Enum AgeGroup

        public string AgeGroup { get; set; }  // ����� �-Enum AgeGroup
    }
}
