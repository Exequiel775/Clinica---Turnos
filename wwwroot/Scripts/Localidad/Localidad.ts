import { Localidad } from './ClaseLocalidad';
import {ILocalidadServicio} from './ILocalidad';

class LocalidadServicio implements ILocalidadServicio
{
    Add(localidad: Localidad): Promise<boolean> {

        return fetch('/Localidad/Add', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(localidad)
        })
        .then(response => {
            if (!response.ok){
                throw new Error(response.statusText);
                
            }
            return response.json() as Promise<{respuesta : boolean}>;
        })
        .then(json => {
            return json.respuesta;
        });
    }

    Get(): Promise<Localidad[]> {
        return fetch('/Localidad/Get',{
            method:'GET'
        })
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json() as Promise<{localidades: Localidad[]}>
        })
        .then(json => {
            return json.localidades;
        })
    }

    GetById(id: number): Promise<Localidad> {
        return fetch(`/Localidad/GetById?loc=${id}`, {
            method:'GET'
        })
        .then(response => {
            if (!response.ok){
                throw new Error(response.statusText);
            
            }
            return response.json() as Promise<{localidad: Localidad}>
        })
        .then(json => {
            return json.localidad;
        })
    }

    Update(localidadModificar: Localidad): Promise<boolean> {
        return fetch('/Localidad/Update',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(localidadModificar)
        })
        .then(response => {
            if (!response.ok){
                throw new Error(response.statusText);
                
            }
            return response.json() as Promise<{ respuesta: boolean }>
        })
        .then(json => {
            return json.respuesta;
        })
    }  

}

export {LocalidadServicio};