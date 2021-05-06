class Provincia {
    public static _provinciaSeleccionada : number;
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

    public ModificarProvincia(provincia : Provincia) : Promise<boolean>{
        return fetch('/Provincia/ModificarProvincia', {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(provincia)
        })
        .then(response => {
            if (!response.ok){
                throw new Error(response.statusText);
                
            }

            return response.json() as Promise<{ finalizado : Promise<boolean> }>;
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

    public GetById(provincia: number) : Promise<Provincia>
    {
        return fetch(`/Provincia/JsonGetProvincia?idProvincia=${provincia}`, {
            method:'GET'
        })
        .then(response => {
            if (!response.ok){
                throw new Error(response.statusText);
            }
            return response.json() as Promise<{ provincia: Provincia }>;
        })
        .then(json => {
            return json.provincia;
        })
    }
}

// =================== ACCIONES SOBRE BOTONES Y LLAMADAS A SERVICIOS ======================= //

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
            <td></td>
            `

            let btnModificar = document.createElement('button');
            btnModificar.classList.add('btn', 'btn-primary', 'm-1');
            btnModificar.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
            btnModificar.title = 'Modificar';
            btnModificar.value = indice.id.toString();
            btnModificar.dataset.toggle = 'modal';
            btnModificar.dataset.target = '#modalProvincia';
            btnModificar.onclick = (e) => {
                let _provinciaServicio = new ProvinciaServicio();

                _provinciaServicio.GetById(parseInt((e.target as HTMLInputElement).value))
                .then(data => {
                    Provincia._provinciaSeleccionada = data.id;
                    (document.getElementById('txtNuevaDescripcion') as HTMLInputElement).value = data.descripcion;
                })
            }

            let btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'm-1');
            btnEliminar.title = 'Eliminar';
            btnEliminar.value = indice.id.toString();
            btnEliminar.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i>';

            row.children[2].appendChild(btnModificar);
            row.children[2].appendChild(btnEliminar);
        })
    })
}

document.getElementById('modificar').onclick = () => {
    let _provinciaServicio = new ProvinciaServicio();

    let provinciaModificar = new Provincia();
    provinciaModificar.id = Provincia._provinciaSeleccionada;
    provinciaModificar.descripcion = (document.getElementById('txtNuevaDescripcion') as HTMLInputElement).value;

    _provinciaServicio.ModificarProvincia(provinciaModificar)
    .then(json => {
        if (json){
            ActualizarTabla();
        }else{
            alert("Error al modificar");
        }
    })
}

export { Provincia, ProvinciaServicio }

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