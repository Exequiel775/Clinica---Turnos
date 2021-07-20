
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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Medico>().HasMany(x => x.Turnos).WithOne(e => e.Medico).OnDelete(DeleteBehavior.NoAction);
            modelBuilder.Entity<Perfil_Controlador>().HasKey(x => new {x.PerfilId, x.ControladorId });
            modelBuilder.Entity<Usuario_Perfil>().HasKey(x => new { x.UsuarioId, x.PerfilId });

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Provincia> Provincias { get; set; }
        public DbSet<Localidad> Localidades { get; set; }
        public DbSet<Persona> Personas { get; set; }
        public DbSet<Recepcionista> Recepcionistas { get; set; }
        public DbSet<Especialidad> Especialidades { get; set; }
        public DbSet<Medico> Medicos { get; set; }
        public DbSet<Turno> Turnos { get; set; }
        public DbSet<Paciente> Pacientes { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Perfil> Perfiles { get; set; }
        public DbSet<Controlador> Controladores { get; set; }
        public DbSet<Perfil_Controlador> Perfil_Controladores { get; set; }
        public DbSet<Usuario_Perfil> Usuario_Perfiles { get; set; }
    }
}
