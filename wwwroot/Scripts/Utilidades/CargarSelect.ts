export class Cargas
{
    CargarSelect(nombre: string, texto: string, valor: string)
    {
        let selectCargar = (document.getElementsByClassName(nombre)[0] as HTMLSelectElement);

        selectCargar.add(new Option(texto, valor));
    }
}