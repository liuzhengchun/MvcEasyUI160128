namespace MvcEasyUI160128.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MvcEasyUI160128.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MvcEasyUI160128.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.tables.AddOrUpdate(
              p => p.Table_TableName,
              new Models.Tables
              {
                  Table_TableName = "T_ArFiles",
                  Table_CreateDateTime = DateTime.Parse("2016-02-02"),
                  Table_EditForm = "<div style='display: none;'><div id='archive_form' class='easyui - dialog' style='width: 500px; height: 360px; padding: 5px 10px' closable='false' closed='true' buttons='#archive-dlg-buttons' modal='true'><div style='padding:10px 60px 20px 60px'><form id='ff' method='post'><table cellpadding='5'><tr><td>编号:</td><td><input class='easyui-textbox' type='text' id='txt_Id' data-options='required:true' style='width:200px;'></input></td></tr><tr><td>归档案卷号:</td><td><input class='easyui-textbox' type='text' id='txt_AchiveId' data-options='required:true' style='width:200px;'></input></td></tr><tr><td>案卷标题:</td><td><input class='easyui-textbox' type='text' id='txt_AchiveName' data-options='required:true' style='width:200px;'></input></td></tr><tr><td>年代号:</td><td><input class='easyui-textbox' type='text' id='txt_A_Year' data-options='required:true' style='width:200px;'></input></td></tr><tr><td>页数:</td><td><input class='easyui-textbox' id='txt_A_Number' style='width:200px;'></input></td></tr><tr><td>负责人:</td><td><input class='easyui-textbox' id='txt_A_PIC' style='width:200px;'></input></td></tr><tr><td>编制起始日期:</td><td><input class='easyui-datebox' id='txt_StartDate' style='width:200px;'></input></td></tr><tr><td>编制结束日期:</td><td><input class='easyui-datebox' id='txt_EndDate' style='width:200px;'></input></td></tr><tr><td>归档日期:</td><td><input class='easyui-datebox' id='txt_A_StartDate' style='width:200px;'></input></td></tr></table></form></div><div id='archive-dlg-buttons'><a href='javascript:void(0)' id='archives_submit' class='easyui-linkbutton' iconcls='icon-ok'>确认</a><a href='javascript:void(0)' class='easyui-linkbutton' iconcls='icon-cancel' onclick='javascript:$('#archive_form').dialog('close')'>取消</a></div></div></div>",
                  Table_DisplayHtml = "<thead><tr><th data-options='field:'Id',sortable:true'></th><th data-options='field:'Catalog_ID', sortable:true'>归档案卷号</th><th data-options='field:'Name',sortable:true'>案卷标题</th><th data-options='field:'Year',sortable:true'>年代号</th><th data-options='field:'PageCount',sortable:true'>页数</th><th data-options='field:'Archarge',sortable:true'>负责人</th><th data-options='field:'Startday',sortable:true'>编制起始日期</th><th data-options='field:'Enday',sortable:true'>编制结束日期</th><th data-options='field:'Lastday',sortable:true'>归档日期</th></tr></thead>",
                  Table_DisplayItem = "{field:'Id',title:'',sortable:true,hidden:true}|{field:'Catalog_ID',title:'归档案卷号',sortable:true}|{field:'Name',title:'案卷标题',sortable:true}|{field:'Year',title:'年代好',sortable:true}|{field:'PageCount',title:'页数',sortable:true}|{field:'Archarge',title:'负责人',sortable:true}|{field:'Startday',title:'编制起始日期',sortable:true}|{field:'Enday',title:'编制结束日期',sortable:true}|{field:'Lastday',title:'归档日期',sortable:true}"
              });
        }
    }
}
