using AutoMapper;
using CarePair.Core.DTOs;
using CarePair.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Core.Mapping
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap <Patient, PatientDto>().ReverseMap();
        }

    }
}
