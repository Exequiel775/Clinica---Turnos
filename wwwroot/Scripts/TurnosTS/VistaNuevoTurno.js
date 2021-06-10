"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var PacienteServicio_1 = require("../PacienteTS/PacienteServicio");
var sweetalert2_1 = require("sweetalert2");
var Turno_1 = require("./Turno");
var TurnoServicio_1 = require("../TurnosTS/TurnoServicio");
var _pacienteServicio = new PacienteServicio_1.PacienteServicio();
var _turnoServicio = new TurnoServicio_1.TurnoServicio();
document.getElementById('buscar').addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
    var turno, grabarTurno;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                turno = new Turno_1.Turno();
                turno.especialidadId = 1;
                turno.fechaAtencion = new Date();
                turno.medicoId = 1;
                turno.recepcionistaId = 1;
                turno.paciente.apellido = 'Chaves';
                turno.paciente.celular = 131312;
                turno.paciente.dni = 321123321;
                turno.paciente.email = 'jessica@gmail.com';
                turno.paciente.fechaNacimiento = new Date();
                turno.paciente.localidadId = 3;
                turno.paciente.nombre = 'Jessica Fernanda';
                turno.paciente.telefono = 32109123;
                return [4 /*yield*/, GrabarTurno(turno)];
            case 1:
                grabarTurno = _a.sent();
                sweetalert2_1.default.fire({
                    icon: 'info',
                    title: 'Respuesta de la peticion',
                    text: grabarTurno.mensaje + ". Estado: " + grabarTurno.estado
                });
                return [2 /*return*/];
        }
    });
}); });
function BuscarDni(dni) {
    return __awaiter(this, void 0, void 0, function () {
        var paciente;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _pacienteServicio.BuscarPaciente(dni)];
                case 1:
                    paciente = _a.sent();
                    if (paciente.paciente != null) {
                        sweetalert2_1.default.fire({
                            icon: 'success',
                            title: 'Busqueda Exitosa',
                            text: 'Paciente Encontrado...'
                        });
                    }
                    else {
                        sweetalert2_1.default.fire({
                            icon: 'error',
                            title: 'No se encontro al paciente',
                            text: paciente.mensaje
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function GrabarTurno(turno) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _turnoServicio.Add(turno)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
//# sourceMappingURL=VistaNuevoTurno.js.map