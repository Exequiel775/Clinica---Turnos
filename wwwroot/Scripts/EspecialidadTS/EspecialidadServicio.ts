import {Especialidad, EspecialidadPaginada} from './Especialidad';
import {IEspecialidadServicio} from './IEspecialidad';

class EspecialidadServicio implements IEspecialidadServicio
{
    GetEspecialidadesPaginadas(pagina: number = null): Promise<EspecialidadPaginada> {
        return fetch(`/Especialidad/JsonEspecialidadesPaginadas?pagina=${pagina}`, {
            method:'GET'
        })
        .then(response => {
            if (!response.ok) {
                console.log(`Error al obtener las especialidades: ${response.statusText}`)
            }

            return response.json() as Promise<{especialidad : EspecialidadPaginada}>;
        })
        .then(json => {
            return json.especialidad;
        })
    }
    Add(especialidad: Especialidad): Promise<boolean> {
        return fetch('/Especialidad/AddEspecialidad', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(especialidad)
        })
        .then(response => {
            if (!response.ok) {
                console.log(`Error al agregar: ${response.statusText}`);
            }

            return response.json() as Promise<{respuesta: boolean}>;
        })
        .then(json => {
            return json.respuesta;
        })
    }

    Update(especialidad: Especialidad): Promise<boolean> {
        return fetch('/Especialidad/UpdateEspecialidad', {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(especialidad)
        })
        .then(response => {
            if(!response.ok) {
                console.log(`Error al obtener modificar: ${response.statusText}`);
            }

            return response.json() as Promise<{respuesta: boolean}>;
        })
        .then(json => {
            return json.respuesta;
        })
    }

    Get(): Promise<Especialidad[]> {
        return fetch('/Especialidad/JsonEspecialidades', {
            method:'GET'
        })
        .then(response => {
            if (!response.ok) {
                console.log(`Error al obtener datos: ${response.statusText}`);
            }

            return response.json() as Promise<{especialidades: Especialidad[]}>;
        })
        .then(json => {
            return json.especialidades;
        })
    }
    
}

export {EspecialidadServicio};