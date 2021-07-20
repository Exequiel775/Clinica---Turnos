namespace Infraestructura.Repositorio
{
    using System.Linq;
    using Entidades;
    using Entidades.Repositorio;
    using Microsoft.EntityFrameworkCore;
    public class RepositorioPersona : IRepositorioPersona
    {
        private readonly DataContext _db;

        public RepositorioPersona(DataContext db)
        {
            _db = db;
        }
        
        public IQueryable<Persona> GetPersonas()
        {
            return _db.Personas.Include(x => x.Usuario)
            .Select(x => new Persona
            {
                Id = x.Id,
                Nombre = x.Nombre,
                Apellido = x.Apellido,
                Dni = x.Dni,
                Usuario = new Usuario
                {
                    Nombre = x.Usuario.Nombre ?? "NO ASIGNADO",
                    EstaBloqueado = x.Usuario.EstaBloqueado,
                    Id = x.Usuario.Id,
                    Password = x.Usuario.Password ?? "NO ASIGNADO"
                }

            }).AsQueryable();
        }
    }
}