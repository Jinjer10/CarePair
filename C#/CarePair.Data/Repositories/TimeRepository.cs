using CarePair.Core.Models;
using CarePair.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Data.Repositories
{
    public class TimeRepository : ITimeRepository
    {
        private readonly DataContext _context;

        public TimeRepository(DataContext context)
        {
            _context = context;
        }



        public List<Time> GetTimeList()
        {
            return _context.Time.ToList();
        }

        public void DeleteTime(int id)
        {
            var time = _context.Time.Find(id);
            _context.Remove(time);
            _context.SaveChanges();
        }

        public void AddTime(Time time)
        {
            _context.Time.Add(time);
            _context.SaveChanges();
        }

        public void UpdateTime(Time time, int id)
        {
            var t = _context.Time.FirstOrDefault(i => i.Id == id);
            if (t != null)
            {
                if (time.Day != null)
                {
                    t.Day = time.Day;
                }
                if (time.StartTime != null)
                {
                    t.StartTime = time.StartTime;
                }
                if (time.EndTime != null)
                {
                    t.EndTime = time.EndTime;
                }
                _context.Time.Update(t);
                _context.SaveChanges();
            }
        }

        public Time GetTimeById(int id)
        {
            var t = _context.Time.FirstOrDefault(i => i.Id == id);
            return t;
        }
    }
}
