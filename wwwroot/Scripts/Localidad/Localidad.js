"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalidadServicio = void 0;
var LocalidadServicio = /** @class */ (function () {
    function LocalidadServicio() {
    }
    LocalidadServicio.prototype.Add = function (localidad) {
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
    LocalidadServicio.prototype.Get = function () {
        return fetch('/Localidad/Get', {
            method: 'GET'
        })
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
    LocalidadServicio.prototype.GetById = function (id) {
        return fetch("/Localidad/GetById?loc=" + id, {
            method: 'GET'
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.localidad;
        });
    };
    LocalidadServicio.prototype.Update = function (localidadModificar) {
        return fetch('/Localidad/Update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(localidadModificar)
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
exports.LocalidadServicio = LocalidadServicio;
//# sourceMappingURL=Localidad.js.map