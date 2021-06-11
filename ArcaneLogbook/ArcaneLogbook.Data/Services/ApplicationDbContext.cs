using ArcaneLogbook.Data.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Data.Services
{
    class ApplicationDbContext : DbContext
    {
        public DbSet<Campaign> Campaigns { get; set; }
    }
}
