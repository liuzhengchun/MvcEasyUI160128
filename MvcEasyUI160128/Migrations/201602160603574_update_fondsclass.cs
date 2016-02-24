namespace MvcEasyUI160128.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class update_fondsclass : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.T_TableField",
                c => new
                    {
                        Field_Id = c.Int(nullable: false, identity: true),
                        Table_Id = c.Int(nullable: false),
                        Field_Name = c.String(),
                        Field_CnName = c.String(),
                        Field_Index = c.Int(nullable: false),
                        Field_Key = c.Boolean(nullable: false),
                        Field_Null = c.Boolean(nullable: false),
                        Field_Type = c.String(),
                        Field_Size = c.Int(nullable: false),
                        Field_Default = c.String(),
                        Field_Remark = c.String(),
                        Field_IsDisplay = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Field_Id)
                .ForeignKey("dbo.T_Table", t => t.Table_Id, cascadeDelete: true)
                .Index(t => t.Table_Id);
            
            CreateTable(
                "dbo.T_Table",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Table_TableName = c.String(),
                        Table_CreateDateTime = c.DateTime(nullable: false),
                        Table_Remark = c.String(),
                        Table_CNTableName = c.String(),
                        Table_EditForm = c.String(),
                        Table_DisplayItem = c.String(),
                        Table_DisplayHtml = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.T_ArFiles", "FType", c => c.Int(nullable: false));
            AddColumn("dbo.T_ArFiles", "FTypeName", c => c.String());
            AddColumn("dbo.T_ArFiles", "FState", c => c.String());
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.T_TableField", "Table_Id", "dbo.T_Table");
            DropIndex("dbo.T_TableField", new[] { "Table_Id" });
            DropColumn("dbo.T_ArFiles", "FState");
            DropColumn("dbo.T_ArFiles", "FTypeName");
            DropColumn("dbo.T_ArFiles", "FType");
            DropTable("dbo.T_Table");
            DropTable("dbo.T_TableField");
        }
    }
}
