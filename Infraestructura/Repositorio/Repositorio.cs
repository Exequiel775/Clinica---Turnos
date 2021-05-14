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

        // ASINCRONOS

        public virtual async Task<bool> AddAsync(T entidadNueva)
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

        public virtual async Task UpdateAsync(T entidadModificar)
        {
            if (entidadModificar == null)
                throw new System.Exception("Ocurrio un error al modificar la entidad");

            _db.Set<T>().Attach(entidadModificar);

            var entidad = await _db.Set<T>().FirstOrDefaultAsync(x => x.Id == entidadModificar.Id);

            if (entidad != null)
                _db.Entry(entidad).State = EntityState.Detached;

            _db.Entry(entidadModificar).State = EntityState.Modified;
        }

        public virtual async Task<IQueryable<T>> GetAsync(System.Linq.Expressions.Expression<System.Func<T, bool>> filtro = null, string propiedadNavegacion = "")
        {
            var result = propiedadNavegacion.Split(new char[] { ',' }, System.StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<T>>(_db.Set<T>(), (current, include) => current.Include(include));

            if (filtro != null) result.Where(filtro);

            return await Task.Run(() => result);
        }

        public virtual async Task<T> GetByIdAsync(long entidadId, string propiedadNavegacion = "")
        {
            var resultado = propiedadNavegacion.Split(new char[] { ',' }, System.StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<T>>(_db.Set<T>(), (current, include) => current.Include(include));

            return await resultado.FirstOrDefaultAsync(x => x.Id == entidadId);
        }

        // NO ASINCRONOS

        public void AddNoAsync(T entidadNueva)
        {
            try
            {
                if (entidadNueva == null) throw new System.Exception("La entidad no puede tener un valor nulo");

                _db.Set<T>().Add(entidadNueva);
            }
            catch
            {
                throw new System.Exception("No se pudo agregar la entidad");   
            }
        }

        public void UpdateNoAsync(T entidadModificar)
        {
            if (entidadModificar == null)
                throw new System.Exception("La entidad modificar no puede ser null");

            _db.Set<T>().Attach(entidadModificar);

            var entidad = _db.Set<T>().FirstOrDefault(x => x.Id == entidadModificar.Id);

            if (entidad != null)
                _db.Entry(entidad).State = EntityState.Detached;

            _db.Entry(entidad).State = EntityState.Modified;
        }

        public virtual IEnumerable<T> GetNoAsync(string propiedadNavegacion = "")
        {
            var resultado = propiedadNavegacion.Split(new char[] { ',' }, System.StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<T>>(_db.Set<T>(), (current, include) => current.Include(include));

            return resultado.ToList();
        }

        public virtual T GetByIdNoAsync(long entidadId, string propiedadNavegacion)
        {
            var resultado = propiedadNavegacion.Split(new char[] {','}, System.StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<T>>(_db.Set<T>(), (current, include) => current.Include(include));

            return resultado.FirstOrDefault(x => x.Id == entidadId);
        }
    }
}