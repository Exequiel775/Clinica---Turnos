namespace Servicios.Interface.Usuario
{
    using System.Linq;
    using System.Collections.Generic;
    using Servicios.Interface.Persona;
    public interface IUsuarioServicio
    {
        bool CrearUsuario(List<PersonaDto> personas);
        bool IniciarSesion(string usuario, string password);
        bool BloquearDesbloquearUsuarios(List<UsuarioDto> usuarios);
        bool VerificarBloque(string usuario, string password);
        IQueryable<PersonaDto> GetUsuarios();
    }
}