namespace Infraestructura.Repositorio
{
    using System;
    using System.Linq;
    using Entidades;
    using Entidades.Repositorio;
    public class RepositorioUsuario : Repositorio.Repositorio<Usuario>, IRepositorioUsuario
    {
        private readonly DataContext _context;

        public RepositorioUsuario(DataContext context)
        :base(context)
        {
            _context = context;
        }
        public bool IniciarSesion(string user, string password)
        {
            if (string.IsNullOrEmpty(user) || string.IsNullOrEmpty(password))
                throw new Exception("Los campos usuario y contraseña son obligatorios.");
            
            return _context.Usuarios.Where(x => x.Nombre == user && x.Password == password).Any();
        }

        public bool VerificarBloqueo(string user, string password)
        {
            return _context.Usuarios.FirstOrDefault(x => x.Nombre == user && x.Password == password)
            .EstaBloqueado;
        }
    }
}