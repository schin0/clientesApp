using Clientes.WebAPI.Dal.Repositories;
using Google.Cloud.Firestore;
using Newtonsoft.Json;

namespace Clientes.WebAPI.Dal
{
    public class Cliente : ICliente
    {
        string projectId;
        FirestoreDb fireStoreDb;
        public Cliente()
        {
            string arquivoApiKey = @"clienteswebapi-firebase-adminsdk-sxlee-553c42c5bf.json";
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", arquivoApiKey);
            projectId = "clienteswebapi";
            fireStoreDb = FirestoreDb.Create(projectId);
        }

        public string AddCliente(Model.Cliente cliente)
        {
            try
            {
                CollectionReference colRef = fireStoreDb.Collection("clientes");
                var id = colRef.AddAsync(cliente).Result.Id;
                var shardRef = colRef.Document(id.ToString());
                shardRef.UpdateAsync("Id", id);
                return id;
            }
            catch
            {
                return "Error";
            }
        }

        public async void DeleteCliente(string id)
        {
            try
            {
                DocumentReference clienteRef = fireStoreDb.Collection("clientes").Document(id);
                await clienteRef.DeleteAsync();
            }
            catch
            {
                throw;
            }
        }

        public async void EditarCliente(Model.Cliente cliente)
        {
            try
            {
                DocumentReference clienteRef = fireStoreDb.Collection("clientes").Document(cliente.Id);
                await clienteRef.SetAsync(cliente, SetOptions.Overwrite);
            }
            catch
            {
                throw;
            }
        }

        public async Task<Model.Cliente> GetClienteId(string id)
        {
            try
            {
                DocumentReference docRef = fireStoreDb.Collection("clientes").Document(id);
                DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();
                if (snapshot.Exists)
                {
                    Model.Cliente cliente = snapshot.ConvertTo<Model.Cliente>();
                    cliente.Id = snapshot.Id;
                    return cliente;
                }
                else
                {
                    return new Model.Cliente();
                }
            }
            catch
            {
                throw;
            }
        }

        public async Task<List<Model.Cliente>> GetClientes()
        {
            try
            {
                Query clienteQuery = fireStoreDb.Collection("clientes");
                QuerySnapshot inscricaoQuerySnaphot = await clienteQuery.GetSnapshotAsync();
                List<Model.Cliente> listaClientes = new List<Model.Cliente>();
                foreach (DocumentSnapshot documentSnapshot in inscricaoQuerySnaphot.Documents)
                {
                    if (documentSnapshot.Exists)
                    {
                        Dictionary<string, object> city = documentSnapshot.ToDictionary();
                        string json = JsonConvert.SerializeObject(city);
                        Model.Cliente novoCliente = JsonConvert.DeserializeObject<Model.Cliente>(json);
                        novoCliente.Id = documentSnapshot.Id;
                        listaClientes.Add(novoCliente);
                    }
                }
                List<Model.Cliente> listaClienteOrdenada = listaClientes.OrderBy(x => x.Nome).ToList();
                return listaClienteOrdenada;
            }
            catch (Exception ex)
            {
                var erro = ex.Message;
                throw;
            }
        }
    }
}
