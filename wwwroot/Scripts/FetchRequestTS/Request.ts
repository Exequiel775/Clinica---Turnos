export class Request<T>
{
    Add(entidad : T, url : string) : Promise<boolean>
    {
        return fetch(url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(entidad)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ocurrio un error al agregar: ${response.statusText}`)
            }

            return response.json() as Promise<{response : boolean}>
        })
        .then(json => {
            return json.response; 
        })
    }

    Get(url : string) : Promise<T[]>
    {
        return fetch(url, {
            method:'GET'
        })
        .then(function(res) {
            return res.json() as Promise<T[]>
        })
        .then(function(json) {
            return json;
        })
    }

    Update(entidad: T, url : string) : Promise<boolean>
    {
        return fetch(url, {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(entidad)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al modificar: ${response.statusText}`)
            }

            return response.json() as Promise<boolean>
        })
        .then(json => {
            return json;
        })
    }
}