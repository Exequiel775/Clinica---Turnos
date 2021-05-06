import { Localidad } from './ClaseLocalidad';

interface ILocalidadServicio
{
    Add(localidad: Localidad) : Promise<boolean>;
    Get() : Promise<Localidad[]>;
    GetById(id : number) : Promise<Localidad>;
    Update(localidadModificar: Localidad) : Promise<boolean>;
}

export { ILocalidadServicio };