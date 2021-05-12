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

export {Recepcionista, TurnoRecepcionista};