namespace Servicios.Interface.Controlador
{
    using System.Linq;
    using System.Collections.Generic;
    public interface IControladorServicio
    {
        bool Add(List<ControladorDto> controladores);
        IQueryable<ControladorDto> Get();
    }
}