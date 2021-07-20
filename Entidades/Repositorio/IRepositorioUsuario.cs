namespace Entidades.Repositorio
{
    using Entidad.Base.Repositorio;
    public interface IRepositorioUsuario : IRepositorio<Usuario>
    {
        bool IniciarSesion(string user, string password);
        bool VerificarBloqueo(string user, string password);
    }
}