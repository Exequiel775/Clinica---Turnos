namespace Servicios.Interface.Especialidad
{
    using Base;
    using System.ComponentModel.DataAnnotations;
    public class EspecialidadDto : BaseDto
    {
        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        [MaxLength(30, ErrorMessage = "El campo {0} no puede tener mas de 30 caracteres.")]
        [DataType(dataType:DataType.Text)]
        public string Descripcion { get; set; }
    }
}