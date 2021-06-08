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
exports.ModelPaciente = exports.Paciente = void 0;
var Persona_1 = require("../PersonaTS/Persona");
var Paciente = /** @class */ (function (_super) {
    __extends(Paciente, _super);
    function Paciente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Paciente;
}(Persona_1.Persona));
exports.Paciente = Paciente;
var ModelPaciente = /** @class */ (function () {
    function ModelPaciente() {
    }
    return ModelPaciente;
}());
exports.ModelPaciente = ModelPaciente;
//# sourceMappingURL=Paciente.js.map