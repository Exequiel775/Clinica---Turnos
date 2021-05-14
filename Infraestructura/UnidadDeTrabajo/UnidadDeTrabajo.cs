namespace Infraestructura.UnidadDeTrabajo
{
    using System.Threading.Tasks;
    using Entidad.Base.Repositorio;
    using Entidades;
    using Entidades.UnidadDeTrabajo;
    using Repositorio;
    using Entidades.Repositorio;
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
        private IRepositorioRecepcionista _repositorioRecepcionista;
        public IRepositorioRecepcionista RecepcionistaRepositorio => _repositorioRecepcionista ?? (_repositorioRecepcionista = new RepositorioRecepcionista(_db));
        private IRepositorio<Especialidad> _repositorioEspecialidad;
        public IRepositorio<Especialidad> EspecialidadRepositorio => _repositorioEspecialidad ?? (_repositorioEspecialidad = new Repositorio<Especialidad>(_db));
        private IRepositorioMedico _repositorioMedico;
        public IRepositorioMedico MedicoRepositorio => _repositorioMedico ?? (_repositorioMedico = new RepositorioMedico(_db));

        public async Task<bool> CommitAsync() => await _db.SaveChangesAsync() > 0;
        public async Task RoolBack() => await _db.DisposeAsync();
        public void CommitNoAsync() => _db.SaveChanges();
    }
}