using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using ArcaneLogbook.Data.Models;

namespace ArcaneLogbook.Web.Api
{
    public class BaseApiController : ApiController
    {
        private User _user;

        public User LoginUser
        {
            get
            {
                return _user;
            }
        }
    }
}