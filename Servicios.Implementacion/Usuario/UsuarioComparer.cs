namespace Servicios.Implementacion.Usuario
{
    using System.Collections.Generic;
    using Servicios.Interface.Usuario;
    using System;
    public class UsuarioComparer : IEqualityComparer<UsuarioDto>
    {
        public bool Equals(UsuarioDto x, UsuarioDto y)
        {
            return x.Id.Equals(y.Id);
        }

        public int GetHashCode(UsuarioDto obj)
        {
            return Object.ReferenceEquals(obj, null) ? -1 : obj.Id.GetHashCode();
        }
    }
}