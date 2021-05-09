namespace Servicios.Implementacion.Persona
{
    using Entidades.UnidadDeTrabajo;
    using Servicios.Interface.Persona;
    public class RecepcionistaServicio : PersonaServicio, IRecepcionistaServicio
    {
        public RecepcionistaServicio(IUnidadDeTrabajo unidadDeTrabajo) : base(unidadDeTrabajo)
        {
        }
    }
}