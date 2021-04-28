namespace Servicios.Interface.Localidad
{
    using System.Threading.Tasks;
    using System.Collections.Generic;
    public interface ILocalidadServicio
    {
        Task<bool> Add(LocalidadDto localidad);
        Task<bool> Update(LocalidadDto localidadModificar);
        Task<IEnumerable<LocalidadDto>> Get();
        Task<IEnumerable<LocalidadDto>> Get(long idProvincia);
        Task<LocalidadDto> GetById(long id);
        Task<bool> Delete(long id);
    }
}