using ArcaneLogbook.Data.Services;
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
        private readonly InMemoryCampaignData _db;

        public CampaignsApiController()
        {
            _db = new InMemoryCampaignData();
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
