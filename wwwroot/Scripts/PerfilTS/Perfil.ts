import { Response } from "../RequestTS/Response";

export class Perfil
{
    public id : number;
    public descripcion : string;
}

export class PerfilServicio
{
    async Add(perfil : Perfil) : Promise<Response>
    {
        return await fetch('/Perfil/Add', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(perfil)
        })
        .then(response => {
            if (!response.ok) {
                console.log(response.statusText);
            }

            return response.json() as Promise<Response>;
        })
        .then(json => {
            return json;
        })
    }

    async Get() : Promise<Perfil[]>
    {
        return await fetch('/Perfil/JsonPerfiles', {
            method:'GET'
        })
        .then(response => {
            if (!response.ok) {
                console.log(response.statusText);
            }

            return response.json() as Promise<Perfil[]>
        })
        .then(json => {
            return json;
        })
    }

    async Delete(perfilEliminar: Perfil) : Promise<Response>
    {
        return await fetch('/Perfil/EliminarPerfil', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(perfilEliminar)
        })
        .then(response => {
            if (!response.ok) {
                console.log(response.statusText)
            }

            return response.json() as Promise<Response>
        })
        .then(json => { return json; });
    }
}