using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarePair.Core.Models;

namespace CarePair.Core.Service
{
    public interface IVolunteerService
    {
        public List<Volunteer> GetVolunteerList();
        public Volunteer GetVolunteerById(int id);
        public void AddVolunteer(Volunteer volunteer);
        public void UpdateVolunteer(Volunteer volunteer, int id);
        public void DeleteVolunteer(int id);

    }
}
