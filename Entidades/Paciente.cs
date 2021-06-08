namespace Entidades
{
    using System.Collections.Generic;
    public class Paciente : Persona
    {
        // NAVEGACION
        public virtual ICollection<Turno> Turnos { get; set; }
    }
}