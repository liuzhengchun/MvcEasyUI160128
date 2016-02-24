using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MvcEasyUI160128.Startup))]
namespace MvcEasyUI160128
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
