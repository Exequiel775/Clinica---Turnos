namespace Entidades.UnidadDeTrabajo
{
    using Entidad.Base.Repositorio;
    using System.Threading.Tasks;
    using Entidades.Repositorio;
    public interface IUnidadDeTrabajo
    {
        Task<bool> Commit();
        Task RoolBack();
        IRepositorio<Provincia> RepositorioProvincia { get; }
        IRepositorio<Localidad> LocalidadRepositorio { get; }
        IRepositorioRecepcionista RecepcionistaRepositorio {get;}
    }
}