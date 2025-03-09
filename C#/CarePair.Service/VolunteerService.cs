using CarePair.Core.Models;
using CarePair.Core.Repositories;
using CarePair.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Service
{
    public class VolunteerService : IVolunteerService
    {
        public readonly IVolunteerRepository _volunteerRepository;
        public VolunteerService(IVolunteerRepository volunteerRepository)
        {
            _volunteerRepository = volunteerRepository;
        }
        public List<Volunteer> GetVolunteerList()
        {
            return _volunteerRepository.GetVolunteerList();
        }
        public void DeleteVolunteer(int id)
        {
            _volunteerRepository.DeleteVolunteer(id);
        }
        public void AddVolunteer(Volunteer volunteer)
        {
            _volunteerRepository.AddVolunteer(volunteer);
        }
        public void UpdateVolunteer(Volunteer volunteer, int id)
        {
            _volunteerRepository.UpdateVolunteer(volunteer, id);
        }
        public Volunteer GetVolunteerById(int id)
        {
            return _volunteerRepository.GetVolunteerById(id);
        }
    }
}
