var Provincia = /** @class */ (function () {
    function Provincia() {
    }
    return Provincia;
}());
var ProvinciaServicio = /** @class */ (function () {
    function ProvinciaServicio() {
    }
    ProvinciaServicio.prototype.AgregarProvincia = function (provincia) {
        return fetch('/Provincia/NuevaProvincia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(provincia)
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.finalizado;
        });
    };
    ProvinciaServicio.prototype.GetProvincias = function () {
        return fetch('/Provincia/JsonProvincias', {
            method: 'GET'
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.provincias;
        });
    };
    return ProvinciaServicio;
}());
document.addEventListener('DOMContentLoaded', function () {
    ActualizarTabla();
});
document.getElementById('formularioProvincia').onsubmit = function (e) {
    e.preventDefault();
    var formulario = document.getElementById('formularioProvincia');
    var _provinciaServicio = new ProvinciaServicio();
    var objetoProvincia = new Provincia();
    objetoProvincia.descripcion = document.getElementById('txtDescripcion').value;
    _provinciaServicio.AgregarProvincia(objetoProvincia)
        .then(function (json) {
        if (json) {
            alert('Agregado');
            formulario.reset();
            ActualizarTabla();
        }
        else {
            alert('Error al agregar la provoncia');
        }
    });
};
function ActualizarTabla() {
    var tabla = document.getElementById('tabla-provincias');
    tabla.innerHTML = '';
    var _provinciaServicio = new ProvinciaServicio();
    _provinciaServicio.GetProvincias().then(function (json) {
        json.forEach(function (indice) {
            var row = tabla.insertRow();
            row.innerHTML = "\n            <td>" + indice.id + "</td>\n            <td>" + indice.descripcion + "</td>\n            ";
        });
    });
}
/*
function api<T>(url: string): Promise<T> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<{ data: T }>
      })
      .then(data => {
          return data.data
      })
  }
  */ 
