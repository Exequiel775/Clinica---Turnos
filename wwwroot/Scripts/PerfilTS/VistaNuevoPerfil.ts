import Swal from "sweetalert2";
import { Perfil, PerfilServicio } from "./Perfil";

const _perfilServicio : PerfilServicio = new PerfilServicio();

const formulario = document.getElementById('form') as HTMLFormElement;
formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

    let formData = new FormData(formulario);

    let perfil = new Perfil();
    perfil.descripcion = formData.get('Descripcion').toString();

    await AgregarPerfil(perfil)
});

async function AgregarPerfil(perfil : Perfil)
{
    let response = await _perfilServicio.Add(perfil);

    if (!response.estado) {
        Swal.fire({
            title:'Error',
            text:response.mensaje,
            icon:'error'
        })

        return;
    }

    Swal.fire({
        title:'Perfil Creado',
        text:response.mensaje,
        icon:'success'
    })

    let input = document.getElementsByName('Descripcion')[0] as HTMLInputElement
    input.value = '';
}