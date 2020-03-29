using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace School_Register.Models
{
    public class School
    {
        public long ID { get; set; }
        public String Name { get; set; }
        public String Address { get; set; }
        public String Zipcode { get; set; }
        public List<Class> Classes { get; set; }
    }
}
