using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace MvcEasyUI160128.Models
{
    // 可以通过向 ApplicationUser 类添加更多属性来为用户添加配置文件数据。若要了解详细信息，请访问 http://go.microsoft.com/fwlink/?LinkID=317594。
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // 请注意，authenticationType 必须与 CookieAuthenticationOptions.AuthenticationType 中定义的相应项匹配
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // 在此处添加自定义用户声明
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        static ApplicationDbContext()
        {
            Database.SetInitializer<ApplicationDbContext>(null);
        }
        public ApplicationDbContext()
            : base("dbconn", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
       
        public DbSet<MenLei> menlei { get; set; }
        public DbSet<Fonds> tfonds { get; set; }
        public DbSet<TClass> tclass { get; set; }
        public DbSet<FondsClass> FC { get; set; }
        public DbSet<Catalogs> category { get; set; }
        public DbSet<ArFiles> arfiles { get; set; }
        public DbSet<Tables> tables { get; set; }
        public DbSet<TableField> fieldtable { get; set; }
        public DbSet<FunctionClass> funclass { get; set; }
    }
}