namespace Entidades.Repositorio
{
    using System.Linq;
    using System.Collections.Generic;
    public interface IRepositorioPerfilControlador
    {
        IQueryable<Perfil_Controlador> Get(string propiedadNavegacion = "");
        bool AgregarPermiso(List<Perfil_Controlador> perfil_Controlador);
        bool EliminarPermiso(List<Perfil_Controlador> perfil_Controlador);
    }
}