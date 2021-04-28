"use strict";
exports.__esModule = true;
exports.Provincia = void 0;
var Provincia = /** @class */ (function () {
    function Provincia() {
    }
    return Provincia;
}());
exports.Provincia = Provincia;
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
    ProvinciaServicio.prototype.ModificarProvincia = function (provincia) {
        return fetch('/Provincia/ModificarProvincia', {
            method: 'PUT',
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
    ProvinciaServicio.prototype.GetById = function (provincia) {
        return fetch("/Provincia/JsonGetProvincia?idProvincia=" + provincia, {
            method: 'GET'
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.provincia;
        });
    };
    return ProvinciaServicio;
}());
// =================== ACCIONES SOBRE BOTONES Y LLAMADAS A SERVICIOS ======================= //
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
            row.innerHTML = "\n            <td>" + indice.id + "</td>\n            <td>" + indice.descripcion + "</td>\n            <td></td>\n            ";
            var btnModificar = document.createElement('button');
            btnModificar.classList.add('btn', 'btn-primary', 'm-1');
            btnModificar.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
            btnModificar.title = 'Modificar';
            btnModificar.value = indice.id.toString();
            btnModificar.dataset.toggle = 'modal';
            btnModificar.dataset.target = '#modalProvincia';
            btnModificar.onclick = function (e) {
                var _provinciaServicio = new ProvinciaServicio();
                _provinciaServicio.GetById(parseInt(e.target.value))
                    .then(function (data) {
                    Provincia._provinciaSeleccionada = data.id;
                    document.getElementById('txtNuevaDescripcion').value = data.descripcion;
                });
            };
            var btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'm-1');
            btnEliminar.title = 'Eliminar';
            btnEliminar.value = indice.id.toString();
            btnEliminar.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';
            row.children[2].appendChild(btnModificar);
            row.children[2].appendChild(btnEliminar);
        });
    });
}
document.getElementById('modificar').onclick = function () {
    var _provinciaServicio = new ProvinciaServicio();
    var provinciaModificar = new Provincia();
    provinciaModificar.id = Provincia._provinciaSeleccionada;
    provinciaModificar.descripcion = document.getElementById('txtNuevaDescripcion').value;
    _provinciaServicio.ModificarProvincia(provinciaModificar)
        .then(function (json) {
        if (json) {
            ActualizarTabla();
        }
        else {
            alert("Error al modificar");
        }
    });
};
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
