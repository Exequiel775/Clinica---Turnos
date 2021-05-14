namespace Servicios.Interface.Provincia
{
    using System.Collections.Generic;
    public interface IProvinciaServicio
    {
        bool Add(ProvinciaDto provincia);
        bool Update(ProvinciaDto provinciaModificar);
        IEnumerable<ProvinciaDto> Get();
        ProvinciaDto GetById(long id);    
    }
}