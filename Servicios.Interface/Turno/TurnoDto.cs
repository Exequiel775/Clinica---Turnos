namespace Servicios.Interface.Turno
{
    using System;
    using Constantes.Clases;
    using Base;
    using System.ComponentModel.DataAnnotations;
    using Servicios.Interface.Paciente;
    public class TurnoDto : BaseDto
    {
        public long PacienteId { get; set; }
        public long EspecialidadId { get; set; }
        public long MedicoId { get; set; }
        // Para guardar el Recepcionista que emitio el turno
        public long RecepcionistaId { get; set; }
        public int Numero { get; set; }
        [DataType(DataType.Date)]
        public DateTime FechaEmision { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime FechaAtencion { get; set; }
        public EstadoTurno EstadoTurno { get; set; }
        public PacienteDto Paciente { get; set; }
    }
}