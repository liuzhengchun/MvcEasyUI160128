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
                  Table_EditForm = "<div style='display: none;'><div id='archive_form' class='easyui - dialog' style='width: 500px; height: 360px; padding: 5px 10px' closable='false' closed='true' buttons='#archive-dlg-buttons' modal='true'><div style='padding:10px 60px 20px 60px'><form id='ff' method='post'><table cellpadding='5'><tr><td>���:</td><td><input class='easyui-textbox' type='text' id='txt_Id' data-options='required:true' style='width:200px;'></input></td></tr><tr><td>�鵵�����:</td><td><input class='easyui-textbox' type='text' id='txt_AchiveId' data-options='required:true' style='width:200px;'></input></td></tr><tr><td>�������:</td><td><input class='easyui-textbox' type='text' id='txt_AchiveName' data-options='required:true' style='width:200px;'></input></td></tr><tr><td>�����:</td><td><input class='easyui-textbox' type='text' id='txt_A_Year' data-options='required:true' style='width:200px;'></input></td></tr><tr><td>ҳ��:</td><td><input class='easyui-textbox' id='txt_A_Number' style='width:200px;'></input></td></tr><tr><td>������:</td><td><input class='easyui-textbox' id='txt_A_PIC' style='width:200px;'></input></td></tr><tr><td>������ʼ����:</td><td><input class='easyui-datebox' id='txt_StartDate' style='width:200px;'></input></td></tr><tr><td>���ƽ�������:</td><td><input class='easyui-datebox' id='txt_EndDate' style='width:200px;'></input></td></tr><tr><td>�鵵����:</td><td><input class='easyui-datebox' id='txt_A_StartDate' style='width:200px;'></input></td></tr></table></form></div><div id='archive-dlg-buttons'><a href='javascript:void(0)' id='archives_submit' class='easyui-linkbutton' iconcls='icon-ok'>ȷ��</a><a href='javascript:void(0)' class='easyui-linkbutton' iconcls='icon-cancel' onclick='javascript:$('#archive_form').dialog('close')'>ȡ��</a></div></div></div>",
                  Table_DisplayHtml = "<thead><tr><th data-options='field:'Id',sortable:true'></th><th data-options='field:'Catalog_ID', sortable:true'>�鵵�����</th><th data-options='field:'Name',sortable:true'>�������</th><th data-options='field:'Year',sortable:true'>�����</th><th data-options='field:'PageCount',sortable:true'>ҳ��</th><th data-options='field:'Archarge',sortable:true'>������</th><th data-options='field:'Startday',sortable:true'>������ʼ����</th><th data-options='field:'Enday',sortable:true'>���ƽ�������</th><th data-options='field:'Lastday',sortable:true'>�鵵����</th></tr></thead>",
                  Table_DisplayItem = "{field:'Id',title:'',sortable:true,hidden:true}|{field:'Catalog_ID',title:'�鵵�����',sortable:true}|{field:'Name',title:'�������',sortable:true}|{field:'Year',title:'�����',sortable:true}|{field:'PageCount',title:'ҳ��',sortable:true}|{field:'Archarge',title:'������',sortable:true}|{field:'Startday',title:'������ʼ����',sortable:true}|{field:'Enday',title:'���ƽ�������',sortable:true}|{field:'Lastday',title:'�鵵����',sortable:true}"
              });
        }
    }
}
