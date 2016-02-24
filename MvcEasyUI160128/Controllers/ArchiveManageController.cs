using AllFunction;
using MvcEasyUI160128.Common;
using MvcEasyUI160128.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web.Mvc;

namespace MvcEasyUI160128.Controllers
{
    [Authorize]
    public class ArchiveManageController : Controller
    {
        ApplicationDbContext _db = new ApplicationDbContext();
        public string result = String.Empty;

        #region /**获取数据\分页\查询专用变量**/
            /**总页数**/
            int pageNum =1;
            /**当前index**/
            int rowsNum =10;
            /**起始日期**/
            string startDate = String.Empty;
            /**终止日期**/
            string endDate = String.Empty;
            /**搜索关键字**/
            string SearchText = String.Empty;
        #endregion

        #region  主页、首页
        // GET: ArchiveManage
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult SubIndex() {
            return View();
        }
        #endregion

        #region  打开子项
        /// <summary>
        /// 全宗管理
        /// </summary>
        /// <returns></returns>
        public ActionResult QuanZhong() {
            return View();
        }
        /// <summary>
        /// 门类管理
        /// </summary>
        /// <returns></returns>
        public ActionResult MenLei() {
            return View();
        }
        /// <summary>
        /// 分类管理
        /// </summary>
        /// <returns></returns>
        public ActionResult FenLei()
        {
            return View();
        }
        #endregion

