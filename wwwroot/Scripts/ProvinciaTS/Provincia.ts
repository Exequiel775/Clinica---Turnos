import { Provincia } from './IProvincia';
import { IProvinciaServicio} from './IProvincia';

class ProvinciaServicio implements IProvinciaServicio
{
    Get(): Promise<Provincia[]> {
        return fetch('/Provincia/JsonProvincias', {
            method:'GET'
        })
        .then(response => {
            if(!response.ok){
                throw new Error(response.statusText);
                
            }
            return response.json() as Promise<{ provincias : Provincia[] }>
        })
        .then(json => {
            return json.provincias;
        })
    }
    
}

export { ProvinciaServicio };