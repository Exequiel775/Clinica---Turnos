namespace Infraestructura.Repositorio
{
    using Entidades.Repositorio;
    using Entidad.Base.Repositorio;
    using System.Threading.Tasks;
    using Entidades;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using System;
    using System.Linq;
    using Microsoft.EntityFrameworkCore;

    public class RepositorioRecepcionista : Repositorio.Repositorio<Entidades.Recepcionista>, IRepositorioRecepcionista
    {
        private readonly DataContext _context;
        public RepositorioRecepcionista(DataContext db)
        :base(db)
        {
            _context = db;
        }

        public async override Task<IEnumerable<Recepcionista>> Get(Expression<Func<Recepcionista, bool>> filtro = null, string propiedadNavegacion = "")
        {
            var resultado = propiedadNavegacion.Split(new char[] {','},
            System.StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<Recepcionista>>(_context.Set<Persona>().OfType<Recepcionista>(), 
            (current, include) => current.Include(include));

            if (filtro != null) resultado = resultado.Where(filtro);

            return await resultado.ToListAsync();
        }

        public async override Task<Recepcionista> GetById(long entidadId, string propiedadNavegacion = "")
        {
            var resultado = propiedadNavegacion.Split(new char[] {','},
            System.StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<Recepcionista>>(_context.Set<Persona>().OfType<Recepcionista>(),
            (current, include) => current.Include(include));

            return await resultado.FirstOrDefaultAsync(x => x.Id == entidadId);
        }
    }
}