
using CarePair.Core.Models;
using CarePair.Core.Service;
using Microsoft.AspNetCore.Mvc;

namespace CarePair.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimeController : ControllerBase
    {
        private readonly ITimeService _timeService;
        public TimeController(ITimeService timeService)
        {
            _timeService = timeService;
        }
        // GET: api/<TimeController>
        [HttpGet]
        public IEnumerable<Time> Get()
        {
            return _timeService.GetTimeList();
        }
        
        // GET api/<TimeController>/5
        [HttpGet("{id}")]
        public Time GetById(int id)
        {
            return _timeService.GetTimeById(id);
        }

        // POST api/<TimeController>
        [HttpPost("gfhjhgf")]
        public void Post(Time time)
        {
            _timeService.AddTime(time);
        }

        // PUT api/<TimeController>/5
        [HttpPut("{id}")]
        public void Put(Time time, int id)
        {
            _timeService.UpdateTime(time, id);
        }

        // DELETE api/<TimeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _timeService.DeleteTime(id);
        }
    }
}
