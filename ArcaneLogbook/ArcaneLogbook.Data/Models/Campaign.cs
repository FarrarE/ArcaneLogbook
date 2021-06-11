using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Data.Models
{
    public class Campaign
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Edition { get; set; }
        public string UserId { get; set; }

        override public string ToString()
        {
            return "id:" + Id + "," + "name:" + Name + "," + "edition:" + Edition;
        }
    }


}
