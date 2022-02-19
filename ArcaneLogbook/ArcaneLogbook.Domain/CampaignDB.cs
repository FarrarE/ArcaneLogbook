using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Domain
{
    public class CampaignDB
    {
        private readonly string _connectionString = "Data Source=DESKTOP-7IN9NUJ;Initial Catalog=ArcaneLogbook;Integrated Security=True";

        public string GetAll()
        {
            var data = "";
            using (var conn = new SqlConnection(_connectionString))

                try
                {
                    using (var command = new SqlCommand("GetCampaigns", conn)
                    {
                        CommandType = CommandType.StoredProcedure
                    })
                    {
                        conn.Open();
                        //command.ExecuteNonQuery(); 
                        using (SqlDataReader rdr = command.ExecuteReader())
                        {
                            while (rdr.Read())
                            {
                                data = rdr["Name"].ToString();
                            }
                        }
                    }

                }
                catch (Exception error)
                {

                }
            return data;
        }
    }
}
