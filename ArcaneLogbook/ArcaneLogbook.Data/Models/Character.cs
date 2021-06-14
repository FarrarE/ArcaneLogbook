using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Data.Models
{
    public class Character
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Level { get; set; }
        public int Health { get; set; }
        public int Initiative { get; set; }
        public int ArmorClass { get; set; }
        public int Speed { get; set; }
        public int Strength { get; set; }
        public int Dexterity { get; set; }
        public int Constituion { get; set; }
        public int Intelligene { get; set; }
        public int Wisdom { get; set; }
        public int Charisma { get; set; }
    }
}
