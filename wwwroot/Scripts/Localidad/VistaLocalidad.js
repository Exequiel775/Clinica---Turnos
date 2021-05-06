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
var Localidad_1 = require("./Localidad");
var Provincia_1 = require("../ProvinciaTS/Provincia");
var ClaseLocalidad_1 = require("./ClaseLocalidad");
var _localidadServicio = new Localidad_1.LocalidadServicio();
var _provinciaServicio = new Provincia_1.ProvinciaServicio();
var _localidadSeleccionada;
document.addEventListener('DOMContentLoaded', function () {
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = console).log;
                    return [4 /*yield*/, _provinciaServicio.Get()];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [2 /*return*/];
            }
        });
    }); });
    ActualizarTabla();
    CargarCmbProvincia('cmbProvincia');
});
document.getElementById('modificarLocalidad').addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
    var ejecutarModificacion;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                alert('A actualizar');
                return [4 /*yield*/, ModificarLocalidad()];
            case 1:
                ejecutarModificacion = _a.sent();
                if (ejecutarModificacion) {
                    ActualizarTabla();
                }
                else {
                    alert("Error al actualizar la localidad");
                }
                return [2 /*return*/];
        }
    });
}); });
function ActualizarTabla() {
    return __awaiter(this, void 0, void 0, function () {
        var tabla, localidades;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tabla = document.getElementById('tabla-localidad');
                    tabla.innerHTML = '';
                    return [4 /*yield*/, _localidadServicio.Get()];
                case 1:
                    localidades = _a.sent();
                    localidades.forEach(function (localidad) {
                        var row = tabla.insertRow();
                        row.innerHTML = "\n        <td>" + localidad.descripcion + "</td>\n        <td>" + localidad.provincia + "</td>\n        <td></td>\n        ";
                        var btnModificar = document.createElement('button');
                        btnModificar.classList.add('btn', 'btn-primary');
                        btnModificar.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
                        btnModificar.value = localidad.id.toString();
                        btnModificar.dataset.toggle = 'modal';
                        btnModificar.dataset.target = '#modalLocalidad';
                        btnModificar.onclick = function (e) {
                            _localidadSeleccionada = parseInt(e.target.value);
                            CargarCmbProvincia('cmbNuevaProvincia');
                            CargarDatosLocalidadSeleccionada(parseInt(e.target.value));
                        };
                        row.children[2].appendChild(btnModificar);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function CargarCmbProvincia(nombreSelect) {
    return __awaiter(this, void 0, void 0, function () {
        var select, provincias;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    select = document.getElementById(nombreSelect);
                    select.innerHTML = '';
                    return [4 /*yield*/, _provinciaServicio.Get()];
                case 1:
                    provincias = _a.sent();
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
function CargarDatosLocalidadSeleccionada(localidad) {
    return __awaiter(this, void 0, void 0, function () {
        var cmbProvincia, localidadSeleccionada;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cmbProvincia = document.getElementById('cmbNuevaProvincia');
                    return [4 /*yield*/, _localidadServicio.GetById(localidad)];
                case 1:
                    localidadSeleccionada = _a.sent();
                    document.getElementById('txtNuevaDescripcion').value = localidadSeleccionada.descripcion;
                    cmbProvincia.value = localidadSeleccionada.provinciaId.toString();
                    return [2 /*return*/];
            }
        });
    });
}
function ModificarLocalidad() {
    return __awaiter(this, void 0, void 0, function () {
        var objLocalidad;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    objLocalidad = new ClaseLocalidad_1.Localidad();
                    objLocalidad.id = _localidadSeleccionada;
                    objLocalidad.provinciaId = parseInt(document.getElementById('cmbNuevaProvincia').value);
                    objLocalidad.descripcion = document.getElementById('txtNuevaDescripcion').value;
                    return [4 /*yield*/, _localidadServicio.Update(objLocalidad)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//# sourceMappingURL=VistaLocalidad.js.map