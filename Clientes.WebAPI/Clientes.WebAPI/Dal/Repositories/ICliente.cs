namespace Clientes.WebAPI.Dal.Repositories
{
    public interface ICliente
    {
        Task<List<Model.Cliente>> GetClientes();
        string AddCliente(Model.Cliente cliente);
        void EditarCliente(Model.Cliente cliente);
        Task<Model.Cliente> GetCliente(string id);
        void ExcluirCliente(string id);
    }
}
