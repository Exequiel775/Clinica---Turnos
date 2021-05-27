namespace Servicios.Implementacion.Persona
{
    using Entidades.UnidadDeTrabajo;
    using System.Threading.Tasks;
    using Servicios.Interface.Persona;
    using System.Collections.Generic;
    using System;
    using System.Linq;
    public class Medico : Persona
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;

        public Medico(IUnidadDeTrabajo unidadDeTrabajo) : base(unidadDeTrabajo)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
        }

        public override async Task<bool> Add(PersonaDto persona)
        {
            try
            {
                var medico = (MedicoDto)persona;

                var entidadMedico = new Entidades.Medico
                {
                    LocalidadId = medico.LocalidadId,
                    Nombre = medico.Nombre,
                    Apellido = medico.Apellido,
                    Dni = medico.Dni,
                    FechaNacimiento = medico.FechaNacimiento,
                    Email = medico.Email,
                    Celular = medico.Celular,
                    Telefono = medico.Telefono,
                    EspecialidadId = medico.EspecialidadId,
                    FechaRegistro = DateTime.Now,
                    Matricula = medico.Matricula,
                    Imagen = medico.Imagen
                };

                await _unidadDeTrabajo.MedicoRepositorio.AddAsync(entidadMedico);

                await _unidadDeTrabajo.CommitAsync();

                return true;
            }
            catch
            {
                return false;
            }
        }

        public override async Task<IEnumerable<PersonaDto>> Get(string cadenaBuscar)
        {
            var medicos = await _unidadDeTrabajo.MedicoRepositorio.GetAsync();

            return medicos.Select(x => new MedicoDto
            {
                Id = x.Id,
                LocalidadId = x.LocalidadId,
                Nombre = x.Nombre,
                Apellido = x.Apellido,
                FechaNacimiento = x.FechaNacimiento,
                Email = x.Email,
                EspecialidadId = x.EspecialidadId,
                EspecialidadStr = x.Especialidad.Descripcion
            });
        }

    }
}