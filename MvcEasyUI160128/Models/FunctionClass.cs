using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MvcEasyUI160128.Models
{
    public class FunctionClass
    {
        [Key]
        public int funId { get; set; }
        [Required]
        public string funName { get; set; }
        public string funDescri { get; set; }
        public string funRemark { get; set; }
    }
}