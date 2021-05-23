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
var TipoOperacion_1 = require("../Constantes/TipoOperacion");
var Especialidad_1 = require("./Especialidad");
var EspecialidadServicio_1 = require("./EspecialidadServicio");
var _especialidadServicio = new EspecialidadServicio_1.EspecialidadServicio();
var _tipoOperacion;
var _entidadId;
var _paginaActual = null;
document.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ActualizarTabla(null)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
document.getElementById('nuevaEspecialidad').addEventListener('click', function (e) {
    _tipoOperacion = TipoOperacion_1.TipoOperacion.Nuevo;
    VerificarTipoOperacion(TipoOperacion_1.TipoOperacion.Nuevo, null);
    e.target.dataset.toggle = "modal";
    e.target.dataset.target = "#modalEspecialidad";
});
/*

document.querySelectorAll('.modificar').forEach((boton) => {
    boton.addEventListener('click', (e) => {

        _tipoOperacion = TipoOperacion.Modificar;
        VerificarTipoOperacion(TipoOperacion.Modificar);

        (e.target as HTMLButtonElement).dataset.toggle = "modal";
        (e.target as HTMLButtonElement).dataset.target = "#modalEspecialidad";
    })
});
*/
var formulario = document.getElementById('formulario-especialidad');
formulario.addEventListener('submit', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var formData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                formData = new FormData(formulario);
                return [4 /*yield*/, EjecutarOperacion(_tipoOperacion, formData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
/*
async function ActualizarTabla(): Promise<void> {
    let especialidades = await _especialidadServicio.Get();

    const tabla = document.getElementById('tabla-especialidades') as HTMLTableElement;
    tabla.innerHTML = '';

    especialidades.forEach((especialidad) => {
        let row = tabla.insertRow();

        row.innerHTML = `
        <td>${especialidad.descripcion}</td>
        <td></td>
        `

        let btnModificar = document.createElement('button');
        btnModificar.classList.add('btn');
        btnModificar.style.padding = '8px';
        btnModificar.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor"
        class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path
        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
        `
        btnModificar.dataset.toggle = 'modal';
        btnModificar.dataset.target = '#modalEspecialidad';
        btnModificar.onclick = () => {
            _tipoOperacion = TipoOperacion.Modificar;
            _entidadId = especialidad.id;
            VerificarTipoOperacion(TipoOperacion.Modificar, especialidad);
        }

        row.children[1].appendChild(btnModificar);
    })
}*/
function ActualizarTabla(pagina) {
    if (pagina === void 0) { pagina = null; }
    return __awaiter(this, void 0, void 0, function () {
        var especialidades, tabla_1, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, _especialidadServicio.GetEspecialidadesPaginadas(pagina)];
                case 1:
                    especialidades = _a.sent();
                    tabla_1 = document.getElementById('tabla-especialidades');
                    tabla_1.innerHTML = '';
                    especialidades.especialidades.forEach(function (especialidad) {
                        var row = tabla_1.insertRow();
                        row.innerHTML = "\n        <td>" + especialidad.descripcion + "</td>\n        <td></td>\n        ";
                        var btnModificar = document.createElement('button');
                        btnModificar.classList.add('btn');
                        btnModificar.style.padding = '8px';
                        btnModificar.innerHTML = "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"20\" fill=\"currentColor\"\n        class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n        <path\n        d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\n        <path fill-rule=\"evenodd\"\n        d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\n        </svg>\n        ";
                        btnModificar.dataset.toggle = 'modal';
                        btnModificar.dataset.target = '#modalEspecialidad';
                        btnModificar.onclick = function () {
                            _tipoOperacion = TipoOperacion_1.TipoOperacion.Modificar;
                            _entidadId = especialidad.id;
                            VerificarTipoOperacion(TipoOperacion_1.TipoOperacion.Modificar, especialidad);
                        };
                        row.children[1].appendChild(btnModificar);
                    });
                    CrearPaginado(especialidades.paginas);
                    ActualizarMuestra(especialidades.mostrando, especialidades.totalRegistros);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function VerificarTipoOperacion(tipoOperacion, especialidad) {
    console.log(tipoOperacion);
    switch (tipoOperacion) {
        case TipoOperacion_1.TipoOperacion.Nuevo:
            {
                document.getElementById('modalEspecialidadTitulo').textContent = 'Nueva Especialidad';
                document.getElementById('descripcion').value = '';
                break;
            }
        case TipoOperacion_1.TipoOperacion.Modificar:
            {
                document.getElementById('modalEspecialidadTitulo').textContent = 'Modificar Especialidad';
                document.getElementById('descripcion').value = especialidad.descripcion;
                break;
            }
        case TipoOperacion_1.TipoOperacion.Eliminar:
            {
                document.getElementById('modalEspecialidadTitulo').textContent = 'Eliminar Especialidad';
                break;
            }
    }
}
function EjecutarOperacion(tipoOperacion, formData) {
    return __awaiter(this, void 0, void 0, function () {
        var objEspecialidad, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    objEspecialidad = new Especialidad_1.Especialidad();
                    _a = tipoOperacion;
                    switch (_a) {
                        case TipoOperacion_1.TipoOperacion.Nuevo: return [3 /*break*/, 1];
                        case TipoOperacion_1.TipoOperacion.Modificar: return [3 /*break*/, 3];
                        case TipoOperacion_1.TipoOperacion.Eliminar: return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 1:
                    objEspecialidad.descripcion = formData.get('Descripcion').toString();
                    return [4 /*yield*/, AgregarEspecialidad(objEspecialidad)];
                case 2:
                    if (_b.sent()) {
                        alert('Especialidad Cargada');
                    }
                    else {
                        alert('Error al agregar la especialidad');
                    }
                    return [3 /*break*/, 6];
                case 3:
                    objEspecialidad.id = _entidadId;
                    objEspecialidad.descripcion = formData.get('Descripcion').toString();
                    return [4 /*yield*/, ModificarEspecialidad(objEspecialidad)];
                case 4:
                    if (_b.sent()) {
                        ActualizarTabla(_paginaActual);
                    }
                    else {
                        alert('Error al modificar');
                    }
                    return [3 /*break*/, 6];
                case 5:
                    {
                        return [3 /*break*/, 6];
                    }
                    _b.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
function AgregarEspecialidad(especialidad) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _especialidadServicio.Add(especialidad)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function ModificarEspecialidad(especialidadModificar) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _especialidadServicio.Update(especialidadModificar)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function CrearPaginado(paginas) {
    var _this = this;
    var contenedor_paginado = document.querySelector('.contenedor-paginado');
    contenedor_paginado.innerHTML = '';
    var _loop_1 = function (i) {
        var btnPagina = document.createElement('button');
        btnPagina.classList.add('paginado', 'border');
        btnPagina.textContent = i.toString();
        btnPagina.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ActualizarTabla(i)];
                    case 1:
                        _a.sent();
                        _paginaActual = i;
                        return [2 /*return*/];
                }
            });
        }); };
        contenedor_paginado.appendChild(btnPagina);
    };
    for (var i = 1; i <= paginas; i++) {
        _loop_1(i);
    }
}
function ActualizarMuestra(cantidadPantalla, total) {
    var strMostrando = document.getElementById('mostrando');
    var strTotal = document.getElementById('totalRegistros');
    strMostrando.textContent = cantidadPantalla.toString();
    strTotal.textContent = total.toString();
}
//# sourceMappingURL=VistaIndexEspecialidad.js.map