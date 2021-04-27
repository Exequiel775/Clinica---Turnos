namespace Infraestructura.UnidadDeTrabajo
{
    using System.Threading.Tasks;
    using Entidad.Base.Repositorio;
    using Entidades;
    using Entidades.UnidadDeTrabajo;
    using Repositorio;
    public class UnidadDeTrabajo : IUnidadDeTrabajo
    {
        private readonly DataContext _db;

        public UnidadDeTrabajo(DataContext db)
        {
           _db = db;
        }

        private IRepositorio<Provincia> _provinciaRepositorio;
        public IRepositorio<Provincia> RepositorioProvincia => _provinciaRepositorio ?? (_provinciaRepositorio = new Repositorio<Provincia>(_db)); 
        private IRepositorio<Localidad> _localidadRepositorio;
        public IRepositorio<Localidad> LocalidadRepositorio => _localidadRepositorio ?? (_localidadRepositorio = new Repositorio<Localidad>(_db));
        public async Task<bool> Commit() => await _db.SaveChangesAsync() > 0;
        public async Task RoolBack() => await _db.DisposeAsync();
    }
}