namespace Sistema.Sanatorio.Models
{
    using Servicios.Interface.Paciente;
    public class ModelPaciente
    {
        public PacienteDto Paciente { get; set; }
        public string Mensaje { get; set; }
    }
}