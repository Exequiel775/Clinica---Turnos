namespace Servicios.Interface.Usuario
{
    using Base;
    using Servicios.Interface.Persona;

    public class UsuarioDto
    {
        public long? Id { get; set; }
        public long? PersonaId { get; set;}
        public string Nombre { get; set; }
        public string Password { get; set; }
        public bool? EstaBloqueado { get; set; }
        public PersonaDto Persona { get; set; }
    }
}