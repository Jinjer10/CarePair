using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarePair.Core.Models
{
   public  class ConfirmMatchRequest
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int MatchedUserId { get; set; }
        public bool IsVolunteer { get; set; }
    
}
}
