class Localidad
{
    public id : number;
    public provinciaId : number;
    public descripcion : string;
    public provincia : string;
}

class LocalidadPaginada
{
    public localidades : Localidad[];
    public paginas : number;
}

export {Localidad, LocalidadPaginada};