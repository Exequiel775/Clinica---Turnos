namespace Entidades.UnidadDeTrabajo
{
    using Entidad.Base.Repositorio;
    using System.Threading.Tasks;
    public interface IUnidadDeTrabajo
    {
        Task<bool> Commit();
        Task RoolBack();
        IRepositorio<Provincia> RepositorioProvincia { get; }
        IRepositorio<Localidad> LocalidadRepositorio { get; }
    }
}