using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarePair.Core.Models;

namespace CarePair.Core.Repositories
{
    public interface ITimeRepository
    {
        public List<Time> GetTimeList();
        public Time GetTimeById(int id);
        public void AddTime(Time time);
        public void UpdateTime(Time time, int id);
        public void DeleteTime(int id);
       
    }
}
