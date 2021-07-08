import { Paciente } from '../PacienteTS/Paciente';

export class Turno
{
    id : number;
    pacienteId : number;
    especialidadId : number;
    medicoId : number;
    recepcionistaId : number;
    numero : number;
    fechaEmision : Date;
    fechaAtencion : Date;
    estadoTurno : EstadoTurno;
    paciente : Paciente = new Paciente();
}

enum EstadoTurno
{
    Atendido = 1,
    Ausente = 2,
    En_Espera = 3
}