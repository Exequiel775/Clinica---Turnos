namespace Entidades
{
    using Constantes.Clases;
    using System.Collections.Generic;
    public class Recepcionista : Persona
    {
        public TurnoRecepcionista TurnoRecepcionista { get; set; }

        // NAV
        public virtual ICollection<Turno> Turnos { get; set; }
    }
}