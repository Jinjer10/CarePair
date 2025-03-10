using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;

namespace CarePair.Core.Models
{
    public class Volunteer
    {
        public int Id { get; set; }

        public string FullName { get; set; }
        public string Phone { get; set; }
        public DateOnly BirthDate { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        //public Religiosity Religiosity { get; set; }
        public string ExtraDetailse { get; set; }

        // ����� �-string
        public string AreaJson { get; set; }
        [NotMapped]
        public Area? Area  // ��� ������� �-Nullable �� ��� ����� null
        {
            get => string.IsNullOrEmpty(AreaJson) ? null : JsonSerializer.Deserialize<Area>(AreaJson);
            set => AreaJson = JsonSerializer.Serialize(value);
        }

        public string CityJson { get; set; }
        [NotMapped]
        public City? City  // ��� ������� �-Nullable �� ��� ����� null
        {
            get => string.IsNullOrEmpty(CityJson) ? null : JsonSerializer.Deserialize<City>(CityJson);
            set => CityJson = JsonSerializer.Serialize(value);
        }

        public string GenderJson { get; set; }
        [NotMapped]
        public Gender? Gender  // ��� ������� �-Nullable �� ��� ����� null
        {
            get => string.IsNullOrEmpty(GenderJson) ? null : JsonSerializer.Deserialize<Gender>(GenderJson);
            set => GenderJson = JsonSerializer.Serialize(value);
        }


        // ���� ������
        public string AvailableTimesJson { get; set; }
        [NotMapped]
        public ICollection<Time> AvailableTimes
        {
            get => string.IsNullOrEmpty(AvailableTimesJson)
                ? new List<Time>()
                : JsonSerializer.Deserialize<ICollection<Time>>(AvailableTimesJson);
            set => AvailableTimesJson = JsonSerializer.Serialize(value);
        }
       
        // Religiosity as JSON
        public string ReligiosityJson { get; set; }
        [NotMapped]
        public Religiosity? Religiosity
        {
            get => string.IsNullOrEmpty(ReligiosityJson) ? null : JsonSerializer.Deserialize<Religiosity>(ReligiosityJson);
            set => ReligiosityJson = JsonSerializer.Serialize(value);
        }

        // ���� �������
        public string LanguageJson { get; set; }
        [NotMapped]
        public ICollection<Language> Language
        {
            get => string.IsNullOrEmpty(LanguageJson)
                ? new List<Language>()
                : JsonSerializer.Deserialize<ICollection<Language>>(LanguageJson);
            set => LanguageJson = JsonSerializer.Serialize(value);
        }

        // ������ ���
        public string LanguagePreferenceJson { get; set; }
        [NotMapped]
        public ICollection<Language> LanguagePreference
        {
            get => string.IsNullOrEmpty(LanguagePreferenceJson)
                ? new List<Language>()
                : JsonSerializer.Deserialize<ICollection<Language>>(LanguagePreferenceJson);
            set => LanguagePreferenceJson = JsonSerializer.Serialize(value);
        }

        // ����� �����
        public string InterestsJson { get; set; }
        [NotMapped]
        public ICollection<Interests> Interests
        {
            get => string.IsNullOrEmpty(InterestsJson)
                ? new List<Interests>()
                : JsonSerializer.Deserialize<ICollection<Interests>>(InterestsJson);
            set => InterestsJson = JsonSerializer.Serialize(value);
        }

        // ������ ����
        public string GenderPreferenceJson { get; set; }
        [NotMapped]
        public ICollection<Gender> GenderPreference
        {
            get => string.IsNullOrEmpty(GenderPreferenceJson)
                ? new List<Gender>()
                : JsonSerializer.Deserialize<ICollection<Gender>>(GenderPreferenceJson);
            set => GenderPreferenceJson = JsonSerializer.Serialize(value);
        }

        // ������ ���
        public string AgePreferenceJson { get; set; }
        [NotMapped]
        public ICollection<AgeGroup> AgePreference
        {
            get => string.IsNullOrEmpty(AgePreferenceJson)
                ? new List<AgeGroup>()
                : JsonSerializer.Deserialize<ICollection<AgeGroup>>(AgePreferenceJson);
            set => AgePreferenceJson = JsonSerializer.Serialize(value);
        }

        // ������ ��� �����
        public string ReligiosityPreferenceJson { get; set; }
        [NotMapped]
        public ICollection<Religiosity> ReligiosityPreference
        {
            get => string.IsNullOrEmpty(ReligiosityPreferenceJson)
                ? new List<Religiosity>()
                : JsonSerializer.Deserialize<ICollection<Religiosity>>(ReligiosityPreferenceJson);
            set => ReligiosityPreferenceJson = JsonSerializer.Serialize(value);
        }

        // ������ ������ (��� �����)
        public string WardPreferenceJson { get; set; }
        [NotMapped]
        public ICollection<Ward> WardPreference
        {
            get => string.IsNullOrEmpty(WardPreferenceJson)
                ? new List<Ward>()
                : JsonSerializer.Deserialize<ICollection<Ward>>(WardPreferenceJson);
            set => WardPreferenceJson = JsonSerializer.Serialize(value);
        }

        public AgeGroup AgeGroup
        {
            get
            {
                var age = DateTime.Today.Year - BirthDate.Year;
                if (DateTime.Today < new DateTime(DateTime.Today.Year, BirthDate.Month, BirthDate.Day))
                {
                    age--; // �� �� ���� �� ��� ������ ����
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
