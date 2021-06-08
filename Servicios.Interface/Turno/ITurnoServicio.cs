namespace Servicios.Interface.Turno
{
    using System.Collections.Generic;
    using System.Linq;

    public interface ITurnoServicio
    {
        bool Add(TurnoDto turno);
        IQueryable<TurnoDto> GetByMedico(long idMedico);
    }
}