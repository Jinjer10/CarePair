
﻿namespace CarePair.Core.Models
{
    public class Time
    {
        public int Id { get; set; }

        public DayOfWeek Day { get; set; }

        public TimeSpan StartTime { get; set; }
        public TimeSpan EndTime { get; set; }

    }
}
