namespace Entidades.Repositorio
{
    using Entidad.Base.Repositorio;
    using System.Linq;
    public interface IRepositorioMedico : IRepositorio<Medico>
    {
        IQueryable<Medico> GetByEspecialidad(long especialidadId);
    }
}