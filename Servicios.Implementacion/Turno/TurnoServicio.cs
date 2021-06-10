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

                    _unidadDeTrabajo.TurnoRepositorio.AddNoAsync(new Entidades.Turno
                    {
                        PacienteId = turno.PacienteId,
                        EspecialidadId = turno.EspecialidadId,
                        MedicoId = 24,
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

        /*===================== METODOS PRIVADOS =====================*/
        
        private int ObtenerNumeroTurno()
        {
            var turnos = _unidadDeTrabajo.TurnoRepositorio.GetNoAsync();

            return turnos.Any() ? turnos.Max(x => x.Numero) + 1 : 1;
        }
    }
}