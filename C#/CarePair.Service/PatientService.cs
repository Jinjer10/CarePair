
//﻿using CarePair.Core.DTOs;

//using CarePair.Core.Models;
//using CarePair.Core.Repositories;
//using CarePair.Core.Service;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace CarePair.Service
//{
//    public class PatientService : IPatientService
//    {
//        public readonly IPatientRepository _patientRepository;

//        public PatientService(IPatientRepository patientRepository)
//        {
//            _patientRepository = patientRepository;
//        }

//        public List<Patient> GetPatientList()
//        {
//            return _patientRepository.GetPatientList();
//        }

//        public void DeletePatient(int id)
//        {
//            _patientRepository.DeletePatient(id);
//        }

//        public void AddPatient(Patient patient)
//        {
//            _patientRepository.AddPatient(patient);
//        }

//        public void UpdatePatient(Patient patient, int id)
//        {
//            _patientRepository.UpdatePatient(patient, id);
//        }

////        }
//    }
//}

using CarePair.Core.DTOs;
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
    public class PatientService : IPatientService
    {
        public readonly IPatientRepository _patientRepository;

        public PatientService(IPatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public List<Patient> GetPatientList()
        {
            return _patientRepository.GetPatientList();
        }

        public void DeletePatient(int id)
        {
            _patientRepository.DeletePatient(id);
        }

        public void AddPatient(Patient patient)
        {
            _patientRepository.AddPatient(patient);
        }

        public void UpdatePatient(Patient patient, int id)
        {
            _patientRepository.UpdatePatient(patient, id);
        }

        //public PatientDto GetPatientById(int id)
        //{
        //    return _patientRepository.GetPatientById(id);
        //}

        public Patient GetPatientById(int id)
        {
            var patient = _patientRepository.GetPatientById(id);
            if (patient == null)
                return null;

            return patient;
        }
    }
}


