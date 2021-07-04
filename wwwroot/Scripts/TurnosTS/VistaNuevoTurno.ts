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

document.getElementById('buscar').addEventListener('click', async() => {

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
    });
})

async function BuscarDni(dni : number)
{
    let paciente = await _pacienteServicio.BuscarPaciente(dni);

    if (paciente.paciente != null)
    {
        Swal.fire({
            icon:'success',
            title: 'Busqueda Exitosa',
            text:'Paciente Encontrado...'
        })
    } 
    else
    {
        Swal.fire({
            icon:'error',
            title:'No se encontro al paciente',
            text:paciente.mensaje
        });
    }
}

async function GrabarTurno(turno : Turno) : Promise<Response>
{
    let response = await _turnoServicio.Add(turno);

    return response;
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
    
    let tablaMedicos = document.getElementById('tabla-medicos') as HTMLTableElement;
    tablaMedicos.deleteRow


}