
//using CarePair.Core.Models;
//using CarePair.Core.Repositories;

//using CarePair.Core.DTOs;

//using CarePair.Service;
//using Microsoft.EntityFrameworkCore;

//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace CarePair.Data.Repositories
//{
//    public class PatientRepository : IPatientRepository
//    {
//        private readonly DataContext _context;
//        public PatientRepository(DataContext context)
//        {
//            _context = context;
//        }


//        public List<Patient> GetPatientList()
//        {
//            Console.WriteLine(_context.Patient);
//            return _context.Patient.ToList();
//        }
//        public void DeletePatient(int id)
//        {
//            var patient = _context.Patient.Find(id);
//            _context.Remove(patient);
//            _context.SaveChanges();
//        }

//        public void AddPatient(Patient patient)
//        {
//            _context.Patient.Add(patient);
//            _context.SaveChanges();
//        }

//        public void UpdatePatient(Patient patient, int id)
//        {
//            var p = _context.Patient.FirstOrDefault(i => i.Id == id);
//            if (p != null)
//            {
//                if (patient.FullName != null)
//                {
//                    p.FullName = patient.FullName;
//                }
//                if (patient.RequiredTimes != null)
//                {
//                    p.RequiredTimes = patient.RequiredTimes;
//                }
//                if (patient.Area != null)
//                {
//                    p.Area = patient.Area;
//                }
//                if (patient.Phone != null)
//                {
//                    p.Phone = patient.Phone;
//                }
//                if (patient.Hospitall != null)
//                {
//                    p.Hospitall = patient.Hospitall;
//                }
//                if (patient.Ward != null)
//                {
//                    p.Ward = patient.Ward;
//                }            
//                if (patient.Religiosity != null)
//                {
//                    p.Religiosity = patient.Religiosity;
//                }
//                if (patient.Language != null)
//                {
//                    p.Language = patient.Language;
//                }
//                if (patient.ExtraDetailse != null)
//                {
//                    p.ExtraDetailse = patient.ExtraDetailse;
//                }
//                //העדפות

//                if (patient.LanguagePreference != null)
//                {
//                    p.LanguagePreference = patient.LanguagePreference;
//                }
//                if (patient.Interests != null)
//                {
//                    p.Interests = patient.Interests;
//                }
//                if (patient.GenderPreference != null)
//                {
//                    p.GenderPreference = patient.GenderPreference;
//                }
//                //if (patient.AgePreference != 0)
//                //{
//                //    p.AgePreference = patient.AgePreference;
//                //}
//                if (patient.ReligiosityPreference != null)
//                {
//                    p.ReligiosityPreference = patient.ReligiosityPreference;
//                }


//                _context.Patient.Update(p);
//                _context.SaveChanges();
//            }
//        }
//        public Patient GetPatientById(int id)
//        {
//            var p = _context.Patient.FirstOrDefault(i => i.Id == id);
//            return p;
//        }
////    }
//}

using CarePair.Core.DTOs;
using CarePair.Core.Models;
using CarePair.Core.Repositories;
using CarePair.Service;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Data.Repositories
{
    public class PatientRepository : IPatientRepository
    {
        private readonly DataContext _context;
        public PatientRepository(DataContext context)
        {
            _context = context;
        }


        public List<Patient> GetPatientList()
        {
            Console.WriteLine(_context.Patient);
            return _context.Patient.ToList();
        }
        public void DeletePatient(int id)
        {
            var patient = _context.Patient.Find(id);
            _context.Remove(patient);
            _context.SaveChanges();
        }

        public void AddPatient(Patient patient)
        {
            _context.Patient.Add(patient);
            _context.SaveChanges();
        }

        public void UpdatePatient(Patient patient, int id)
        {
            var p = _context.Patient.FirstOrDefault(i => i.Id == id);
            if (p != null)
            {
                if (patient.FullName != null)
                {
                    p.FullName = patient.FullName;
                }
                if (patient.RequiredTimes != null)
                {
                    p.RequiredTimes = patient.RequiredTimes;
                }
                if (patient.Area != null)
                {
                    p.Area = patient.Area;
                }
                if (patient.Phone != null)
                {
                    p.Phone = patient.Phone;
                }
                if (patient.Hospitall != null)
                {
                    p.Hospitall = patient.Hospitall;
                }
                if (patient.Ward != null)
                {
                    p.Ward = patient.Ward;
                }
                if (patient.Religiosity != null)
                {
                    p.Religiosity = patient.Religiosity;
                }
                if (patient.Language != null)
                {
                    p.Language = patient.Language;
                }
                if (patient.ExtraDetailse != null)
                {
                    p.ExtraDetailse = patient.ExtraDetailse;
                }
                //      

                if (patient.LanguagePreference != null)
                {
                    p.LanguagePreference = patient.LanguagePreference;
                }
                if (patient.Interests != null)
                {
                    p.Interests = patient.Interests;
                }
                if (patient.GenderPreference != null)
                {
                    p.GenderPreference = patient.GenderPreference;
                }
                //if (patient.AgePreference != 0)
                //{
                //    p.AgePreference = patient.AgePreference;
                //}
                if (patient.ReligiosityPreference != null)
                {
                    p.ReligiosityPreference = patient.ReligiosityPreference;
                }


                _context.Patient.Update(p);
                _context.SaveChanges();
            }
        }
        public Patient GetPatientById(int id)
        {
            var p = _context.Patient.FirstOrDefault(i => i.Id == id);
            return p;
        }
        //public PatientDto GetPatientById(int id)
        //{
        //    var patient = _context.Patient
        //        .Include(p => p.Area)        //            ,                            
        //        .Include(p => p.Hospitall)   //   " 
        //        .Include(p => p.RequiredTimes) //           
        //        .FirstOrDefault(p => p.Id == id);

        //    if (patient == null)
        //        return null;

        //    return patient;
        //}

    }
}

