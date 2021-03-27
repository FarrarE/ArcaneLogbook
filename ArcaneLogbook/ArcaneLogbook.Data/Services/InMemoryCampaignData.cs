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

                new Campaign { Id = 1, Name = "Candlekeep Mysteries", Edition = "5e"},
                new Campaign { Id = 2, Name = "Curse of Strahd", Edition = "5e"},
                new Campaign { Id = 3, Name = "Storm King's Thunder", Edition = "5e"}
            };
        }

        public IEnumerable<Campaign> GetAll()
        {
            return campaigns.OrderBy( r => r.Id);
        }
    }
}
