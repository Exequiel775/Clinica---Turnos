"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecepcionistasPaginados = exports.TurnoRecepcionista = exports.Recepcionista = void 0;
var Persona_1 = require("../PersonaTS/Persona");
var TurnoRecepcionista;
(function (TurnoRecepcionista) {
    TurnoRecepcionista[TurnoRecepcionista["Maniana"] = 1] = "Maniana";
    TurnoRecepcionista[TurnoRecepcionista["Tarde"] = 2] = "Tarde";
    TurnoRecepcionista[TurnoRecepcionista["Noche"] = 3] = "Noche";
})(TurnoRecepcionista || (TurnoRecepcionista = {}));
exports.TurnoRecepcionista = TurnoRecepcionista;
var Recepcionista = /** @class */ (function (_super) {
    __extends(Recepcionista, _super);
    function Recepcionista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Recepcionista;
}(Persona_1.Persona));
exports.Recepcionista = Recepcionista;
var RecepcionistasPaginados = /** @class */ (function () {
    function RecepcionistasPaginados() {
    }
    return RecepcionistasPaginados;
}());
exports.RecepcionistasPaginados = RecepcionistasPaginados;
//# sourceMappingURL=Recepcionista.js.map