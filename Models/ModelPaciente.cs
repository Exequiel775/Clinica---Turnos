namespace Sistema.Sanatorio.Models
{
    using Servicios.Interface.Paciente;
    using Servicios.Interface.Turno;
    public class ModelTurno
    {
        public PacienteDto Paciente { get; set; }
        public TurnoDto Turno { get; set; }
        public string Mensaje { get; set; }
    }
}