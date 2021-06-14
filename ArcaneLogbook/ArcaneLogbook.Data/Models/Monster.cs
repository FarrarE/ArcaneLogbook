using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Data.Models
{
    public class Monster : Character
    {
        public int Challenge { get; set; }
        public int ExperienceYield { get; set; }
        public List<Ability> Abilities { get; set; }
        public List<Action> Actions { get; set; }
        public List<Action> Reactions { get; set; } 
    }
}
