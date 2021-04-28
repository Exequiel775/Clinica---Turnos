namespace Sistema.Sanatorio.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Servicios.Interface.Localidad;
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

        
    }
}