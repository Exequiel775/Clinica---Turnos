"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvinciaServicio = void 0;
var ProvinciaServicio = /** @class */ (function () {
    function ProvinciaServicio() {
    }
    ProvinciaServicio.prototype.Get = function () {
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
    return ProvinciaServicio;
}());
exports.ProvinciaServicio = ProvinciaServicio;
//# sourceMappingURL=Provincia.js.map