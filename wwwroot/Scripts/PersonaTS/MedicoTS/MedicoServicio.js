"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoServicio = void 0;
var Request_1 = require("../../FetchRequestTS/Request");
var MedicoServicio = /** @class */ (function () {
    function MedicoServicio() {
        this._request = new Request_1.Request();
    }
    MedicoServicio.prototype.Add = function (formData) {
        return fetch('/Medicos/NuevoMedico', {
            method: 'POST',
            body: formData
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error("Error al agregar medico " + response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.respuesta;
        });
    };
    MedicoServicio.prototype.Get = function () {
        return this._request.Get('/Medicos/JsonMedicos');
        /*
        return fetch('/Medicos/JsonMedicos', {
            method:'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al obtener medicos: ${response.statusText}`);
            }

            return response.json() as Promise<{listaMedicos: Medico[]}>;
        })
        .then(json => {
            return json.listaMedicos;
        })*/
    };
    MedicoServicio.prototype.Update = function (medicoModificar) {
        return fetch('/Medicos/Modificar', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicoModificar)
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error("Ocurrio el siguiente error al modificar medico: " + response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.respuesta;
        });
    };
    return MedicoServicio;
}());
exports.MedicoServicio = MedicoServicio;
//# sourceMappingURL=MedicoServicio.js.map