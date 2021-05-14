namespace Servicios.Implementacion.Localidad
{
    using System.Collections.Generic;
    using Servicios.Interface.Localidad;
    using Entidades.UnidadDeTrabajo;
    using System.Linq;
    using System;
    using System.Linq.Expressions;

    public class LocalidadServicio : ILocalidadServicio
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;

        public LocalidadServicio(IUnidadDeTrabajo unidadDeTrabajo)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
        }
        public bool Add(LocalidadDto localidad)
        {
            try
            {
                var entidadLocalidad = new Entidades.Localidad
                {
                    ProvinciaId = localidad.ProvinciaId,
                    Descripcion = localidad.Descripcion
                };

                _unidadDeTrabajo.LocalidadRepositorio.AddNoAsync(entidadLocalidad);

                _unidadDeTrabajo.CommitNoAsync();

                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool Delete(long id)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<LocalidadDto>  Get()
        {
            var todasLocalidades = _unidadDeTrabajo.LocalidadRepositorio.GetNoAsync(propiedadNavegacion: "Provincia");

            return todasLocalidades.Any() ?
            todasLocalidades.Select(x => new LocalidadDto
            {
                Id = x.Id,
                ProvinciaId = x.ProvinciaId,
                Descripcion = x.Descripcion,
                Provincia = x.Provincia.Descripcion
            })
            : null;
        }

        public IEnumerable<LocalidadDto> Get(long idProvincia)
        {
            var localidades = _unidadDeTrabajo.LocalidadRepositorio.GetNoAsync(propiedadNavegacion: "Provincia");

            return localidades.Where(x => x.ProvinciaId == idProvincia)
            .Select(x => new LocalidadDto
            {
                Id = x.Id,
                ProvinciaId = x.ProvinciaId,
                Descripcion = x.Descripcion,
                Provincia = x.Provincia.Descripcion
            });
        }

        public LocalidadDto GetById(long id)
        {
            var localidadSeleccionada = _unidadDeTrabajo.LocalidadRepositorio.GetByIdNoAsync(id);

            return new LocalidadDto()
            {
                Id = localidadSeleccionada.Id,
                Descripcion = localidadSeleccionada.Descripcion,
                ProvinciaId = localidadSeleccionada.ProvinciaId
            };
        }

        public bool Update(LocalidadDto localidadModificar)
        {
            try
            {
                var entidadModificar = new Entidades.Localidad
                {
                    Id = localidadModificar.Id,
                    ProvinciaId = localidadModificar.ProvinciaId,
                    Descripcion = localidadModificar.Descripcion
                };

                _unidadDeTrabajo.LocalidadRepositorio.UpdateNoAsync(entidadModificar);

                 _unidadDeTrabajo.CommitNoAsync();

                 return true;
            }
            catch
            {
                return false;
            }
        }
    }
}