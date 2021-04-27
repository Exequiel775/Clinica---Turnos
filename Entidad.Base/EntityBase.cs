namespace Entidad.Base
{
    using System.ComponentModel.DataAnnotations;
    public class EntityBase
    {
        [Key]
        public long Id { get; set; }
    }
}