import { Perfil, PerfilServicio } from "./Perfil";
import Swal from "sweetalert2";

const _perfilServicio : PerfilServicio = new PerfilServicio();

document.addEventListener('DOMContentLoaded', async() => {
    await CargarPerfiles();
})

async function CargarPerfiles()
{
    const tabla = document.getElementById('body-tabla') as HTMLTableElement;
    tabla.innerHTML = '';

    let perfiles = await _perfilServicio.Get();

    perfiles.forEach((perfil) => {
        let row = tabla.insertRow();

        row.innerHTML = `
        <td>${perfil.descripcion}</td>
        <td></td>
        `

        // BOTON MODIFICAR
        let btnModificar = document.createElement('button');
        btnModificar.classList.add('btn', 'btn-danger', 'mr-1');
        btnModificar.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
        `

        // BOTON ELIMINAR
        let btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn', 'btn-warning', 'mr-1');
        btnEliminar.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
            <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
        </svg>
        `
        btnEliminar.addEventListener('click', async() => {
            await EliminarPerfil(perfil);
        })

        row.children[1].appendChild(btnModificar);
        row.children[1].appendChild(btnEliminar);
    });
}

async function EliminarPerfil(perfilSeleccionada : Perfil)
{
    Swal.fire({
        title: `¿Desea eliminar el perfil ${perfilSeleccionada.descripcion}?`,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: `Si`,
        cancelButtonText:'Cancelar',
      }).then(async(result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

          let ejecutarEliminacion = await _perfilServicio.Delete(perfilSeleccionada);
          
          if (ejecutarEliminacion.estado) {

            Swal.fire({
              title:'Hecho',
              text:ejecutarEliminacion.mensaje,
              icon:'success'
            })

            return;
          }
          
          Swal.fire({
            icon:'error',
            title:'Algo ah ocurrido...',
            text:ejecutarEliminacion.mensaje
          })

        } else if (result.isDenied) {
          Swal.fire('Se cancelo la eliminación', '', 'info')
        }
      })
}