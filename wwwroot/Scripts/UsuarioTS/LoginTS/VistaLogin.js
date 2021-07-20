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
var LoginServicio_1 = require("./LoginServicio");
var sweetalert2_1 = require("sweetalert2");
var Usuario_1 = require("../Usuario");
var _loginServicio = new LoginServicio_1.LoginServicio();
var formulario = document.getElementById('form');
formulario.addEventListener('submit', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var formData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                formData = new FormData(formulario);
                return [4 /*yield*/, IniciarSesion(formData.get('User').toString(), formData.get('Password').toString())];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
function IniciarSesion(usuario, pass) {
    return __awaiter(this, void 0, void 0, function () {
        var user, verificar;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (usuario == "" || pass == "") {
                        sweetalert2_1.default.fire({
                            title: 'Error',
                            text: 'Por favor ingrese su usuario y contraseña.',
                            icon: 'warning'
                        });
                        return [2 /*return*/];
                    }
                    user = new Usuario_1.Usuario();
                    user.nombre = usuario;
                    user.password = pass;
                    return [4 /*yield*/, _loginServicio.IniciarSesion(user)];
                case 1:
                    verificar = _a.sent();
                    if (verificar.estado) {
                        window.location.href = '/Home/Index';
                        return [2 /*return*/];
                    }
                    sweetalert2_1.default.fire({
                        title: 'Error',
                        text: verificar.mensaje,
                        icon: 'error'
                    });
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=VistaLogin.js.map