"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signalR = require("@microsoft/signalr");
var connec = new signalR.HubConnectionBuilder().withUrl('/hubPrueba').build();
connec.start()
    .then(function () {
    console.log('Conectado');
})
    .catch(function (err) { return console.log("Error al conectarse " + err); });
//# sourceMappingURL=app.js.map