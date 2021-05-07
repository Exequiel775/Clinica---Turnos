namespace Servicios.Implementacion.Persona
{
    using System.Threading.Tasks;
    using Servicios.Interface.Persona;
    using System.Collections.Generic;
    public class Persona
    {
        public virtual async Task<bool> Add(PersonaDto persona)
        {
            return await Task.Run(() => false);
        }

        public virtual async Task<IEnumerable<PersonaDto>> Get()
        {
            return null;
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