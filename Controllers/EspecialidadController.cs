namespace Sistema.Sanatorio.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Servicios.Interface.Especialidad;
    using System.Linq;
    using System;
    using Models;
    public class EspecialidadController : Controller
    {
        private readonly IEspecialidadServicio _especialidadServicio;
        private int _cantidadMostrar = 5;
        public EspecialidadController(IEspecialidadServicio especialidadServicio)
        {
            _especialidadServicio = especialidadServicio;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var especialidades = _especialidadServicio.Get();

            return View();
        }

        [HttpGet]
        public JsonResult JsonEspecialidades()
        {
            var listadoEspecialidades = _especialidadServicio.Get();

            return Json(new { especialidades = listadoEspecialidades });
        }

        [HttpGet]
        public JsonResult JsonEspecialidadesPaginadas(int? pagina = null)
        {
            var especialidades = _especialidadServicio.Get();

            // Pagina actual
            var paginaActual = pagina ?? 1;

            // Todas las especialidades
            decimal cantidadaRegistros = especialidades.Count();
            int cantidadPaginas = Convert.ToInt32(Math.Ceiling(cantidadaRegistros / _cantidadMostrar));

            // Retornamos las especialidades paginadas

            var modeloEspecialidad = new ModelEspecialidad();
            modeloEspecialidad.Especialidades = especialidades.Skip((paginaActual - 1) * _cantidadMostrar).Take(_cantidadMostrar).ToList();
            modeloEspecialidad.Paginas = cantidadPaginas;
            modeloEspecialidad.TotalRegistros = especialidades.Count();
            modeloEspecialidad.Mostrando = _cantidadMostrar * paginaActual;

            return Json(new
            {
                especialidad = modeloEspecialidad
            });
        }

        [HttpPost]
        public JsonResult AddEspecialidad([FromBody] EspecialidadDto especialidad)
        {
            if (ModelState.IsValid)
            {
                var ejecutarCmd = _especialidadServicio.Add(especialidad);
                return Json(new { respuesta = ejecutarCmd });
            }

            return Json(new { respuesta = false });
        }

        [HttpPut]
        public JsonResult UpdateEspecialidad([FromBody] EspecialidadDto especialidadModificar)
        {
            if (ModelState.IsValid)
            {
                var ejecutarUpdate = _especialidadServicio.Update(especialidadModificar);

                return Json(new { respuesta = ejecutarUpdate });
            }

            return Json(new { respuesta = false });
        }
    }
}