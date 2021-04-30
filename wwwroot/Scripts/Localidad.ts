import { Provincia } from './Provincia'

class Localidad{
    id : number;
    provinciaId : number;
    descripcion : string;
    provincia: string;
}

class LocalidadServicio
{
   public GetLocalidades() : Promise<Localidad[]>
   {
       return fetch('/Localidad/Get', { method:'GET' })
       .then(response => {
           if (!response.ok){
               throw new Error(response.statusText);
           }

           return response.json() as Promise< { localidades : Localidad[] } >;
       })
       .then(json => {
           return json.localidades;
       })
   }
    
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

   public Add(data: FormData) : Promise<boolean>
   {

       let localidad = new Localidad();
       localidad.descripcion = data.get('Descripcion') as string;
       localidad.provinciaId = data.get('ProvinciaId') as unknown as number;

       console.log(localidad);

       return fetch('/Localidad/Add', {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify(localidad)
       })
       .then(response => {
           if (!response.ok) {
               throw new Error(response.statusText);
           }

           return response.json() as Promise<{ respuesta: boolean }>;
       })
       .then(json => {
           return json.respuesta;
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

    CargarLocalidades();
});

let formulario = document.getElementById('form-localidad');

formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    let data = new FormData(event.currentTarget as HTMLFormElement);

    new LocalidadServicio().Add(data)
    .then(response => {
        if (response){
            CargarLocalidades();
            (formulario as HTMLFormElement).reset();
        }else{
            alert("Error al agregar");
        }
    })
    .catch(err => console.log(err));
    
});

function CargarLocalidades() : void
{
    const table = document.getElementById('tabla-localidad') as HTMLTableElement;

    table.innerHTML = '';

    new LocalidadServicio().GetLocalidades()
    .then(data => {
        data.forEach((elemento) => {
            let row = table.insertRow();

            row.innerHTML = `
            <td>${elemento.id}</td>
            <td>${elemento.descripcion}</td>
            <td>${elemento.provincia}</td>
            `
        });
    })
}