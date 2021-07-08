import {PacienteServicio} from '../PacienteTS/PacienteServicio';
import Swal from 'sweetalert2';
import {Turno} from './Turno';
import {TurnoServicio} from '../TurnosTS/TurnoServicio';
import {Response} from '../RequestTS/Response';
import {ILocalidadServicio} from '../Localidad/ILocalidad';
import {LocalidadServicio} from '../Localidad/Localidad';
import {IProvinciaServicio} from '../ProvinciaTS/IProvincia';
import {ProvinciaServicio} from '../ProvinciaTS/Provincia';
import {IEspecialidadServicio} from '../EspecialidadTS/IEspecialidad';
import {EspecialidadServicio} from '../EspecialidadTS/EspecialidadServicio';
import {Medico} from '../PersonaTS/MedicoTS/Medico';
import {Request} from '../FetchRequestTS/Request';
import { Cargas } from '../Utilidades/CargarSelect';

const _pacienteServicio : PacienteServicio = new PacienteServicio();
const _turnoServicio : TurnoServicio = new TurnoServicio();
const _especialidadServicio : IEspecialidadServicio = new EspecialidadServicio();
const _localidadServicio : ILocalidadServicio = new LocalidadServicio();
const _provinciaServicio : IProvinciaServicio = new ProvinciaServicio();
const _requestMedico : Request<Medico> = new Request<Medico>();

document.addEventListener('DOMContentLoaded', async() => {
    await CargarProvincias();
    await CargarEspecialidades();
})

document.getElementsByClassName('btnBuscar')[0].addEventListener('click', async() => {
    let dni = document.getElementsByName('DniBuscar')[0] as HTMLInputElement;
    await BuscarDni(parseInt(dni.value));
});

const formulario = document.getElementById('formulario') as HTMLFormElement;
formulario.addEventListener('submit', async(e) => {

    e.preventDefault();
    
    let formData = new FormData(formulario);
    console.log(`Formdata: ${formData.forEach((asd) => asd)}`)

    let grabarTurno = await GenerarTurno(formData);

    if (grabarTurno.estado) {
        Swal.fire({
            icon:'success',
            title:'Turno grabado',
            text:grabarTurno.mensaje
        })
    } else {
        Swal.fire({
            icon:'info',
            title:'Respuesta',
            text:`Estado ${grabarTurno.estado} - ${grabarTurno.mensaje}`
        });
    }
});

    /*
    let turno = new Turno();
    turno.especialidadId = 1;
    turno.fechaAtencion = new Date();
    turno.medicoId = 1;
    turno.recepcionistaId = 1;
    turno.paciente.apellido = 'Chaves';
    turno.paciente.celular = 131312;
    turno.paciente.dni = 321123321;
    turno.paciente.email = 'jessica@gmail.com';
    turno.paciente.fechaNacimiento = new Date();
    turno.paciente.localidadId = 3;
    turno.paciente.nombre = 'Jessica Fernanda';
    turno.paciente.telefono = 32109123;

    let grabarTurno = await GrabarTurno(turno);

    Swal.fire({
        icon:'info',
        title:'Respuesta de la peticion',
        text:`${grabarTurno.mensaje}. Estado: ${grabarTurno.estado}`
    });*/

async function BuscarDni(dni : number)
{
    let paciente = await _pacienteServicio.BuscarPaciente(dni);

    if (paciente != null)
    {
        Swal.fire({
            icon:'success',
            title: 'Busqueda Exitosa',
            text:'Paciente Encontrado...'
        })

        console.log(paciente)
    } 
    else
    {
        Swal.fire({
            icon:'error',
            title:'No se encontro al paciente',
            text: 'El paciente no se encontro'
        });
    }
}

async function CargarProvincias() {
    let provincias = await _provinciaServicio.Get();

    const selectProvincia = document.getElementsByName('Provincia')[0] as HTMLSelectElement;

    provincias.forEach((provincia) => {
        selectProvincia.add(new Option(provincia.descripcion, provincia.id.toString()));
        selectProvincia.onchange = async(e) => {
            let provinciaSeleccionada = (e.target as HTMLSelectElement).value;
            await CargarLocalidades(parseInt(provinciaSeleccionada));
        };
    });
}

async function CargarEspecialidades() {
    let especialidades = await _especialidadServicio.Get();

    const selectEspecialidad = document.getElementsByName('Especialidad')[0] as HTMLSelectElement;

    especialidades.forEach((especialidad) => {
        selectEspecialidad.add(new Option(especialidad.descripcion, especialidad.id.toString()));
        selectEspecialidad.onchange = async(e) => {
            let especialidadSeleccionada = (e.target as HTMLSelectElement).value;
            await CargarMedicos(parseInt(especialidadSeleccionada));
        };
    });
}

async function CargarLocalidades(provincia : number)
{
    const localidades = await _localidadServicio.GetByProvincia(provincia);

    const selectLocalidad = document.getElementsByName('Localidad')[0] as HTMLSelectElement;

    selectLocalidad.options.length = 0;
    
    localidades.forEach((localidad) => {
        selectLocalidad.add(new Option(localidad.descripcion, localidad.id.toString()));
    });
}

async function CargarMedicos(especialidad : number)
{
    let medicos = await _requestMedico.Get(`/Medicos/GetByEspecialidad?especialidad=${especialidad}`);

    const selectMedico = document.getElementsByName('Medico')[0] as HTMLSelectElement;
    selectMedico.options.length = 0;
    selectMedico.disabled = true;

    window.setTimeout(() => {
        selectMedico.disabled = false;
        medicos.forEach((medico) => {
            selectMedico.add(new Option(medico.apyNom, medico.id.toString()));
        });
    }, 1200);
}

async function GenerarTurno(form : FormData) : Promise<Response<Turno>>
{
    let objTurno = new Turno();
    objTurno.especialidadId = parseInt(form.get('Especialidad').toString());
    objTurno.medicoId = parseInt(form.get('Medico').toString());
    objTurno.fechaAtencion = form.get('FechaAtencion') as unknown as Date;
    objTurno.paciente.localidadId = parseInt(form.get('Localidad').toString());
    objTurno.paciente.nombre = form.get('Nombre').toString();
    objTurno.paciente.apellido = form.get('Apellido').toString();
    objTurno.paciente.dni = parseInt(form.get('Dni').toString());
    objTurno.paciente.fechaNacimiento = form.get('FechaNacimiento') as unknown as Date;
    objTurno.paciente.email = form.get('Email').toString();
    objTurno.paciente.celular = parseInt(form.get('Celular').toString());
    objTurno.paciente.telefono = parseInt(form.get('Telefono').toString());

    console.log(objTurno);

    return await _turnoServicio.Add(objTurno);
}