namespace Servicios.Implementacion.Controlador
{
    using Servicios.Interface.Controlador;
    using System.Collections.Generic;
    using System.Linq;
    using Entidades.UnidadDeTrabajo;
    using System.Transactions;
    public class ControladorServicio : IControladorServicio
    {
        private readonly IUnidadDeTrabajo _unidadDeTrabajo;
        public ControladorServicio(IUnidadDeTrabajo unidadDeTrabajo)
        {
            _unidadDeTrabajo = unidadDeTrabajo;
        }

        public bool Add(List<ControladorDto> controladores)
        {
            using (var transaction = new TransactionScope())
            {
                try
                {
                    foreach (var item in controladores.Where(x => !x.ExisteDb).ToList())
                    {
                        _unidadDeTrabajo.ControladorRepositorio.AddAsync(new Entidades.Controlador
                        {
                            Descripcion = item.Descripcion
                        });
                    }

                    _unidadDeTrabajo.CommitNoAsync();

                    transaction.Complete();

                    return true;
                }
                catch
                {
                    transaction.Dispose();
                    return false;
                }
            }
        }

        public IQueryable<ControladorDto> Get()
        {
            return _unidadDeTrabajo.ControladorRepositorio.GetNoAsync()
            .Select(x => new ControladorDto
            {
                Id = x.Id,
                Descripcion = x.Descripcion
            }).AsQueryable();
        }
    }
}