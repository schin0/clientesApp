using Clientes.WebAPI.Dal.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Clientes.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly ICliente _cliente;

        public ClienteController(ICliente cliente)
        {
            this._cliente = cliente;
        }
        [HttpGet]
        public Task<List<Model.Cliente>> Get()
        {
            return _cliente.GetClientes();
        }
        [HttpGet("{id}")]
        public Task<Model.Cliente> Get(string id)
        {
            return _cliente.GetCliente(id);
        }
        [HttpPost]
        public string Post([FromBody] Model.Cliente cliente) => _cliente.AddCliente(cliente);
        [HttpPut]
        public void Put([FromBody] Model.Cliente cliente)
        {
            _cliente.EditarCliente(cliente);
        }
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _cliente.ExcluirCliente(id);
        }
    }
}
