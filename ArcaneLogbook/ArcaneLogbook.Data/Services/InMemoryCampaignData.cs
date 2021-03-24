using ArcaneLogbook.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ArcaneLogbook.Data.Services
{
    public class InMemoryCampaignData : ICampaignData
    {
        List<Campaign> campaigns;

        public InMemoryCampaignData()
        {
            campaigns = new List<Campaign>() {

                new Campaign { Id = 1, Name = "Candlekeep Mysteries"},
                new Campaign { Id = 2, Name = "Curse of Strahd" },
                new Campaign { Id = 3, Name = "Storm King's Thunder" }
            };
        }

        public IEnumerable<Campaign> GetAll()
        {
            return campaigns.OrderBy( r => r.Id);
        }
    }
}
