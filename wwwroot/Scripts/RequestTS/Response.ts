export class Response<T = null>
{
    estado : boolean;
    mensaje : string;
    objeto: T;
    listaObjetos : T[];
}