import { Response } from '../RequestTS/Response';
import { Turno } from '../TurnosTS/Turno';

export class TurnoServicio
{
    async Add(turno : Turno) : Promise<Response<Turno>>
    {
        return await fetch('/Turnos/GrabarTurno', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(turno)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al grabar turno: ${response.statusText}`)
            }

            return response.json() as Promise<{ response : Response<Turno> }>;
        })
        .then(json => {
            return json.response;
        })
    }
}