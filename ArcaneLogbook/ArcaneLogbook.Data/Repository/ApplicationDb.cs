using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Data.Repository
{
    class ApplicationDb
    {
        private readonly string _connectionString;

        private ApplicationDb(string connectionString)
        {
            _connectionString = connectionString;
        }

        public static ApplicationDb Create(string connectionString)
        {
            return new ApplicationDb(connectionString);
        }
    }
}
