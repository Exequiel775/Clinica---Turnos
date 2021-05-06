import {LocalidadServicio} from './Localidad';
import {ProvinciaServicio} from '../ProvinciaTS/Provincia';
import { Localidad } from './ClaseLocalidad';

const _localidadServicio = new LocalidadServicio();
const _provinciaServicio = new ProvinciaServicio();
let _localidadSeleccionada : number;

document.addEventListener('DOMContentLoaded', () => {
    async () => {
        console.log(await _provinciaServicio.Get());
    }
    ActualizarTabla();
    CargarCmbProvincia('cmbProvincia');
})

document.getElementById('modificarLocalidad').addEventListener('click', async() => {
    
    alert('A actualizar');

    let ejecutarModificacion = await ModificarLocalidad();

    if (ejecutarModificacion){
        ActualizarTabla();
    }else{
        alert("Error al actualizar la localidad");
    }
})

async function ActualizarTabla()
{
    const tabla = document.getElementById('tabla-localidad') as HTMLTableElement;
    tabla.innerHTML = '';

    let localidades = await _localidadServicio.Get();

    localidades.forEach((localidad) => {
        let row = tabla.insertRow();

        row.innerHTML = `
        <td>${localidad.descripcion}</td>
        <td>${localidad.provincia}</td>
        <td></td>
        `

        let btnModificar = document.createElement('button');
        btnModificar.classList.add('btn', 'btn-primary');
        btnModificar.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
        btnModificar.value = localidad.id.toString();
        btnModificar.dataset.toggle = 'modal';
        btnModificar.dataset.target = '#modalLocalidad';
        btnModificar.onclick = (e) => {
            _localidadSeleccionada = parseInt((e.target as HTMLInputElement).value);
            CargarCmbProvincia('cmbNuevaProvincia');
            CargarDatosLocalidadSeleccionada(parseInt((e.target as HTMLInputElement).value));
        }

        row.children[2].appendChild(btnModificar);
    })
}

async function CargarCmbProvincia(nombreSelect : string)
{
    const select = document.getElementById(nombreSelect) as HTMLSelectElement;
    select.innerHTML = '';

    let provincias = await _provinciaServicio.Get();

    provincias.forEach((provincia) => {
        let option = document.createElement('option');

        option.text = provincia.descripcion;
        option.value = provincia.id.toString();

        select.add(option);
    })
}

async function CargarDatosLocalidadSeleccionada(localidad: number)
{
    const cmbProvincia = document.getElementById('cmbNuevaProvincia') as HTMLSelectElement;

    let localidadSeleccionada = await _localidadServicio.GetById(localidad);
    (document.getElementById('txtNuevaDescripcion') as HTMLInputElement).value = localidadSeleccionada.descripcion;
    cmbProvincia.value = localidadSeleccionada.provinciaId.toString();
}

async function ModificarLocalidad() : Promise<boolean> {
    let objLocalidad = new Localidad();
    objLocalidad.id = _localidadSeleccionada;
    objLocalidad.provinciaId = parseInt((document.getElementById('cmbNuevaProvincia') as HTMLSelectElement).value);
    objLocalidad.descripcion = (document.getElementById('txtNuevaDescripcion') as HTMLInputElement).value;

    return await _localidadServicio.Update(objLocalidad);
}