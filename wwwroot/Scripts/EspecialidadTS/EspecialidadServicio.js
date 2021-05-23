"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspecialidadServicio = void 0;
var EspecialidadServicio = /** @class */ (function () {
    function EspecialidadServicio() {
    }
    EspecialidadServicio.prototype.GetEspecialidadesPaginadas = function (pagina) {
        if (pagina === void 0) { pagina = null; }
        return fetch("/Especialidad/JsonEspecialidadesPaginadas?pagina=" + pagina, {
            method: 'GET'
        })
            .then(function (response) {
            if (!response.ok) {
                console.log("Error al obtener las especialidades: " + response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.especialidad;
        });
    };
    EspecialidadServicio.prototype.Add = function (especialidad) {
        return fetch('/Especialidad/AddEspecialidad', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(especialidad)
        })
            .then(function (response) {
            if (!response.ok) {
                console.log("Error al agregar: " + response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.respuesta;
        });
    };
    EspecialidadServicio.prototype.Update = function (especialidad) {
        return fetch('/Especialidad/UpdateEspecialidad', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(especialidad)
        })
            .then(function (response) {
            if (!response.ok) {
                console.log("Error al obtener modificar: " + response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.respuesta;
        });
    };
    EspecialidadServicio.prototype.Get = function () {
        return fetch('/Especialidad/JsonEspecialidades', {
            method: 'GET'
        })
            .then(function (response) {
            if (!response.ok) {
                console.log("Error al obtener datos: " + response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.especialidades;
        });
    };
    return EspecialidadServicio;
}());
exports.EspecialidadServicio = EspecialidadServicio;
//# sourceMappingURL=EspecialidadServicio.js.map