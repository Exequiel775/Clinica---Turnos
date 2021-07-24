namespace Servicios.Implementacion.Perfil
{
    using System.Collections.Generic;
    using Servicios.Interface.Controlador;
    public class ControladorComparer : IEqualityComparer<ControladorDto>
    {
        public bool Equals(ControladorDto x, ControladorDto y)
        {
            return x.Id.Equals(y.Id);
        }

        public int GetHashCode(ControladorDto obj)
        {
            return System.Object.ReferenceEquals(obj,null) ? -1 : obj.Id.GetHashCode();
        }
    }
}