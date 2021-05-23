import { TipoOperacion } from '../Constantes/TipoOperacion';
import { IEspecialidadServicio } from './IEspecialidad';
import { Especialidad } from './Especialidad';
import { EspecialidadServicio } from './EspecialidadServicio';

const _especialidadServicio: IEspecialidadServicio = new EspecialidadServicio();
let _tipoOperacion: TipoOperacion;
let _entidadId : number;
let _paginaActual : number = null;

document.addEventListener('DOMContentLoaded', async() => {
    await ActualizarTabla(null);
});

document.getElementById('nuevaEspecialidad').addEventListener('click', (e) => {

    _tipoOperacion = TipoOperacion.Nuevo;
    VerificarTipoOperacion(TipoOperacion.Nuevo, null);

    (e.target as HTMLButtonElement).dataset.toggle = "modal";
    (e.target as HTMLButtonElement).dataset.target = "#modalEspecialidad";
});

/*

document.querySelectorAll('.modificar').forEach((boton) => {
    boton.addEventListener('click', (e) => {

        _tipoOperacion = TipoOperacion.Modificar;
        VerificarTipoOperacion(TipoOperacion.Modificar);

        (e.target as HTMLButtonElement).dataset.toggle = "modal";
        (e.target as HTMLButtonElement).dataset.target = "#modalEspecialidad";
    })
});
*/

const formulario = document.getElementById('formulario-especialidad') as HTMLFormElement;
formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    let formData = new FormData(formulario);

    await EjecutarOperacion(_tipoOperacion, formData);
})

/*
async function ActualizarTabla(): Promise<void> {
    let especialidades = await _especialidadServicio.Get();

    const tabla = document.getElementById('tabla-especialidades') as HTMLTableElement;
    tabla.innerHTML = '';

    especialidades.forEach((especialidad) => {
        let row = tabla.insertRow();

        row.innerHTML = `
        <td>${especialidad.descripcion}</td>
        <td></td>
        `

        let btnModificar = document.createElement('button');
        btnModificar.classList.add('btn');
        btnModificar.style.padding = '8px';
        btnModificar.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor"
        class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path
        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
        `
        btnModificar.dataset.toggle = 'modal';
        btnModificar.dataset.target = '#modalEspecialidad';
        btnModificar.onclick = () => {
            _tipoOperacion = TipoOperacion.Modificar;
            _entidadId = especialidad.id;
            VerificarTipoOperacion(TipoOperacion.Modificar, especialidad);
        }

        row.children[1].appendChild(btnModificar);
    })
}*/

async function ActualizarTabla(pagina: number = null)
{
    try {
        let especialidades = await _especialidadServicio.GetEspecialidadesPaginadas(pagina);

        const tabla = document.getElementById('tabla-especialidades') as HTMLTableElement;
        tabla.innerHTML = '';

        especialidades.especialidades.forEach((especialidad) => {
            let row = tabla.insertRow();

            row.innerHTML = `
        <td>${especialidad.descripcion}</td>
        <td></td>
        `

            let btnModificar = document.createElement('button');
            btnModificar.classList.add('btn');
            btnModificar.style.padding = '8px';
            btnModificar.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor"
        class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path
        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
        <path fill-rule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
        `
            btnModificar.dataset.toggle = 'modal';
            btnModificar.dataset.target = '#modalEspecialidad';
            btnModificar.onclick = () => {
                _tipoOperacion = TipoOperacion.Modificar;
                _entidadId = especialidad.id;
                VerificarTipoOperacion(TipoOperacion.Modificar, especialidad);
            }

            row.children[1].appendChild(btnModificar);
        })

        CrearPaginado(especialidades.paginas);
        ActualizarMuestra(especialidades.mostrando, especialidades.totalRegistros);

    }
    catch(e) {
        console.log(e);
    }

}

function VerificarTipoOperacion(tipoOperacion: TipoOperacion, especialidad: Especialidad): void {

    console.log(tipoOperacion);

    switch (tipoOperacion) {
        case TipoOperacion.Nuevo:
            {
                (document.getElementById('modalEspecialidadTitulo') as HTMLElement).textContent = 'Nueva Especialidad';
                (document.getElementById('descripcion') as HTMLInputElement).value = '';
                break;
            }

        case TipoOperacion.Modificar:
            {
                (document.getElementById('modalEspecialidadTitulo') as HTMLElement).textContent = 'Modificar Especialidad';
                (document.getElementById('descripcion') as HTMLInputElement).value = especialidad.descripcion;
                break;
            }

        case TipoOperacion.Eliminar:
            {
                (document.getElementById('modalEspecialidadTitulo') as HTMLElement).textContent = 'Eliminar Especialidad';
                break;
            }
    }
}

async function EjecutarOperacion(tipoOperacion: TipoOperacion, formData: FormData): Promise<void> {

    let objEspecialidad = new Especialidad();

    switch (tipoOperacion) {

        case TipoOperacion.Nuevo:
            {
                objEspecialidad.descripcion = formData.get('Descripcion').toString();
                if (await AgregarEspecialidad(objEspecialidad)) {
                    alert('Especialidad Cargada');
                } else {
                    alert('Error al agregar la especialidad');
                }
                break;
            }
        case TipoOperacion.Modificar:
            {
                objEspecialidad.id = _entidadId;
                objEspecialidad.descripcion = formData.get('Descripcion').toString();

                if (await ModificarEspecialidad(objEspecialidad)) {
                    ActualizarTabla(_paginaActual);
                } else {
                    alert('Error al modificar');
                }

                break;
            }
        case TipoOperacion.Eliminar:
            {
                break;
            }
    }
}

async function AgregarEspecialidad(especialidad: Especialidad): Promise<boolean> {
    return await _especialidadServicio.Add(especialidad);
}

async function ModificarEspecialidad(especialidadModificar: Especialidad) : Promise<boolean>
{
    return await _especialidadServicio.Update(especialidadModificar);
}

function CrearPaginado(paginas: number)
{
    const contenedor_paginado = document.querySelector('.contenedor-paginado');
    contenedor_paginado.innerHTML = '';

    for (let i = 1; i <= paginas; i++)
    {
        let btnPagina = document.createElement('button');
        btnPagina.classList.add('paginado', 'border');
        btnPagina.textContent = i.toString();
        btnPagina.onclick = async () => {
            await ActualizarTabla(i);
            _paginaActual = i;
        }

        contenedor_paginado.appendChild(btnPagina);
    }
}

function ActualizarMuestra(cantidadPantalla : number, total : number) {
    let strMostrando = document.getElementById('mostrando') as HTMLElement;
    let strTotal = document.getElementById('totalRegistros') as HTMLElement;

    strMostrando.textContent = cantidadPantalla.toString();
    strTotal.textContent = total.toString();
}