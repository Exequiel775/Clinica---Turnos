import { PacienteServicio } from '../PacienteTS/PacienteServicio';
import Swal from 'sweetalert2';

const _pacienteServicio : PacienteServicio = new PacienteServicio();

document.getElementById('buscar').addEventListener('click', async() => {
    let dniPaciente = parseInt((document.getElementById('dni') as HTMLInputElement).value);

    await BuscarDni(dniPaciente);
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