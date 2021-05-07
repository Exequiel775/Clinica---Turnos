namespace Servicios.Implementacion.Persona
{
    using System.Threading.Tasks;
    using Servicios.Interface.Persona;
    using Entidades.UnidadDeTrabajo;
    using Constantes.Clases;
    public class Recepcionista : Persona
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;

        public Recepcionista(IUnidadDeTrabajo unidadDeTrabajo)
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
    }
}