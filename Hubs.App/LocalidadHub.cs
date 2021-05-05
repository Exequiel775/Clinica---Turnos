namespace Sistema.Sanatorio.Hubs.App
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.SignalR;
    public class LocalidadHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            Clients.All.SendAsync("conectados", Clients.All);
            return base.OnConnectedAsync();
        }
    }
}