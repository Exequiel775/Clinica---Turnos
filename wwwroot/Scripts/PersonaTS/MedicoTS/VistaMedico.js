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
var MedicoServicio_1 = require("./MedicoServicio");
var EspecialidadServicio_1 = require("../../EspecialidadTS/EspecialidadServicio");
var Provincia_1 = require("../../ProvinciaTS/Provincia");
var Localidad_1 = require("../../Localidad/Localidad");
var Medico_1 = require("./Medico");
var sweetalert2_1 = require("sweetalert2");
var _medicoServicio = new MedicoServicio_1.MedicoServicio();
var _especialidadServicio = new EspecialidadServicio_1.EspecialidadServicio();
var _provinciaServicio = new Provincia_1.ProvinciaServicio();
var _localidadServicio = new Localidad_1.LocalidadServicio();
document.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, CargarProvincias()];
            case 1:
                _a.sent();
                return [4 /*yield*/, CargarEspecialidad()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
function CargarProvincias() {
    return __awaiter(this, void 0, void 0, function () {
        var provincias, selectProvincia;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _provinciaServicio.Get()];
                case 1:
                    provincias = _a.sent();
                    selectProvincia = document.getElementById('provincia');
                    provincias.forEach(function (provincia) {
                        var option = document.createElement('option');
                        option.value = provincia.id.toString();
                        option.text = provincia.descripcion;
                        selectProvincia.add(option);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function CargarEspecialidad() {
    return __awaiter(this, void 0, void 0, function () {
        var especialidades, selectEspecialidad;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _especialidadServicio.Get()];
                case 1:
                    especialidades = _a.sent();
                    selectEspecialidad = document.getElementById('especialidad');
                    especialidades.forEach(function (especialidad) {
                        selectEspecialidad.add(new Option(especialidad.descripcion, especialidad.id.toString()));
                    });
                    return [2 /*return*/];
            }
        });
    });
}
var selectProvincia = document.getElementById('provincia');
selectProvincia.addEventListener('change', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, CargarLocalidades(parseInt(e.target.value))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
function CargarLocalidades(provincia) {
    return __awaiter(this, void 0, void 0, function () {
        var localidades, selectLocalidad;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _localidadServicio.GetByProvincia(provincia)];
                case 1:
                    localidades = _a.sent();
                    selectLocalidad = document.getElementById('localidad');
                    selectLocalidad.innerHTML = '';
                    localidades.forEach(function (localidad) {
                        selectLocalidad.add(new Option(localidad.descripcion, localidad.id.toString()));
                    });
                    return [2 /*return*/];
            }
        });
    });
}
// Envio del formulario a nuestro backend
var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                return [4 /*yield*/, AgregarMedico(new FormData(formulario))];
            case 1:
                if (_a.sent()) {
                    sweetalert2_1.default.fire('Registro Exitoso!', 'El medico fue registrado exitosamente', 'success');
                    formulario.reset();
                }
                else {
                    sweetalert2_1.default.fire({
                        icon: 'error',
                        title: ':(',
                        text: 'Ocurrio un error al registrar, verifique los datos ingresados. Si el problema persiste por favor comunicarse con' +
                            'area tecnica.'
                    });
                }
                return [2 /*return*/];
        }
    });
}); });
function AgregarMedico(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var objMedico, file, archivo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    objMedico = new Medico_1.Medico();
                    objMedico.localidadId = parseInt(formData.get('LocalidadId').toString());
                    objMedico.nombre = formData.get('Nombre').toString();
                    objMedico.apellido = formData.get('Apellido').toString();
                    objMedico.dni = parseInt(formData.get('Dni').toString());
                    objMedico.fechaNacimiento = formData.get('FechaNacimiento');
                    objMedico.especialidadId = parseInt(formData.get('EspecialidadId').toString());
                    objMedico.matricula = formData.get('Matricula').toString();
                    objMedico.telefono = parseInt(formData.get('Telefono').toString());
                    objMedico.celular = parseInt(formData.get('Celular').toString());
                    objMedico.email = formData.get('Email').toString();
                    file = document.getElementById('file-imagen');
                    archivo = file.files[0];
                    formData.append('FileImage', archivo);
                    formData.append('Localidad', objMedico.localidadId.toString());
                    return [4 /*yield*/, _medicoServicio.Add(formData)];
                case 1: 
                /*
                const input_file = document.getElementById('file-imagen') as HTMLInputElement;
                objMedico.fileImage = input_file.files[0];
                const input_file = document.getElementById('file-imagen') as HTMLInputElement;
                const imagen = input_file.files[0];
                */
                return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//# sourceMappingURL=VistaMedico.js.map