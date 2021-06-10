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

const _pacienteServicio : PacienteServicio = new PacienteServicio();
const _turnoServicio : TurnoServicio = new TurnoServicio();
const _especialidadServicio : IEspecialidadServicio = new EspecialidadServicio();
const _localidadServicio : ILocalidadServicio = new LocalidadServicio();
const _provinciaServicio : IProvinciaServicio = new ProvinciaServicio();

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