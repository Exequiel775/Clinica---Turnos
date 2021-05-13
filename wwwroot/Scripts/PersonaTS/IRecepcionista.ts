import { Recepcionista } from './Recepcionista';
import {RecepcionistasPaginados} from './Recepcionista';

interface IRecepcionistaServicio
{
    Add(recepcionista: Recepcionista) : Promise<boolean>;
    Get() : Promise<Recepcionista[]>;
    RecepcionistasPaginados(cadenaBuscar: string, pagina: number) : Promise<RecepcionistasPaginados>;
    GetById(idRecepcionista: number) : Promise<Recepcionista>;
    Update(recepcionista: Recepcionista) : Promise<boolean>;
}

export { IRecepcionistaServicio };