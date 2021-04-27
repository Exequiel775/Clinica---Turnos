class Provincia {
    id: number;
    descripcion: string;
}

class ProvinciaServicio {
    public AgregarProvincia(provincia: Provincia): Promise<boolean> {
            return fetch('/Provincia/NuevaProvincia',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(provincia)
            })
            .then(response => {
                if (!response.ok){
                    throw new Error(response.statusText);
                }
                return response.json() as Promise<{ finalizado: Promise<boolean> }>;
            })
            .then(json => {
                return json.finalizado;
            })
    }

    public GetProvincias(): Promise<Provincia[]> {
        return fetch('/Provincia/JsonProvincias', {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok){
                throw new Error(response.statusText);
            }
            return response.json() as Promise<{ provincias : Provincia[] }>;
        })
        .then(json => {
            return json.provincias;
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ActualizarTabla();
});

document.getElementById('formularioProvincia').onsubmit = (e) => {
    e.preventDefault();

    let formulario = document.getElementById('formularioProvincia') as HTMLFormElement;

    let _provinciaServicio = new ProvinciaServicio();

    let objetoProvincia = new Provincia();
    objetoProvincia.descripcion = (document.getElementById('txtDescripcion') as HTMLInputElement).value;

    _provinciaServicio.AgregarProvincia(objetoProvincia)
    .then(json => {
        if (json){
            alert('Agregado');
            formulario.reset();
            ActualizarTabla();
        }else{
            alert('Error al agregar la provoncia');
        }
    })
}

function ActualizarTabla() : void
{
    const tabla = document.getElementById('tabla-provincias') as HTMLTableElement;
    tabla.innerHTML = '';

    const _provinciaServicio = new ProvinciaServicio();

    _provinciaServicio.GetProvincias().then(json => {
        json.forEach((indice) => {
            let row = tabla.insertRow();
            row.innerHTML= `
            <td>${indice.id}</td>
            <td>${indice.descripcion}</td>
            `
        })
    })
}

/*
function api<T>(url: string): Promise<T> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<{ data: T }>
      })
      .then(data => {
          return data.data
      })
  }
  */