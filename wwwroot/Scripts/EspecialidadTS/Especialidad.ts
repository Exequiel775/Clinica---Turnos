class Especialidad
{
    public id : number;
    public descripcion : string;
}

class EspecialidadPaginada
{
    public especialidades : Especialidad[];
    public paginas : number;
    public totalRegistros : number;
    public mostrando : number;
}

export {Especialidad, EspecialidadPaginada};