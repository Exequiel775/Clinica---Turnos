namespace Servicios.Interface.Paciente
{
    public interface IPacienteServicio
    {
        long Add(PacienteDto paciente);
        bool VerificarExistencia(int dni);
        PacienteDto GetByDni(int dni);
    }
}