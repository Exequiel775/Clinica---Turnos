import { Localidad, LocalidadPaginada } from './ClaseLocalidad';
import {ILocalidadServicio} from './ILocalidad';

class LocalidadServicio implements ILocalidadServicio
{
    GetSinPaginado(): Promise<Localidad[]> {
        return fetch('/Localidad/GetSinPaginar', {
            method:'GET'
        })
        .then(response => {
            if (!response.ok) {
                console.log(`Error Localidad: ${response.statusText}`);
            }

            return response.json() as Promise<{localidades : Localidad[]}>;
        })
        .then(json => {
            return json.localidades;
        })
    }

    GetByProvincia(provincia: number): Promise<Localidad[]> {
        return fetch(`/Localidad/GetByProvincia?provincia=${provincia}`,{
            method:'GET'
        })
        .then(response => {
            if (!response.ok){
                throw new Error(response.statusText);
            }
            
            return response.json() as Promise<{ localidades : Localidad[] }>;
        })
        .then(json => {
            return json.localidades;
        })
    }
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

    Get(paginado: number = null): Promise<LocalidadPaginada> {
        return fetch(`/Localidad/Get?paginado=${paginado}`,{
            method:'GET'
        })
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText);
            }
            return response.json() as Promise<{ objetoPaginado : LocalidadPaginada }>
        })
        .then(json => {
            return json.objetoPaginado;
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