import {Especialidad} from './Especialidad';
import {EspecialidadPaginada} from './Especialidad';

interface IEspecialidadServicio
{
    Add(especialidad: Especialidad) : Promise<boolean>;
    Update(especialidad : Especialidad) : Promise<boolean>;
    Get() : Promise<Especialidad[]>; 
    GetEspecialidadesPaginadas(pagina: number) : Promise<EspecialidadPaginada>; 
}

export {IEspecialidadServicio};