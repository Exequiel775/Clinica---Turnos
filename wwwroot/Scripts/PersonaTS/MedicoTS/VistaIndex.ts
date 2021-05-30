import { Medico } from './Medico';
import { MedicoServicio } from './MedicoServicio'
import { ProvinciaServicio } from '../../ProvinciaTS/Provincia';
import { LocalidadServicio } from '../../Localidad/Localidad';
import { IProvinciaServicio } from '../../ProvinciaTS/IProvincia';
import { ILocalidadServicio } from '../../Localidad/ILocalidad';
import { EspecialidadServicio } from '../../EspecialidadTS/EspecialidadServicio';
import { IEspecialidadServicio } from '../../EspecialidadTS/IEspecialidad';
import Swal from 'sweetalert2';

const _medicoServicio : MedicoServicio = new MedicoServicio();
const _provinciaServicio : IProvinciaServicio = new ProvinciaServicio();
const _localidadServicio : ILocalidadServicio = new LocalidadServicio();
const _especialidadServicio : IEspecialidadServicio = new EspecialidadServicio();

const _selectProvincia = document.getElementById('provincia') as HTMLSelectElement;
const _selectLocalidad = document.getElementById('localidad') as HTMLSelectElement;
const _selectEspecialidad = document.getElementById('especialidad') as HTMLSelectElement;

let _entidadId : number;

document.addEventListener('DOMContentLoaded', async() => {
    await CargarMedicos();
});

_selectProvincia.addEventListener('change', async(e) => {
    await CargarLocalidadesProvincia(parseInt(_selectProvincia.value));
});

async function CargarMedicos() : Promise<void>
{
    let medicos = await _medicoServicio.Get();
    const contenedor = document.querySelector('.contenedor');
    contenedor.innerHTML = '';

    medicos.forEach((medico) => {
        console.log(`https://localhost:5001${medico.imagen.replace('~', '')}`);
        //let objUrl = URL.createObjectURL(`https://localhost:5001${medico.imagen.replace('~', '')}`);

        let divPrincipal = GenerarDivCardPrincipal();
        divPrincipal.appendChild(GenerarImgCard(medico.imagen));
        divPrincipal.appendChild(GenerarBodyCard(medico.apyNom, medico.especialidadStr));
        divPrincipal.appendChild(GenerarBotonesFooter(medico));

        contenedor.appendChild(divPrincipal);
    });
}

function GenerarDivCardPrincipal() : HTMLDivElement
{
    let divCard = document.createElement('div');
    divCard.classList.add('card', 'col-12', 'col-sm-12', 'col-md-3', 'col-lg-3', 'col-xl-3', 'medicos');

    return divCard;
}

function GenerarImgCard(imagen: string) : HTMLImageElement
{
    let img = document.createElement('img');
    img.classList.add('card-img-top', 'mt-2', 'img-doctor');
    img.src = `https://localhost:5001${imagen.replace('~', '')}`;

    return img;
}

function GenerarBodyCard(apynom : string, especialidad: string) : HTMLDivElement
{
    let body = document.createElement('div');
    body.classList.add('card-body');

    let h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = apynom;

    let p = document.createElement('p');
    p.classList.add('card-text', 'text-danger');
    p.textContent = especialidad;

    body.appendChild(h5);
    body.appendChild(p);

    return body;
}

