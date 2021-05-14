namespace Servicios.Interface.Localidad
{
    using System.Collections.Generic;
    using System.Linq;
    public interface ILocalidadServicio
    {
        bool Add(LocalidadDto localidad);
        bool Update(LocalidadDto localidadModificar);
        IEnumerable<LocalidadDto> Get();
        IEnumerable<LocalidadDto> Get(long idProvincia);
        LocalidadDto GetById(long id);
        bool Delete(long id);
    }
}