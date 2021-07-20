namespace Entidades.Repositorio
{
    using System.Linq;
    public interface IRepositorioPersona
    {
        IQueryable<Persona> GetPersonas(); 
    }
}