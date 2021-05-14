namespace Entidades.UnidadDeTrabajo
{
    using Entidad.Base.Repositorio;
    using System.Threading.Tasks;
    using Entidades.Repositorio;
    public interface IUnidadDeTrabajo
    {
        void CommitNoAsync();
        Task<bool> CommitAsync();
        Task RoolBack();
        IRepositorio<Provincia> RepositorioProvincia { get; }
        IRepositorio<Localidad> LocalidadRepositorio { get; }
        IRepositorioRecepcionista RecepcionistaRepositorio { get; }
        IRepositorio<Especialidad> EspecialidadRepositorio { get; }
        IRepositorioMedico MedicoRepositorio { get; }
    }
}