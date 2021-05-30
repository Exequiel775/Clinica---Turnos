namespace Sistema.Sanatorio.Controllers
{
    using Servicios.Interface.Persona;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using System.Collections.Generic;
    using System.IO;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Models;

    public class MedicosController : Controller
    {
        private readonly IMedicoServicio _medicoServicio;
        private readonly IWebHostEnvironment _env;
        public MedicosController(IMedicoServicio medicoServicio, IWebHostEnvironment env)
        {
            _medicoServicio = medicoServicio;
            _env = env;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return View((IEnumerable<MedicoDto>) await _medicoServicio.Get(typeof(MedicoDto), string.Empty));
        }

        [HttpGet]
        public IActionResult NuevoMedico()
        {
            return View();
        }

        [HttpGet]
        public async Task<JsonResult> JsonMedicos()
        {
            var medicos = (IEnumerable<MedicoDto>)await _medicoServicio.Get(typeof(MedicoDto), string.Empty);

            return Json(new { listaMedicos = medicos });
        }

        [HttpPost]
        public async Task<JsonResult> NuevoMedico([FromForm] ModelMedico datosMedico)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    string fileName = datosMedico.FileImage.FileName;
                    var logoPath = Path.Combine(_env.WebRootPath, "Image");

                    using(var fileStream = new FileStream(Path.Combine(logoPath, fileName), FileMode.Create))
                    {
                        await datosMedico.FileImage.CopyToAsync(fileStream);
                    }

                    datosMedico.Imagen = $"~/Image/{fileName}";

                    var agregarMedico = await _medicoServicio.Add(new MedicoDto
                    {
                        LocalidadId = datosMedico.LocalidadId,
                        EspecialidadId = datosMedico.EspecialidadId,
                        Nombre = datosMedico.Nombre,
                        Apellido = datosMedico.Apellido,
                        Dni = datosMedico.Dni,
                        Celular = datosMedico.Celular,
                        Telefono = datosMedico.Telefono,
                        FechaNacimiento = datosMedico.FechaNacimiento,
                        Email = datosMedico.Email,
                        FechaRegistro = datosMedico.FechaRegistro,
                        Matricula = datosMedico.Matricula,
                        Imagen = datosMedico.Imagen
                    });

                    return Json(new { respuesta = agregarMedico });
                }
                catch (System.Exception e)
                {
                    throw new System.Exception(e.Message);
                }
            }

            return Json(new { respuesta = false });
        }

        [HttpPut]
        public async Task<JsonResult> Modificar([FromBody] MedicoDto medico)
        {
            if (ModelState.IsValid)
            {
                var modificar = await _medicoServicio.Update(medico);

                return Json(new { respuesta = modificar } );
            }

            return Json(new { respuesta = false } );
        }
    }
}