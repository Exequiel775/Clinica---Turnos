"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecepcionistaServicio = void 0;
var RecepcionistaServicio = /** @class */ (function () {
    function RecepcionistaServicio() {
    }
    RecepcionistaServicio.prototype.RecepcionistasPaginados = function (cadenaBuscar, pagina) {
        return fetch("/Persona/ListadoRecepcionistasPaginados?buscar=" + cadenaBuscar + "&index=" + pagina, {
            method: 'GET',
        })
            .then(function (response) {
            if (!response.ok) {
                console.log("Error al obtener recepcionistas: " + response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.recepcionistas;
        });
    };
    RecepcionistaServicio.prototype.Add = function (recepcionista) {
        return fetch('/Persona/AgregarRecepcionista', {
            method: 'POST',
            body: JSON.stringify(recepcionista),
            headers: {
                'Content-Type': 'application/json'
            }
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
    RecepcionistaServicio.prototype.Get = function () {
        return fetch('/Persona/ListadoRecepcionistas', {
            method: 'GET'
        })
            .then(function (response) {
            if (!response.ok) {
                console.log("Error: " + response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.recepcionistas;
        });
    };
    RecepcionistaServicio.prototype.GetById = function (idRecepcionista) {
        throw new Error('Method not implemented.');
    };
    RecepcionistaServicio.prototype.Update = function (recepcionista) {
        return fetch('/Persona/ModificarRecepcionista', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(recepcionista)
        })
            .then(function (response) {
            if (!response.ok) {
                console.log("Error al modificar recepcionista: " + response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.respuesta;
        });
    };
    return RecepcionistaServicio;
}());
exports.RecepcionistaServicio = RecepcionistaServicio;
//# sourceMappingURL=RecepconistaServicio.js.map