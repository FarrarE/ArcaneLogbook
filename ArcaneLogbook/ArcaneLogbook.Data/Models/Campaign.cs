using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Data.Models
{
    public class Campaign
    {
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Edition { get; set; }
        public string UserId { get; set; }
    }
}
