////using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//namespace CarePair.API.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class PatientController: ControllerBase
//    {
//        private readonly IPatientService _patientService;
//        public PatientController(IPatientService patientService)
//        {
//            _patientService = patientService;
//        }
//        // GET: api/<PatientController>
//        [HttpGet]
//        [Authorize]
//        public IEnumerable<Patient> Get()
//        {
//            return _patientService.GetPatientList();
//        }

////        // POST api/<PatientController>
//        [HttpPost]
//        public void Post(Patient patient)
//        {
//            _patientService.AddPatient(patient);
//        }

//        // PUT api/<patientController>/5
//        [HttpPut("{id}")]
//        public void Put(Patient patient, int id)
//        {
//            _patientService.UpdatePatient(patient, id);
//        }

//        // DELETE api/<PatientController>/5
//        [HttpDelete("{id}")]
//        public void Delete(int id)
//        {
//            _patientService.DeletePatient(id);
//        }
//    }
//}
using CarePair.Core.DTOs;
using CarePair.Core.Models;
using CarePair.Core.Service;
using CarePair.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CarePair.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly IPatientService _patientService;
        public PatientController(IPatientService patientService)
        {
            _patientService = patientService;
        }

        // GET: api/<PatientController>
        [HttpGet]
        [Authorize]
        public IEnumerable<Patient> Get()
        {
            return _patientService.GetPatientList();
        }

        // GET api/<PatientController>/5
        [HttpGet("{id}")]
        public ActionResult<PatientDto> GetById(int id)
        {
            var patient = _patientService.GetPatientById(id);
            if (patient == null)
                return NotFound();

            var dto = PatientMapper.ToDto(patient);
            return Ok(dto);
        }

        // POST api/<PatientController>
        [HttpPost]
        public void Post(Patient patient)
        {
            _patientService.AddPatient(patient);
        }

        // PUT api/<patientController>/5
        [HttpPut("{id}")]
        public void Put(Patient patient, int id)
        {
            _patientService.UpdatePatient(patient, id);
        }

        // DELETE api/<PatientController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _patientService.DeletePatient(id);
        }
    }
}
