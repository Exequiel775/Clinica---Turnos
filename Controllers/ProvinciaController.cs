namespace Sistema.Sanatorio.Controllers
{
    using Servicios.Interface.Provincia;
    using Microsoft.AspNetCore.Mvc;
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
        public JsonResult NuevaProvincia([FromBody] ProvinciaDto provincia)
        {
            if (ModelState.IsValid)
            {
                var ejecutarOperacion = _provinciaServicio.Add(provincia);

                return Json(new { finalizado = ejecutarOperacion });
            }

            return Json(new { finalizado = false });
        }

        [HttpPut]
        public JsonResult ModificarProvincia([FromBody] ProvinciaDto provinciaModificar)
        {
            if (ModelState.IsValid)
            {
                var ejecutarModificacion = _provinciaServicio.Update(provinciaModificar);

                return Json(new { finalizado = ejecutarModificacion });
            }

            return Json(new { finalizado = false });
        }

        [HttpGet]
        public JsonResult JsonProvincias()
        {
            var todasProvincias = _provinciaServicio.Get();

            return Json(new { provincias = todasProvincias });
        }

        [HttpGet]
        public JsonResult JsonGetProvincia(long idProvincia)
        {
            var provinciaBuscar = _provinciaServicio.GetById(idProvincia);

            return Json(new { provincia = provinciaBuscar } );
        }
    }
}