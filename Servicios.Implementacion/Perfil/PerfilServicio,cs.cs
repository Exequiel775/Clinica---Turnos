namespace Servicios.Implementacion.Perfil
{
    using Servicios.Interface.Perfil;
    using Entidades.UnidadDeTrabajo;
    using System.Linq;
    using Servicios.Interface.Controlador;
    using System.Collections.Generic;
    using System.Transactions;

    public class PerfilServicio : IPerfilServicio
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;
        public PerfilServicio(IUnidadDeTrabajo unidadDeTrabajo)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
        }

        public bool Add(PerfilDto perfil)
        {
            try
            {
                _unidadDeTrabajo.PerfilRepositorio.AddNoAsync(new Entidades.Perfil
                {
                    Descripcion = perfil.Descripcion
                });

                _unidadDeTrabajo.CommitNoAsync();

                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete(PerfilDto perfil)
        {
            try
            {
                _unidadDeTrabajo.PerfilRepositorio.Delete(new Entidades.Perfil
                {
                    Id = perfil.Id,
                    Descripcion = perfil.Descripcion
                });
                
                _unidadDeTrabajo.CommitNoAsync();

                return true;
            }
            catch
            {
                return false;
            }
        }

        public IQueryable<PerfilDto> Get()
        {
            return _unidadDeTrabajo.PerfilRepositorio.GetNoAsync()
            .Select(x => new PerfilDto
            {
                Id = x.Id,
                Descripcion = x.Descripcion
            }).AsQueryable();
        }

        public IQueryable<ControladorDto> ObtenerControladoresAsignados(long idPerfil)
        {
            var controladores = _unidadDeTrabajo.PerfilControladorRepositorio.Get("Controlador")
            .Where(x => x.PerfilId == idPerfil);

            return controladores.Select(x => new ControladorDto
            {
                Id = x.Controlador.Id,
                Descripcion = x.Controlador.Descripcion
            }).AsQueryable();
        }

        public IQueryable<ControladorDto> ObtenerControladoresNoAsignados(long idPerfil)
        {
            var controladores = _unidadDeTrabajo.ControladorRepositorio.GetNoAsync()
            .Select(x => new ControladorDto
            {
                Id = x.Id,
                Descripcion = x.Descripcion
            });

            var controladoresAsignados = _unidadDeTrabajo.PerfilControladorRepositorio.Get("Controlador")
            .Where(x => x.PerfilId == idPerfil)
            .Select(x => new ControladorDto
            {
                Id = x.Controlador.Id,
                Descripcion = x.Controlador.Descripcion
            });

            return controladores.Except(controladoresAsignados, new ControladorComparer()).AsQueryable();
        }

        // ASIGNAR PERMISOS A UN PERFIL
        public bool AsignarPermisos(List<ControladorDto> controladores, long perfil)
        {
            bool ejecutarAdd = _unidadDeTrabajo.PerfilControladorRepositorio.AgregarPermiso(
                controladores.Select(x => new Entidades.Perfil_Controlador
                {
                    PerfilId = perfil,
                    ControladorId = x.Id
                }).ToList()
            );

            return ejecutarAdd;
        }

        public bool Update(PerfilDto perfil)
        {
            throw new System.NotImplementedException();
        }

        public bool VerificarExistenciaNombre(string perfil)
        {
            return _unidadDeTrabajo.PerfilRepositorio.GetNoAsync().Any() ?
            _unidadDeTrabajo.PerfilRepositorio.GetNoAsync().Any(x => x.Descripcion == perfil)
            : false;
        }
    }
}