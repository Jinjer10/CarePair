using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using CarePair.Core.DTOs;

using CarePair.Core.Models;

namespace CarePair.Core.Repositories
{
    public interface IPatientRepository
    {
        public List<Patient> GetPatientList();
        public Patient GetPatientById(int id);
        public void AddPatient(Patient patient);
        public void UpdatePatient(Patient patient, int id);
        public void DeletePatient(int id);
    }
}
