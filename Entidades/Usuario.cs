namespace Entidades
{
    using System.ComponentModel.DataAnnotations;
    using Entidad.Base;
    using System.Collections.Generic;
    public class Usuario : EntityBase
    {
        public long PersonaId { get; set;}
        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        public string Nombre { get; set; }
        [Required(ErrorMessage = "El campo {0} es obligatorio.")]
        public string Password { get; set; }
        public bool EstaBloqueado { get; set; }

        // NAVEGACION
        public virtual Persona Persona { get; set; }
        public virtual ICollection<Perfil> Perfiles { get; set; }
    }
}