using ArcaneLogbook.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ArcaneLogbook.Web.Models
{
    public class CampaignsViewModel
    {
        public IEnumerable<Campaign> Campaigns { get; set; }
        public string Name { get; set; }
        public string Edition { get; set; }
    }
}