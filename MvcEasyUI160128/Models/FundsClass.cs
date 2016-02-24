using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MvcEasyUI160128.Models
{
    /// <summary>
    /// 全宗门类
    /// </summary>
    [Table("T_FondsClass")]
    public class FondsClass
    {
        // public int FC_ID { get; set; }
        [Key]
        [Column(Order = 0)]
        [ForeignKey("TC")]
        public int Class_ID { get; set; }
        [Key]
        [Column(Order = 1)]
        [ForeignKey("F")]
        public int Fonds_ID { get; set; } 
        public virtual TClass TC { get; set; }
        public virtual Fonds F { get; set; }
    }
    /// <summary>
    /// 门类
    /// </summary>
    [Table("T_TClass")]
    public class TClass {
        [Key]
        [Required]
        public int Class_ID { get; set; }
        [Required]
        [Display(Name ="门类代码")]
        public string Class_Code { get; set; }
        [Required]
        [Display(Name ="门类名称")]
        public string Class_Name { get; set; }
        public int DDList_ID { get; set; }
        public int Class_Order{ get; set; }
        public ICollection<FondsClass> FC{ get; set; }
    }
    /// <summary>
    /// 分类
    /// </summary>
    [Table("T_Catelogs")]
    public class Catalogs {
        [Required]
        [Key]
        public int Catalog_ID { get; set; }
        [Required]
        [Display(Name = "分类代码")]
        public string Catalog_Code { get; set; }
        [Required]
        [Display(Name = "分类名称")]
        public string Catalog_Name { get; set; }
        public string Catalog_Remark { get; set; }
        [Display(Name ="父级分类")]
        public int Catalog_Father { get; set; }
       // public List<FondsClass> FC { get; set; }
        [Display(Name ="级别")]
        public int Catalog_Level { get; set; }
        public int Catalog_Order { get; set; }
    }
    /// <summary>
    /// 全宗
    /// </summary>
    [Table("T_Fonds")]
    public class Fonds
    {
        [Key]
        public int Fonds_ID { get; set; }
        [Display(Name ="级别")]
        public int Fonds_Level { get; set; }
        [Display(Name ="父级全宗")]
        public string Fonds_Father { get; set; }
        [Display(Name ="全宗代码")]
        public string Fonds_Code { get; set; }
        [Required]
        [Display(Name ="全宗名称")]
        public string Fonds_Name { get; set; }
        [Display(Name ="顺序号")]
        public int Fonds_Order { get; set; }
        [Display(Name ="进馆号")]
        public string Fonds_JGH { get; set; }
        [Display(Name ="进馆目录号")]
        public string Fonds_JGMLH { get; set; }
        [Display(Name ="备注")]
        public string Fonds_Remark { get; set; }
        public ICollection<FondsClass> FC { get; set; }
    }
}