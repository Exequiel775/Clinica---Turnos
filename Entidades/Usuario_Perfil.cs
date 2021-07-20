namespace Entidades
{
    using Entidad.Base;
    public class Usuario_Perfil
    {
        public long UsuarioId { get; set; }
        public long PerfilId { get; set; }

        // NAV
        public Usuario Usuario { get; set; }
        public Perfil Perfil { get; set; }
    }
}