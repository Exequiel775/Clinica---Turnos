namespace Sistema.Sanatorio.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Servicios.Interface.Persona;
    using System.Threading.Tasks;
    using System.Linq;
    using System.Collections.Generic;
    public class PersonaController : Controller
    {
        private readonly IRecepcionistaServicio _recepcionistaServicio;

        public PersonaController(IRecepcionistaServicio recepcionistaServicio)
        {
            _recepcionistaServicio = recepcionistaServicio;
        }

        [HttpGet]
        public async Task<IActionResult> Recepcionistas()
        {
            var recepcionistas = await _recepcionistaServicio.Get(typeof(RecepcionistaDto));
            return View((List<RecepcionistaDto>)recepcionistas);
        }

        [HttpGet]
        public IActionResult NuevoRecepcionista()
        {
            return View();
        }

        [HttpPost]
        public async Task<JsonResult> NuevoRecepcionista([FromBody]RecepcionistaDto recepcionista)
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