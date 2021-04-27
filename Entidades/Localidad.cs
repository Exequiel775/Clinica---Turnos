namespace Entidades
{
    using Entidad.Base;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Localidad")]
    public class Localidad : EntityBase
    {
        public long ProvinciaId { get; set; }
        public string Descripcion { get; set; }

        // NAVEGACION
        public virtual Provincia Provincia { get; set; }
    }
}