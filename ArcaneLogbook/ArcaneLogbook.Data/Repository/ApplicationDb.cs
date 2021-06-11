using ArcaneLogbook.Data.Models;
using ArcaneLogbook.Data.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Data.Repository
{
    class ApplicationDb : ICampaignData
    {
        private readonly ApplicationDbContext db;

        public ApplicationDb(ApplicationDbContext db)
        {
            this.db = db;
        }

        public void Add(Campaign campaign)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Campaign> GetAll()
        {
            throw new NotImplementedException();
        }
    }
}
