import { Provincia } from './Provincia'

class Localidad {
    public static _localidadSeleccionada: number;
    id: number;
    provinciaId: number;
    descripcion: string;
    provincia: string;
}

class LocalidadServicio {
    public GetLocalidades(): Promise<Localidad[]> {
        return fetch('/Localidad/Get', { method: 'GET' })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                return response.json() as Promise<{ localidades: Localidad[] }>;
            })
            .then(json => {
                return json.localidades;
            })
    }

    public GetProvincias(): Promise<Provincia[]> {
        return fetch('/Provincia/JsonProvincias', {
            method: 'GET'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                return response.json() as Promise<{ provincias: Provincia[] }>;
            })
            .then(json => {
                return json.provincias;
            })
    }

    public GetData(localidad: number): Promise<Localidad> {
        return fetch(`/Localidad/GetById?loc=${localidad}`, {
            method: 'GET'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);

                }

                return response.json() as Promise<{ localidad: Localidad }>;
            })
            .then(json => {
                return json.localidad;
            })
    }

    public Add(data: FormData): Promise<boolean> {
        let localidad = new Localidad();
        localidad.descripcion = data.get('Descripcion') as string;
        localidad.provinciaId = data.get('ProvinciaId') as unknown as number;

        console.log(localidad);

        return fetch('/Localidad/Add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(localidad)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                return response.json() as Promise<{ respuesta: boolean }>;
            })
            .then(json => {
                return json.respuesta;
            })
    }

    public Update(localidadModificar: Localidad): Promise<boolean>
    {

        return fetch('/Localidad/Update',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(localidadModificar)
        })
        .then(response => {
            if (!response.ok){
                throw new Error(response.statusText);
            }

            return response.json() as Promise<{ respuesta: boolean }>;
        })
        .then(json => {
            return json.respuesta;
        })
    }
}

// =================== EVENTOS EN VISTA ==================== //
document.addEventListener('DOMContentLoaded', () => {
    const cmbProvincia = document.getElementById('cmbProvincia') as HTMLSelectElement;

    CargarSelectProvincia(cmbProvincia);

    CargarLocalidades();
});

let formulario = document.getElementById('form-localidad') as HTMLFormElement;

formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    AgregarLocalidad(formulario);

    /*
    let data = new FormData(event.currentTarget as HTMLFormElement);

    new LocalidadServicio().Add(data)
        .then(response => {
            if (response) {
                CargarLocalidades();
                (formulario as HTMLFormElement).reset();
            } else {
                alert("Error al agregar");
            }
        })
        .catch(err => console.log(err));
*/
});

document.getElementById('modificarLocalidad').onclick = () => {
    UpdateLocalidad();
}

// ================= LLAMADAS A SERVICIOS ===================== //

async function AgregarLocalidad(formulario : HTMLFormElement)
{
    let data = new FormData(formulario);

    let grabarLocalidad = await new LocalidadServicio().Add(data);

    if (grabarLocalidad){
        CargarLocalidades();
        formulario.reset();
    }else{
        alert('Error al grabar');
    }
}

async function CargarLocalidades() {
    let _localidadServicio = new LocalidadServicio();

    const table = document.getElementById('tabla-localidad') as HTMLTableElement;

    table.innerHTML = '';

    let localidades = await _localidadServicio.GetLocalidades();

    localidades.forEach((elemento) => {

        let row = table.insertRow();

        row.innerHTML = `
            <td>${elemento.id}</td>
            <td>${elemento.descripcion}</td>
            <td>${elemento.provincia}</td>
            <td></td>
            `

        let btnModificar = document.createElement('button');
        btnModificar.type = 'button';
        btnModificar.classList.add('btn', 'btn-danger', 'm-1');
        btnModificar.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
        btnModificar.value = elemento.id.toString();
        btnModificar.dataset.toggle = 'modal';
        btnModificar.dataset.target = '#modalLocalidad';
        btnModificar.onclick = (e) => {
            Localidad._localidadSeleccionada = parseInt((e.target as HTMLButtonElement).value);
            CargarSelectProvincia(document.getElementById('cmbNuevaProvincia') as HTMLSelectElement);
            CargarDatosLocalidadModal(Localidad._localidadSeleccionada);
        }

        row.children[3].appendChild(btnModificar);
    });
}

async function CargarSelectProvincia(select: HTMLSelectElement) {

    if (select.options.length > 1)
    {
        select.options.length = 0;
    }

    let provincias = await new LocalidadServicio().GetProvincias();

    provincias.forEach((elemento) => {
        let option = document.createElement('option');

        option.text = elemento.descripcion;
        option.value = elemento.id.toString();

        select.add(option);
    })
}

async function CargarDatosLocalidadModal(localidad: number)
{
    let datosLocalidad = await new LocalidadServicio().GetData(localidad);

    (document.getElementById('cmbNuevaProvincia') as HTMLSelectElement).value = datosLocalidad.provinciaId.toString();
    (document.getElementById('txtNuevaDescripcion') as HTMLInputElement).value = datosLocalidad.descripcion;
}

async function UpdateLocalidad()
{
    let objLocalidad = new Localidad();
    objLocalidad.id = Localidad._localidadSeleccionada;
    objLocalidad.provinciaId = parseInt((document.getElementById('cmbNuevaProvincia') as HTMLSelectElement).value);
    objLocalidad.descripcion = (document.getElementById('txtNuevaDescripcion') as HTMLInputElement).value;

    let modificarLocalidad = await new LocalidadServicio().Update(objLocalidad);

    if (modificarLocalidad){
        CargarLocalidades();
    }else{
        alert('Error al modificar');
    }
}