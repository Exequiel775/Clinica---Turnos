
namespace Infraestructura
{
    using Microsoft.EntityFrameworkCore;
    using Entidades;
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
        : base(options)
        {

        }

        public DbSet<Provincia> Provincias { get; set; }
        public DbSet<Localidad> Localidades { get; set; }
        public DbSet<Persona> Personas { get; set; }
        public DbSet<Recepcionista> Recepcionistas { get; set; }
        public DbSet<Especialidad> Especialidades { get; set; }
        public DbSet<Medico> Medicos { get; set; }
        public DbSet<Turno> Turnos { get; set; }
        public DbSet<Paciente> Pacientes { get; set; }
    }
}
