class Persona
{
    public id : number;
    public localidadId : number;
    public nombre : string;
    public apellido : string;
    public dni : number;
    public fechaNacimiento : Date;
    public email : string = null;
    public celular : number;
    public telefono : number = null;
    // SOLO LECTURA
    public apyNom : string;
    public localidad : string;
}

export {Persona};