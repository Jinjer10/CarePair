using AutoMapper;
using CarePair.API.Models;
using CarePair.Core.Models;
using System.Runtime;

namespace CarePair.API.Mapping
{
    public class PostModelsMappingProfille:Profile
    {
         public PostModelsMappingProfille()
        {
            CreateMap<PatientPostModel, Patient>();
        }
    }
}
