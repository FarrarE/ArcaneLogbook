using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ArcaneLogbook.Data.Repository;

namespace ArcaneLogbook.Data.Services
{
    public class ApplicationService
    {
        private readonly ApplicationDb _applicationDb;

        private ApplicationService(ApplicationDb applicationDb)
        {
            _applicationDb = applicationDb;
        }

        public static ApplicationService Create(ApplicationDb applicationdb)
        {
            return new ApplicationService(applicationdb);
        }


    }
}
