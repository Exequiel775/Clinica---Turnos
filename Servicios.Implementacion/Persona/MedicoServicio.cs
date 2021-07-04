namespace Servicios.Implementacion.Persona
{
    using Servicios.Interface.Persona;
    using Entidades.UnidadDeTrabajo;
    using System.Linq;

    public class MedicoServicio : PersonaServicio, IMedicoServicio
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;
        public MedicoServicio(IUnidadDeTrabajo unidadDeTrabajo) : base(unidadDeTrabajo)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
        }

        public IQueryable<MedicoDto> GetByEspecialidad(long especialidad)
        {
            return _unidadDeTrabajo.MedicoRepositorio.GetByEspecialidad(especialidad)
            .Select(x => new MedicoDto
            {
                Id = x.Id,
                Nombre = x.Nombre,
                Apellido = x.Apellido
            });
        }
    }
}