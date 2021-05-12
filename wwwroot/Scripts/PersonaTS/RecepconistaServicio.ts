import { IRecepcionistaServicio } from './IRecepcionista';
import { Recepcionista } from './Recepcionista';

class RecepcionistaServicio implements IRecepcionistaServicio
{
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
        throw new Error('Method not implemented.');
    }
    
}

export {RecepcionistaServicio};