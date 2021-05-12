namespace Servicios.Implementacion.Persona
{
    using System.Threading.Tasks;
    using Servicios.Interface.Persona;
    using System.Collections.Generic;
    using System.Linq;
    using Entidades.UnidadDeTrabajo;
    public class Persona
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;

        public Persona(IUnidadDeTrabajo unidadDeTrabajo)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
        }
        public virtual async Task<bool> Add(PersonaDto persona)
        {
            return await Task.Run(() => false);
        }

        public virtual async Task<IEnumerable<PersonaDto>> Get(string cadenaBuscar)
        {
            return await Task.Run(() => new List<PersonaDto>());
        }

        public virtual async Task<PersonaDto> GetById(long id)
        {
            return await Task.Run(() => new PersonaDto());
        }

        public virtual async Task<bool> Update(PersonaDto persona)
        {
            return await Task.Run(() => false);
        }
    }
}