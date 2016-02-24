namespace MvcEasyUI160128.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class updateArFiles : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.T_ArFiles", "Catalog_ID", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.T_ArFiles", "Catalog_ID", c => c.Int(nullable: false));
        }
    }
}
