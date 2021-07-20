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
var Usuario_1 = require("./Usuario");
var sweetalert2_1 = require("sweetalert2");
var _usuarioServicio = new Usuario_1.UsuarioServicio();
var _personas;
document.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    var usuarios;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, _usuarioServicio.Get()];
            case 1:
                usuarios = _a.sent();
                ActualizarTabla(usuarios);
                return [2 /*return*/];
        }
    });
}); });
function ActualizarTabla(personas) {
    var tablaUsuarios = document.querySelector('.tabla-usuarios');
    tablaUsuarios.innerHTML = '';
    _personas = personas;
    _personas.forEach(function (persona) {
        var row = tablaUsuarios.insertRow();
        if (persona.usuario.nombre == 'NO ASIGNADO') {
            row.style.backgroundColor = '#009432';
            row.style.color = '#2f3640';
        }
        else if (persona.usuario.nombre != 'NO ASIGNADO') {
            row.style.backgroundColor = '#3867d6';
            row.style.color = '#f5f6fa';
        }
        else if (persona.usuario.nombre != 'NO ASIGNADO' && persona.usuario.estaBloqueado) {
            row.style.backgroundColor = '#c0392b';
            row.style.color = '#f5f6fa';
        }
        row.innerHTML = "\n        <td></td>\n        <td>" + persona.apyNom + "</td>\n        <td>" + persona.dni + "</td>\n        <td>" + persona.usuario.nombre + "</td>\n        <td>" + persona.usuario.password + "</td>\n        <td>" + persona.usuario.estaBloqueado + "</td>\n        ";
        var chkItem = document.createElement('input');
        chkItem.type = 'checkbox';
        chkItem.onclick = function () {
            persona.item = chkItem.checked;
        };
        row.children[0].appendChild(chkItem);
    });
}
var btnCrear = document.querySelector('.btnCrear');
btnCrear.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
    var crearUsuario, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, _usuarioServicio.CrearUsuario(_personas)];
            case 1:
                crearUsuario = _b.sent();
                if (!crearUsuario.estado) return [3 /*break*/, 3];
                sweetalert2_1.default.fire({
                    title: 'Exito',
                    text: crearUsuario.mensaje,
                    icon: 'success'
                });
                _a = ActualizarTabla;
                return [4 /*yield*/, _usuarioServicio.Get()];
            case 2:
                _a.apply(void 0, [_b.sent()]);
                _b.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=VistaSeguridadListadoUsuarios.js.map