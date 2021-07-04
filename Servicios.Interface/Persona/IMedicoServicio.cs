namespace Servicios.Interface.Persona
{
    using System.Linq;
    public interface IMedicoServicio : IPersonaServicio
    {
        IQueryable<MedicoDto> GetByEspecialidad(long especialidad);
    }
}