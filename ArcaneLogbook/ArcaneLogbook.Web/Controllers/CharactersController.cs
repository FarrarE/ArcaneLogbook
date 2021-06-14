using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ArcaneLogbook.Web.Controllers
{
    public class CharactersController : Controller
    {
        // GET: Characters
        public ActionResult Index()
        {
            return View("PlayerCharacters");
        }

        public ActionResult NonPlayerCharacters()
        {
            return View();
        }
    }
}