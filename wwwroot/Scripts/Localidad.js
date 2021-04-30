"use strict";
exports.__esModule = true;
var Localidad = /** @class */ (function () {
    function Localidad() {
    }
    return Localidad;
}());
var LocalidadServicio = /** @class */ (function () {
    function LocalidadServicio() {
    }
    LocalidadServicio.prototype.GetLocalidades = function () {
        return fetch('/Localidad/Get', { method: 'GET' })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.localidades;
        });
    };
    LocalidadServicio.prototype.GetProvincias = function () {
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
    LocalidadServicio.prototype.Add = function (data) {
        var localidad = new Localidad();
        localidad.descripcion = data.get('Descripcion');
        localidad.provinciaId = data.get('ProvinciaId');
        console.log(localidad);
        return fetch('/Localidad/Add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(localidad)
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.respuesta;
        });
    };
    return LocalidadServicio;
}());
// =================== EVENTOS EN VISTA ==================== //
document.addEventListener('DOMContentLoaded', function () {
    var cmbProvincia = document.getElementById('cmbProvincia');
    new LocalidadServicio().GetProvincias()
        .then(function (json) {
        json.forEach(function (elemento) {
            var option = document.createElement('option');
            option.text = elemento.descripcion;
            option.value = elemento.id.toString();
            cmbProvincia.add(option);
        });
    });
    CargarLocalidades();
});
var formulario = document.getElementById('form-localidad');
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = new FormData(event.currentTarget);
    new LocalidadServicio().Add(data)
        .then(function (response) {
        if (response) {
            CargarLocalidades();
            formulario.reset();
        }
        else {
            alert("Error al agregar");
        }
    })["catch"](function (err) { return console.log(err); });
});
function CargarLocalidades() {
    var table = document.getElementById('tabla-localidad');
    table.innerHTML = '';
    new LocalidadServicio().GetLocalidades()
        .then(function (data) {
        data.forEach(function (elemento) {
            var row = table.insertRow();
            row.innerHTML = "\n            <td>" + elemento.id + "</td>\n            <td>" + elemento.descripcion + "</td>\n            <td>" + elemento.provincia + "</td>\n            ";
        });
    });
}
