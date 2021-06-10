using ArcaneLogbook.Data.Models;
using ArcaneLogbook.Data.Services;
using ArcaneLogbook.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ArcaneLogbook.Web.Api
{
    public class CampaignsController : BaseApiController
    {
        private readonly ApplicationService _applicationService;

        public CampaignsController() : this(
            ApplicationService.Create(ApplicationDb.Create("connetion string"))
        ){ }

        public CampaignsController(ApplicationService applicationService)
        {
            _applicationService = applicationService;
        }
    }
}
