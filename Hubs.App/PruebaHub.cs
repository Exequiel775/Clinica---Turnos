namespace Sistema.Sanatorio.Hubs.App
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.SignalR;
    public class PruebaHub : Hub
    {
        public async override Task OnConnectedAsync()
        {
            await Clients.All.SendAsync("info", Context.ConnectionId);
            //return base.OnConnectedAsync();
        }
    }
}