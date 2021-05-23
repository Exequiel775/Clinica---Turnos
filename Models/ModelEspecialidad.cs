namespace Sistema.Sanatorio.Models
{
    using System.Collections.Generic;
    using Servicios.Interface.Especialidad;
    public class ModelEspecialidad
    {
        public List<EspecialidadDto> Especialidades { get; set; }
        public int Paginas { get; set; }
        public int TotalRegistros { get; set; }
        public int Mostrando { get; set; }
    }
}