namespace Entidades
{
    using Entidad.Base;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Provincias")]
    public class Provincia : EntityBase
    {
        public string Descripcion { get; set; }

        // NAVEGACION
        public virtual ICollection<Localidad> Localidades { get; set; }
    }
}