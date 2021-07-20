namespace Sistema.Sanatorio.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Servicios.Interface.Usuario;
    using System.Collections.Generic;
    using Servicios.Interface.Persona;
    using System.Linq;
    using Constantes.Clases.Response;
    public class SeguridadController : Controller
    {
        private readonly IUsuarioServicio _usuarioServicio;
        private readonly Response _response;
        public SeguridadController(IUsuarioServicio usuarioServicio, Response response)
        {
            _usuarioServicio = usuarioServicio;
            _response = response;
        }

        [HttpGet]
        public IActionResult ListadoUsuarios()
        {
            return View();
        }

        [HttpGet]
        public JsonResult Usuarios()
        {
            return Json(_usuarioServicio.GetUsuarios());
        }

        [HttpPost]
        public JsonResult CrearUsuario([FromBody] List<PersonaDto> personas)
        {
            if (!personas.Where(x => x.Item).Any())
            {
                _response.Estado = false;
                _response.Mensaje = "Por favor seleccione el/los usuarios.";
            }

            try
            {
                var personasSeleccionadas = personas.Where(x => x.Item).ToList();
                bool crearUsuario = _usuarioServicio.CrearUsuario(personasSeleccionadas);

                if (!crearUsuario) {
                    _response.Estado = false;
                    _response.Mensaje = "Ocurrio un error al crear los usuaros.";
                    return Json(_response);
                }

                _response.Estado = true;
                _response.Mensaje = "Los usuarios fueron creados exitosamente.";
                return Json(_response);
            }
            catch
            {
                _response.Estado = false;
                _response.Mensaje = "Algo ah ocurrido al crear los usuarios. Intenelo mas tarde.";
                return Json(_response);
            }
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }
        
        [HttpPost]
        public JsonResult IniciarSesion([FromBody] UsuarioDto usuario)
        {
            if (string.IsNullOrEmpty(usuario.Nombre) || string.IsNullOrEmpty(usuario.Password))
            {
                _response.Estado = false;
                _response.Mensaje = "Por favor ingrese usuario y contraseña.";

                return Json(_response);
            }

            bool ejecutarInicioSesion = _usuarioServicio.IniciarSesion(usuario.Nombre, usuario.Password);

            if (ejecutarInicioSesion)
            {
                if (_usuarioServicio.VerificarBloque(usuario.Nombre, usuario.Password))
                {
                    _response.Estado = false;
                    _response.Mensaje = $"El usuario {usuario.Nombre} se encuentra bloqueado";

                    return Json(_response);
                }

                _response.Estado = true;
                return Json(_response);
            }

            _response.Estado = false;
            _response.Mensaje = "Usuario y/o contraseña incorrectas.";
            return Json(_response);
        }
    }
}