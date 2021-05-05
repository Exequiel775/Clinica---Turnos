import * as signalR from '@microsoft/signalr';

const connec = new signalR.HubConnectionBuilder().withUrl('/hubPrueba').build();

connec.start()
.then(() => {
    console.log('Conectado');
})
.catch(err => console.log(`Error al conectarse ${err}`));
