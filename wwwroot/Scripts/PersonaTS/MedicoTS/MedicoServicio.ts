import {Medico} from './Medico';
import { Request } from '../../FetchRequestTS/Request';

export class MedicoServicio
{
    private readonly _request : Request<Medico> = new Request<Medico>();

    Add(formData : FormData) : Promise<boolean>
    {
        return fetch('/Medicos/NuevoMedico', {
            method:'POST',
            body:formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al agregar medico ${response.statusText}`)
            }

            return response.json() as Promise<{respuesta: boolean}>;
        })
        .then(json => {
            return json.respuesta;
        })
    }

    Get() : Promise<Medico[]>
    {
        return this._request.Get('/Medicos/JsonMedicos');
        /*
        return fetch('/Medicos/JsonMedicos', {
            method:'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al obtener medicos: ${response.statusText}`);
            }

            return response.json() as Promise<{listaMedicos: Medico[]}>;
        })
        .then(json => {
            return json.listaMedicos;
        })*/
    }

    Update(medicoModificar: Medico): Promise<boolean>
    {
        return fetch('/Medicos/Modificar', {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(medicoModificar)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ocurrio el siguiente error al modificar medico: ${response.statusText}`)
            }

            return response.json() as Promise<{respuesta: boolean}>;
        })
        .then(json => {
            return json.respuesta;
        })
    }
}