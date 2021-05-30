namespace Servicios.Interface.Persona
{
    using System;
    public class MedicoDto : PersonaDto
    {
        public long EspecialidadId { get; set; }
        public DateTime FechaRegistro { get; set; }
        public string Matricula { get; set; }
        #nullable disable
        public string Imagen { get; set; }

        public string EspecialidadStr { get; set; }
        #nullable disable
    }
}