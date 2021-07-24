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
var Perfil_1 = require("./Perfil");
var sweetalert2_1 = require("sweetalert2");
var _perfilServicio = new Perfil_1.PerfilServicio();
document.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, CargarPerfiles()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
function CargarPerfiles() {
    return __awaiter(this, void 0, void 0, function () {
        var tabla, perfiles;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tabla = document.getElementById('body-tabla');
                    tabla.innerHTML = '';
                    return [4 /*yield*/, _perfilServicio.Get()];
                case 1:
                    perfiles = _a.sent();
                    perfiles.forEach(function (perfil) {
                        var row = tabla.insertRow();
                        row.innerHTML = "\n        <td>" + perfil.descripcion + "</td>\n        <td></td>\n        ";
                        // BOTON MODIFICAR
                        var btnModificar = document.createElement('button');
                        btnModificar.classList.add('btn', 'btn-danger', 'mr-1');
                        btnModificar.innerHTML = "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"18\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n            <path d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\"/>\n            <path fill-rule=\"evenodd\" d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\"/>\n        </svg>\n        ";
                        // BOTON ELIMINAR
                        var btnEliminar = document.createElement('button');
                        btnEliminar.classList.add('btn', 'btn-warning', 'mr-1');
                        btnEliminar.innerHTML = "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-archive\" viewBox=\"0 0 16 16\">\n            <path d=\"M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z\"/>\n        </svg>\n        ";
                        btnEliminar.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, EliminarPerfil(perfil)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        row.children[1].appendChild(btnModificar);
                        row.children[1].appendChild(btnEliminar);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function EliminarPerfil(perfilSeleccionada) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            sweetalert2_1.default.fire({
                title: "\u00BFDesea eliminar el perfil " + perfilSeleccionada.descripcion + "?",
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: "Si",
                cancelButtonText: 'Cancelar',
            }).then(function (result) { return __awaiter(_this, void 0, void 0, function () {
                var ejecutarEliminacion;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!result.isConfirmed) return [3 /*break*/, 2];
                            return [4 /*yield*/, _perfilServicio.Delete(perfilSeleccionada)];
                        case 1:
                            ejecutarEliminacion = _a.sent();
                            if (ejecutarEliminacion.estado) {
                                sweetalert2_1.default.fire({
                                    title: 'Hecho',
                                    text: ejecutarEliminacion.mensaje,
                                    icon: 'success'
                                });
                                return [2 /*return*/];
                            }
                            sweetalert2_1.default.fire({
                                icon: 'error',
                                title: 'Algo ah ocurrido...',
                                text: ejecutarEliminacion.mensaje
                            });
                            return [3 /*break*/, 3];
                        case 2:
                            if (result.isDenied) {
                                sweetalert2_1.default.fire('Se cancelo la eliminación', '', 'info');
                            }
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
//# sourceMappingURL=VistaIndexPerfil.js.map