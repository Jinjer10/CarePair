using CarePair.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Core.DTOs
{
    public class PatientDto
    {
        public string FullName { get; set; }
        public List<Time> Time { get; set; }
        public string Area { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public double Age { get; set; }
        public string Email { get; set; }
        public string Hospitall { get; set; }
    }
}
