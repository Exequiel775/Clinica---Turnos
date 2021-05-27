namespace Servicios.Implementacion.Persona
{
    using Servicios.Interface.Persona;
    using System.Collections.Generic;
    using System;
    using System.Threading.Tasks;

    public class PersonaServicio : IPersonaServicio
    {
        private Dictionary<Type, string> _diccionario;
        private readonly Entidades.UnidadDeTrabajo.IUnidadDeTrabajo _unidadDeTrabajo;

        public PersonaServicio(Entidades.UnidadDeTrabajo.IUnidadDeTrabajo unidadDeTrabajo)
        {
            _diccionario = new Dictionary<Type, string>();
            InicializadorDiccionario();
            _unidadDeTrabajo = unidadDeTrabajo;
        }   

        public void AgregarOpcionDiccionario(Type tipo, string nombre)
        {
            _diccionario.Add(tipo, nombre);
        }

        public async Task<bool> Add(PersonaDto entidad)
        {
            var persona = InstanciarPersona(entidad);

            return await persona.Add(entidad);
        }

        public async Task<IEnumerable<PersonaDto>> Get(Type tipo, string cadenaBuscar)
        {
            var persona = InstanciarPersonaPorTipo(tipo);

            return await persona.Get(cadenaBuscar);
        }

        public async Task<PersonaDto> GetById(Type tipo, long id)
        {
            var persona = InstanciarPersonaPorTipo(tipo);

            return await persona.GetById(id);
        }

        public async Task<bool> Update(PersonaDto entidad)
        {
            var persona = InstanciarPersona(entidad);

            return await persona.Update(entidad);
        }

        // ================================================== //
        // =============== METODOS PRIVADOS ================= //
        // ================================================== //

        public void InicializadorDiccionario()
        {
            _diccionario.Add(typeof(RecepcionistaDto), "Servicios.Implementacion.Persona.Recepcionista");
            _diccionario.Add(typeof(MedicoDto), "Servicios.Implementacion.Persona.Medico");
        }

        private Persona InstanciarEntidad(string tipoEntidad)
        {
            try
            {
            var tipoObjeto = Type.GetType(tipoEntidad);

            if (tipoObjeto == null) return null;

            var entidad = Activator.CreateInstance(tipoObjeto, _unidadDeTrabajo) as Persona;

            return entidad;
            }
            catch(Exception e)
            {
                throw new Exception(e.Message);
            }
        }

        private Persona InstanciarPersona(PersonaDto entidad)
        {
            if (!_diccionario.TryGetValue(entidad.GetType(), out var tipoEntidad))
                throw new Exception($"No hay {entidad.GetType()} para instanciar");

            var persona = InstanciarEntidad(tipoEntidad);

            if (persona == null) throw new Exception($"Ocurrio un error al isntanciar {entidad.GetType()}");

            return persona;    
        }

        private Persona InstanciarPersonaPorTipo(Type tipo)
        {
            if (!_diccionario.TryGetValue(tipo, out var tipoEntidad))
                throw new Exception($"No hay {tipo.GetType()} para instanciar");

            var persona = InstanciarEntidad(tipoEntidad);    

            if (persona == null) throw new Exception($"ocurrio un error al instanciar {tipo}");

            return persona;
        }
    }
}