namespace Servicios.Interface.Controlador
{
    using Base;
    public class ControladorDto : BaseDto
    {
        public bool ExisteDb { get; set; }
        public string Descripcion { get; set; }
    }
}