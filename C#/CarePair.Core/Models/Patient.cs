using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;

namespace CarePair.Core.Models
{
    public class Patient
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string Phone { get; set; }
        public DateOnly BirthDate { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string ExtraDetailse { get; set; }

        // Area as JSON
        public string AreaJson { get; set; }
        [NotMapped]
        public Area? Area
        {
            get => string.IsNullOrEmpty(AreaJson) ? null : JsonSerializer.Deserialize<Area>(AreaJson);
            set => AreaJson = JsonSerializer.Serialize(value);
        }

        // City as JSON
        public string CityJson { get; set; }
        [NotMapped]
        public City? City
        {
            get => string.IsNullOrEmpty(CityJson) ? null : JsonSerializer.Deserialize<City>(CityJson);
            set => CityJson = JsonSerializer.Serialize(value);
        }

        // Gender as JSON
        public string GenderJson { get; set; }
        [NotMapped]
        public Gender? Gender
        {
            get => string.IsNullOrEmpty(GenderJson) ? null : JsonSerializer.Deserialize<Gender>(GenderJson);
            set => GenderJson = JsonSerializer.Serialize(value);
        }

        // Hospital as JSON
        public string HospitalJson { get; set; }
        [NotMapped]
        public Hospital? Hospitall
        {
            get => string.IsNullOrEmpty(HospitalJson) ? null : JsonSerializer.Deserialize<Hospital>(HospitalJson);
            set => HospitalJson = JsonSerializer.Serialize(value);
        }

        // Ward as JSON
        public string WardJson { get; set; }
        [NotMapped]
        public Ward? Ward
        {
            get => string.IsNullOrEmpty(WardJson) ? null : JsonSerializer.Deserialize<Ward>(WardJson);
            set => WardJson = JsonSerializer.Serialize(value);
        }

        // Religiosity as JSON
        public string ReligiosityJson { get; set; }
        [NotMapped]
        public Religiosity? Religiosity
        {
            get => string.IsNullOrEmpty(ReligiosityJson) ? null : JsonSerializer.Deserialize<Religiosity>(ReligiosityJson);
            set => ReligiosityJson = JsonSerializer.Serialize(value);
        }

        // Required Times as JSON
        public string RequiredTimesJson { get; set; }
        [NotMapped]
        public ICollection<Time> RequiredTimes
        {
            get => string.IsNullOrEmpty(RequiredTimesJson)
                ? new List<Time>()
                : JsonSerializer.Deserialize<ICollection<Time>>(RequiredTimesJson);
            set => RequiredTimesJson = JsonSerializer.Serialize(value);
        }

        // Languages as JSON
        public string LanguageJson { get; set; }
        [NotMapped]
        public ICollection<Language> Language
        {
            get => string.IsNullOrEmpty(LanguageJson)
                ? new List<Language>()
                : JsonSerializer.Deserialize<ICollection<Language>>(LanguageJson);
            set => LanguageJson = JsonSerializer.Serialize(value);
        }

        // Language Preference as JSON
        public string LanguagePreferenceJson { get; set; }
        [NotMapped]
        public ICollection<Language> LanguagePreference
        {
            get => string.IsNullOrEmpty(LanguagePreferenceJson)
                ? new List<Language>()
                : JsonSerializer.Deserialize<ICollection<Language>>(LanguagePreferenceJson);
            set => LanguagePreferenceJson = JsonSerializer.Serialize(value);
        }

        // Interests as JSON
        public string InterestsJson { get; set; }
        [NotMapped]
        public ICollection<Interests> Interests
        {
            get => string.IsNullOrEmpty(InterestsJson)
                ? new List<Interests>()
                : JsonSerializer.Deserialize<ICollection<Interests>>(InterestsJson);
            set => InterestsJson = JsonSerializer.Serialize(value);
        }

        // Gender Preference as JSON
        public string GenderPreferenceJson { get; set; }
        [NotMapped]
        public ICollection<Gender> GenderPreference
        {
            get => string.IsNullOrEmpty(GenderPreferenceJson)
                ? new List<Gender>()
                : JsonSerializer.Deserialize<ICollection<Gender>>(GenderPreferenceJson);
            set => GenderPreferenceJson = JsonSerializer.Serialize(value);
        }

        // Age Preference as JSON
        public string AgePreferenceJson { get; set; }
        [NotMapped]
        public ICollection<AgeGroup> AgePreference
        {
            get => string.IsNullOrEmpty(AgePreferenceJson)
                ? new List<AgeGroup>()
                : JsonSerializer.Deserialize<ICollection<AgeGroup>>(AgePreferenceJson);
            set => AgePreferenceJson = JsonSerializer.Serialize(value);
        }

        // Religiosity Preference as JSON
        public string ReligiosityPreferenceJson { get; set; }
        [NotMapped]
        public ICollection<Religiosity> ReligiosityPreference
        {
            get => string.IsNullOrEmpty(ReligiosityPreferenceJson)
                ? new List<Religiosity>()
                : JsonSerializer.Deserialize<ICollection<Religiosity>>(ReligiosityPreferenceJson);
            set => ReligiosityPreferenceJson = JsonSerializer.Serialize(value);
        }

        public AgeGroup AgeGroup
        {
            get
            {
                var age = DateTime.Today.Year - BirthDate.Year;
                if (DateTime.Today < new DateTime(DateTime.Today.Year, BirthDate.Month, BirthDate.Day))
                {
                    age--; // אם לא עברו את יום ההולדת השנה
                }

                if (age <= 12)
                    return AgeGroup.Children;
                else if (age <= 18)
                    return AgeGroup.Teenagers;
                else if (age <= 30)
                    return AgeGroup.YoungAdults;
                else if (age <= 60)
                    return AgeGroup.Adults;
                else
                    return AgeGroup.Elderly;
            }
        }
    }
}