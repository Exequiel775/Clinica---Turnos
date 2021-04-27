namespace Sistema.Sanatorio
{
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Infraestructura;
    using Microsoft.EntityFrameworkCore;
    using Entidad.Base.Repositorio;
    using Infraestructura.Repositorio;
    using Infraestructura.UnidadDeTrabajo;
    using Entidades.UnidadDeTrabajo;
    using Servicios.Interface.Provincia;
    using Servicios.Implementacion.Provincia;
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddMvcCore();

            services.AddDbContext<DataContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("Conexion")));

            services.AddSingleton(typeof(IRepositorio<>), typeof(Repositorio<>));
            services.AddTransient<IUnidadDeTrabajo, UnidadDeTrabajo>();
            services.AddTransient<IProvinciaServicio, ProvinciaServicio>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
