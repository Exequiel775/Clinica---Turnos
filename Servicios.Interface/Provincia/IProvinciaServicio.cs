namespace Servicios.Interface.Provincia
{
    using System.Threading.Tasks;
    using System.Collections.Generic;
    public interface IProvinciaServicio
    {
        Task<bool> Add(ProvinciaDto provincia);
        Task<IEnumerable<ProvinciaDto>> Get();
        Task<ProvinciaDto> GetById(long id);    
    }
}