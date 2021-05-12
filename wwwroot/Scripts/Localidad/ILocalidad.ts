import { Localidad } from './ClaseLocalidad';
import { LocalidadPaginada } from './ClaseLocalidad';

interface ILocalidadServicio
{
    Add(formData: Localidad) : Promise<boolean>;
    Get(paginado: number) : Promise<LocalidadPaginada>;
    GetById(id : number) : Promise<Localidad>;
    Update(localidadModificar: Localidad) : Promise<boolean>;
    GetByProvincia(provincia : number) : Promise<Localidad[]>;
}

export { ILocalidadServicio };