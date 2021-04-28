"use strict";
exports.__esModule = true;
var LocalidadServicio = /** @class */ (function () {
    function LocalidadServicio() {
    }
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
});
