import {Usuario} from '../UsuarioTS/Usuario';

class Persona
{
    public item : boolean;
    public id : number;
    public localidadId : number;
    public provinciaId : number;
    public nombre : string;
    public apellido : string;
    public dni : number;
    public fechaNacimiento : Date;
    public email : string = null;
    public celular : number;
    public telefono : number = null;
    public usuario : Usuario = null;
    // SOLO LECTURA
    public apyNom : string;
    public localidad : string;
    public fechaStr : string;
}

export {Persona};