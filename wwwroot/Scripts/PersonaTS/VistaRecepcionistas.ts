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
let _entidadId : number;

document.addEventListener('DOMContentLoaded', async() => {
    await CargarTablaRecepcionistas(null, null);
})

const formularioModificar = document.getElementById('formularioModificar') as HTMLFormElement;
formularioModificar.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(formularioModificar);

    if (await ModificarRecepcionista(formData)) {
        alert('Recepcionista Modificado');
        CargarTablaRecepcionistas(null, null);
    }
    else
    {
        alert('Error al modificar al recepcionista');
    }
});

document.getElementById('btnBuscar').addEventListener('click', async() => {
    let filtro = (document.getElementById('input-buscar') as HTMLInputElement).value;

    await CargarTablaRecepcionistas(filtro, null);
});

const inputFiltro = document.getElementById('input-buscar') as HTMLInputElement;
inputFiltro.addEventListener('keyup', async(e) => {
    let tecla = e.keyCode || e.which;

    if (tecla == 13) {
        await CargarTablaRecepcionistas(inputFiltro.value, null);
    }
})

async function CargarTablaRecepcionistas(cadenaBuscar: string = null, pagina: number) : Promise<void>
{
    let recepcionistas = await _recepcionistaServicio.RecepcionistasPaginados(cadenaBuscar, pagina);
    const tabla = document.getElementById('tabla-recepcionistas') as HTMLTableElement;
    tabla.innerHTML = '';

    recepcionistas.recepcionistas.forEach((recepcionista) => {
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
            _entidadId = recepcionista.id;
            CargarDatosRecepcionista(recepcionista);
        }

        row.children[3].appendChild(btnModificar);
    });

    ActualizarBotonesPaginado(recepcionistas.paginas);
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
    (document.getElementById('modal-nombre') as HTMLElement).textContent = recepcionista.apyNom;
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

async function ModificarRecepcionista(formData: FormData) : Promise<boolean>
{
    let objetoRecepcionista = new Recepcionista();
    objetoRecepcionista.id = _entidadId;
    objetoRecepcionista.nombre = formData.get('Nombre').toString();
    objetoRecepcionista.apellido = formData.get('Apellido').toString();
    objetoRecepcionista.dni = parseInt(formData.get('Dni').toString());
    objetoRecepcionista.localidadId = parseInt(formData.get('Localidad').toString());
    objetoRecepcionista.celular = parseInt(formData.get('Celular').toString());
    objetoRecepcionista.telefono = parseInt(formData.get('Telefono').toString());
    objetoRecepcionista.turnoRecepcionista = parseInt(formData.get('TurnoRecepcionista').toString());
    objetoRecepcionista.email = formData.get('Email').toString();
    objetoRecepcionista.fechaNacimiento = formData.get('FechaNacimiento') as unknown as Date;

    let ejecutarModificar = await _recepcionistaServicio.Update(objetoRecepcionista);

    return ejecutarModificar;
}

async function ActualizarBotonesPaginado(cantidadPaginas : number) : Promise<void>
{
    const contenedor = document.querySelector('.contenedor-paginado');
    contenedor.innerHTML = '';

    for(let i = 1; i <= cantidadPaginas; i++)
    {
        let btnPaginado = document.createElement('button');
        btnPaginado.classList.add('btn', 'border', 'ml-2');
        btnPaginado.textContent = i.toString();
        btnPaginado.onclick = () => {
            CargarTablaRecepcionistas(null, i);
        }

        contenedor.appendChild(btnPaginado);
    }
}