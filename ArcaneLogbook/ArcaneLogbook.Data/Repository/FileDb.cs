using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Data.Repository
{
    public class FileDb
    {
        private readonly string _connectionString;

        private FileDb(string connectionString)
        {
            _connectionString = connectionString;
        }

        public static FileDb Create(string connectionString)
        {
            return new FileDb(connectionString);
        }
    }
}
