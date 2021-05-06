namespace Entidades
{
    using Entidad.Base;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Collections.Generic;

    [Table("Localidad")]
    public class Localidad : EntityBase
    {
        public long ProvinciaId { get; set; }
        public string Descripcion { get; set; }

        // NAVEGACION
        public virtual Provincia Provincia { get; set; }
        public virtual ICollection<Persona> Personas {get; set;}
    }
}