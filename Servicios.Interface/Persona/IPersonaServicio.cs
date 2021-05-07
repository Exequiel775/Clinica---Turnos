namespace Servicios.Interface.Persona
{
    using System.Threading.Tasks;
    using System.Collections.Generic;
    using System;

    public interface IPersonaServicio
    {
        Task<bool> Add(PersonaDto persona);
        Task<IEnumerable<PersonaDto>> Get(Type tipo);
        Task<PersonaDto> GetById(Type tipo, long id);
        Task<bool> Update(PersonaDto persona);
    }
}