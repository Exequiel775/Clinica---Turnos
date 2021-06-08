namespace Entidades
{
    using Entidad.Base;
    using System;
    using System.ComponentModel.DataAnnotations.Schema;
    using Constantes.Clases;
    using System.ComponentModel.DataAnnotations;

    [Table("Turnos")]
    public class Turno : EntityBase
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

        // NAVEGACIONES
        public virtual Paciente Paciente { get; set; }
        public virtual Especialidad Especialidad { get; set; }
        public virtual Medico Medico { get; set; }
        public virtual Recepcionista Recepcionista { get; set; }
    }
}