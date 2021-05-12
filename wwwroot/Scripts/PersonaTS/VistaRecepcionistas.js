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
var RecepconistaServicio_1 = require("./RecepconistaServicio");
var Localidad_1 = require("../Localidad/Localidad");
var Provincia_1 = require("../ProvinciaTS/Provincia");
var _recepcionistaServicio = new RecepconistaServicio_1.RecepcionistaServicio();
var _localidadServicio = new Localidad_1.LocalidadServicio();
var _provinciaServicio = new Provincia_1.ProvinciaServicio();
document.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, CargarTablaRecepcionistas()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
function CargarTablaRecepcionistas() {
    return __awaiter(this, void 0, void 0, function () {
        var recepcionistas, tabla;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _recepcionistaServicio.Get()];
                case 1:
                    recepcionistas = _a.sent();
                    tabla = document.getElementById('tabla-recepcionistas');
                    tabla.innerHTML = '';
                    recepcionistas.forEach(function (recepcionista) {
                        var row = tabla.insertRow();
                        row.innerHTML = "\n        <td>" + recepcionista.apyNom + "</td>\n        <td>" + recepcionista.dni + "</td>\n        <td>" + recepcionista.localidad + "</td>\n        <td></td>\n        ";
                        var btnModificar = document.createElement('button');
                        btnModificar.classList.add('btn', 'btn-primary');
                        btnModificar.textContent = 'MOD';
                        btnModificar.dataset.toggle = 'modal';
                        btnModificar.dataset.target = '#modalRecepcionista';
                        btnModificar.onclick = function () {
                            CargarDatosRecepcionista(recepcionista);
                        };
                        row.children[3].appendChild(btnModificar);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function CargarDatosRecepcionista(recepcionista) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, CargarLocalidades()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, CargarProvincias()];
                case 2:
                    _a.sent();
                    document.getElementById('nombre').value = recepcionista.nombre;
                    document.getElementById('apellido').value = recepcionista.apellido;
                    document.getElementById('dni').value = recepcionista.dni.toString();
                    document.getElementById('fechaNacimiento').value = recepcionista.fechaStr;
                    document.getElementById('email').value = recepcionista.email;
                    document.getElementById('celular').value = recepcionista.celular.toString();
                    document.getElementById('telefono').value = recepcionista.telefono.toString();
                    document.getElementById('cmbLocalidad').value = recepcionista.localidadId.toString();
                    document.getElementById('cmbTurno').value = recepcionista.turnoRecepcionista.toString();
                    document.getElementById('cmbProvincia').value = recepcionista.provinciaId.toString();
                    return [2 /*return*/];
            }
        });
    });
}
function CargarLocalidades() {
    return __awaiter(this, void 0, void 0, function () {
        var select, localidades;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    select = document.getElementById('cmbLocalidad');
                    select.innerHTML = '';
                    return [4 /*yield*/, _localidadServicio.GetSinPaginado()];
                case 1:
                    localidades = _a.sent();
                    localidades.forEach(function (localidad) {
                        var option = document.createElement('option');
                        option.text = localidad.descripcion;
                        option.value = localidad.id.toString();
                        select.appendChild(option);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function CargarProvincias() {
    return __awaiter(this, void 0, void 0, function () {
        var provincias, select;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _provinciaServicio.Get()];
                case 1:
                    provincias = _a.sent();
                    select = document.getElementById('cmbProvincia');
                    select.innerHTML = '';
                    provincias.forEach(function (provincia) {
                        var option = document.createElement('option');
                        option.text = provincia.descripcion;
                        option.value = provincia.id.toString();
                        select.add(option);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=VistaRecepcionistas.js.map