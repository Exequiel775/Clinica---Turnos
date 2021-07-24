namespace Infraestructura.Repositorio
{
    using System.Linq;
    using Entidades;
    using Entidades.Repositorio;
    using System.Collections.Generic;
    using Microsoft.EntityFrameworkCore;
    public class RepositorioPerfilControlador : IRepositorioPerfilControlador
    {
        private readonly DataContext _context;
        public RepositorioPerfilControlador(DataContext context)
        {
            _context = context;
        }        
        public bool AgregarPermiso(List<Perfil_Controlador> perfil_Controlador)
        {
            if (!perfil_Controlador.Any()) throw new System.Exception("Por favor seleccione los permisos");

            using (var t = _context.Database.BeginTransaction())
            {
                try
                {
                    foreach(var item in perfil_Controlador)
                    {
                        _context.Perfil_Controladores.Add(item);
                    }

                    _context.SaveChanges();

                    t.Commit();

                    return true;
                }
                catch
                {
                    t.Rollback();
                    return false;
                }
            }
        }

        public bool EliminarPermiso(List<Perfil_Controlador> perfil_Controlador)
        {
            if (!perfil_Controlador.Any()) throw new System.Exception("Por favor seleccione los permisos a quitar.");

            using (var t = _context.Database.BeginTransaction())
            {
                try
                {
                    foreach(var item in perfil_Controlador)
                    {
                        var permisoQuitar = _context.Perfil_Controladores.FirstOrDefault(x => x.PerfilId == item.PerfilId &&
                        x.ControladorId == item.ControladorId);

                        if (System.Object.ReferenceEquals(permisoQuitar, null))
                            throw new System.Exception("No se encontro el permiso a quitar.");

                        _context.Perfil_Controladores.Remove(permisoQuitar);    
                    }

                    _context.SaveChanges();

                    t.Commit();

                    return true;
                }
                catch
                {
                    t.Rollback();
                    return false;
                }
            }
        }

        public IQueryable<Perfil_Controlador> Get(string propiedadNavegacion = "")
        {
            return propiedadNavegacion.Split(new char[]{','}, System.StringSplitOptions.RemoveEmptyEntries)
            .Aggregate<string, IQueryable<Perfil_Controlador>>(_context.Set<Perfil_Controlador>(),
            (current, include) => current.Include(include)).AsQueryable();
        }
    }
}