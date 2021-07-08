import {Response} from "../../RequestTS/Response";
import { Turno } from "../Turno";

class BuscarTurnoServicio
{
    async BuscarTurno(dni : number = null, numeroTurno : number = null) : Promise<Response<Turno>>
    {
        return await fetch(`/Turnos/BuscarTurno?dniPaciente=${dni}&&numeroTurno=${numeroTurno}`,{
            method:'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ocurrio un error obtener los datos ${response.statusText}`);
            }

            return response.json() as Promise<Response<Turno>>
        })
        .then(json => { return json });
        //return this._request.Get(`/Turnos/BuscarTurno?dniPaciente=${dni}&&numeroTurno=${numeroTurno}`);
    }
}

export {BuscarTurnoServicio};