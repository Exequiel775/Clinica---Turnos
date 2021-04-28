namespace Entidad.Base.Repositorio
{
    using System.Threading.Tasks;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using System;

    public interface IRepositorio<T> where T : EntityBase
    {
        Task<bool> Add(T entidadNueva);
        Task Update(T entidadModificar);
        Task<IEnumerable<T>> Get(Expression<Func<T, bool>> filtro = null, string propiedadNavegacion = "");
        Task<T> GetById(long entidadId, string propiedadNavegacion = "");
    }
}