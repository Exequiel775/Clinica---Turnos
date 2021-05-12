namespace Sistema.Sanatorio.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Servicios.Interface.Persona;
    using System.Threading.Tasks;
    using System.Linq;
    using System.Collections.Generic;
    using System;
    public class PersonaController : Controller
    {
        private readonly IRecepcionistaServicio _recepcionistaServicio;
        private readonly int _cantidadMostrar = 5;
        public PersonaController(IRecepcionistaServicio recepcionistaServicio)
        {
            _recepcionistaServicio = recepcionistaServicio;
        }

        [HttpGet]
        public async Task<IActionResult> Recepcionistas(string buscar = null, int? index = null)
        {
            var cadenaBuscar = buscar ?? string.Empty;
            var recepcionistasSinFiltrar = (List<RecepcionistaDto>)await _recepcionistaServicio.Get(typeof(RecepcionistaDto), string.Empty);
            var recepcionistasFiltrados = (List<RecepcionistaDto>)await _recepcionistaServicio.Get(typeof(RecepcionistaDto), cadenaBuscar);

            // PAGINADO
            var _paginado = index ?? 1;
            decimal cantidadRegistros = recepcionistasSinFiltrar.Count();
            int totalPaginas = Convert.ToInt32(Math.Ceiling(cantidadRegistros / _cantidadMostrar));

            // FILTRO
            var datosListos = recepcionistasFiltrados.Skip((_paginado - 1) * _cantidadMostrar).Take(_cantidadMostrar);

            // VISTA
            ViewBag.Cadena = cadenaBuscar;
            ViewBag.CantidadBotones = totalPaginas;

            return View(datosListos.ToList());
        }

        [HttpGet]
        public IActionResult NuevoRecepcionista()
        {
            return View();
        }

        [HttpPost]
        public async Task<JsonResult> AgregarRecepcionista([FromBody] RecepcionistaDto recepcionista)
        {
            if (ModelState.IsValid)
            {
                var agregarRecepcionista = await _recepcionistaServicio.Add(recepcionista);

                return Json(new { respuesta = agregarRecepcionista });
            }

            return Json(new{ respuesta = false });
        }
    }
}