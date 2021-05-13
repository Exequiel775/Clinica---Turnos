import {Persona} from '../PersonaTS/Persona'

enum TurnoRecepcionista
{
    Maniana = 1,
    Tarde = 2,
    Noche = 3
}

class Recepcionista extends Persona
{
    public turnoRecepcionista : TurnoRecepcionista;
}

class RecepcionistasPaginados
{
    recepcionistas: Recepcionista[];
    paginas : number;
}

export {Recepcionista, TurnoRecepcionista, RecepcionistasPaginados};