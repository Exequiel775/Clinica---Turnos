import {Recepcionista} from './Recepcionista';
import {IRecepcionistaServicio} from './IRecepcionista';
import {RecepcionistaServicio} from './RecepconistaServicio';
import {ILocalidadServicio} from '../Localidad/ILocalidad';
import {LocalidadServicio} from '../Localidad/Localidad';
import {IProvinciaServicio} from '../ProvinciaTS/IProvincia';
import { ProvinciaServicio } from '../ProvinciaTS/Provincia';

const _recepcionistaServicio : IRecepcionistaServicio = new RecepcionistaServicio();
const _localidadServicio : ILocalidadServicio = new LocalidadServicio();
const _provinciaServicio : IProvinciaServicio = new ProvinciaServicio();

document.addEventListener('DOMContentLoaded', async() => {
    await CargarTablaRecepcionistas();
})

async function CargarTablaRecepcionistas() : Promise<void>
{
    let recepcionistas = await _recepcionistaServicio.Get();
    const tabla = document.getElementById('tabla-recepcionistas') as HTMLTableElement;
    tabla.innerHTML = '';

    recepcionistas.forEach((recepcionista) => {
        let row = tabla.insertRow();

        row.innerHTML = `
        <td>${recepcionista.apyNom}</td>
        <td>${recepcionista.dni}</td>
        <td>${recepcionista.localidad}</td>
        <td></td>
        `

        let btnModificar = document.createElement('button');
        btnModificar.classList.add('btn', 'btn-primary');
        btnModificar.textContent = 'MOD';
        btnModificar.dataset.toggle = 'modal';
        btnModificar.dataset.target = '#modalRecepcionista';
        btnModificar.onclick = () => {
            CargarDatosRecepcionista(recepcionista);
        }

        row.children[3].appendChild(btnModificar);
    });
}

async function CargarDatosRecepcionista(recepcionista: Recepcionista)
{
    await CargarLocalidades();
    await CargarProvincias();

    (document.getElementById('nombre') as HTMLInputElement).value = recepcionista.nombre;
    (document.getElementById('apellido') as HTMLInputElement).value = recepcionista.apellido;
    (document.getElementById('dni') as HTMLInputElement).value = recepcionista.dni.toString();
    (document.getElementById('fechaNacimiento') as HTMLInputElement).value = recepcionista.fechaStr;
    (document.getElementById('email') as HTMLInputElement).value = recepcionista.email;
    (document.getElementById('celular') as HTMLInputElement).value = recepcionista.celular.toString();
    (document.getElementById('telefono') as HTMLInputElement).value = recepcionista.telefono.toString();
    (document.getElementById('cmbLocalidad') as HTMLSelectElement).value = recepcionista.localidadId.toString();
    (document.getElementById('cmbTurno') as HTMLSelectElement).value = recepcionista.turnoRecepcionista.toString();
    (document.getElementById('cmbProvincia') as HTMLSelectElement).value = recepcionista.provinciaId.toString();
}

async function CargarLocalidades() : Promise<void>
{
    const select = document.getElementById('cmbLocalidad') as HTMLSelectElement;
    select.innerHTML = '';

    const localidades = await _localidadServicio.GetSinPaginado();

    localidades.forEach((localidad) => {
        let option = document.createElement('option');

        option.text = localidad.descripcion;
        option.value = localidad.id.toString();

        select.appendChild(option);
    });
}

async function CargarProvincias() : Promise<void>
{
    const provincias = await _provinciaServicio.Get();

    const select = document.getElementById('cmbProvincia') as HTMLSelectElement;
    select.innerHTML = '';

    provincias.forEach((provincia) => {
        let option = document.createElement('option');

        option.text = provincia.descripcion;
        option.value = provincia.id.toString();

        select.add(option);
    })
}