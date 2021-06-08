import { ModelPaciente }  from './Paciente';

export class PacienteServicio
{
    BuscarPaciente(dni : number) : Promise<ModelPaciente>
    {
        return fetch(`/Turnos/BuscarPaciente?dni=${dni}`, {
            method:'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Ocurrio un error al obtener el paciente " + response.statusText);
            }

            return response.json() as Promise<{paciente : ModelPaciente}>;
        })
        .then(json => { return json.paciente } );
    } 
}