namespace Servicios.Interface.Persona
{
    using System;
    public class MedicoDto : PersonaDto
    {
        public long EspecialidadId { get; set; }
        public DateTime FechaRegistro { get; set; }
        public string Matricula { get; set; }
        public string Imagen { get; set; }
        public string EspecialidadStr { get; set; }
    }
}