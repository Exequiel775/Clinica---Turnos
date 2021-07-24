namespace Sistema.Sanatorio.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Reflection;
    using Microsoft.AspNetCore.Mvc;
    using System.Linq;
    using Servicios.Interface.Controlador;
    public class ControladorController : Controller
    {
        private readonly IControladorServicio _controladorServicio;
        public ControladorController(IControladorServicio controladorServicio)
        {
            _controladorServicio = controladorServicio;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult Controladores()
        {
            var controladoresDb = _controladorServicio.Get();
            var listaControladores = new List<ControladorDto>();

            foreach(var item in GetControllerName())
            {
                var controlador = new ControladorDto();

                controlador.Descripcion = item;
                controlador.ExisteDb = controladoresDb.Any() ?
                controladoresDb.Any(x => x.Descripcion == item)
                : false;

                listaControladores.Add(controlador);
            }

            return Json(listaControladores);
        }

        [HttpPost]
        public JsonResult Grabar([FromBody] List<ControladorDto> controladores)
        {
            bool ejecutarAdd = _controladorServicio.Add(controladores);

            if (ejecutarAdd) {
                return Json("Grabados");
            }

            return Json("Error al grabar");
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