namespace Constantes.Clases.Response
{
    using System.Collections.Generic;
    using System.Linq;
    public class Response
    {
        public bool Estado { get; set; }
        public string Mensaje { get; set; }
        #nullable enable
        public IQueryable<object>? ListaObjetos { get; set; }
        public object? Objeto { get ;set; }
        #nullable disable
    }
}