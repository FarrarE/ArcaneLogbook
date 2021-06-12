using ArcaneLogbook.Data.Models;
using ArcaneLogbook.Data.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Data.Repository
{
    public class CampaignService : ICampaignData
    {
        private readonly CampaignServiceContext db;

        public CampaignService(CampaignServiceContext db)
        {
            this.db = db;
        }

        public void Add(Campaign campaign)
        {
            db.Campaigns.Add(campaign);
            db.SaveChanges();
        }

        public IEnumerable<Campaign> GetAll()
        {
            return db.Campaigns;
        }
    }
}
