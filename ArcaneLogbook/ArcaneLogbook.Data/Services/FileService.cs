using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ArcaneLogbook.Data.Repository;

namespace ArcaneLogbook.Data.Services
{
    public class FileService
    {
        private readonly FileDb _fileDb;
        private readonly string _connectionString;

        private FileService(FileDb fileDb, string connectionString)
        {
            _fileDb = fileDb;
            _connectionString = connectionString;
        }

        public static FileService Create(FileDb fileDb, string connectionString)
        {
            return new FileService(fileDb, connectionString);
        }
    }
}
