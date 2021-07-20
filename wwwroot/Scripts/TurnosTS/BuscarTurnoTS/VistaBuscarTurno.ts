import { BuscarTurnoServicio } from "./BuscarTurnoServicio";
import { Response } from "../../RequestTS/Response";
import { Turno } from "../Turno";
import { EstadoTurno } from "../Turno";
import Swal from 'sweetalert2';

const _buscarTurnoServicio : BuscarTurnoServicio = new BuscarTurnoServicio();

const btnBuscar = document.querySelector('.btnBuscar') as HTMLButtonElement;
btnBuscar.addEventListener('click', async() => {
    let dniBuscar = parseInt((document.querySelector('.dniBuscar') as HTMLInputElement).value)

    let turnosEncontrados = await _buscarTurnoServicio.BuscarTurno(dniBuscar, null);

    CargarTablaTurnos(turnosEncontrados);
});

function CargarTablaTurnos(response : Response<Turno>)
{
    const tablaTurnos = document.querySelector('.tabla-turnos') as HTMLTableElement;
    console.log(response.listaObjetos)

    if (!response.estado) {
        tablaTurnos.innerHTML = `<strong class="text-center">${response.mensaje}</strong>`;
        return;
    }

    tablaTurnos.innerHTML = '';

    response.listaObjetos.forEach((turno) => {
        let row = tablaTurnos.insertRow();

        row.innerHTML = `
        <td>${turno.numero}</td>
        <td>${turno.estadoTurno}</td>
        <td>${turno.fechaEmisionStr}</td>
        <td>${turno.pacienteId}</td>
        <td></td>
        `

        let btnCancelarTurno = document.createElement('button');
        btnCancelarTurno.classList.add('btn');
        btnCancelarTurno.title = 'Cancelar Turno';
        btnCancelarTurno.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="#ff3f34" class="bi bi-x-octagon-fill"
        viewBox="0 0 16 16">
        <path
        d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
        </svg>
        `
        btnCancelarTurno.onclick = () => {
            CancelarTurno(turno.numero, turno.id);
        }

        row.addEventListener('click', () => {

            CargarDatosTurnoSeleccionado(turno);

            if (tablaTurnos.rows.length > 1) {
                for (let i = 0; i < tablaTurnos.rows.length; i++) {
                    tablaTurnos.rows[i].style.backgroundColor = '#fff';
                    tablaTurnos.rows[i].style.color = '#000';
                    /*
                    if (tablaTurnos.rows[i].classList.contains('fila-seleccionada')) {
                        tablaTurnos.rows[i].classList.remove('fila-seleccionada');
                        tablaTurnos.rows[i].classList.add('fila-no-seleccionada');
                    }*/
                }
            }

            row.style.backgroundColor = '#222f3e';
            row.style.color = '#fff';
            //row.classList.add('fila-seleccionada');
        });

        row.children[4].appendChild(btnCancelarTurno);
    })
}

function CargarDatosTurnoSeleccionado(turno : Turno)
{
    console.log(turno);

    let numero = document.querySelector('.numero') as HTMLInputElement;
    let paciente = document.querySelector('.paciente') as HTMLInputElement;
    let especialidad = document.querySelector('.Especialidad') as HTMLSelectElement;
    let estado = document.querySelector('.Estado') as HTMLElement;

    numero.value = turno.numero.toString();
    paciente.value = turno.paciente.apyNom;
    especialidad.add(new Option(turno.especialidadStr, "-1"));

    if (estado.classList.contains('text-primary') || estado.classList.contains('text-danger')
        || estado.classList.contains('text-success')) {
        estado.classList.remove('text-primary', 'text-danger', 'text-success');
    }

    switch(turno.estadoTurno)
    {
        case EstadoTurno.Atendido:
        {
            estado.classList.add('text-success');
            estado.textContent = 'Atendido';
            break;
        }
        case EstadoTurno.Ausente:
        {
            estado.classList.add('text-danger');
            estado.textContent = 'Paciente Ausente';
        }
        case EstadoTurno.En_Espera:
        {
            estado.classList.add('text-primary');
            estado.textContent = 'Turno en espera';
            break;
        }
        case EstadoTurno.Cancelado:
        {
            estado.classList.add('text-warning');
            estado.textContent = 'Cancelado';
            break;
        }       
    }
}

function CancelarTurno(numero : number, id : number)
{
    Swal.fire({
        title:`¿Desea cancelar el turno número ${numero}?`,
        showCancelButton:true,
        confirmButtonText:'Si',
        cancelButtonText:'No'
    }).then(result => {
        if (result.isConfirmed) {
            Swal.fire('Cancelado!', `Se procedera a cancelar el id: ${id}`, 'success')
        }
    })
}