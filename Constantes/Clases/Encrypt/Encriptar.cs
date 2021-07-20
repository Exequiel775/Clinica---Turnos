namespace Constantes.Clases.Encrypt
{
    using System.Security.Cryptography;
    using System.Text;

    public static class Encriptar
    {
        public static string EncriptarPassword(string password)
        {
            SHA256 sha256 = SHA256.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = sha256.ComputeHash(encoding.GetBytes(password));

            for(int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:X2}", stream[i]);

            return sb.ToString();
        }
    }
}