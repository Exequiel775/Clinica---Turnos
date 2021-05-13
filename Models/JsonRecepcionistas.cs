namespace Sistema.Sanatorio.Models
{
    using System.Collections.Generic;
    using Servicios.Interface.Persona;
    public class JsonRecepcionistas
    {
        public IEnumerable<RecepcionistaDto> Recepcionistas { get; set; }
        public int Paginas { get; set; }
    }
}