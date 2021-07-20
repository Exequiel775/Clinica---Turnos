import { LoginServicio } from "./LoginServicio";
import Swal from "sweetalert2";
import { Usuario } from "../Usuario";

const _loginServicio : LoginServicio = new LoginServicio();

const formulario = document.getElementById('form') as HTMLFormElement;
formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

    let formData = new FormData(formulario);

    await IniciarSesion(formData.get('User').toString(), formData.get('Password').toString());
})

async function IniciarSesion(usuario: string, pass: string) {

    if (usuario == "" || pass == "") {
        Swal.fire({
            title:'Error',
            text:'Por favor ingrese su usuario y contraseña.',
            icon:'warning'
        })

        return;
    }

    let user = new Usuario();
    user.nombre = usuario;
    user.password = pass;

    let verificar = await _loginServicio.IniciarSesion(user);

    if (verificar.estado) {
        window.location.href = '/Home/Index';
        return;
    }

    Swal.fire({
        title:'Error',
        text:verificar.mensaje,
        icon:'error'
    });
}