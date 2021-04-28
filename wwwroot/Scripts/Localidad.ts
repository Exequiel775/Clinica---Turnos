import { Provincia } from './Provincia'

interface Localidad{
    id : number;
    provinciaId : number;
    descripcion : number;
    localidad: number;
}

class LocalidadServicio
{
    
   public GetProvincias() : Promise<Provincia[]>
   {
       return fetch('/Provincia/JsonProvincias',{
           method:'GET'
       })
       .then(response => {
           if (!response.ok){
               throw new Error(response.statusText);
           }

           return response.json() as Promise<{ provincias: Provincia[] }>;
       })
       .then(json => {
           return json.provincias;
       })
   }
}

// =================== EVENTOS EN VISTA ==================== //
document.addEventListener('DOMContentLoaded', () => {
    const cmbProvincia = document.getElementById('cmbProvincia') as HTMLSelectElement;

    new LocalidadServicio().GetProvincias()
    .then(json => {
        json.forEach((elemento) => {
            let option = document.createElement('option');
            
            option.text = elemento.descripcion;
            option.value = elemento.id.toString();

            cmbProvincia.add(option);
        })
    })
});