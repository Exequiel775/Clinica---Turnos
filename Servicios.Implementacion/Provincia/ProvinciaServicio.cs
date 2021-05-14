namespace Servicios.Implementacion.Provincia
{
    using Servicios.Interface.Provincia;
    using System.Collections.Generic;
    using Entidades.UnidadDeTrabajo;
    using Entidad.Base.Repositorio;
    using System.Linq;
    public class ProvinciaServicio : IProvinciaServicio
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;
        public ProvinciaServicio(IUnidadDeTrabajo unidadDeTrabajo)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
        } 
        public bool Add(ProvinciaDto provincia)
        {
            try
            {
                var entidadProvincia = new Entidades.Provincia
                {
                    Descripcion = provincia.Descripcion
                };

                _unidadDeTrabajo.RepositorioProvincia.AddNoAsync(entidadProvincia);

                _unidadDeTrabajo.CommitNoAsync();

                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Update(ProvinciaDto provinciaModificar)
        {
            try
            {
                var entidadModificar = new Entidades.Provincia
                {
                    Id = provinciaModificar.Id,
                    Descripcion = provinciaModificar.Descripcion
                };

                _unidadDeTrabajo.RepositorioProvincia.UpdateNoAsync(entidadModificar);

                _unidadDeTrabajo.CommitNoAsync();

                return true;
            }
            catch
            {
                return false;
            }
        }

        public IEnumerable<ProvinciaDto> Get()
        {
            var provincias = _unidadDeTrabajo.RepositorioProvincia.GetNoAsync();

            return provincias.Select(x => new ProvinciaDto
            {
                Id = x.Id,
                Descripcion = x.Descripcion
            });
        }

        public ProvinciaDto GetById(long id)
        {
            var provinciaSeleccionada = _unidadDeTrabajo.RepositorioProvincia.GetByIdNoAsync(id);

            return new ProvinciaDto
            {
                Id = provinciaSeleccionada.Id,
                Descripcion = provinciaSeleccionada.Descripcion
            };
        }
    }
}