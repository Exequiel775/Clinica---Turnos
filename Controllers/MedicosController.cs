namespace Sistema.Sanatorio.Controllers
{
    using Servicios.Interface.Persona;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using System.Collections.Generic;
    public class MedicosController : Controller
    {
        private readonly IMedicoServicio _medicoServicio;

        public MedicosController(IMedicoServicio medicoServicio)
        {
            _medicoServicio = medicoServicio;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return View((IEnumerable<MedicoDto>)await _medicoServicio.Get(typeof(MedicoDto), string.Empty));
        }
    }
}