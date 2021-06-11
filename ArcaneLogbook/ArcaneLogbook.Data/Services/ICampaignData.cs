using ArcaneLogbook.Data.Models;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArcaneLogbook.Data.Services
{
    public interface ICampaignData
    {
        IEnumerable<Campaign> GetAll();
        void Add(Campaign campaign);
    }


}
