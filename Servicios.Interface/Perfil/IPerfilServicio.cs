namespace Servicios.Interface.Perfil
{
    using System.Linq;
    using Controlador;
    using System.Collections.Generic;
    public interface IPerfilServicio
    {
        IQueryable<PerfilDto> Get();
        bool Add(PerfilDto perfil);
        bool Update(PerfilDto perfil);
        bool Delete(PerfilDto perfil);
        bool VerificarExistenciaNombre(string perfil);
        // SEGURIDAD
        IQueryable<ControladorDto> ObtenerControladoresAsignados(long idPerfil);
        IQueryable<ControladorDto> ObtenerControladoresNoAsignados(long idPerfil);
        bool AsignarPermisos(List<ControladorDto> controladores, long perfil);
    }
}