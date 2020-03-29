using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace School_Register.Models
{
    public class Class
    {
        public long ID { get; set; }
        public String Name { get; set; }
        public int Capacity { get; set; }
        public School School { get; set; }
    }
}
