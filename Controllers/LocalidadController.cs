namespace Sistema.Sanatorio.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Servicios.Interface.Localidad;
    using System.Threading.Tasks;
    using System.Linq;
    public class LocalidadController : Controller
    {
        private readonly ILocalidadServicio _localidadServicio;

        public LocalidadController(ILocalidadServicio localidadServicio)
        {
            _localidadServicio = localidadServicio;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<JsonResult> Get()
        {
            return Json(new { localidades = await _localidadServicio.Get() });
        }
        
        [HttpPost]
        public async Task<JsonResult> Add([FromBody] LocalidadDto localidad)
        {
            var agregarProvincia = await _localidadServicio.Add(localidad);

            return Json(new { respuesta = agregarProvincia });
        }
    }
}