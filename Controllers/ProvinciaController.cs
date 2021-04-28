namespace Sistema.Sanatorio.Controllers
{
    using Servicios.Interface.Provincia;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    public class ProvinciaController : Controller
    {
        private readonly IProvinciaServicio _provinciaServicio;

        public ProvinciaController(IProvinciaServicio provinciaServicio)
        {
            _provinciaServicio = provinciaServicio;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<JsonResult> NuevaProvincia([FromBody] ProvinciaDto provincia)
        {
            if (ModelState.IsValid)
            {
                var ejecutarOperacion = await _provinciaServicio.Add(provincia);

                return Json(new { finalizado = ejecutarOperacion });
            }

            return Json(new { finalizado = false });
        }

        [HttpPut]
        public async Task<JsonResult> ModificarProvincia([FromBody] ProvinciaDto provinciaModificar)
        {
            if (ModelState.IsValid)
            {
                var ejecutarModificacion = await _provinciaServicio.Update(provinciaModificar);

                return Json(new { finalizado = ejecutarModificacion });
            }

            return Json(new { finalizado = false });
        }

        [HttpGet]
        public async Task<JsonResult> JsonProvincias()
        {
            var todasProvincias = await _provinciaServicio.Get();

            return Json(new { provincias = todasProvincias });
        }

        [HttpGet]
        public async Task<JsonResult> JsonGetProvincia(long idProvincia)
        {
            var provinciaBuscar = await _provinciaServicio.GetById(idProvincia);

            return Json(new { provincia = provinciaBuscar } );
        }
    }
}