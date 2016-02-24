using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcEasyUI160128.Common
{
    public class AjaxMsg {
        public  ReturnStatus statu { get; set; }
        public  string Msg { get; set; }
        public  JsonResult Data { get; set; }
        public  string BackUrl { get; set; }
    }
    public enum ReturnStatus{
        Success=1,
        ServerError=2,
        ResultNull=3,
        Other=4
    }

    public class ParamClass {
        private static string dbConn = ConfigurationManager.ConnectionStrings["dbconn"].ConnectionString;
        public static string DBConn
        {
            get
            {
                return ParamClass.dbConn;
            }
            set {
                dbConn = value;
            }
        }
    }
    public static class JsonHelper
    {
        public static string ToJson(object obj)
        {
            JsonSerializerSettings settings = new JsonSerializerSettings();
            settings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

            return JsonConvert.SerializeObject(obj);
        }


        public static string ToJsonEx(DataTable obj)
        {


            string result = JsonConvert.SerializeObject(obj);
            result = result.Replace("[", "").Replace("]", "");
            return result;
        }
    }

}