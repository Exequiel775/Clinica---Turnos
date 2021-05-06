class Provincia
{
    public id : number;
    public descripcion : string;
}

interface IProvinciaServicio 
{
    Get() : Promise<Provincia[]>;
}

export { Provincia, IProvinciaServicio};