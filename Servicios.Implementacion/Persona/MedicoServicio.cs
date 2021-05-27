namespace Servicios.Implementacion.Persona
{
    using Servicios.Interface.Persona;
    using Entidades.UnidadDeTrabajo;
    public class MedicoServicio : PersonaServicio, IMedicoServicio
    {
        public MedicoServicio(IUnidadDeTrabajo unidadDeTrabajo) : base(unidadDeTrabajo)
        {
            
        }
    }
}