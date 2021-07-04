"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargas = void 0;
var Cargas = /** @class */ (function () {
    function Cargas() {
    }
    Cargas.prototype.CargarSelect = function (nombre, texto, valor) {
        var selectCargar = document.getElementsByClassName(nombre)[0];
        selectCargar.add(new Option(texto, valor));
    };
    return Cargas;
}());
exports.Cargas = Cargas;
//# sourceMappingURL=CargarSelect.js.map