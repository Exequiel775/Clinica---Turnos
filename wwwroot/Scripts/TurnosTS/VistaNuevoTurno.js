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
var Localidad_1 = require("../Localidad/Localidad");
var Provincia_1 = require("../ProvinciaTS/Provincia");
var EspecialidadServicio_1 = require("../EspecialidadTS/EspecialidadServicio");
var Request_1 = require("../FetchRequestTS/Request");
var _pacienteServicio = new PacienteServicio_1.PacienteServicio();
var _turnoServicio = new TurnoServicio_1.TurnoServicio();
var _especialidadServicio = new EspecialidadServicio_1.EspecialidadServicio();
var _localidadServicio = new Localidad_1.LocalidadServicio();
var _provinciaServicio = new Provincia_1.ProvinciaServicio();
var _requestMedico = new Request_1.Request();
document.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, CargarProvincias()];
            case 1:
                _a.sent();
                return [4 /*yield*/, CargarEspecialidades()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
document.getElementsByClassName('btnBuscar')[0].addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
    var dni;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dni = document.getElementsByName('DniBuscar')[0];
                return [4 /*yield*/, BuscarDni(parseInt(dni.value))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var formData, grabarTurno;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                formData = new FormData(formulario);
                console.log("Formdata: " + formData.forEach(function (asd) { return asd; }));
                return [4 /*yield*/, GenerarTurno(formData)];
            case 1:
                grabarTurno = _a.sent();
                if (grabarTurno.estado) {
                    sweetalert2_1.default.fire({
                        icon: 'success',
                        title: 'Turno grabado',
                        text: grabarTurno.mensaje
                    });
                }
                else {
                    sweetalert2_1.default.fire({
                        icon: 'info',
                        title: 'Respuesta',
                        text: "Estado " + grabarTurno.estado + " - " + grabarTurno.mensaje
                    });
                }
                return [2 /*return*/];
        }
    });
}); });
/*
let turno = new Turno();
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

let grabarTurno = await GrabarTurno(turno);

Swal.fire({
    icon:'info',
    title:'Respuesta de la peticion',
    text:`${grabarTurno.mensaje}. Estado: ${grabarTurno.estado}`
});*/
function BuscarDni(dni) {
    return __awaiter(this, void 0, void 0, function () {
        var paciente;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _pacienteServicio.BuscarPaciente(dni)];
                case 1:
                    paciente = _a.sent();
                    if (paciente != null) {
                        sweetalert2_1.default.fire({
                            icon: 'success',
                            title: 'Busqueda Exitosa',
                            text: 'Paciente Encontrado...'
                        });
                        console.log(paciente);
                    }
                    else {
                        sweetalert2_1.default.fire({
                            icon: 'error',
                            title: 'No se encontro al paciente',
                            text: 'El paciente no se encontro'
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function CargarProvincias() {
    return __awaiter(this, void 0, void 0, function () {
        var provincias, selectProvincia;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _provinciaServicio.Get()];
                case 1:
                    provincias = _a.sent();
                    selectProvincia = document.getElementsByName('Provincia')[0];
                    provincias.forEach(function (provincia) {
                        selectProvincia.add(new Option(provincia.descripcion, provincia.id.toString()));
                        selectProvincia.onchange = function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var provinciaSeleccionada;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        provinciaSeleccionada = e.target.value;
                                        return [4 /*yield*/, CargarLocalidades(parseInt(provinciaSeleccionada))];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function CargarEspecialidades() {
    return __awaiter(this, void 0, void 0, function () {
        var especialidades, selectEspecialidad;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _especialidadServicio.Get()];
                case 1:
                    especialidades = _a.sent();
                    selectEspecialidad = document.getElementsByName('Especialidad')[0];
                    especialidades.forEach(function (especialidad) {
                        selectEspecialidad.add(new Option(especialidad.descripcion, especialidad.id.toString()));
                        selectEspecialidad.onchange = function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var especialidadSeleccionada;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        especialidadSeleccionada = e.target.value;
                                        return [4 /*yield*/, CargarMedicos(parseInt(especialidadSeleccionada))];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function CargarLocalidades(provincia) {
    return __awaiter(this, void 0, void 0, function () {
        var localidades, selectLocalidad;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _localidadServicio.GetByProvincia(provincia)];
                case 1:
                    localidades = _a.sent();
                    selectLocalidad = document.getElementsByName('Localidad')[0];
                    selectLocalidad.options.length = 0;
                    localidades.forEach(function (localidad) {
                        selectLocalidad.add(new Option(localidad.descripcion, localidad.id.toString()));
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function CargarMedicos(especialidad) {
    return __awaiter(this, void 0, void 0, function () {
        var medicos, selectMedico;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _requestMedico.Get("/Medicos/GetByEspecialidad?especialidad=" + especialidad)];
                case 1:
                    medicos = _a.sent();
                    selectMedico = document.getElementsByName('Medico')[0];
                    selectMedico.options.length = 0;
                    selectMedico.disabled = true;
                    window.setTimeout(function () {
                        selectMedico.disabled = false;
                        medicos.forEach(function (medico) {
                            selectMedico.add(new Option(medico.apyNom, medico.id.toString()));
                        });
                    }, 1200);
                    return [2 /*return*/];
            }
        });
    });
}
function GenerarTurno(form) {
    return __awaiter(this, void 0, void 0, function () {
        var objTurno;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    objTurno = new Turno_1.Turno();
                    objTurno.especialidadId = parseInt(form.get('Especialidad').toString());
                    objTurno.medicoId = parseInt(form.get('Medico').toString());
                    objTurno.fechaAtencion = form.get('FechaAtencion');
                    objTurno.paciente.localidadId = parseInt(form.get('Localidad').toString());
                    objTurno.paciente.nombre = form.get('Nombre').toString();
                    objTurno.paciente.apyNom = form.get('Apellido').toString();
                    objTurno.paciente.dni = parseInt(form.get('Dni').toString());
                    objTurno.paciente.fechaNacimiento = form.get('FechaNacimiento');
                    objTurno.paciente.email = form.get('Email').toString();
                    objTurno.paciente.celular = parseInt(form.get('Celular').toString());
                    objTurno.paciente.telefono = parseInt(form.get('Telefono').toString());
                    console.log(objTurno);
                    return [4 /*yield*/, _turnoServicio.Add(objTurno)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//# sourceMappingURL=VistaNuevoTurno.js.map