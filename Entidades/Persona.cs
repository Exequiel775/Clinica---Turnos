namespace Entidades
{
    using Entidad.Base;
    using System;
    public class Persona : EntityBase
    {
        public long LocalidadId { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Dni { get; set; }
        public DateTime FechaNacimiento { get; set; }
        #nullable disable
        public string Email { get; set; }
        #nullable disable
        public int Celular { get; set; }
        public int? Telefono { get; set; }

        // Navegacion
        public virtual Localidad Localidad { get; set; }
        public virtual Usuario Usuario { get; set; }
    }
}