using ArcaneLogbook.Data.Models;
using ArcaneLogbook.Data.Repository;
using ArcaneLogbook.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ArcaneLogbook.Web.Controllers.Api
{
    [RoutePrefix("api/campaigns")]
    public class CampaignsApiController : ApiController
    {
        private readonly CampaignDB _db;

        public CampaignsApiController()
        {
            //_db = new CampaignService(new CampaignServiceContext());
            _db = new CampaignDB();
        }

        [HttpGet, Route("getcampaigns")]
        public HttpResponseMessage GetCampaigns()
        {

            try
            {
                var campaignList = _db.GetAll();


                return Request.CreateResponse(HttpStatusCode.OK, campaignList);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);
            }
        }
    }
}
