using ArcaneLogbook.Data.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Data.Services
{
    public class CampaignServiceContext : DbContext
    {
        public DbSet<Campaign> Campaigns { get; set; }
    }
}
