import {IRecepcionistaServicio} from './IRecepcionista';
import {RecepcionistaServicio} from './RecepconistaServicio';
import {Recepcionista} from './Recepcionista';
import {ILocalidadServicio} from '../Localidad/ILocalidad';
import {LocalidadServicio} from '../Localidad/Localidad';
import {ProvinciaServicio} from '../ProvinciaTS/Provincia';
import {IProvinciaServicio} from '../ProvinciaTS/IProvincia';

const _recepcionistaServicio : IRecepcionistaServicio = new RecepcionistaServicio();
const _localidadServicio : ILocalidadServicio = new LocalidadServicio();
const _provinciaServicio : IProvinciaServicio = new ProvinciaServicio();

document.addEventListener('DOMContentLoaded', async() => {
    await CargarProvincias();
})

const select = document.getElementById('cmbProvincia') as HTMLSelectElement;
select.addEventListener('change', async(e) => {
    let provinciaSeleccionada = parseInt((e.target as HTMLSelectElement).value);

    await CargarLocalidades(provinciaSeleccionada);
});

const formulario = document.getElementById('formulario') as HTMLFormElement;
formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(formulario);

    if (await AgregarRecepcionista(formData)){
        document.getElementById('alerta').style.display = 'block';  
        formulario.reset(); 
    }else{
        alert('Error al agregar el recepcionista');
    }
});

document.getElementById('btnBuscar').addEventListener('click', () => {
    let busqueda = (document.getElementById('input-buscar') as HTMLInputElement).value;

    window.location.href = `/Persona/Recepcionistas?buscar=${busqueda}`;
})

async function AgregarRecepcionista(formData: FormData) : Promise<boolean>
{
    let objetoRecepcionista = new Recepcionista();
    objetoRecepcionista.nombre = formData.get('Nombre').toString();
    objetoRecepcionista.apellido = formData.get('Apellido').toString();
    objetoRecepcionista.dni = parseInt(formData.get('Dni').toString());
    objetoRecepcionista.localidadId = parseInt(formData.get('LocalidadId').toString());
    objetoRecepcionista.celular = parseInt(formData.get('Celular').toString());
    objetoRecepcionista.telefono = parseInt(formData.get('Telefono').toString());
    objetoRecepcionista.turnoRecepcionista = parseInt(formData.get('TurnoRecepcionista').toString());
    objetoRecepcionista.email = formData.get('Email').toString();
    objetoRecepcionista.fechaNacimiento = formData.get('FechaNacimiento') as unknown as Date;
    /*
    objetoRecepcionista.nombre = (document.getElementById('txtNombre') as HTMLInputElement).value;
    objetoRecepcionista.apellido = (document.getElementById('txtApellido') as HTMLInputElement).value;;
    objetoRecepcionista.dni = parseInt((document.getElementById('txtDni') as HTMLInputElement).value);
    objetoRecepcionista.localidadId = parseInt((document.getElementById('cmbLocalidad') as HTMLInputElement).value);
    objetoRecepcionista.celular = parseInt((document.getElementById('txtCelular') as HTMLInputElement).value);
    objetoRecepcionista.telefono = parseInt((document.getElementById('txtTelefono') as HTMLInputElement).value);
    objetoRecepcionista.turnoRecepcionista = parseInt((document.getElementById('cmbTurno') as HTMLInputElement).value);
    objetoRecepcionista.email = (document.getElementById('txtEmail') as HTMLInputElement).value;
    objetoRecepcionista.fechaNacimiento = (document.getElementById('dtpFechaNacimiento') as HTMLDataElement).value as unknown as Date;
    */
    let agregar = await _recepcionistaServicio.Add(objetoRecepcionista);
    return agregar;
}

async function CargarLocalidades(provincia : number)
{
    let localidades = await _localidadServicio.GetByProvincia(provincia);

    let select = document.getElementById('cmbLocalidad') as HTMLSelectElement;
    select.innerHTML = '';

    localidades.forEach((localidad) => {
        let option = document.createElement('option');

        option.value = localidad.id.toString();
        option.text = localidad.descripcion;

        select.appendChild(option);
    });
}

async function CargarProvincias()
{
    let provincias = await _provinciaServicio.Get();

    const select = document.getElementById('cmbProvincia') as HTMLSelectElement;

    provincias.forEach((provincia) => {
        let option = document.createElement('option');

        option.text = provincia.descripcion;
        option.value = provincia.id.toString();

        select.add(option);
    })
}
