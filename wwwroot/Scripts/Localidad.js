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
var Localidad = /** @class */ (function () {
    function Localidad() {
    }
    return Localidad;
}());
var LocalidadServicio = /** @class */ (function () {
    function LocalidadServicio() {
    }
    LocalidadServicio.prototype.GetLocalidades = function () {
        return fetch('/Localidad/Get', { method: 'GET' })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.localidades;
        });
    };
    LocalidadServicio.prototype.GetProvincias = function () {
        return fetch('/Provincia/JsonProvincias', {
            method: 'GET'
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.provincias;
        });
    };
    LocalidadServicio.prototype.GetData = function (localidad) {
        return fetch("/Localidad/GetById?loc=" + localidad, {
            method: 'GET'
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.localidad;
        });
    };
    LocalidadServicio.prototype.Add = function (data) {
        var localidad = new Localidad();
        localidad.descripcion = data.get('Descripcion');
        localidad.provinciaId = data.get('ProvinciaId');
        console.log(localidad);
        return fetch('/Localidad/Add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(localidad)
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.respuesta;
        });
    };
    LocalidadServicio.prototype.Update = function (localidadModificar) {
        return fetch('/Localidad/Update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(localidadModificar)
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.respuesta;
        });
    };
    return LocalidadServicio;
}());
// =================== EVENTOS EN VISTA ==================== //
document.addEventListener('DOMContentLoaded', function () {
    var cmbProvincia = document.getElementById('cmbProvincia');
    CargarSelectProvincia(cmbProvincia);
    CargarLocalidades();
});
var formulario = document.getElementById('form-localidad');
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    AgregarLocalidad(formulario);
    /*
    let data = new FormData(event.currentTarget as HTMLFormElement);

    new LocalidadServicio().Add(data)
        .then(response => {
            if (response) {
                CargarLocalidades();
                (formulario as HTMLFormElement).reset();
            } else {
                alert("Error al agregar");
            }
        })
        .catch(err => console.log(err));
*/
});
document.getElementById('modificarLocalidad').onclick = function () {
    UpdateLocalidad();
};
// ================= LLAMADAS A SERVICIOS ===================== //
function AgregarLocalidad(formulario) {
    return __awaiter(this, void 0, void 0, function () {
        var data, grabarLocalidad;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = new FormData(formulario);
                    return [4 /*yield*/, new LocalidadServicio().Add(data)];
                case 1:
                    grabarLocalidad = _a.sent();
                    if (grabarLocalidad) {
                        CargarLocalidades();
                        formulario.reset();
                    }
                    else {
                        alert('Error al grabar');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function CargarLocalidades() {
    return __awaiter(this, void 0, void 0, function () {
        var _localidadServicio, table, localidades;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _localidadServicio = new LocalidadServicio();
                    table = document.getElementById('tabla-localidad');
                    table.innerHTML = '';
                    return [4 /*yield*/, _localidadServicio.GetLocalidades()];
                case 1:
                    localidades = _a.sent();
                    localidades.forEach(function (elemento) {
                        var row = table.insertRow();
                        row.innerHTML = "\n            <td>" + elemento.id + "</td>\n            <td>" + elemento.descripcion + "</td>\n            <td>" + elemento.provincia + "</td>\n            <td></td>\n            ";
                        var btnModificar = document.createElement('button');
                        btnModificar.type = 'button';
                        btnModificar.classList.add('btn', 'btn-danger', 'm-1');
                        btnModificar.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
                        btnModificar.value = elemento.id.toString();
                        btnModificar.dataset.toggle = 'modal';
                        btnModificar.dataset.target = '#modalLocalidad';
                        btnModificar.onclick = function (e) {
                            Localidad._localidadSeleccionada = parseInt(e.target.value);
                            CargarSelectProvincia(document.getElementById('cmbNuevaProvincia'));
                            CargarDatosLocalidadModal(Localidad._localidadSeleccionada);
                        };
                        row.children[3].appendChild(btnModificar);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function CargarSelectProvincia(select) {
    return __awaiter(this, void 0, void 0, function () {
        var provincias;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (select.options.length > 1) {
                        select.options.length = 0;
                    }
                    return [4 /*yield*/, new LocalidadServicio().GetProvincias()];
                case 1:
                    provincias = _a.sent();
                    provincias.forEach(function (elemento) {
                        var option = document.createElement('option');
                        option.text = elemento.descripcion;
                        option.value = elemento.id.toString();
                        select.add(option);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function CargarDatosLocalidadModal(localidad) {
    return __awaiter(this, void 0, void 0, function () {
        var datosLocalidad;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new LocalidadServicio().GetData(localidad)];
                case 1:
                    datosLocalidad = _a.sent();
                    document.getElementById('cmbNuevaProvincia').value = datosLocalidad.provinciaId.toString();
                    document.getElementById('txtNuevaDescripcion').value = datosLocalidad.descripcion;
                    return [2 /*return*/];
            }
        });
    });
}
function UpdateLocalidad() {
    return __awaiter(this, void 0, void 0, function () {
        var objLocalidad, modificarLocalidad;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    objLocalidad = new Localidad();
                    objLocalidad.id = Localidad._localidadSeleccionada;
                    objLocalidad.provinciaId = parseInt(document.getElementById('cmbNuevaProvincia').value);
                    objLocalidad.descripcion = document.getElementById('txtNuevaDescripcion').value;
                    return [4 /*yield*/, new LocalidadServicio().Update(objLocalidad)];
                case 1:
                    modificarLocalidad = _a.sent();
                    if (modificarLocalidad) {
                        CargarLocalidades();
                    }
                    else {
                        alert('Error al modificar');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=Localidad.js.map