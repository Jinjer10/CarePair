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
    public class TimeService: ITimeService
    {
        public readonly ITimeRepository _timeRepository;
        public TimeService(ITimeRepository timeRepository)
        {
           _timeRepository = timeRepository;
        }
        public List<Time> GetTimeList()
        {
            return _timeRepository.GetTimeList();
        }
        public void DeleteTime(int id)
        {
            _timeRepository.DeleteTime(id);
        }
        public void AddTime(Time time)
        {
            _timeRepository.AddTime(time);
        }
        public void UpdateTime(Time time,int id)
        {
            _timeRepository.UpdateTime(time,id);
        }
        public Time GetTimeById(int id)
        {
            return _timeRepository.GetTimeById(id);
        }
    }
}
