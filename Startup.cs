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
    using Servicios.Interface.Localidad;
    using Servicios.Implementacion.Localidad;
    using Hubs.App;
    using Entidades.Repositorio;
    using Servicios.Interface.Persona;
    using Servicios.Implementacion.Persona;
    using Servicios.Interface.Especialidad;
    using Servicios.Implementacion.Especialidad;
    using SimpleInjector;
    public class Startup
    {
        private Container container = new Container();
        public Startup(IConfiguration configuration)
        {
            container.Options.ResolveUnregisteredConcreteTypes = false;

            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            services.AddLogging();
            services.AddLocalization(options => options.ResourcesPath = "Resources");
            

            services.AddSimpleInjector(container, options => {
                options.AddAspNetCore()
                .AddControllerActivation();

                options.AddLogging();
                options.AddLocalization();
            });

            services.AddMvcCore();
            services.AddSignalR();

            services.AddDbContext<DataContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("Conexion")));

            /*
            services.AddSingleton(typeof(IRepositorio<>), typeof(Repositorio<>));
            services.AddTransient<IRepositorioRecepcionista, RepositorioRecepcionista>();
            services.AddTransient<IUnidadDeTrabajo, UnidadDeTrabajo>();
            services.AddTransient<IProvinciaServicio, ProvinciaServicio>();
            services.AddTransient<ILocalidadServicio, LocalidadServicio>();
            services.AddTransient<IRecepcionistaServicio, RecepcionistaServicio>();
            services.AddTransient<IPersonaServicio, PersonaServicio>();
            */
            InicialzarContenedorInjection();
        }

        private void InicialzarContenedorInjection()
        {
            container.Register(typeof(IRepositorio<>), typeof(Repositorio<>));
            container.Register<IRepositorioRecepcionista, RepositorioRecepcionista>(Lifestyle.Transient);
            container.Register<IUnidadDeTrabajo, UnidadDeTrabajo>(Lifestyle.Transient);
            container.Register<IProvinciaServicio, ProvinciaServicio>(Lifestyle.Transient);
            container.Register<ILocalidadServicio, LocalidadServicio>(Lifestyle.Transient);
            container.Register<IRecepcionistaServicio, RecepcionistaServicio>(Lifestyle.Transient);
            container.Register<IPersonaServicio, PersonaServicio>(Lifestyle.Transient);
            container.Register<IEspecialidadServicio, EspecialidadServicio>(Lifestyle.Transient);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseSimpleInjector(container);

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
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapHub<LocalidadHub>("/hubLocalidad");
                endpoints.MapHub<PruebaHub>("/hubPrueba");
            });

            container.Verify();
        }
    }
}