function GenerarBotonesFooter(medico: Medico) : HTMLDivElement
{
    let divFooter = document.createElement('div');
    divFooter.classList.add('form-inline', 'ml-2');

    let btnModificar = document.createElement('button');
    btnModificar.title = medico.apyNom;
    btnModificar.classList.add('btn', 'bg-white', 'ml-3');
    btnModificar.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path
        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
    <path fill-rule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
    </svg>
    `
    btnModificar.style.padding = '0px';
    btnModificar.dataset.toggle = 'modal';
    btnModificar.dataset.target = '#modalMedico';
    btnModificar.addEventListener('click', async() => {
        _entidadId = medico.id;
        await CargarDatosMedicoSeleccionado(medico);
    });

    let btnEliminar = document.createElement('button');
    btnEliminar.title = medico.apyNom;
    btnEliminar.classList.add('btn', 'btn-danger', 'ml-2');
    btnEliminar.textContent = 'Eli';
    btnEliminar.addEventListener('click', () => {
        console.log(medico);
    });
    
    divFooter.appendChild(btnModificar);
    divFooter.appendChild(btnEliminar);

    return divFooter;
}

async function CargarDatosMedicoSeleccionado(medicoSeleccionado : Medico)
{
    let tituloModal = document.getElementById('modalMedicoTitle') as HTMLElement;
    let inputNombre = document.getElementById('nombre') as HTMLInputElement;
    let inputApellido = document.getElementById('apellido') as HTMLInputElement;
    let inputDni = document.getElementById('dni') as HTMLInputElement;
    let inputFechaNacimiento = document.getElementById('fechaNacimiento') as HTMLInputElement;
    let inputCelular = document.getElementById('celular') as HTMLInputElement;
    let inputTelefono = document.getElementById('telefono') as HTMLInputElement;
    let inputEmail = document.getElementById('email') as HTMLInputElement;
    let inputMatricula = document.getElementById('matricula') as HTMLInputElement;

    tituloModal.textContent = medicoSeleccionado.apyNom;
    inputNombre.value = medicoSeleccionado.nombre;
    inputApellido.value = medicoSeleccionado.apellido;
    inputDni.value = medicoSeleccionado.dni.toString();
    inputFechaNacimiento.value = medicoSeleccionado.fechaStr;
    inputCelular.value = medicoSeleccionado.celular.toString();
    inputTelefono.value = medicoSeleccionado.telefono.toString();
    inputEmail.value = medicoSeleccionado.email;
    inputMatricula.value = medicoSeleccionado.matricula.toString();

    await CargarProvincias(medicoSeleccionado.provinciaId);
    await CargarLocalidadMedico(medicoSeleccionado.provinciaId, medicoSeleccionado.localidadId);
    await CargarEspecialidades(medicoSeleccionado.especialidadId);
}

async function CargarProvincias(provinciaMedico : number)
{
    _selectProvincia.innerHTML = '';

    let provincias = await _provinciaServicio.Get();

    provincias.forEach((provincia) => {
        _selectProvincia.add(new Option(provincia.descripcion, provincia.id.toString()));
    });

    _selectProvincia.value = provinciaMedico.toString();
}

async function CargarLocalidadMedico(provinciaMedico : number, localidadMedico : number)
{
    const localidades = await _localidadServicio.GetByProvincia(provinciaMedico);

    _selectLocalidad.innerHTML = '';

    localidades.forEach((localidad) => {
        _selectLocalidad.add(new Option(localidad.descripcion, localidad.id.toString()));
    });

    _selectLocalidad.value = localidadMedico.toString();
}

async function CargarEspecialidades(especialidadMedico: number)
{
    _selectEspecialidad.innerHTML = '';

    let especialidades = await _especialidadServicio.Get();

    especialidades.forEach(especialidad => {
        _selectEspecialidad.add(new Option(especialidad.descripcion, especialidad.id.toString()));
    });

    _selectEspecialidad.value = especialidadMedico.toString();
}

async function CargarLocalidadesProvincia(provinciaSeleccionada : number)
{
    _selectLocalidad.innerHTML = '';

    let localidades = await _localidadServicio.GetByProvincia(provinciaSeleccionada);

    if (localidades.length > 0) {

        localidades.forEach((localidad) => {
            _selectLocalidad.add(new Option(localidad.descripcion, localidad.id.toString()));
        });
    }
    else 
    {
        _selectLocalidad.add(new Option('No se encontraron localidades para la provincia seleccionada', '-1'));
    }
}

// PROCESO DE MODIFICACIÓN
const formModificar = document.getElementById('form-modificar-medico') as HTMLFormElement;
formModificar.addEventListener('submit', async(e) => {
    e.preventDefault();

    let formData = new FormData(formModificar);

    let ejecutarModificacion = await ModificarMedico(formData);

    if (ejecutarModificacion) {
        Swal.fire({
            icon:'success',
            title : 'Modificación Exitosa',
            text:'El medico fue modificado exitosamente'
        });

        CargarMedicos();
    }
    else {
        Swal.fire({
            icon:'error',
            title:'Error al modificar',
            text:'Ocurrio un error al modificar al medico...' 
        });
    }
});

async function ModificarMedico(formData : FormData) : Promise<boolean>
{
    let objMedico = new Medico();
    objMedico.id = _entidadId;
    objMedico.localidadId = parseInt(formData.get('Localidad').toString());
    objMedico.nombre = formData.get('Nombre').toString();
    objMedico.apellido = formData.get('Apellido').toString();
    objMedico.dni = parseInt(formData.get('Dni').toString());
    objMedico.fechaNacimiento = formData.get('FechaNacimiento') as unknown as Date;
    objMedico.email = formData.get('Email').toString();
    objMedico.celular = parseInt(formData.get('Celular').toString());
    objMedico.telefono = parseInt(formData.get('Telefono').toString());
    objMedico.especialidadId = parseInt(formData.get('Especialidad').toString());
    objMedico.matricula = formData.get('Matricula').toString();
    objMedico.especialidadId = parseInt(formData.get('Especialidad').toString());

    return await _medicoServicio.Update(objMedico);
}