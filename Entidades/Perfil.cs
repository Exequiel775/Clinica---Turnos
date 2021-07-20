namespace Entidades
{
    using Entidad.Base;
    using System.Collections.Generic;
    public class Perfil : EntityBase
    {
        public string Descripcion { get; set; }

        public virtual ICollection<Controlador> Controladores { get; set; }
        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}