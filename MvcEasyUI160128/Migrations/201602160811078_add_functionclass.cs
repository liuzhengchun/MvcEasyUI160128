namespace MvcEasyUI160128.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_functionclass : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.FunctionClasses",
                c => new
                    {
                        funId = c.Int(nullable: false, identity: true),
                        funName = c.String(nullable: false),
                        funDescri = c.String(),
                        funRemark = c.String(),
                    })
                .PrimaryKey(t => t.funId);
            
            AddColumn("dbo.T_TableField", "funId", c => c.Int(nullable: false));
            CreateIndex("dbo.T_TableField", "funId");
            AddForeignKey("dbo.T_TableField", "funId", "dbo.FunctionClasses", "funId", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.T_TableField", "funId", "dbo.FunctionClasses");
            DropIndex("dbo.T_TableField", new[] { "funId" });
            DropColumn("dbo.T_TableField", "funId");
            DropTable("dbo.FunctionClasses");
        }
    }
}
