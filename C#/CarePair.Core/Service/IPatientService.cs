using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarePair.Core.Models;

namespace CarePair.Core.Service
{
    public interface IPatientService
    {
        public List<Patient> GetPatientList();
        public Patient GetPatientById(int id);
        public void AddPatient(Patient patient);
        public void UpdatePatient(Patient patient, int id);
        public void DeletePatient(int id);
        //IEnumerable<Patient> GetAll();
    }
}
