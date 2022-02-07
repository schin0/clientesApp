namespace Clientes.WebAPI.Dal.Repositories
{
    public interface ICliente
    {
        Task<List<Model.Cliente>> GetClientes();
        string AddCliente(Model.Cliente cliente);
        void EditarCliente(Model.Cliente cliente);
        Task<Model.Cliente> GetClienteId(string id);
        void DeleteCliente(string id);
    }
}
