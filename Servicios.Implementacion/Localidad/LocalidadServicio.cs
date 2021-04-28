namespace Servicios.Implementacion.Localidad
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
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
        public async Task<bool> Add(LocalidadDto localidad)
        {
            try
            {
                var entidadLocalidad = new Entidades.Localidad
                {
                    ProvinciaId = localidad.ProvinciaId,
                    Descripcion = localidad.Descripcion
                };

                await _unidadDeTrabajo.LocalidadRepositorio.Add(entidadLocalidad);

                return await _unidadDeTrabajo.Commit();
            }
            catch
            {
                return await Task.Run(() => false);
            }
        }

        public Task<bool> Delete(long id)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<LocalidadDto>> Get()
        {
            var todasLocalidades = await _unidadDeTrabajo.LocalidadRepositorio.Get(propiedadNavegacion: "Provincia");

            return todasLocalidades.Any() ?
            todasLocalidades.Select(x => new LocalidadDto
            {
                Id = x.Id,
                ProvinciaId = x.ProvinciaId,
                Descripcion = x.Descripcion,
                Provincia = x.Provincia.Descripcion
            }).ToList()
            : new List<LocalidadDto>();
        }

        public async Task<IEnumerable<LocalidadDto>> Get(long idProvincia)
        {
            var localidades = await _unidadDeTrabajo.LocalidadRepositorio.Get(propiedadNavegacion: "Provincia");

            return localidades.Where(x => x.ProvinciaId == idProvincia)
            .Select(x => new LocalidadDto
            {
                Id = x.Id,
                ProvinciaId = x.ProvinciaId,
                Descripcion = x.Descripcion,
                Provincia = x.Provincia.Descripcion
            }).ToList();
        }

        public async Task<LocalidadDto> GetById(long id)
        {
            var localidadSeleccionada = await _unidadDeTrabajo.LocalidadRepositorio.GetById(id);

            return new LocalidadDto()
            {
                Id = localidadSeleccionada.Id,
                Descripcion = localidadSeleccionada.Descripcion,
                ProvinciaId = localidadSeleccionada.ProvinciaId
            };
        }

        public async Task<bool> Update(LocalidadDto localidadModificar)
        {
            try
            {
                var entidadModificar = new Entidades.Localidad
                {
                    Id = localidadModificar.Id,
                    ProvinciaId = localidadModificar.ProvinciaId,
                    Descripcion = localidadModificar.Descripcion
                };

                await _unidadDeTrabajo.LocalidadRepositorio.Update(entidadModificar);

                return await _unidadDeTrabajo.Commit();
            }
            catch
            {
                return await Task.Run(() => false);
            }
        }
    }
}