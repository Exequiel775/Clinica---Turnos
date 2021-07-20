namespace Entidades
{
    public class Perfil_Controlador
    {
        public long PerfilId { get; set; }
        public long ControladorId { get; set; }

        // Navegacion
        public Perfil Perfil { get; set; }
        public Controlador Controlador { get; set; }
    }
}