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
                        MedicoId = turno.MedicoId,
                        RecepcionistaId = turno.RecepcionistaId,
                        Numero = turno.Numero,
                        FechaEmision = DateTime.Now,
                        FechaAtencion = turno.FechaAtencion,
                        EstadoTurno = Constantes.Clases.EstadoTurno.En_Espera
                    });

                    _unidadDeTrabajo.CommitNoAsync();

                    t.Complete();

                    return true;
                }
                catch
                {
                    t.Dispose();
                    return false;
                }
            }
        }

        public IQueryable<TurnoDto> GetByMedico(long idMedico)
        {
            throw new System.NotImplementedException();
        }
    }
}