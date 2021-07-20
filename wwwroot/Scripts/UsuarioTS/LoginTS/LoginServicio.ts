import { Response } from "../../RequestTS/Response";
import { Usuario } from "../Usuario";

export class LoginServicio
{
    async IniciarSesion(usuario: Usuario) : Promise<Response>
    {
        return await fetch('/Seguridad/IniciarSesion', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(usuario)
        })
        .then(response => {
            if (!response.ok) {
                console.log(`Error al loguear ${response.statusText}`)
            }

            return response.json() as Promise<Response>;
        })
        .then(json => {
            return json;
        })
    }
}