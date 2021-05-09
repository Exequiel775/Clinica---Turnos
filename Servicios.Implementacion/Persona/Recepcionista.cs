namespace Servicios.Implementacion.Persona
{
    using System.Threading.Tasks;
    using Servicios.Interface.Persona;
    using Entidades.UnidadDeTrabajo;
    using Constantes.Clases;
    using System.Collections.Generic;
    using System.Linq;
    public class Recepcionista : Persona
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;

        public Recepcionista(IUnidadDeTrabajo unidadDeTrabajo) : base(unidadDeTrabajo)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
        }
    
        public override async Task<bool> Add(PersonaDto persona)
        {
            var recepcionista = (RecepcionistaDto)persona;

            var entidadRecepcionista = new Entidades.Recepcionista
            {
                Nombre = recepcionista.Nombre,
                Apellido = recepcionista.Apellido,
                Dni = recepcionista.Dni,
                FechaNacimiento = recepcionista.FechaNacimiento,
                Email = recepcionista.Email,
                Celular = recepcionista.Celular,
                Telefono = recepcionista.Telefono,
                TurnoRecepcionista = recepcionista.TurnoRecepcionista
            };
            
            await _unidadDeTrabajo.RecepcionistaRepositorio.Add(entidadRecepcionista);

            return await _unidadDeTrabajo.Commit();
        }

        public async override Task<IEnumerable<PersonaDto>> Get()
        {
            try
            {
            var recepcionistas = await _unidadDeTrabajo.RecepcionistaRepositorio.Get(propiedadNavegacion: "Localidad");

            return recepcionistas.Select(x => new RecepcionistaDto
            {
                Id = x.Id,
                LocalidadId = x.LocalidadId,
                Localidad = x.Localidad.Descripcion,
                Nombre = x.Nombre,
                Apellido = x.Apellido,
                Dni = x.Dni,
                FechaNacimiento = x.FechaNacimiento,
                Email = x.Email,
                Celular = x.Celular,
                Telefono = x.Telefono
            }).ToList();
            }
            catch(System.Exception e)
            {
                throw new System.Exception(e.Message);
            }
        }
    }
}