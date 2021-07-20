namespace Entidades
{
    using Entidad.Base;
    using System.Collections.Generic;
    public class Controlador : EntityBase
    {
        public string Descripcion { get; set; }

        // Nav
        public virtual ICollection<Perfil> Perfiles { get; set; }
    }
}