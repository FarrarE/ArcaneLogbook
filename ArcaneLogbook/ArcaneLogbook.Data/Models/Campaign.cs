﻿using System;
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
        public List<Map> Maps { get; set; }
    }
}
