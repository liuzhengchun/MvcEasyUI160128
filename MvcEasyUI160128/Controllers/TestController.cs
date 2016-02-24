using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MvcEasyUI160128.Models;

namespace MvcEasyUI160128.Controllers
{
    public class TestController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: Test
        public ActionResult Index()
        {
            return View(db.tfonds.ToList());
        }

        // GET: Test/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Fonds fonds = db.tfonds.Find(id);
            if (fonds == null)
            {
                return HttpNotFound();
            }
            return View(fonds);
        }

        // GET: Test/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Test/Create
        // 为了防止“过多发布”攻击，请启用要绑定到的特定属性，有关 
        // 详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Fonds_ID,Fonds_Level,Fonds_Father,Fonds_Code,Fonds_Name,Fonds_Order,Fonds_JGH,Fonds_JGMLH,Fonds_Remark")] Fonds fonds)
        {
            if (ModelState.IsValid)
            {
                db.tfonds.Add(fonds);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(fonds);
        }

        // GET: Test/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Fonds fonds = db.tfonds.Find(id);
            if (fonds == null)
            {
                return HttpNotFound();
            }
            return View(fonds);
        }

        // POST: Test/Edit/5
        // 为了防止“过多发布”攻击，请启用要绑定到的特定属性，有关 
        // 详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkId=317598。
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Fonds_ID,Fonds_Level,Fonds_Father,Fonds_Code,Fonds_Name,Fonds_Order,Fonds_JGH,Fonds_JGMLH,Fonds_Remark")] Fonds fonds)
        {
            if (ModelState.IsValid)
            {
                db.Entry(fonds).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(fonds);
        }

        // GET: Test/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Fonds fonds = db.tfonds.Find(id);
            if (fonds == null)
            {
                return HttpNotFound();
            }
            return View(fonds);
        }

        // POST: Test/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Fonds fonds = db.tfonds.Find(id);
            db.tfonds.Remove(fonds);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
