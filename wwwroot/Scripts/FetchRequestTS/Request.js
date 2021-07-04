"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = void 0;
var Request = /** @class */ (function () {
    function Request() {
    }
    Request.prototype.Add = function (entidad, url) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entidad)
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error("Ocurrio un error al agregar: " + response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json.response;
        });
    };
    Request.prototype.Get = function (url) {
        return fetch(url, {
            method: 'GET'
        })
            .then(function (res) {
            return res.json();
        })
            .then(function (json) {
            return json;
        });
    };
    Request.prototype.Update = function (entidad, url) {
        return fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entidad)
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error("Error al modificar: " + response.statusText);
            }
            return response.json();
        })
            .then(function (json) {
            return json;
        });
    };
    return Request;
}());
exports.Request = Request;
//# sourceMappingURL=Request.js.map