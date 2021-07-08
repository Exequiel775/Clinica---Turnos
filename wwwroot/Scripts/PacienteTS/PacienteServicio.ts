import { ModelPaciente, Paciente }  from './Paciente';

export class PacienteServicio
{
    BuscarPaciente(dni : number) : Promise<Paciente>
    {
        return fetch(`/Paciente/BuscarPaciente?dniPaciente=${dni}`, {
            method:'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Ocurrio un error al obtener el paciente " + response.statusText);
            }

            return response.json() as Promise<Paciente>;
        })
        .then(json => { return json } );
    } 
}