//using Microsoft.AspNetCore.Mvc;

//namespace CarePair.API.Controllers
//{
//        [ApiController]
//        [Route("api/enums")]
//        public class EnumsController : ControllerBase
//        {
//            [HttpGet("Interests")]
//            public IActionResult GetInterests()
//            {
//                var interests = EnumHelper.GetEnumValues<Interests>();
//                return Ok(interests);
//            }

//            [HttpGet("Religiosity")]
//            public IActionResult GetReligiosity()
//            {
//                var religiosity = EnumHelper.GetEnumValues<Religiosity>();
//                return Ok(religiosity);
//            }
//        [HttpGet("Gender")]
//        public IActionResult GetGender()
//        {
//            var gender = EnumHelper.GetEnumValues<Gender>();
//            return Ok(gender);
//        }
//        [HttpGet("Language")]
//        public IActionResult GetLanguage()
//        {
//            var language = EnumHelper.GetEnumValues<Language>();
//            return Ok(language);
//        }
//        [HttpGet("Area")]
//        public IActionResult GetArea()
//        {
//            var area = EnumHelper.GetEnumValues<Area>();
//            return Ok(area);
//        }
//        [HttpGet("City")]
//        public IActionResult GetCity()
//        {
//            var city = EnumHelper.GetEnumValues<City>();
//            return Ok(city);
//        }
//        [HttpGet("Hospital")]
//        public IActionResult GetHospital()
//        {
//            var hospital = EnumHelper.GetEnumValues<Hospital>();
//            return Ok(hospital);
//        }
//        [HttpGet("Ward")]
//        public IActionResult GetWard()
//        {
//            var ward = EnumHelper.GetEnumValues<Ward>();
//            return Ok(ward);
//        }
//        [HttpGet("AgeGroup")]
//        public IActionResult GetAgeGroup()
//        {
//            var ageGroup = EnumHelper.GetEnumValues<AgeGroup>();
//            return Ok(ageGroup);
//        }
//    }
//    }

using CarePair.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarePair.API.Controllers
{
    [ApiController]
    [Route("api/enums")]
    public class EnumsController : ControllerBase
    {
        [HttpGet("Interests")]
        public IActionResult GetInterests()
        {
            var interests = EnumHelper.GetEnumValues<Interests>();
            return Ok(interests);
        }

        [HttpGet("Religiosity")]
        public IActionResult GetReligiosity()
        {
            var religiosity = EnumHelper.GetEnumValues<Religiosity>();
            return Ok(religiosity);
        }
        [HttpGet("Gender")]
        public IActionResult GetGender()
        {
            var gender = EnumHelper.GetEnumValues<Gender>();
            return Ok(gender);
        }
        [HttpGet("Language")]
        public IActionResult GetLanguage()
        {
            var language = EnumHelper.GetEnumValues<Language>();
            return Ok(language);
        }
        [HttpGet("Area")]
        public IActionResult GetArea()
        {
            var area = EnumHelper.GetEnumValues<Area>();
            return Ok(area);
        }
        [HttpGet("City")]
        public IActionResult GetCity()
        {
            var city = EnumHelper.GetEnumValues<City>();
            return Ok(city);
        }
        [HttpGet("Hospital")]
        public IActionResult GetHospital()
        {
            var hospital = EnumHelper.GetEnumValues<Hospital>();
            return Ok(hospital);
        }
        [HttpGet("Ward")]
        public IActionResult GetWard()
        {
            var ward = EnumHelper.GetEnumValues<Ward>();
            return Ok(ward);
        }
        [HttpGet("AgeGroup")]
        public IActionResult GetAgeGroup()
        {
            var ageGroup = EnumHelper.GetEnumValues<AgeGroup>();
            return Ok(ageGroup);
        }
    }
}

