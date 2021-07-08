namespace Servicios.Implementacion.Turno
{
    using System.Linq;
    using Servicios.Interface.Turno;
    using Entidades.UnidadDeTrabajo;
    using System;
    using System.Transactions;
    using Servicios.Interface.Paciente;
    public class TurnoServicio : ITurnoServicio
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;
        private readonly IPacienteServicio _pacienteServicio;
        public TurnoServicio(IUnidadDeTrabajo unidadDeTrabajo, IPacienteServicio pacienteServicio)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
            _pacienteServicio = pacienteServicio;
        }
        public bool Add(TurnoDto turno)
        {
            if (Object.ReferenceEquals(turno, null) || Object.ReferenceEquals(turno.Paciente, null)) {
                throw new Exception("No se pudo grabar el turno.");
            }

            using(var t = new TransactionScope())
            {
                try
                {
                    // Si no existe ese paciente, lo creamos...
                    if (!_pacienteServicio.VerificarExistencia(turno.Paciente.Dni)) {
                        // Guardo el id del paciente que me devuelve el servicio 
                        // para grabarlo en el turno
                        var grabarPaciente = _pacienteServicio.Add(turno.Paciente);

                        turno.PacienteId = grabarPaciente;
                    }
                    else
                    {
                        var paciente = _pacienteServicio.GetByDni(turno.Paciente.Dni);

                        turno.PacienteId = paciente.Id;
                    }

                    _unidadDeTrabajo.TurnoRepositorio.AddNoAsync(new Entidades.Turno
                    {
                        PacienteId = turno.PacienteId,
                        EspecialidadId = turno.EspecialidadId,
                        MedicoId = turno.MedicoId,
                        RecepcionistaId = 17,
                        Numero = ObtenerNumeroTurno(),
                        FechaEmision = DateTime.Now,
                        FechaAtencion = turno.FechaAtencion,
                        EstadoTurno = Constantes.Clases.EstadoTurno.En_Espera
                    });

                    _unidadDeTrabajo.CommitNoAsync();

                    t.Complete();

                    return true;
                }
                catch (Exception e)
                {
                    t.Dispose();
                    throw new Exception(e.Message);
                }
            }
        }

        public IQueryable<TurnoDto> GetByMedico(long idMedico)
        {
            throw new System.NotImplementedException();
        }

        public IQueryable<TurnoDto> BuscarTurno(int numero, int dniPaciente)
        {
            // Me falta hacer el modal para buscar un turno por numero y por dni de paciente
            // En caso q el turno exista, se debe mostrar los datos del mismo
            // asi mismo esta info seria para ver si el estado del turno
            var turnoBuscar = _unidadDeTrabajo.TurnoRepositorio.GetNoAsync("Paciente")
            .Where(x => x.Numero == numero || x.Paciente.Dni == dniPaciente);

            if (turnoBuscar.Any())
            {
                return turnoBuscar
                .Select(x => new TurnoDto{
                    Id = x.Id,
                    Numero = x.Numero,
                    FechaEmision = x.FechaEmision,
                    EstadoTurno = x.EstadoTurno,
                    PacienteId = x.PacienteId
                }).AsQueryable();
            }

            return null;
        }

        /*===================== METODOS PRIVADOS =====================*/
        
        private int ObtenerNumeroTurno()
        {
            var turnos = _unidadDeTrabajo.TurnoRepositorio.GetNoAsync();

            return turnos.Any() ? turnos.Max(x => x.Numero) + 1 : 1;
        }
    }
}