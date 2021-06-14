using ArcaneLogbook.Data.Models;
using System.Data.Entity;

namespace ArcaneLogbook.Data.Services
{
    public class CampaignServiceContext : DbContext
    {
        public DbSet<Campaign> Campaigns { get; set; }
    }
}
