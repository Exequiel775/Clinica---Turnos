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

        public override async Task<bool> Update(PersonaDto persona)
        {
            try
            {
                var medico = (MedicoDto)persona;

                var medicoModificar = await _unidadDeTrabajo.MedicoRepositorio.GetByIdAsync(medico.Id);

                medicoModificar.LocalidadId = medico.LocalidadId;
                medicoModificar.Nombre = medico.Nombre;
                medicoModificar.Apellido = medico.Apellido;
                medicoModificar.Dni = medico.Dni;
                medicoModificar.FechaNacimiento = medico.FechaNacimiento;
                medicoModificar.EspecialidadId = medico.EspecialidadId;
                medicoModificar.Matricula = medico.Matricula;
                medicoModificar.Celular = medico.Celular;
                medicoModificar.Telefono = medico.Telefono;
                medicoModificar.Email = medico.Email;

                await _unidadDeTrabajo.MedicoRepositorio.UpdateAsync(medicoModificar);

                await _unidadDeTrabajo.CommitAsync();

                return true;
            }
            catch (System.Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        public override async Task<IEnumerable<PersonaDto>> Get(string cadenaBuscar)
        {
            var medicos = await _unidadDeTrabajo.MedicoRepositorio.GetAsync(propiedadNavegacion: "Especialidad,Localidad");

            return medicos.Select(x => new MedicoDto
            {
                Id = x.Id,
                LocalidadId = x.LocalidadId,
                Nombre = x.Nombre,
                Apellido = x.Apellido,
                Celular = x.Celular,
                Telefono = x.Telefono,
                Dni = x.Dni,
                FechaNacimiento = x.FechaNacimiento,
                Email = x.Email,
                Imagen = x.Imagen,
                Matricula = x.Matricula,
                EspecialidadId = x.EspecialidadId,
                EspecialidadStr = x.Especialidad.Descripcion,
                ProvinciaId = x.Localidad.ProvinciaId
            });
        }

        public override async Task<PersonaDto> GetById(long id)
        {
            var medicoSeleccionado = await _unidadDeTrabajo.MedicoRepositorio.GetByIdAsync(entidadId: id);

            if (medicoSeleccionado == null) 
                throw new Exception("No se pudo obtener los datos del medico solicitado.");

            return new MedicoDto
            {
                Id = medicoSeleccionado.Id,
                LocalidadId = medicoSeleccionado.LocalidadId,
                EspecialidadId = medicoSeleccionado.EspecialidadId,
                Nombre = medicoSeleccionado.Nombre,
                Apellido = medicoSeleccionado.Apellido,
                Dni = medicoSeleccionado.Dni
            };
        }

    }
}