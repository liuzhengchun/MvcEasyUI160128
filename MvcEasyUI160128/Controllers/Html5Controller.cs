using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcEasyUI160128.Controllers
{
    public class Html5Controller : Controller
    {
        #region 登录
        /// <summary>
        ///登录页面
        /// </summary>
        /// <returns></returns>
        public ActionResult Login()
        {
            return View();
        }
        /// <summary>
        /// 登录跳转
        /// </summary>
        /// <returns></returns>
        public ActionResult LoginIn() {
            return View();
        }
        #endregion

        #region LocalStorage/SessionStorage测试
        public ActionResult storage() {
            return View();
        }
        #endregion

        #region  html5 pdf 在线浏览
        public ActionResult OnlinePDF() {
            return View();
        }
        #endregion
    }
}