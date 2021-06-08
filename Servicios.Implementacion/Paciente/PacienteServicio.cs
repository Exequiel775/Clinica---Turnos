namespace Servicios.Implementacion.Paciente
{
    using Servicios.Interface.Paciente;
    using Entidades.UnidadDeTrabajo;
    using System;
    using System.Linq;
    public class PacienteServicio : IPacienteServicio
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;

        public PacienteServicio(IUnidadDeTrabajo unidadDeTrabajo)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
        }

        public long Add(PacienteDto paciente)
        {
            if (Object.ReferenceEquals(paciente, null)) {
                throw new Exception("Ocurrio un error al agregar al paciente");
            }

            var entidadPaciente = new Entidades.Paciente
            {
                LocalidadId = paciente.LocalidadId,
                Nombre = paciente.Nombre,
                Apellido = paciente.Apellido,
                Dni = paciente.Dni,
                FechaNacimiento = paciente.FechaNacimiento,
                Email = paciente.Email,
                Celular = paciente.Celular,
                Telefono = paciente.Telefono
            };
            
            _unidadDeTrabajo.PacienteRepositorio.AddNoAsync(entidadPaciente);

            _unidadDeTrabajo.CommitNoAsync();

            // Retornamos la id para capturarla al querer grabar un turno
            return entidadPaciente.Id;
        }

        public PacienteDto GetByDni(int dni)
        {
            var pacientes = _unidadDeTrabajo.PacienteRepositorio.GetNoAsync();

            var pacienteBuscar = pacientes.FirstOrDefault(x => x.Dni == dni);

            if (pacienteBuscar != null)
            {
                return new PacienteDto
                {
                    LocalidadId = pacienteBuscar.LocalidadId,
                    Nombre = pacienteBuscar.Nombre,
                    Apellido = pacienteBuscar.Apellido,
                    Dni = pacienteBuscar.Dni,
                    FechaNacimiento = pacienteBuscar.FechaNacimiento,
                    Email = pacienteBuscar.Email,
                    Celular = pacienteBuscar.Celular,
                    Telefono = pacienteBuscar.Telefono
                };
            }

            return null;
        }

        public bool VerificarExistencia(int dni)
        {
            return _unidadDeTrabajo.PacienteRepositorio.GetNoAsync().Where(x => x.Dni == dni)
            .Any();
        }
    }
}