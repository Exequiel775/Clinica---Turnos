namespace Sistema.Sanatorio.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Servicios.Interface.Paciente;
    public class PacienteController : Controller
    {
        private readonly IPacienteServicio _pacienteServicio;

        public PacienteController(IPacienteServicio pacienteServicio)
        {
            _pacienteServicio = pacienteServicio;
        }

        [HttpGet]
        public JsonResult BuscarPaciente(int dniPaciente)
        {
            return Json(_pacienteServicio.GetByDni(dni: dniPaciente));
        }
    }
}