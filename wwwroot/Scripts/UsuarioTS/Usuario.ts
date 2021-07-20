import { Persona } from "../PersonaTS/Persona";
import { Request } from "../FetchRequestTS/Request";
import { Response } from "../RequestTS/Response";

export class Usuario
{
    public id : number = null;
    public personaId : number = null;
    public nombre : string;
    public password : string;
    public estaBloqueado : boolean = null;
    public persona : Persona;
}

export class UsuarioServicio
{
    private readonly _requestUsuario : Request<Persona> = new Request<Persona>();

    public async Get() : Promise<Persona[]>
    {
        return this._requestUsuario.Get('/Seguridad/Usuarios');
    }

    public async CrearUsuario(personas : Persona[]) : Promise<Response>
    {
        return await fetch('/Seguridad/CrearUsuario', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(personas)
        })
        .then(response => {
            return response.json() as Promise<Response>
        })
        .then(json => {
            return json;
        })
    }
}