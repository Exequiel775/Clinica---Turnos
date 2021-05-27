namespace Infraestructura.Repositorio
{
    using Entidades.Repositorio;
    using Entidades;
    using System.Threading.Tasks;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using System;
    using System.Linq;
    using Microsoft.EntityFrameworkCore;

    public class RepositorioMedico : Repositorio.Repositorio<Medico>, IRepositorioMedico
    {
        private readonly DataContext _context;

        public RepositorioMedico(DataContext context)
        :base(context)
        {
            _context = context;
        }

        public override async Task<IQueryable<Medico>> GetAsync(Expression<Func<Medico, bool>> filtro = null, string propiedadNavegacion = "")
        {
            var resultado = propiedadNavegacion.Split(new char[] {','}, StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<Medico>>(_context.Set<Persona>().OfType<Medico>(),
            (current, include) => current.Include(include));

            if (filtro != null) resultado = resultado.Where(filtro);

            return await Task.Run(() => resultado);
        }

        public override async Task<Medico> GetByIdAsync(long entidadId, string propiedadNavegacion = "")
        {
            var resultado = propiedadNavegacion.Split(new char[] {','}, StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<Medico>>(_context.Set<Persona>().OfType<Medico>(),
            (current, include) => current.Include(include));

            return await resultado.FirstOrDefaultAsync(x => x.Id == entidadId);
        }
        /*
        public async override Task<IQueryable<Medico>> GetMedicosAsync(Expression<Func<Medico, bool>> filtro = null, string propiedadNavegacion = "")
        {
            var resultado = propiedadNavegacion.Split(new char[] {','}, StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<Medico>>(_context.Set<Persona>().OfType<Medico>(),
            (current, include) => current.Include(include));

            if (filtro != null) resultado = resultado.Where(filtro);

            return await Task.Run(() =>resultado);
        }

        public async override Task<Medico> GetById(long entidadId, string propiedadNavegacion = "")
        {
            var resultado = propiedadNavegacion.Split(new char[] {','}, StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<Medico>>(_context.Set<Persona>().OfType<Medico>(), 
            (current, include) => current.Include(include));

            return await resultado.FirstOrDefaultAsync(x => x.Id == entidadId);
        }*/
    }
}