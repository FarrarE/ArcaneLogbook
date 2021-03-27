using ArcaneLogbook.Data.Models;
using ArcaneLogbook.Data.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ArcaneLogbook.Web.Api
{
    public class CampaignsController : ApiController
    {
        private readonly ICampaignData db;
        public CampaignsController()
        {
            db = new InMemoryCampaignData();
        }

        public IEnumerable<Campaign> Get()
        {
            var model = db.GetAll();
            return model;
        }
    }
}
