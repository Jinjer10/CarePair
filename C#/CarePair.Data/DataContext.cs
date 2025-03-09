
﻿using CarePair.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace CarePair.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Patient> Patient { get; set; }
        public DbSet<Volunteer> Volunteer { get; set; }
        public DbSet<Time> Time { get; set; }
        public DataContext(DbContextOptions<DataContext> options):base(options) 
        {}
    }
}