"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteServicio = void 0;
var PacienteServicio = /** @class */ (function () {
    function PacienteServicio() {
    }
    PacienteServicio.prototype.BuscarPaciente = function (dni) {
        return fetch("/Turnos/BuscarPaciente?dni=" + dni, {
            method: 'GET'
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error("Ocurrio un error al obtener el paciente " + response.statusText);
            }
            return response.json();
        })
            .then(function (json) { return json.paciente; });
    };
    return PacienteServicio;
}());
exports.PacienteServicio = PacienteServicio;
//# sourceMappingURL=PacienteServicio.js.map