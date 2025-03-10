using CarePair.Core.Models;
using CarePair.Core.Service;
using Microsoft.AspNetCore.Mvc;

namespace CarePair.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VolunteerController : ControllerBase
    {
        private readonly IVolunteerService _volunteerService;
        public VolunteerController(IVolunteerService volunteerService)
        {
            _volunteerService = volunteerService;
        }

        // GET: api/<VolunteerController>
        [HttpGet]
        public IEnumerable<Volunteer> Get()
        {
            return _volunteerService.GetVolunteerList();
        }

        // GET api/<VolunteerController>/5
        [HttpGet("{id}")]
        public Volunteer GetById(int id)
        {
            return _volunteerService.GetVolunteerById(id);
        }

        // POST api/<VolunteerController>
        [HttpPost]
        public void Post(Volunteer volunteer)
        {
            _volunteerService.AddVolunteer(volunteer);
        }

        // PUT api/<VolunteerController>/5
        [HttpPut("{id}")]
        public void Put(Volunteer volunteer, int id)
        {
            _volunteerService.UpdateVolunteer(volunteer, id);
        }

        // DELETE api/<VolunteerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _volunteerService.DeleteVolunteer(id);
        }
    }
}
