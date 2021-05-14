namespace Sistema.Sanatorio.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Servicios.Interface.Especialidad;
    public class EspecialidadController : Controller
    {
        private readonly IEspecialidadServicio _especialidadServicio;

        public EspecialidadController(IEspecialidadServicio especialidadServicio)
        {
            _especialidadServicio = especialidadServicio;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult JsonEspecialidades()
        {
            var listadoEspecialidades = _especialidadServicio.Get();

            return Json(new { especialidades = listadoEspecialidades });
        }

        [HttpPost]
        public JsonResult AddEspecialidad(EspecialidadDto especialidad)
        {
            if (ModelState.IsValid)
            {
                var ejecutarCmd = _especialidadServicio.Add(especialidad);
                return Json(new { respuesta = ejecutarCmd });
            }

            return Json(new { respuesta = false });
        }
    }
}