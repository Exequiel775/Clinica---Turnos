namespace Servicios.Implementacion.Provincia
{
    using Servicios.Interface.Provincia;
    using System.Threading.Tasks;
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
        public async Task<bool> Add(ProvinciaDto provincia)
        {
            try
            {
                var entidadProvincia = new Entidades.Provincia
                {
                    Descripcion = provincia.Descripcion
                };

                await _unidadDeTrabajo.RepositorioProvincia.Add(entidadProvincia);

                await _unidadDeTrabajo.Commit();

                return true;
            }
            catch
            {
                return await Task.Run(()  => false);
            }
        }

        public async Task<IEnumerable<ProvinciaDto>> Get()
        {
            var provincias = await _unidadDeTrabajo.RepositorioProvincia.Get();

            return provincias.Select(x => new ProvinciaDto
            {
                Id = x.Id,
                Descripcion = x.Descripcion
            }).ToList();
        }

        public async Task<ProvinciaDto> GetById(long id)
        {
            var provinciaSeleccionada = await _unidadDeTrabajo.RepositorioProvincia.GetById(id);

            return new ProvinciaDto
            {
                Id = provinciaSeleccionada.Id,
                Descripcion = provinciaSeleccionada.Descripcion
            };
        }
    }
}