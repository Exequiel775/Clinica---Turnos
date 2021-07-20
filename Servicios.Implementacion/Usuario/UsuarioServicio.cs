namespace Servicios.Implementacion.Usuario
{
    using System.Collections.Generic;
    using Servicios.Interface.Persona;
    using Servicios.Interface.Usuario;
    using Entidades.UnidadDeTrabajo;
    using System.Linq;
    using static Constantes.Clases.Encrypt.Encriptar;
    using System.Transactions;
    using System.Linq.Expressions;
    using System;

    public class UsuarioServicio : IUsuarioServicio
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;

        public UsuarioServicio(IUnidadDeTrabajo unidadDeTrabajo)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
        }
        public bool BloquearDesbloquearUsuarios(List<UsuarioDto> usuarios)
        {
            throw new System.NotImplementedException();
        }

        public bool CrearUsuario(List<PersonaDto> personas)
        {
            if (!personas.Any()) return false;

            using (var transaction = new TransactionScope())
            {

                try
                {
                    foreach (var persona in personas)
                    {
                        _unidadDeTrabajo.UsuarioRepositorio.AddNoAsync(new Entidades.Usuario
                        {
                            PersonaId = persona.Id,
                            Nombre = ObtenerNombreUsuario(persona.Nombre, persona.Apellido),
                            Password = EncriptarPassword("P$assword"),
                            EstaBloqueado = false
                        });
                    }

                    _unidadDeTrabajo.CommitNoAsync();

                    transaction.Complete();

                    return true;
                }
                catch
                {
                    transaction.Dispose();
                    return false;
                }
            }
        }

        public IQueryable<PersonaDto> GetUsuarios()
        {
            return _unidadDeTrabajo.PersonaRepositorio.GetPersonas()
            .Select(x => new PersonaDto
            {

                Id = x.Id,
                Nombre = x.Nombre,
                Apellido = x.Apellido,
                Dni = x.Dni,
                Usuario = new UsuarioDto
                {
                    Id = x.Usuario.Id,
                    Nombre = x.Usuario.Nombre,
                    EstaBloqueado = x.Usuario.EstaBloqueado,
                    Password = x.Usuario.Password
                }
            });
        }

        public IQueryable<UsuarioDto> GetUsuariosRegistrados()
        {
            throw new NotImplementedException();
        }

        public bool IniciarSesion(string usuario, string password)
        {
            if (string.IsNullOrEmpty(usuario) || string.IsNullOrEmpty(password))
                throw new Exception("Por favor ingrese usuario y contraseña.");
                
            return _unidadDeTrabajo.UsuarioRepositorio.IniciarSesion(usuario, EncriptarPassword(password));
        }

        public bool VerificarBloque(string usuario, string password)
        {
            return _unidadDeTrabajo.UsuarioRepositorio.VerificarBloqueo(usuario, EncriptarPassword(password));
        }

        private string ObtenerNombreUsuario(string nombre, string apellido)
        {
            int contadorLetras = 1;

            string nombreUsuario = $"{nombre.Trim().ToLower().Substring(0, contadorLetras)}{apellido.Trim().ToLower()}";

            while (_unidadDeTrabajo.UsuarioRepositorio.GetNoAsync()
            .Where(x => x.Nombre == nombreUsuario).Any())
            {
                contadorLetras++;

                nombreUsuario = $"{nombre.Trim().ToLower().Substring(0, contadorLetras)}{apellido.Trim().ToLower()}";
            }

            return nombreUsuario;
        }
    }
}