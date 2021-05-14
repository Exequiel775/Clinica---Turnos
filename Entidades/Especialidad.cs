namespace Entidades
{
    using System.ComponentModel.DataAnnotations;
    using Entidad.Base;
    using System.Collections.Generic;
    public class Especialidad : EntityBase
    {
        [Required]
        [DataType(DataType.Text)]
        [MaxLength(30, ErrorMessage = "El campo {0} no debe tener mas de 30 caracteres.")]
        public string Descripcion { get; set; }

        //NAV
        public virtual ICollection<Medico> Medicos { get; set; }
    }
}