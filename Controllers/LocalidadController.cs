namespace Sistema.Sanatorio.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Servicios.Interface.Localidad;
    using System.Linq;
    using System;
    using System.Collections.Generic;
    public class LocalidadController : Controller
    {
        private readonly ILocalidadServicio _localidadServicio;
        private readonly int _cantidadMostrar = 5;
        public LocalidadController(ILocalidadServicio localidadServicio)
        {
            _localidadServicio = localidadServicio;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult Get(int? paginado)
        {
            var localidades = _localidadServicio.Get();

            var _paginado = paginado ?? 1;
            decimal totalLocalidades = localidades.Count();
            int total_paginas = Convert.ToInt32(Math.Ceiling(totalLocalidades / _cantidadMostrar));

            var objetoPaginar = new LocalidadPaginada();
            objetoPaginar.localidades = localidades.Skip((_paginado - 1) * _cantidadMostrar).Take(_cantidadMostrar).ToList();
            objetoPaginar.paginas = total_paginas;

            return Json(new 
            { 
                objetoPaginado = objetoPaginar
            });
        }

        [HttpGet]
        public JsonResult GetSinPaginar()
        {
            var listaLocalidades = _localidadServicio.Get();
            return Json(new { localidades = listaLocalidades });
        }

        [HttpGet]
        public JsonResult GetById(long loc)
        {
            return Json(new { localidad = _localidadServicio.GetById(loc) } );
        }
        
        [HttpPost]
        public JsonResult Add([FromBody] LocalidadDto localidad)
        {
            var agregarProvincia = _localidadServicio.Add(localidad);

            return Json(new { respuesta = agregarProvincia });
        }

        [HttpGet]
        public JsonResult GetByProvincia(long provincia)
        {
            return Json(new { localidades = _localidadServicio.Get(provincia) });
        }

        [HttpPost]
        public JsonResult Update([FromBody] LocalidadDto localidadModificar)
        {
            if (!ModelState.IsValid) return Json(new { respuesta = false });

            return Json(new { respuesta = _localidadServicio.Update(localidadModificar) });
        }
    }

    public class LocalidadPaginada
    {
        public List<LocalidadDto> localidades { get; set; }
        public int paginas { get; set; }
    }
}