namespace Infraestructura.Repositorio
{
    using Entidad.Base.Repositorio;
    using Entidad.Base;
    using System.Threading.Tasks;
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.EntityFrameworkCore;

    public class Repositorio<T> : IRepositorio<T> where T : EntityBase
    {
        internal DataContext _db;

        public Repositorio(DataContext db)
        {
            _db = db;
        }

        public async Task<bool> Add(T entidadNueva)
        {
            try
            {
                await _db.Set<T>().AddAsync(entidadNueva);

                return true;
            }
            catch
            {
                throw new System.Exception("Error al agregar la entidad");
            }
        }

        public async Task Update(T entidadModificar)
        {
            if (entidadModificar == null)
                throw new System.Exception("Ocurrio un error al modificar la entidad");

            _db.Set<T>().Attach(entidadModificar);

            var entidad = await _db.Set<T>().FirstOrDefaultAsync(x => x.Id == entidadModificar.Id);

            if (entidad != null)
                _db.Entry(entidad).State = EntityState.Detached;

            _db.Entry(entidadModificar).State = EntityState.Modified;
        }

        public async Task<IEnumerable<T>> Get(System.Linq.Expressions.Expression<System.Func<T, bool>> filtro = null, string propiedadNavegacion = "")
        {
            var result = propiedadNavegacion.Split(new char[] { ',' }, 
            System.StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<T>>(_db.Set<T>(), (current, include) => current.Include(include));

            if (filtro != null) result.Where(filtro);

            return await result.ToListAsync();
        }

        public async Task<T> GetById(long entidadId, string propiedadNavegacion = "")
        {
            var resultado = propiedadNavegacion.Split(new char[] { ',' }, System.StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<T>>(_db.Set<T>(), (current, include) => current.Include(include));

            return await resultado.FirstOrDefaultAsync(x => x.Id == entidadId);
        }
    }
}