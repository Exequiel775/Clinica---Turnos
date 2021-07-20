import { Usuario, UsuarioServicio } from "./Usuario";
import { Persona } from "../PersonaTS/Persona";
import Swal from "sweetalert2";

const _usuarioServicio : UsuarioServicio = new UsuarioServicio();

let _personas : Persona[];

document.addEventListener('DOMContentLoaded', async() => {
    let usuarios = await _usuarioServicio.Get();

    ActualizarTabla(usuarios);
});

function ActualizarTabla(personas: Persona[])
{
    const tablaUsuarios = document.querySelector('.tabla-usuarios') as HTMLTableElement;

    tablaUsuarios.innerHTML = '';

    _personas = personas;

    _personas.forEach((persona) => {
        let row = tablaUsuarios.insertRow();

        if (persona.usuario.nombre == 'NO ASIGNADO') {
            row.style.backgroundColor = '#009432';
            row.style.color = '#2f3640';
        }
        else if (persona.usuario.nombre != 'NO ASIGNADO')
        {
            row.style.backgroundColor = '#3867d6';
            row.style.color = '#f5f6fa';
        }
        else if (persona.usuario.nombre != 'NO ASIGNADO' && persona.usuario.estaBloqueado) {
            row.style.backgroundColor = '#c0392b';
            row.style.color = '#f5f6fa';
        }

        row.innerHTML = `
        <td></td>
        <td>${persona.apyNom}</td>
        <td>${persona.dni}</td>
        <td>${persona.usuario.nombre}</td>
        <td>${persona.usuario.password}</td>
        <td>${persona.usuario.estaBloqueado}</td>
        `

        let chkItem = document.createElement('input');
        chkItem.type = 'checkbox';
        chkItem.onclick = () => {
            persona.item = chkItem.checked;
        }

        row.children[0].appendChild(chkItem);
    })
}

const btnCrear = document.querySelector('.btnCrear') as HTMLButtonElement;
btnCrear.addEventListener('click', async() => {
    let crearUsuario = await _usuarioServicio.CrearUsuario(_personas);

    if (crearUsuario.estado) {
        Swal.fire({
            title: 'Exito',
            text:crearUsuario.mensaje,
            icon:'success'
        });

        ActualizarTabla(await _usuarioServicio.Get());
    }
})