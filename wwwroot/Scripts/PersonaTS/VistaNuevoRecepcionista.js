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
var Recepcionista_1 = require("./Recepcionista");
var Localidad_1 = require("../Localidad/Localidad");
var Provincia_1 = require("../ProvinciaTS/Provincia");
var _recepcionistaServicio = new RecepconistaServicio_1.RecepcionistaServicio();
var _localidadServicio = new Localidad_1.LocalidadServicio();
var _provinciaServicio = new Provincia_1.ProvinciaServicio();
document.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, CargarProvincias()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var select = document.getElementById('cmbProvincia');
select.addEventListener('change', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var provinciaSeleccionada;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                provinciaSeleccionada = parseInt(e.target.value);
                return [4 /*yield*/, CargarLocalidades(provinciaSeleccionada)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var formData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                formData = new FormData(formulario);
                return [4 /*yield*/, AgregarRecepcionista(formData)];
            case 1:
                if (_a.sent()) {
                    document.getElementById('alerta').style.display = 'block';
                    formulario.reset();
                }
                else {
                    alert('Error al agregar el recepcionista');
                }
                return [2 /*return*/];
        }
    });
}); });
document.getElementById('btnBuscar').addEventListener('click', function () {
    var busqueda = document.getElementById('input-buscar').value;
    window.location.href = "/Persona/Recepcionistas?buscar=" + busqueda;
});
function AgregarRecepcionista(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var objetoRecepcionista, agregar;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    objetoRecepcionista = new Recepcionista_1.Recepcionista();
                    objetoRecepcionista.nombre = formData.get('Nombre').toString();
                    objetoRecepcionista.apellido = formData.get('Apellido').toString();
                    objetoRecepcionista.dni = parseInt(formData.get('Dni').toString());
                    objetoRecepcionista.localidadId = parseInt(formData.get('LocalidadId').toString());
                    objetoRecepcionista.celular = parseInt(formData.get('Celular').toString());
                    objetoRecepcionista.telefono = parseInt(formData.get('Telefono').toString());
                    objetoRecepcionista.turnoRecepcionista = parseInt(formData.get('TurnoRecepcionista').toString());
                    objetoRecepcionista.email = formData.get('Email').toString();
                    objetoRecepcionista.fechaNacimiento = formData.get('FechaNacimiento');
                    return [4 /*yield*/, _recepcionistaServicio.Add(objetoRecepcionista)];
                case 1:
                    agregar = _a.sent();
                    return [2 /*return*/, agregar];
            }
        });
    });
}
function CargarLocalidades(provincia) {
    return __awaiter(this, void 0, void 0, function () {
        var localidades, select;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _localidadServicio.GetByProvincia(provincia)];
                case 1:
                    localidades = _a.sent();
                    select = document.getElementById('cmbLocalidad');
                    select.innerHTML = '';
                    localidades.forEach(function (localidad) {
                        var option = document.createElement('option');
                        option.value = localidad.id.toString();
                        option.text = localidad.descripcion;
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
//# sourceMappingURL=VistaNuevoRecepcionista.js.map