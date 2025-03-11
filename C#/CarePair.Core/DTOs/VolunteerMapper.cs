using CarePair.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Core.DTOs
{
    public class VolunteerMapper
    {
        public static VolunteerDto ToDto(Volunteer volunteer)
        {
            return new VolunteerDto
            {
                FullName = volunteer.FullName,
                Age = CalculateAge(volunteer.BirthDate),
                Phone = volunteer.Phone,
                Area = volunteer.Area?.ToString(),
                City = volunteer.City?.ToString(),

                Gender = volunteer.Gender?.ToString(),
                Religiosity = volunteer.Religiosity?.ToString(),

                Language = volunteer.Language.Select(l => l.ToString()).ToList(),
                LanguagePreference = volunteer.LanguagePreference.Select(l => l.ToString()).ToList(),
                Interests = volunteer.Interests.Select(i => i.ToString()).ToList(),
                GenderPreference = volunteer.GenderPreference.Select(g => g.ToString()).ToList(),
                ReligiosityPreference = volunteer.ReligiosityPreference.Select(r => r.ToString()).ToList(),
                AgePreference = volunteer.AgePreference.Select(a => a.ToString()).ToList(),

                AgeGroup = volunteer.AgeGroup.ToString()
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
