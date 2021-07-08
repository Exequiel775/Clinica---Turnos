namespace Sistema.Sanatorio.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Servicios.Interface.Turno;
    using Servicios.Interface.Paciente;
    using Models;
    using System;
    using Constantes.Clases.Response;
    public class TurnosController : Controller
    {
        private readonly ITurnoServicio _turnoServicio;
        private readonly IPacienteServicio _pacienteServicio;
        private readonly Response _response;
        public TurnosController(ITurnoServicio turnoServicio, IPacienteServicio pacienteServicio, Response response)
        {
            _turnoServicio = turnoServicio;
            _pacienteServicio = pacienteServicio;
            _response = response;
        }

        // ======== VISTAS ========= //

        [HttpGet]
        public IActionResult NuevoTurno()
        {
            return View();
        }

        [HttpGet]
        public IActionResult BuscarTurnoPaciente()
        {
            return View();
        }

        // ======= Metodos que devuelven informacion a la vista ====== //

        [HttpGet]
        public JsonResult BuscarPaciente(int dni)
        {
            var modelTurno = new ModelTurno();

            // Verificamos si el dato que ingreso el usuario para buscar es de tipo int
            if (dni.GetType() != typeof(int))
            {
                // Si no lo es mandamos un mensaje al front mostrando la advertencia.
                modelTurno.Mensaje = "Debe ingresar solo numeros";
                return Json(new { paciente = modelTurno });
            }

            // Si es un dato de tipo int se lo pasamos al servicio y buscamos el paciente.
            var paciente = _pacienteServicio.GetByDni(dni);

            // Si el paciente existe en nuestra DB cargamos nuestro objeto con los datos obtenidos
            if (paciente != null)
            {
                modelTurno.Paciente.Id = paciente.Id;
                modelTurno.Paciente.LocalidadId = paciente.LocalidadId;
                modelTurno.Paciente.Nombre = paciente.Nombre;
                modelTurno.Paciente.Apellido = paciente.Apellido;
                modelTurno.Paciente.Dni = paciente.Dni;
                modelTurno.Paciente.FechaNacimiento = paciente.FechaNacimiento;
                modelTurno.Paciente.Email = paciente.Email;
                modelTurno.Paciente.Telefono = paciente.Telefono;
                modelTurno.Paciente.Celular = paciente.Celular;

                return Json(new { paciente = modelTurno });
            }

            // De lo contrario mandamos un mensaje al front mostrando la advertencia.
            modelTurno.Mensaje = "El dni ingresado no esta registrado en el sistema.";

            return Json(new { paciente = modelTurno });
        }

        [HttpPost]
        public JsonResult GrabarTurno([FromBody] TurnoDto datosTurno)
        {
            var response = new Response();

            try
            {
                /*
                var turnoDto = new TurnoDto();

                turnoDto.PacienteId = datosTurno.Paciente.Id;
                turnoDto.EspecialidadId = datosTurno.Turno.EspecialidadId;
                turnoDto.MedicoId = datosTurno.Turno.MedicoId;
                turnoDto.FechaAtencion = datosTurno.Turno.FechaAtencion;
                turnoDto.Paciente.Nombre = datosTurno.Paciente.Nombre;
                turnoDto.Paciente.Apellido = datosTurno.Paciente.Apellido;
                turnoDto.Paciente.Dni = datosTurno.Paciente.Dni;
                turnoDto.Paciente.LocalidadId = datosTurno.Paciente.LocalidadId;
                turnoDto.Paciente.FechaNacimiento = datosTurno.Paciente.FechaNacimiento;
                turnoDto.Paciente.Email = datosTurno.Paciente.Email;
                turnoDto.Paciente.Celular = datosTurno.Paciente.Celular;
                turnoDto.Paciente.Telefono = datosTurno.Paciente.Telefono;
                */
                bool ejecutarAdd = _turnoServicio.Add(datosTurno);
                
                if (ejecutarAdd)
                {
                    response.Estado = true;
                    response.Mensaje = "El turno fue grabado exitosamente";

                    return Json(new { response = response });
                }

                response.Estado = false;
                response.Mensaje = "Ocurrio u nerror al grabar el turno";

                return Json(new { response = response } );
            }
            catch
            {
                response.Estado = false;
                response.Mensaje = "Ocurrio un error al grabar el turno";
                return Json(new { response = response });
            }
        }
        
        [HttpGet]
        public JsonResult BuscarTurno(int? dniPaciente, int? numeroTurno)
        {
            if (dniPaciente.GetValueOrDefault() == 0 && numeroTurno.GetValueOrDefault() == 0)
            {
                _response.Estado = false;
                _response.Mensaje = "Por favor ingrese el dni del paciente o el NRO del turno.";
                _response.Objeto = null;
                _response.ListaObjetos = null;
                return Json(_response);
            }

            var datosTurno = _turnoServicio.BuscarTurno(numeroTurno.GetValueOrDefault(), 
            dniPaciente.GetValueOrDefault());

            if (datosTurno == null){
                _response.Estado = false;
                _response.Mensaje = "No se encontraron turnos asociados a los datos ingresados";
                _response.Objeto = null;
                _response.ListaObjetos = null;
                return Json(_response);
            }

            _response.Estado = true;
            _response.ListaObjetos = datosTurno;
            return Json(_response);
        }
    }
}