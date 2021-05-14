namespace Servicios.Implementacion.Especialidad
{
    using System.Collections.Generic;
    using System.Linq;
    using Entidades.UnidadDeTrabajo;
    using Servicios.Interface.Especialidad;
    public class EspecialidadServicio : IEspecialidadServicio
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;

        public EspecialidadServicio(IUnidadDeTrabajo unidadDeTrabajo)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
        }

        public bool Add(EspecialidadDto especialidad)
        {
            try
            {
                var entidadEspecialidad = new Entidades.Especialidad
                {
                    Descripcion = especialidad.Descripcion
                };

                _unidadDeTrabajo.EspecialidadRepositorio.AddNoAsync(entidadEspecialidad);

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

        public IEnumerable<EspecialidadDto> Get()
        {
            return _unidadDeTrabajo.EspecialidadRepositorio.GetNoAsync()
            .Select(x => new EspecialidadDto
            {
                Id = x.Id,
                Descripcion = x.Descripcion
            });
        }

        public EspecialidadDto GetById(long id)
        {
            var entidadBuscar = _unidadDeTrabajo.EspecialidadRepositorio.GetByIdNoAsync(id);
            
            if (entidadBuscar == null)
                throw new System.Exception("Ocurrio un error la obtener la especialidad solicitada");

            return new EspecialidadDto
            {
                Id = entidadBuscar.Id,
                Descripcion = entidadBuscar.Descripcion
            };
        }

        public bool Update(EspecialidadDto especialidad)
        {
            try
            {
                var especialidadModificar = _unidadDeTrabajo.EspecialidadRepositorio.GetByIdNoAsync(especialidad.Id);

                especialidadModificar.Descripcion = especialidad.Descripcion;

                _unidadDeTrabajo.EspecialidadRepositorio.UpdateNoAsync(especialidadModificar);

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