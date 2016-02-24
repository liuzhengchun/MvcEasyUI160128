using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MvcEasyUI160128.Models
{
    [Table("T_ArFiles")]
    public class ArFiles
    {
        [Key]
        public int Id { get; set; }
        [Required]
	    public string Catalog_ID { get; set; }
        public string Year { get; set; }
        public string PageCount { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public DateTime Startday { get; set; }
        public string Archarge { get; set; }
        public DateTime Enday { get; set; }
        public DateTime Lastday { get; set; }
        public string FileUser { get; set; }
        public string Secret { get; set; }
        public int FType { get; set; }
        public string FTypeName { get; set; }
        public string FState { get; set; }
    }
}