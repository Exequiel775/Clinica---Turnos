"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoTurno = exports.Turno = void 0;
var Paciente_1 = require("../PacienteTS/Paciente");
var Turno = /** @class */ (function () {
    function Turno() {
        this.paciente = new Paciente_1.Paciente();
    }
    return Turno;
}());
exports.Turno = Turno;
var EstadoTurno;
(function (EstadoTurno) {
    EstadoTurno[EstadoTurno["Atendido"] = 1] = "Atendido";
    EstadoTurno[EstadoTurno["Ausente"] = 2] = "Ausente";
    EstadoTurno[EstadoTurno["En_Espera"] = 3] = "En_Espera";
    EstadoTurno[EstadoTurno["Cancelado"] = 4] = "Cancelado";
})(EstadoTurno = exports.EstadoTurno || (exports.EstadoTurno = {}));
//# sourceMappingURL=Turno.js.map