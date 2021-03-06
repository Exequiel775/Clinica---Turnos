namespace Servicios.Interface.Persona
{
    using Base;
    using System;
    using Usuario;
    public class PersonaDto : BaseDto
    {
        public bool Item { get; set; }
        public long LocalidadId { get; set; }
        public long ProvinciaId { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Dni { get; set; }
        public DateTime FechaNacimiento { get; set; }
        #nullable disable
        public string Email { get; set; }
        #nullable disable
        public int Celular { get; set; }
        public int? Telefono { get; set; }
        public string ApyNom => $"{Apellido}, {Nombre}";
        public string Localidad { get; set; }
        public string FechaStr => FechaNacimiento.Date.ToString("yyyy-MM-dd");
        #nullable enable
        public UsuarioDto? Usuario { get; set; }
        #nullable disable
    }
}