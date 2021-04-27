
namespace Infraestructura
{
    using Microsoft.EntityFrameworkCore;
    using Entidades;
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
        :base(options)
        {
            
        }

        public DbSet<Provincia> Provincias { get; set; }
        public DbSet<Localidad> Localidades { get; set; }

    }
}
