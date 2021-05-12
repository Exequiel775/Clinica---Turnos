import { Recepcionista } from './Recepcionista';

interface IRecepcionistaServicio
{
    Add(recepcionista: Recepcionista) : Promise<boolean>;
    Get() : Promise<Recepcionista[]>;
    GetById(idRecepcionista: number) : Promise<Recepcionista>;
    Update(recepcionista: Recepcionista) : Promise<boolean>;
}

export { IRecepcionistaServicio };