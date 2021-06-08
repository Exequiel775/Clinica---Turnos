namespace Sistema.Sanatorio.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Servicios.Interface.Turno;
    using Servicios.Interface.Paciente;
    using Models;
    using System;
    public class TurnosController : Controller
    {
        private readonly ITurnoServicio _turnoServicio;
        private readonly IPacienteServicio _pacienteServicio;
        public TurnosController(ITurnoServicio turnoServicio, IPacienteServicio pacienteServicio)
        {
            _turnoServicio = turnoServicio;
            _pacienteServicio = pacienteServicio;
        }

        [HttpGet]
        public IActionResult NuevoTurno()
        {
            return View();
        }

        [HttpGet]
        public JsonResult BuscarPaciente(int dni)
        {
            var modelPaciente = new ModelPaciente();

            // Verificamos si el dato que ingreso el usuario para buscar es de tipo int
            if (dni.GetType() != typeof(int))
            {
                // Si no lo es mandamos un mensaje al front mostrando la advertencia.
                modelPaciente.Mensaje = "Debe ingresar solo numeros";
                return Json(new { paciente = modelPaciente });
            }

            // Si es un dato de tipo int se lo pasamos al servicio y buscamos el paciente.
            var paciente = _pacienteServicio.GetByDni(dni);

            // Si el paciente existe en nuestra DB cargamos nuestro objeto con los datos obtenidos
            if (paciente != null) 
            {
                modelPaciente.Paciente.Id = paciente.Id;
                modelPaciente.Paciente.LocalidadId = paciente.LocalidadId;
                modelPaciente.Paciente.Nombre = paciente.Nombre;
                modelPaciente.Paciente.Apellido = paciente.Apellido;
                modelPaciente.Paciente.Dni = paciente.Dni;
                modelPaciente.Paciente.FechaNacimiento = paciente.FechaNacimiento;
                modelPaciente.Paciente.Email = paciente.Email;
                modelPaciente.Paciente.Telefono = paciente.Telefono;
                modelPaciente.Paciente.Celular = paciente.Celular;

                return Json(new { paciente = modelPaciente });
            }

            // De lo contrario mandamos un mensaje al front mostrando la advertencia.
            modelPaciente.Mensaje = "El dni ingresado no esta registrado en el sistema.";

            return Json(new { paciente = modelPaciente } );
        }
    }
}