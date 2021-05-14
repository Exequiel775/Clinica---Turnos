namespace Entidad.Base.Repositorio
{
    using System.Threading.Tasks;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using System;
    using System.Linq;
    public interface IRepositorio<T> where T : EntityBase
    {
        void AddNoAsync(T entidadNueva);
        void UpdateNoAsync(T entidadModificar);
        IEnumerable<T> GetNoAsync(string propiedadNavegacion = "");
        T GetByIdNoAsync(long entidadId, string propiedadNavegacion = "");
        // ASYNCRONOS
        Task<bool> AddAsync(T entidadNueva);
        Task UpdateAsync(T entidadModificar);
        Task<IQueryable<T>> GetAsync(Expression<Func<T, bool>> filtro = null, string propiedadNavegacion = "");
        Task<T> GetByIdAsync(long entidadId, string propiedadNavegacion = "");
    }
}