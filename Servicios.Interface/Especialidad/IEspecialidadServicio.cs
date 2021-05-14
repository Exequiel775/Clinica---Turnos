namespace Servicios.Interface.Especialidad
{
    using System.Collections.Generic;
    public interface IEspecialidadServicio
    {
        bool Add(EspecialidadDto especialidad);
        IEnumerable<EspecialidadDto> Get();
        EspecialidadDto GetById(long id);
        bool Update(EspecialidadDto especialidad);
        bool Delete(long id);
    }
}