        #region  门类管理
        /// <summary>
        /// 加载门类信息
        /// </summary>
        /// <returns></returns>
        public JsonResult GetQZInfo() {
            var list = from ml in _db.menlei
                       select new {
                           Id=ml.SN_Id,
                           MCode=ml.ML_Code,
                           MName=ml.ML_Name
                       };
            return Json(list,JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region  全宗信息
        /// <summary>
        /// 加载全宗信息
        /// </summary>
        /// <returns></returns>
        public JsonResult LoadFonds() {
            var fonds_list = from f in _db.tfonds
                             select new
                             {
                                 Id = f.Fonds_ID,
                                 FondName = f.Fonds_Name,
                                 FondCode = f.Fonds_Code,
                                 FondOrder = f.Fonds_Order
                             };
            return Json(fonds_list, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 全宗信息管理
        /// </summary>
        /// <returns></returns>
        public ContentResult QZInfoManage() {
            string type = Request["_type"];
            switch (type) {
                case "1":
                    Fonds fond = new Fonds();
                    fond.Fonds_Name = Request["_name"];
                    fond.Fonds_Code = Request["_code"];
                    fond.Fonds_Order = StringToInt(Request["_order"]);
                    fond.Fonds_Father = Request["_father"];
                    fond.Fonds_Level= StringToInt(Request["_level"]);
                    fond.Fonds_JGH = Request["_jgh"];
                    fond.Fonds_JGMLH = Request["_jgmlh"];
                    fond.Fonds_Remark= Request["_remark"];
                    _db.tfonds.Add(fond);
                    _db.SaveChanges();
                    result = "1";
                    break;
                case "2":

                    break;
                case "3":
                    int sel_id= StringToInt(Request["_selectid"]);
                    var selfond=_db.tfonds.Find(sel_id);
                    _db.tfonds.Remove(selfond);
                    _db.SaveChanges();
                    break;
            }
            return Content(result);
        }
        #endregion

        #region  分类信息
        /// <summary>
        /// 加载分类信息
        /// </summary>
        /// <returns></returns>
        public JsonResult LoadClassInfo()
        {
            var class_list = from f in _db.tclass
                             select new
                             {
                                 Id = f.Class_ID,
                                 ClassName = f.Class_Name,
                                 ClassCode = f.Class_Code,
                                 ClassOrder = f.Class_Order
                             };
            return Json(class_list, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 分类信息管理
        /// </summary>
        /// <returns></returns>
        public ContentResult ClassInfoManage()
        {
            string type = Request["_type"];
            switch (type)
            {
                case "1":
                    TClass tclass = new TClass();
                    tclass.Class_Name = Request["_name"];
                    tclass.Class_Code = Request["_code"];
                    tclass.Class_Order = StringToInt(Request["_order"]);
                    tclass.DDList_ID =StringToInt(Request["_ddlist"]);
                    _db.tclass.Add(tclass);
                    _db.SaveChanges();
                    result = "1";
                    break;
                case "2":

                    break;
                case "3":
                    int sel_id = StringToInt(Request["_selectid"]);
                    var selclass = _db.tclass.Find(sel_id);
                    _db.tclass.Remove(selclass);
                    _db.SaveChanges();
                    break;
            }
            return Content(result);
        }
        #endregion

        #region 预处理全宗分类树
        public JsonResult GetFondClassTree() {
            JsonResult fc_json = new JsonResult();
            List<FC_Json> parent;
            List<FC_Json> children;
            parent = (from f in _db.tfonds
                     orderby f.Fonds_Order
                     select new FC_Json
                     {
                         id = f.Fonds_ID,
                         text = f.Fonds_Name,
                         state="closed"
                     }).ToList();
            foreach(var item in parent)
            {
                children = (from fc in _db.FC
                join tc in _db.tclass on fc.Class_ID equals tc.Class_ID
                where fc.Fonds_ID == item.id
                orderby tc.Class_Order
                select new FC_Json
                {
                    id = fc.Class_ID,
                    text = tc.Class_Name,
                    state = "closed",
                    attributes = new { url= "/ArchiveManage/Advance/" }
                }).ToList<FC_Json>();
                if (children.Count > 0)
                {
                    item.children = children;
                }
                children = null;
            }
            return Json(parent,JsonRequestBehavior.AllowGet);
        }
        public class FC_Json {
            public int id { get; set; }
            public string text { get; set; }
            public List<FC_Json> children { get; set; }
            public string state { get; set; }
            public object attributes { get; set; }
        }
        #endregion

        #region  预立案
        public ActionResult Advance()
        {
            #region  卷动态加载
            var _archive =(from tab in _db.tables
                         where tab.Table_TableName.Equals("T_ArFiles")
                         select tab).FirstOrDefault<Tables>();
            //卷加载动态列
            string arfileheader = "";
            arfileheader = _archive.Table_DisplayHtml;
            ViewBag.ArFileHeader = arfileheader;
            //卷弹出对话框
            string arfileForm = "";
            arfileForm= _archive.Table_EditForm;
            ViewBag.ArchiveForm = arfileForm;
            #endregion

            #region  文件内容动态加载
            string tabname = "T_FileContent";
            var ListItem = "";
            var DisplayItem = "<thead><tr>";
            var FormList= "<div style=\"display:none;\"><div id=\"filecontent_form\" class=\"easyui-dialog\" style=\"width: 500px; height: 360px; padding: 5px 10px\" closable=\"false\" closed=\"true\" buttons=\"#filecontent-dlg-buttons\" modal=\"true\"><div style=\"padding:10px 60px 20px 60px\"><form id=\"filecontent_fm\" method=\"post\"><table cellpadding=\"5\">";
            if (!String.IsNullOrEmpty(tabname) || tabname != null)
            {
                string tab_name = tabname;
                var tab_item = (from tab in _db.tables
                                join tfeild in _db.fieldtable on tab.Id equals tfeild.Table_Id
                                where tab.Table_TableName == tab_name
                                select new
                                {
                                    tabId = tab.Id,
                                    tabName=tab.Table_TableName,
                                    FeildId = tfeild.Field_Id,
                                    FeildName = tfeild.Field_Name,
                                    feildCnName=tfeild.Field_CnName,
                                    FieldSize = tfeild.Field_Size,
                                    FieldType = tfeild.Field_Type,
                                    FieldNull = tfeild.Field_Null,
                                    FieldDefault = tfeild.Field_Default,
                                    FeildDisplay = tfeild.Field_IsDisplay,
                                    funName = tfeild.funclass.funName
                                }).ToList();
                foreach (var field in tab_item)
                {
                    if (field.FeildDisplay)
                    {
                        DisplayItem += "<th data-options=\"field:'" + field.FeildName + "',sortable:true\">"+ field.feildCnName+ "</th>";
                        FormList+="<tr><td>" + field.feildCnName + "</td><td><input class=\"easyui-textbox\" type=\"text\" id=\"txt_" + field.FeildName + "\" data-options=\"required:true\" style=\"width: 200px;\"></input></td></tr>";
                    }
                    else {
                        DisplayItem += "<th data-options=\"field:'" + field.FeildName + "',sortable:true,hidden:true\">"+ field.feildCnName+"</th>";
                        FormList += "<tr><td>" + field.feildCnName + "</td><td><input class='easyui-textbox' type='text' id='txt_" + field.FeildName + "' data-options='required: true' style='width: 200px; '></input></td></tr>";
                    }
                    ListItem += field.FeildName + ",";
                }
                DisplayItem += "</tr></thead>";
                FormList += "</table></form></div><div id=\"filecontent-dlg-buttons\"><a href=\"javascript:void(0)\" id=\"filecontent_submit\" class=\"easyui-linkbutton\" iconcls=\"icon-ok\">确认</a><a href=\"javascript:void(0)\" class=\"easyui-linkbutton\" iconcls=\"icon-cancel\" onclick=\"javascript:$(\"#filecontent_form\").dialog(\"close\")\">取消</a></div></div></div>";
                
                ViewBag.FileContentDisplayItem = DisplayItem;
                ViewBag.FileContentFormList = FormList;
                if (ListItem.Length > 0) {
                    ViewBag.FileContentListItem_sql = "select "+ListItem.Remove(ListItem.LastIndexOf(","),1)+" from "+tab_item.FirstOrDefault().tabName;
                }
            }
            #endregion

            return View();
        }
        /// <summary>
        /// 文件内容动态项获取封装
        /// </summary>
        /// <param name="tabname"></param>
        /// <returns></returns>
        private string GetFileContentDynamicInfo(string tabname) {
            string result;
            #region  文件内容动态加载
            //string tabname = "T_FileContent";
            var ListItem = "";
            var DisplayItem = "<thead><tr>";
            var FormList = "<div style=\"display:none;\"><div id=\"filecontent_form\" class=\"easyui-dialog\" style=\"width: 500px; height: 360px; padding: 5px 10px\" closable=\"false\" closed=\"true\" buttons=\"#filecontent-dlg-buttons\" modal=\"true\"><div style=\"padding:10px 60px 20px 60px\"><form id=\"ff\" method=\"post\"><table cellpadding=\"5\">";
            if (!String.IsNullOrEmpty(tabname) || tabname != null)
            {
                string tab_name = tabname;
                var tab_item = (from tab in _db.tables
                                join tfeild in _db.fieldtable on tab.Id equals tfeild.Table_Id
                                where tab.Table_TableName == tab_name
                                select new
                                {
                                    tabId = tab.Id,
                                    tabName = tab.Table_TableName,
                                    FeildId = tfeild.Field_Id,
                                    FeildName = tfeild.Field_Name,
                                    feildCnName = tfeild.Field_CnName,
                                    FieldSize = tfeild.Field_Size,
                                    FieldType = tfeild.Field_Type,
                                    FieldNull = tfeild.Field_Null,
                                    FieldDefault = tfeild.Field_Default,
                                    FeildDisplay = tfeild.Field_IsDisplay,
                                    funName = tfeild.funclass.funName
                                }).ToList();
                foreach (var field in tab_item)
                {
                    if (field.FeildDisplay)
                    {
                        DisplayItem += "<th data-options=\"field:'" + field.FeildName + "',sortable:true\">" + field.feildCnName + "</th>";
                        FormList += "<tr><td>" + field.feildCnName + "</td><td><input class=\"easyui-textbox\" type=\"text\" id=\"txt_" + field.FeildName + "\" data-options=\"required:true\" style=\"width: 200px;\"></input></td></tr>";
                    }
                    else {
                        DisplayItem += "<th data-options=\"field:'" + field.FeildName + "',sortable:true,hidden:true\">" + field.feildCnName + "</th>";
                        FormList += "<tr><td>" + field.feildCnName + "</td><td><input class='easyui-textbox' type='text' id='txt_" + field.FeildName + "' data-options='required: true' style='width: 200px; '></input></td></tr>";
                    }
                    ListItem += field.FeildName + ",";
                }
                DisplayItem += "</tr></thead>";
                FormList += "</table></form></div><div id=\"filecontent-dlg-buttons\"><a href=\"javascript:void(0)\" id=\"filecontent_submit\" class=\"easyui-linkbutton\" iconcls=\"icon-ok\">确认</a><a href=\"javascript:void(0)\" class=\"easyui-linkbutton\" iconcls=\"icon-cancel\" onclick=\"javascript:$(\"#filecontent_form\").dialog(\"close\")\">取消</a></div></div></div>";

                ViewBag.FileContentDisplayItem = DisplayItem;
                ViewBag.FileContentFormList = FormList;
                if (ListItem.Length > 0)
                {
                    ViewBag.FileContentListItem_sql = "select " + ListItem.Remove(ListItem.LastIndexOf(","), 1) + " from " + tab_item.FirstOrDefault().tabName;
                }
            }
            #endregion
            result= ViewBag.FileContentListItem_sql;
            return result;
        }
        /// <summary>
        /// 加载卷信息
        /// </summary>
        /// <returns></returns>
        public JsonResult LoadArchiveData() {
            if (!String.IsNullOrEmpty(Request["search_text"]))
            {
                SearchText =Request["search_text"];
            }
            if (!String.IsNullOrEmpty(Request["page"]))
            {
                int.TryParse(Request["page"], out pageNum);
            }
            if (!String.IsNullOrEmpty(Request["rows"]))
            {
                int.TryParse(Request["rows"], out rowsNum);
            }
            int ar_total = _db.arfiles.Count();
            if (pageNum * rowsNum < ar_total)
            {
                var all_list = (from f in _db.arfiles
                                select new
                                {
                                    Id = f.Id,
                                    Catalog_ID = f.Catalog_ID,
                                    Name = f.Name,
                                    Year = f.Year,
                                    PageCount = f.PageCount,
                                    Archarge = f.Archarge,
                                    Startday = f.Startday,
                                    Enday = f.Enday,
                                    Lastday = f.Lastday
                                }).OrderBy(ar=>ar.Id).Skip((pageNum-1) * rowsNum).Take(rowsNum);
                return Json(new { total = ar_total, rows = all_list }, JsonRequestBehavior.AllowGet);
            }
            else {
                if (pageNum <= 1) {
                    pageNum = 1;
                }
                var all_list = (from f in _db.arfiles
                                select new
                                {
                                    Id = f.Id,
                                    Catalog_ID = f.Catalog_ID,
                                    Name = f.Name,
                                    Year = f.Year,
                                    PageCount = f.PageCount,
                                    Archarge = f.Archarge,
                                    Startday = f.Startday,
                                    Enday = f.Enday,
                                    Lastday = f.Lastday
                                }).OrderBy(ar => ar.Id).Skip((pageNum - 1) * rowsNum).Take(rowsNum);
                return Json(new { total = ar_total, rows = all_list }, JsonRequestBehavior.AllowGet);
            }  
        }
        /// <summary>
        /// 加载文件信息
        /// </summary>
        /// <returns></returns>
        public JsonResult LoadFilesData() {
            var files_list = from f in _db.arfiles
                           select new
                           {
                               Id = f.Id,
                               A_Number = f.Catalog_ID,
                               F_Number = f.Catalog_ID,
                               F_Name = f.Name,
                               F_Year = f.Year,
                               F_TotalNum = f.PageCount,
                               F_PIC = f.Archarge,
                               F_Date = f.Startday,
                               F_GuiDate = f.Lastday
                           };
            return Json(new { total = 10, rows = files_list }, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 加载文件详细信息
        /// </summary>
        /// <returns></returns>
        public ActionResult LoadFileContent() {
            //获取动态的SQL语句（根据数据库表名称）
            string FileContentItem_sql=GetFileContentDynamicInfo("T_FileContent");
            DataTable dt = new DataTable();
            using (MSSQL ms = new MSSQL(ParamClass.DBConn)){
                dt = ms.ResultDataTable(FileContentItem_sql,"");
            }
            return Content(@"{""total""" + ":" + dt.Rows.Count + "," + @"""rows""" + ":" +JsonHelper.ToJson(dt)+ "}");
        }
        /// <summary>
        /// 加载json格式的目录数据
        /// </summary>
        /// <returns></returns>
        public JsonResult LoadArchive() {
            var _list = from f in _db.arfiles
                        select new {
                            id = f.Id,
                            text = f.Name,
                            state = f.FState
                        };
            return Json(_list, JsonRequestBehavior.AllowGet);
        }
        /// <summary>
        /// 小子分类树节点类
        /// </summary>
        public class FileTree {
            public int id { get; set; }
            public string text { get; set; }
            public string state { get; set; }
            public List<FileTree> children { get; set; }
            public object attributes { get; set; }
        }
        /// <summary>
        /// 案卷数据处理
        /// </summary>
        /// <returns>处理结果</returns>
        [HttpPost]
        public ActionResult ArchiveControl() {
            string result = "0|";
            int type = int.Parse(Request["_type"]);
            switch (type) {
                case 1:/**新增**/
                    ArFiles arfile = new ArFiles();
                    arfile.Catalog_ID =Request["_aid"];
                    arfile.Name = Request["_aname"];
                    arfile.Year = Request["_ayear"];
                    arfile.PageCount = Request["_anum"];
                    arfile.Archarge = Request["_apic"];
                    arfile.Startday = DateTime.Now;
                    arfile.Enday = DateTime.Now;
                    arfile.Lastday = DateTime.Now;
                    arfile = _db.arfiles.Add(arfile);
                    _db.SaveChanges();
                    if (arfile.Id > 0)
                    {
                        result = "1|";
                    }
                    break;
                case 3:/**修改**/
                    ArFiles arfile_update = new ArFiles();
                    arfile_update.Id = int.Parse(Request["_id"]); 
                    arfile_update.Catalog_ID =Request["_aid"];
                    arfile_update.Name = Request["_aname"];
                    arfile_update.Year = Request["_ayear"];
                    arfile_update.PageCount = Request["_anum"];
                    arfile_update.Archarge = Request["_apic"];
                    arfile_update.Startday = DateTime.Now;
                    arfile_update.Enday = DateTime.Now;
                    arfile_update.Lastday = DateTime.Now;
                    arfile_update = _db.arfiles.Add(arfile_update);
                    _db.Entry(arfile_update).State = EntityState.Modified;
                    int ret_update = _db.SaveChanges();
                    if (ret_update > 0)
                    {
                        result = "1|";
                    }
                    break;
                case 4:/**删除**/
                    int id = int.Parse(Request["_id"]);
                    ArFiles arfile_del = _db.arfiles.Find(id);
                    _db.arfiles.Remove(arfile_del);
                    int ret_del=_db.SaveChanges();
                    if (ret_del > 0) {
                        result = "1|";
                    }
                    break;
                default:
                    break;
            }
            return Content(result);
        }
        #endregion

        #region  卷列显示
        public ActionResult ArFilesDisplayItem() {
            JsonResult tab_json = new JsonResult();
            if (!String.IsNullOrEmpty(Request["_tablename"]) || Request["_tablename"] != "")
            {
                string tablename = Request["_tablename"];
                var tables = from tab in _db.tables
                             where tab.Table_TableName.Equals(tablename)
                             select new { display_item = tab.Table_DisplayItem };
                tab_json.Data = tables;

            }
            else {
                tab_json.Data = "[[]]";
            }
            tab_json.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            return tab_json;
        }
        #endregion

        #region  动态加载动态数据列、表单等信息
        public JsonResult GetTableItem() {
            JsonResult data_json =new JsonResult();
            return data_json;
        }
        #endregion

        #region  报表统计
        public ActionResult ArchiveCount() {
            return View();
        }
        /// <summary>
        /// 案卷统计数据
        /// </summary>
        /// <returns></returns>
        public ActionResult ArCount() {
            int year;
            if (!String.IsNullOrEmpty(Request["_year"]) && Request["_year"] != "" && IsNumeric(Request["_year"]))
            {
                year =int.Parse(Request["_year"]);
            }
            else {
                year = DateTime.Now.Year;
            }
            var month_total = (from item in _db.arfiles
                               where item.Startday.Year==year
                               orderby item.Startday
                              group item by new { item.Startday.Year, item.Startday.Month } into t
                              select new { m = t.Key.Month, num = t.Count() }).ToList();
            int[] arr_total = new int[] { 0,0,0,0,0,0,0,0,0,0,0,0};
            foreach (var it in month_total) {
                arr_total[it.m - 1] = it.num;
            }
            string str_total=""; 
            for (int i=0;i< arr_total.Length;i++) {
                str_total += arr_total[i].ToString() + ",";
            }
            str_total = str_total.Remove(str_total.LastIndexOf(','), 1);
            return Content(str_total);
        }
        #endregion

        #region  工具方法
        public static int StringToInt(string str) {
            int ret = 0;
            if (IsNumeric(str))
            {
               ret= String.IsNullOrEmpty(str) || str == "" ? 0 : int.Parse(str);
            }
            return ret;
        }
        public static bool IsNumeric(string value)
        {
            if (value == null)
            {
                return false;
            }
            else {
                return Regex.IsMatch(value, @"^[+-]?\d*[.]?\d*$");
            }
        }
        #endregion
    }
}