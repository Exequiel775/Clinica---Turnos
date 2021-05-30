namespace Sistema.Sanatorio.Models
{
    using Servicios.Interface.Persona;
    using Microsoft.AspNetCore.Http;
    public class ModelMedico : MedicoDto
    {
        public IFormFile FileImage { get; set; }
    }
}