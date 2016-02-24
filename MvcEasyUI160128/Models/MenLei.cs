using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MvcEasyUI160128.Models
{
    [Table("T_MenLei")]
    public class MenLei
    {
        [Key]
        public int Id { get; set; }
        [Display(Name ="序列号")]
        public int SN_Id { get; set; }
        [Display(Name ="门类代码")]
        public string ML_Code { get; set; }
        [Display(Name = "门类名称")]
        public string ML_Name { get; set; }
    }
}