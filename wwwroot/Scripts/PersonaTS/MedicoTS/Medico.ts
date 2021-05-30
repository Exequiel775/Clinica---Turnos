import {Persona} from '../Persona';

export class Medico extends Persona
{
    especialidadId : number;
    fechaRegistro : Date;
    matricula : string;
    imagen : string;
    especialidadStr : string;
    fileImage : File;
}