import { IRecepcionistaServicio } from './IRecepcionista';
import { Recepcionista, RecepcionistasPaginados } from './Recepcionista';

class RecepcionistaServicio implements IRecepcionistaServicio
{
    RecepcionistasPaginados(cadenaBuscar: string, pagina: number): Promise<RecepcionistasPaginados> {
        return fetch(`/Persona/ListadoRecepcionistasPaginados?buscar=${cadenaBuscar}&index=${pagina}`, {
            method:'GET',
        })
        .then(response => {
            if (!response.ok) {
                console.log(`Error al obtener recepcionistas: ${response.statusText}`)
            }

            return response.json() as Promise< { recepcionistas: RecepcionistasPaginados }>;
        })
        .then(json => {
            return json.recepcionistas;
        })
    }

    Add(recepcionista: Recepcionista): Promise<boolean> {
        return fetch('/Persona/AgregarRecepcionista', {
            method:'POST',
            body:JSON.stringify(recepcionista),
            headers:{
                'Content-Type': 'application/json'
            }
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

    Get(): Promise<Recepcionista[]> {
        return fetch('/Persona/ListadoRecepcionistas', {
            method:'GET'
        })
        .then(response => {
            if (!response.ok){
                console.log(`Error: ${response.statusText}`);
            }

            return response.json() as Promise<{ recepcionistas: Recepcionista[] }>;
        })
        .then(json => {
            return json.recepcionistas;
        })
    }

    GetById(idRecepcionista: number): Promise<Recepcionista> {
        throw new Error('Method not implemented.');
    }
    Update(recepcionista: Recepcionista): Promise<boolean> {
        return fetch('/Persona/ModificarRecepcionista', {
            headers:{
                'Content-Type':'application/json'
            },
            method:'POST',
            body:JSON.stringify(recepcionista)
        })
        .then(response => {
            if (!response.ok) {
                console.log(`Error al modificar recepcionista: ${response.statusText}`);
            }
            
            return response.json() as Promise<{ respuesta : boolean }>;
        })
        .then(json => {
            return json.respuesta;
        })
    }
    
}

export {RecepcionistaServicio};