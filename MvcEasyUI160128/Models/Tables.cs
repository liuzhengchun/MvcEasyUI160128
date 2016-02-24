using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MvcEasyUI160128.Models
{
    [Table("T_Table")]
    public class Tables
    {
        [Key]
        public int Id { get; set; }
        public string Table_TableName { get; set; }
        public DateTime Table_CreateDateTime { get; set; }
        public string Table_Remark { get; set; }
        public string Table_CNTableName { get; set; }
        public string Table_EditForm { get; set; }
        public string Table_DisplayItem { get; set; }
        public string Table_DisplayHtml { get; set; }
    }
    [Table("T_TableField")]
    public class TableField {
        [Key]
        public int Field_Id { get; set; }
        [ForeignKey("tabl")]
        public int Table_Id { get; set; }
        public Tables tabl { get; set; }
        public string Field_Name { get; set; }
        public string Field_CnName { get; set; }
        public int Field_Index { get; set; }
        public bool Field_Key { get; set; }
        public bool Field_Null { get; set; }
        public string Field_Type { get; set; }
        public int Field_Size { get; set; }
        public string Field_Default { get; set; }
        public string Field_Remark { get; set; }
        public bool Field_IsDisplay { get; set; }
        [ForeignKey("funclass")]
        public int funId { get; set; }
        public FunctionClass funclass { get; set; }
    }
}