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
var Medico_1 = require("./Medico");
var MedicoServicio_1 = require("./MedicoServicio");
var Provincia_1 = require("../../ProvinciaTS/Provincia");
var Localidad_1 = require("../../Localidad/Localidad");
var EspecialidadServicio_1 = require("../../EspecialidadTS/EspecialidadServicio");
var sweetalert2_1 = require("sweetalert2");
var _medicoServicio = new MedicoServicio_1.MedicoServicio();
var _provinciaServicio = new Provincia_1.ProvinciaServicio();
var _localidadServicio = new Localidad_1.LocalidadServicio();
var _especialidadServicio = new EspecialidadServicio_1.EspecialidadServicio();
var _selectProvincia = document.getElementById('provincia');
var _selectLocalidad = document.getElementById('localidad');
var _selectEspecialidad = document.getElementById('especialidad');
var _entidadId;
document.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, CargarMedicos()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
_selectProvincia.addEventListener('change', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, CargarLocalidadesProvincia(parseInt(_selectProvincia.value))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
function CargarMedicos() {
    return __awaiter(this, void 0, void 0, function () {
        var medicos, contenedor;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _medicoServicio.Get()];
                case 1:
                    medicos = _a.sent();
                    console.log(medicos);
                    contenedor = document.querySelector('.contenedor');
                    contenedor.innerHTML = '';
                    medicos.forEach(function (medico) {
                        console.log("https://localhost:5001" + medico.imagen.replace('~', ''));
                        //let objUrl = URL.createObjectURL(`https://localhost:5001${medico.imagen.replace('~', '')}`);
                        var divPrincipal = GenerarDivCardPrincipal();
                        divPrincipal.appendChild(GenerarImgCard(medico.imagen));
                        divPrincipal.appendChild(GenerarBodyCard(medico.apyNom, medico.especialidadStr));
                        divPrincipal.appendChild(GenerarBotonesFooter(medico));
                        contenedor.appendChild(divPrincipal);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function GenerarDivCardPrincipal() {
    var divCard = document.createElement('div');
    divCard.classList.add('card', 'col-12', 'col-sm-12', 'col-md-3', 'col-lg-3', 'col-xl-3', 'medicos');
    return divCard;
}
function GenerarImgCard(imagen) {
    var img = document.createElement('img');
    img.classList.add('card-img-top', 'mt-2', 'img-doctor');
    img.src = "https://localhost:5001" + imagen.replace('~', '');
    return img;
}
function GenerarBodyCard(apynom, especialidad) {
    var body = document.createElement('div');
    body.classList.add('card-body');
    var h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = apynom;
    var p = document.createElement('p');
    p.classList.add('card-text', 'text-danger');
    p.textContent = especialidad;
    body.appendChild(h5);
    body.appendChild(p);
    return body;
}
function GenerarBotonesFooter(medico) {
    var _this = this;
    var divFooter = document.createElement('div');
    divFooter.classList.add('form-inline', 'ml-2');
    var btnModificar = document.createElement('button');
    btnModificar.title = medico.apyNom;
    btnModificar.classList.add('btn', 'bg-white', 'ml-3');
    btnModificar.innerHTML = "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"25\" fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n    <path\n        d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\n    <path fill-rule=\"evenodd\"\n        d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\n    </svg>\n    ";
    btnModificar.style.padding = '0px';
    btnModificar.dataset.toggle = 'modal';
    btnModificar.dataset.target = '#modalMedico';
    btnModificar.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _entidadId = medico.id;
                    return [4 /*yield*/, CargarDatosMedicoSeleccionado(medico)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    var btnEliminar = document.createElement('button');
    btnEliminar.title = medico.apyNom;
    btnEliminar.classList.add('btn', 'btn-danger', 'ml-2');
    btnEliminar.textContent = 'Eli';
    btnEliminar.addEventListener('click', function () {
        console.log(medico);
    });
    divFooter.appendChild(btnModificar);
    divFooter.appendChild(btnEliminar);
    return divFooter;
}
function CargarDatosMedicoSeleccionado(medicoSeleccionado) {
    return __awaiter(this, void 0, void 0, function () {
        var tituloModal, inputNombre, inputApellido, inputDni, inputFechaNacimiento, inputCelular, inputTelefono, inputEmail, inputMatricula;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tituloModal = document.getElementById('modalMedicoTitle');
                    inputNombre = document.getElementById('nombre');
                    inputApellido = document.getElementById('apellido');
                    inputDni = document.getElementById('dni');
                    inputFechaNacimiento = document.getElementById('fechaNacimiento');
                    inputCelular = document.getElementById('celular');
                    inputTelefono = document.getElementById('telefono');
                    inputEmail = document.getElementById('email');
                    inputMatricula = document.getElementById('matricula');
                    tituloModal.textContent = medicoSeleccionado.apyNom;
                    inputNombre.value = medicoSeleccionado.nombre;
                    inputApellido.value = medicoSeleccionado.apellido;
                    inputDni.value = medicoSeleccionado.dni.toString();
                    inputFechaNacimiento.value = medicoSeleccionado.fechaStr;
                    inputCelular.value = medicoSeleccionado.celular.toString();
                    inputTelefono.value = medicoSeleccionado.telefono.toString();
                    inputEmail.value = medicoSeleccionado.email;
                    inputMatricula.value = medicoSeleccionado.matricula.toString();
                    return [4 /*yield*/, CargarProvincias(medicoSeleccionado.provinciaId)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, CargarLocalidadMedico(medicoSeleccionado.provinciaId, medicoSeleccionado.localidadId)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, CargarEspecialidades(medicoSeleccionado.especialidadId)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function CargarProvincias(provinciaMedico) {
    return __awaiter(this, void 0, void 0, function () {
        var provincias;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _selectProvincia.innerHTML = '';
                    return [4 /*yield*/, _provinciaServicio.Get()];
                case 1:
                    provincias = _a.sent();
                    provincias.forEach(function (provincia) {
                        _selectProvincia.add(new Option(provincia.descripcion, provincia.id.toString()));
                    });
                    _selectProvincia.value = provinciaMedico.toString();
                    return [2 /*return*/];
            }
        });
    });
}
function CargarLocalidadMedico(provinciaMedico, localidadMedico) {
    return __awaiter(this, void 0, void 0, function () {
        var localidades;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _localidadServicio.GetByProvincia(provinciaMedico)];
                case 1:
                    localidades = _a.sent();
                    _selectLocalidad.innerHTML = '';
                    localidades.forEach(function (localidad) {
                        _selectLocalidad.add(new Option(localidad.descripcion, localidad.id.toString()));
                    });
                    _selectLocalidad.value = localidadMedico.toString();
                    return [2 /*return*/];
            }
        });
    });
}
function CargarEspecialidades(especialidadMedico) {
    return __awaiter(this, void 0, void 0, function () {
        var especialidades;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _selectEspecialidad.innerHTML = '';
                    return [4 /*yield*/, _especialidadServicio.Get()];
                case 1:
                    especialidades = _a.sent();
                    especialidades.forEach(function (especialidad) {
                        _selectEspecialidad.add(new Option(especialidad.descripcion, especialidad.id.toString()));
                    });
                    _selectEspecialidad.value = especialidadMedico.toString();
                    return [2 /*return*/];
            }
        });
    });
}
function CargarLocalidadesProvincia(provinciaSeleccionada) {
    return __awaiter(this, void 0, void 0, function () {
        var localidades;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _selectLocalidad.innerHTML = '';
                    return [4 /*yield*/, _localidadServicio.GetByProvincia(provinciaSeleccionada)];
                case 1:
                    localidades = _a.sent();
                    if (localidades.length > 0) {
                        localidades.forEach(function (localidad) {
                            _selectLocalidad.add(new Option(localidad.descripcion, localidad.id.toString()));
                        });
                    }
                    else {
                        _selectLocalidad.add(new Option('No se encontraron localidades para la provincia seleccionada', '-1'));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
// PROCESO DE MODIFICACIÓN
var formModificar = document.getElementById('form-modificar-medico');
formModificar.addEventListener('submit', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var formData, ejecutarModificacion;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                formData = new FormData(formModificar);
                return [4 /*yield*/, ModificarMedico(formData)];
            case 1:
                ejecutarModificacion = _a.sent();
                if (ejecutarModificacion) {
                    sweetalert2_1.default.fire({
                        icon: 'success',
                        title: 'Modificación Exitosa',
                        text: 'El medico fue modificado exitosamente'
                    });
                    CargarMedicos();
                }
                else {
                    sweetalert2_1.default.fire({
                        icon: 'error',
                        title: 'Error al modificar',
                        text: 'Ocurrio un error al modificar al medico...'
                    });
                }
                return [2 /*return*/];
        }
    });
}); });
function ModificarMedico(formData) {
    return __awaiter(this, void 0, void 0, function () {
        var objMedico;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    objMedico = new Medico_1.Medico();
                    objMedico.id = _entidadId;
                    objMedico.localidadId = parseInt(formData.get('Localidad').toString());
                    objMedico.nombre = formData.get('Nombre').toString();
                    objMedico.apellido = formData.get('Apellido').toString();
                    objMedico.dni = parseInt(formData.get('Dni').toString());
                    objMedico.fechaNacimiento = formData.get('FechaNacimiento');
                    objMedico.email = formData.get('Email').toString();
                    objMedico.celular = parseInt(formData.get('Celular').toString());
                    objMedico.telefono = parseInt(formData.get('Telefono').toString());
                    objMedico.especialidadId = parseInt(formData.get('Especialidad').toString());
                    objMedico.matricula = formData.get('Matricula').toString();
                    objMedico.especialidadId = parseInt(formData.get('Especialidad').toString());
                    return [4 /*yield*/, _medicoServicio.Update(objMedico)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//# sourceMappingURL=VistaIndex.js.map