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
var BuscarTurnoServicio_1 = require("./BuscarTurnoServicio");
var Turno_1 = require("../Turno");
var sweetalert2_1 = require("sweetalert2");
var _buscarTurnoServicio = new BuscarTurnoServicio_1.BuscarTurnoServicio();
var btnBuscar = document.querySelector('.btnBuscar');
btnBuscar.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
    var dniBuscar, turnosEncontrados;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dniBuscar = parseInt(document.querySelector('.dniBuscar').value);
                return [4 /*yield*/, _buscarTurnoServicio.BuscarTurno(dniBuscar, null)];
            case 1:
                turnosEncontrados = _a.sent();
                CargarTablaTurnos(turnosEncontrados);
                return [2 /*return*/];
        }
    });
}); });
function CargarTablaTurnos(response) {
    var tablaTurnos = document.querySelector('.tabla-turnos');
    console.log(response.listaObjetos);
    if (!response.estado) {
        tablaTurnos.innerHTML = "<strong class=\"text-center\">" + response.mensaje + "</strong>";
        return;
    }
    tablaTurnos.innerHTML = '';
    response.listaObjetos.forEach(function (turno) {
        var row = tablaTurnos.insertRow();
        row.innerHTML = "\n        <td>" + turno.numero + "</td>\n        <td>" + turno.estadoTurno + "</td>\n        <td>" + turno.fechaEmisionStr + "</td>\n        <td>" + turno.pacienteId + "</td>\n        <td></td>\n        ";
        var btnCancelarTurno = document.createElement('button');
        btnCancelarTurno.classList.add('btn');
        btnCancelarTurno.title = 'Cancelar Turno';
        btnCancelarTurno.innerHTML = "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"18\" fill=\"#ff3f34\" class=\"bi bi-x-octagon-fill\"\n        viewBox=\"0 0 16 16\">\n        <path\n        d=\"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z\" />\n        </svg>\n        ";
        btnCancelarTurno.onclick = function () {
            CancelarTurno(turno.numero, turno.id);
        };
        row.addEventListener('click', function () {
            CargarDatosTurnoSeleccionado(turno);
            if (tablaTurnos.rows.length > 1) {
                for (var i = 0; i < tablaTurnos.rows.length; i++) {
                    tablaTurnos.rows[i].style.backgroundColor = '#fff';
                    tablaTurnos.rows[i].style.color = '#000';
                    /*
                    if (tablaTurnos.rows[i].classList.contains('fila-seleccionada')) {
                        tablaTurnos.rows[i].classList.remove('fila-seleccionada');
                        tablaTurnos.rows[i].classList.add('fila-no-seleccionada');
                    }*/
                }
            }
            row.style.backgroundColor = '#222f3e';
            row.style.color = '#fff';
            //row.classList.add('fila-seleccionada');
        });
        row.children[4].appendChild(btnCancelarTurno);
    });
}
function CargarDatosTurnoSeleccionado(turno) {
    console.log(turno);
    var numero = document.querySelector('.numero');
    var paciente = document.querySelector('.paciente');
    var especialidad = document.querySelector('.Especialidad');
    var estado = document.querySelector('.Estado');
    numero.value = turno.numero.toString();
    paciente.value = turno.paciente.apyNom;
    especialidad.add(new Option(turno.especialidadStr, "-1"));
    if (estado.classList.contains('text-primary') || estado.classList.contains('text-danger')
        || estado.classList.contains('text-success')) {
        estado.classList.remove('text-primary', 'text-danger', 'text-success');
    }
    switch (turno.estadoTurno) {
        case Turno_1.EstadoTurno.Atendido:
            {
                estado.classList.add('text-success');
                estado.textContent = 'Atendido';
                break;
            }
        case Turno_1.EstadoTurno.Ausente:
            {
                estado.classList.add('text-danger');
                estado.textContent = 'Paciente Ausente';
            }
        case Turno_1.EstadoTurno.En_Espera:
            {
                estado.classList.add('text-primary');
                estado.textContent = 'Turno en espera';
                break;
            }
        case Turno_1.EstadoTurno.Cancelado:
            {
                estado.classList.add('text-warning');
                estado.textContent = 'Cancelado';
                break;
            }
    }
}
function CancelarTurno(numero, id) {
    sweetalert2_1.default.fire({
        title: "\u00BFDesea cancelar el turno n\u00FAmero " + numero + "?",
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
    }).then(function (result) {
        if (result.isConfirmed) {
            sweetalert2_1.default.fire('Cancelado!', "Se procedera a cancelar el id: " + id, 'success');
        }
    });
}
//# sourceMappingURL=VistaBuscarTurno.js.map