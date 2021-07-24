namespace Sistema.Sanatorio.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Servicios.Interface.Perfil;
    using System.Linq;
    using Constantes.Clases.Response;
    using System.Collections.Generic;
    using System;
    using System.Reflection;

    public class PerfilController : Controller
    {
        private readonly IPerfilServicio _perfilServicio;
        private Response _response;
        public PerfilController(IPerfilServicio perfilServicio, Response response)
        {
            _perfilServicio = perfilServicio;
            _response = response;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult JsonPerfiles()
        {
            return Json(_perfilServicio.Get());
        }

        [HttpGet]
        public IActionResult NuevoPerfil()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Add([FromBody] PerfilDto perfil)
        {
            if (string.IsNullOrEmpty(perfil.Descripcion))
            {
                _response.Estado = false;
                _response.Mensaje = "Por favor ingrese una descripción";
                return Json(_response);
            }

            if (_perfilServicio.VerificarExistenciaNombre(perfil.Descripcion))
            {
                _response.Estado = false;
                _response.Mensaje = "El perfil ingresado ya existe en el sistema.";
                return Json(_response);
            }

            bool ejecutarAdd = _perfilServicio.Add(perfil);

            if (ejecutarAdd)
            {
                _response.Estado = true;
                _response.Mensaje = "El perfil fue creado exitosamente";
                return Json(_response);
            }

            _response.Estado = false;
            _response.Mensaje = "Ocurrio un error al crear el perfil. Estamos trabajando en ello.";
            return Json(_response);
        }

        [HttpPost]
        public JsonResult EliminarPerfil([FromBody] PerfilDto perfil)
        {
            if (System.Object.ReferenceEquals(perfil, null)) {
                _response.Estado = false;
                _response.Mensaje = "Debe seleccionar un perfil para eliminar";
                return Json(_response);
            }

            bool ejecutarDelete = _perfilServicio.Delete(perfil);

            if (ejecutarDelete) {
                _response.Estado = true;
                _response.Mensaje= "El perfil fue eliminado exitosamente";
                return Json(_response);
            }

            _response.Estado = false;
            _response.Mensaje = "Ocurrio un error al elimninar el perfil. Estamos trabajando para solucionarlo.";
            return Json(_response);
        }

        [HttpGet]
        public IActionResult Permisos()
        {
            return View();
        }

        [HttpGet]
        public JsonResult PermisosAsignados(long perfil)
        {
            return Json(_perfilServicio.ObtenerControladoresAsignados(perfil));
        }

        [HttpGet]
        public JsonResult PermisosNoAsignados(long perifl)
        {
            return Json(_perfilServicio.ObtenerControladoresNoAsignados(perifl));
        }

        private static List<Type> GetSubClass<T>()
        {
            return Assembly.GetCallingAssembly().GetTypes()
            .Where(type => type.IsSubclassOf(typeof(T))).ToList();
        }

        public List<string> GetControllerName()
        {
            List<string> controllersName = new List<string>();

            GetSubClass<Controller>().ForEach(type => 
            controllersName.Add(type.Name.Replace("Controller", "")));

            return controllersName;
        }
    }
}