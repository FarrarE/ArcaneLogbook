using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Data.Models
{
    public class PlayerCharacter : Character
    {
        public string PlayerName { get; set; }
        public int Experience { get; set; }
    }
}
