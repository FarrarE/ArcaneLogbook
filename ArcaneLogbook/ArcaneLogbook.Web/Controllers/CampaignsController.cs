using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ArcaneLogbook.Web.Controllers
{
    public class CampaignsController : Controller
    {
        public CampaignsController()
        {

        }
        // GET: Campaigns
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Campaign(string Id)
        {
            ViewBag.Id = Id;
            return View();
        }
    }
}