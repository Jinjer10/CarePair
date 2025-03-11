using CarePair.Core.DTOs;
using CarePair.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Service
{
    // בתוך CarePair.Core.DTOs או בתיקייה ייעודית למיפויים
    public static class PatientMapper
    {
        public static PatientDto ToDto(Patient patient)
        {
            return new PatientDto
            {
                FullName = patient.FullName,
                Age = CalculateAge(patient.BirthDate),
                Phone = patient.Phone,
                Area = patient.Area.ToString(),
                City = patient.City.ToString(),
                Hospitall = patient.Hospitall.ToString(),
                Ward = patient.Ward.ToString(),
                Gender = patient.Gender?.ToString(),
                Religiosity = patient.Religiosity?.ToString(),
                RequiredTimes = patient.RequiredTimes.Select(t => t.ToString()).ToList(),
                Language = patient.Language.Select(l => l.ToString()).ToList(),
                LanguagePreference = patient.LanguagePreference.Select(l => l.ToString()).ToList(),
                Interests = patient.Interests.Select(i => i.ToString()).ToList(),
                GenderPreference = patient.GenderPreference.Select(g => g.ToString()).ToList(),
                ReligiosityPreference = patient.ReligiosityPreference.Select(r => r.ToString()).ToList(),
                AgePreference = patient.AgePreference.Select(a => a.ToString()).ToList(),
                AgeGroup = patient.AgeGroup.ToString()
            };
        }

        private static double CalculateAge(DateOnly birthDate)
        {
            var today = DateTime.Today;
            var birthDateTime = birthDate.ToDateTime(TimeOnly.MinValue);
            var age = today.Year - birthDateTime.Year;
            if (birthDateTime.Date > today.AddYears(-age)) age--;
            return age;
        }
    }

}
