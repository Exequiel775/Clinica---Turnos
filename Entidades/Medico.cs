namespace Entidades
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System;
    public class Medico : Persona
    {
        [Required]
        [ForeignKey("EspecialidadId")]
        public long EspecialidadId { get; set;}
        [Required]
        [DataType(DataType.Date)]
        public DateTime FechaRegistro { get ;set; }
        [Required]
        [DataType(DataType.Text)]
        [MaxLength(30, ErrorMessage = "El campo {0} no puede tener mas de 30 caracteres.")]
        public string Matricula { get ;set; }
        [Required]
        [DataType(dataType:DataType.Text)]
        [MaxLength(80, ErrorMessage = "La imagen no puede tener de nombre mas de 80 caracteres.")]
        public string Imagen { get; set; }

        // NAVEGACIÓN
        public virtual Especialidad Especialidad { get; set; }
    }
}