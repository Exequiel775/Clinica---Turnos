import {MedicoServicio} from './MedicoServicio';
import {EspecialidadServicio} from '../../EspecialidadTS/EspecialidadServicio';
import {IEspecialidadServicio} from '../../EspecialidadTS/IEspecialidad';
import {ProvinciaServicio} from '../../ProvinciaTS/Provincia';
import {ILocalidadServicio} from '../../Localidad/ILocalidad';
import {LocalidadServicio} from '../../Localidad/Localidad';
import { IProvinciaServicio } from '../../ProvinciaTS/IProvincia';
import {Medico} from './Medico';
import Swal from 'sweetalert2';

const _medicoServicio : MedicoServicio = new MedicoServicio();
const _especialidadServicio : IEspecialidadServicio = new EspecialidadServicio();
const _provinciaServicio : IProvinciaServicio = new ProvinciaServicio();
const _localidadServicio : ILocalidadServicio = new LocalidadServicio();

document.addEventListener('DOMContentLoaded', async() => {
    await CargarProvincias();
    await CargarEspecialidad();
});

async function CargarProvincias()
{
    let provincias = await _provinciaServicio.Get();
    const selectProvincia = document.getElementById('provincia') as HTMLSelectElement;

    provincias.forEach((provincia) => {
        let option = document.createElement('option');

        option.value = provincia.id.toString();
        option.text = provincia.descripcion;

        selectProvincia.add(option);
    });
}

async function CargarEspecialidad()
{
    let especialidades = await _especialidadServicio.Get();
    let selectEspecialidad = document.getElementById('especialidad') as HTMLSelectElement;

    especialidades.forEach((especialidad) => {
        selectEspecialidad.add(new Option(especialidad.descripcion, especialidad.id.toString()));
    });
}

const selectProvincia = document.getElementById('provincia') as HTMLSelectElement;
selectProvincia.addEventListener('change', async(e) => {
    await CargarLocalidades(parseInt((e.target as HTMLSelectElement).value));
})

async function CargarLocalidades(provincia: number)
{
    let localidades = await _localidadServicio.GetByProvincia(provincia);

    const selectLocalidad = document.getElementById('localidad') as HTMLSelectElement;
    selectLocalidad.innerHTML = '';
    
    localidades.forEach((localidad) => {
        selectLocalidad.add(new Option(localidad.descripcion, localidad.id.toString()));
    });
}

// Envio del formulario a nuestro backend
const formulario = document.getElementById('formulario') as HTMLFormElement;
formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

    if (await AgregarMedico(new FormData(formulario))) {
        Swal.fire(
            'Registro Exitoso!',
            'El medico fue registrado exitosamente',
            'success'
        );
        
        formulario.reset();
    } else {
        Swal.fire({
            icon:'error',
            title: ':(',
            text:'Ocurrio un error al registrar, verifique los datos ingresados. Si el problema persiste por favor comunicarse con' +
            'area tecnica.'
        })
    }
});

async function AgregarMedico(formData: FormData) : Promise<boolean>
{
    let objMedico = new Medico();
    objMedico.localidadId = parseInt(formData.get('LocalidadId').toString());
    objMedico.nombre = formData.get('Nombre').toString();
    objMedico.apellido = formData.get('Apellido').toString();
    objMedico.dni = parseInt(formData.get('Dni').toString());
    objMedico.fechaNacimiento = formData.get('FechaNacimiento') as unknown as Date;
    objMedico.especialidadId = parseInt(formData.get('EspecialidadId').toString());
    objMedico.matricula = formData.get('Matricula').toString();
    objMedico.telefono = parseInt(formData.get('Telefono').toString());
    objMedico.celular = parseInt(formData.get('Celular').toString());
    objMedico.email = formData.get('Email').toString();

    const file = document.getElementById('file-imagen') as HTMLInputElement;
    const archivo = file.files[0];

    formData.append('FileImage', archivo);
    formData.append('Localidad', objMedico.localidadId.toString());

    /*
    const input_file = document.getElementById('file-imagen') as HTMLInputElement;
    objMedico.fileImage = input_file.files[0];
    const input_file = document.getElementById('file-imagen') as HTMLInputElement;
    const imagen = input_file.files[0];
    */
    return await _medicoServicio.Add(formData);
}