import { BuscarTurnoServicio } from "./BuscarTurnoServicio";
import { Response } from "../../RequestTS/Response";
import { Turno } from "../Turno";

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
        <td>${turno.fechaEmision}</td>
        <td>${turno.pacienteId}</td>
        `
    })
}