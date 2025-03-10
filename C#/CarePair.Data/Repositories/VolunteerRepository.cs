using CarePair.Core.Models;
using CarePair.Core.Repositories;
using CarePair.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Data.Repositories
{
    public class VolunteerRepository : IVolunteerRepository
    {
        private readonly DataContext _context;

        public VolunteerRepository(DataContext context)
        {
            _context = context;
        }



        public List<Volunteer> GetVolunteerList()
        {
            return _context.Volunteer.ToList();
        }

        public void DeleteVolunteer(int id)
        {
            var volunteer = _context.Volunteer.Find(id);
            _context.Remove(volunteer);
            _context.SaveChanges();
        }

        public void AddVolunteer(Volunteer volunteer)
        {
            _context.Volunteer.Add(volunteer);
            _context.SaveChanges();
        }

        public void UpdateVolunteer(Volunteer volunteer, int id)
        {
            var v = _context.Volunteer.FirstOrDefault(i => i.Id == id);
            if (v != null)
            {
                if (volunteer.FullName != null)
                {
                    v.FullName = volunteer.FullName;
                }
                if (volunteer.AvailableTimes != null)
                {
                    v.AvailableTimes = volunteer.AvailableTimes;
                }
                if (volunteer.Area != null)
                {
                    v.Area = volunteer.Area;
                }
                if (volunteer.Phone != null)
                {
                    v.Phone = volunteer.Phone;
                }
                if(volunteer.Language != null)
                {
                    v.Language = volunteer.Language;
                }
                if(volunteer.ExtraDetailse != null)
                {
                    v.ExtraDetailse = volunteer.ExtraDetailse;
                }

                // העדפות
                if (volunteer.LanguagePreference != null)
                {
                    v.LanguagePreference = volunteer.LanguagePreference;
                }
                if (volunteer.Interests != null)
                {
                    v.Interests = volunteer.Interests;
                }
                if (volunteer.GenderPreference != null)
                {
                    v.GenderPreference = volunteer.GenderPreference;
                }
                //if (volunteer.AgePreference != 0)
                //{
                //    v.AgePreference = volunteer.AgePreference;
                //}
                if (volunteer.ReligiosityPreference != null)
                {
                    v.ReligiosityPreference = volunteer.ReligiosityPreference;
                }
                if (volunteer.WardPreference != null)
                {
                    v.WardPreference = volunteer.WardPreference;
                }


                _context.Volunteer.Update(v);
                _context.SaveChanges();
            }
        }

        public Volunteer GetVolunteerById(int id)
        {
            var v = _context.Volunteer.FirstOrDefault(i => i.Id == id);
            return v;
        }
    }
}
