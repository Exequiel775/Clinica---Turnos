namespace Servicios.Implementacion.Persona
{
    using System.Threading.Tasks;
    using Servicios.Interface.Persona;
    using Entidades.UnidadDeTrabajo;
    using Constantes.Clases;
    using System.Collections.Generic;
    using System.Linq;
    using System;
    using System.Linq.Expressions;

    public class Recepcionista : Persona
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;

        public Recepcionista(IUnidadDeTrabajo unidadDeTrabajo) : base(unidadDeTrabajo)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
        }

        public override async Task<bool> Add(PersonaDto persona)
        {
            try
            {
                var recepcionista = (RecepcionistaDto)persona;

                var entidadRecepcionista = new Entidades.Recepcionista
                {
                    Nombre = recepcionista.Nombre,
                    Apellido = recepcionista.Apellido,
                    LocalidadId = recepcionista.LocalidadId,
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
            catch (System.Exception e)
            {
                throw new System.Exception(e.Message);
            }
        }

        public async override Task<IEnumerable<PersonaDto>> Get(string cadenaBuscar)
        {
            try
            {
                Expression<Func<Entidades.Recepcionista, bool>> filtro = obt => 
                obt.Nombre.Contains(cadenaBuscar) || obt.Apellido.Contains(cadenaBuscar);

                var recepcionistas = await _unidadDeTrabajo.RecepcionistaRepositorio.Get(filtro: filtro, propiedadNavegacion: "Localidad");

                return recepcionistas.Select(x => new RecepcionistaDto
                {
                    Id = x.Id,
                    LocalidadId = x.LocalidadId,
                    ProvinciaId = x.Localidad.ProvinciaId,
                    Localidad = x.Localidad.Descripcion,
                    Nombre = x.Nombre,
                    Apellido = x.Apellido,
                    Dni = x.Dni,
                    FechaNacimiento = x.FechaNacimiento,
                    Email = x.Email,
                    Celular = x.Celular,
                    TurnoRecepcionista = x .TurnoRecepcionista,
                    Telefono = x.Telefono
                }).ToList();
            }
            catch (System.Exception e)
            {
                throw new System.Exception(e.Message);
            }
        }

        public async override Task<PersonaDto> GetById(long id)
        {
            var recepcionistaBuscar = await _unidadDeTrabajo.RecepcionistaRepositorio.GetById(id);

            return new RecepcionistaDto
            {
                Id = recepcionistaBuscar.Id,
                Nombre = recepcionistaBuscar.Nombre,
                Apellido = recepcionistaBuscar.Apellido,
                Dni = recepcionistaBuscar.Dni,
                LocalidadId = recepcionistaBuscar.LocalidadId,
                FechaNacimiento = recepcionistaBuscar.FechaNacimiento,
                Celular = recepcionistaBuscar.Celular,
                Telefono = recepcionistaBuscar.Telefono,
                Email = recepcionistaBuscar.Email
            };
        }

        public async override Task<bool> Update(PersonaDto persona)
        {
            try
            {
                var recepcionista = (RecepcionistaDto)persona;

                var entidadRecepcionista = new Entidades.Recepcionista
                {
                    Id = recepcionista.Id,
                    LocalidadId = recepcionista.LocalidadId,
                    Nombre = recepcionista.Nombre,
                    Apellido = recepcionista.Apellido,
                    Dni = recepcionista.Dni,
                    FechaNacimiento = recepcionista.FechaNacimiento,
                    Email = recepcionista.Email,
                    Celular = recepcionista.Celular,
                    Telefono = recepcionista.Telefono,
                    TurnoRecepcionista = recepcionista.TurnoRecepcionista
                };

                await _unidadDeTrabajo.RecepcionistaRepositorio.Update(entidadRecepcionista);

                await _unidadDeTrabajo.Commit();

                return true;
            }
            catch
            {
                return await Task.Run(() => false);
            }
        }
    }
}