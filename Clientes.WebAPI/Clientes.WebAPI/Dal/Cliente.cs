using Clientes.WebAPI.Dal.Repositories;
using Google.Cloud.Firestore;
using Newtonsoft.Json;

namespace Clientes.WebAPI.Dal
{
    public class Cliente : ICliente
    {
        // Configuração banco Firebase
        string projectId;
        FirestoreDb fireStoreDb;
        public Cliente()
        {
            string arquivoApiKey = @"clienteswebapi-firebase-adminsdk-sxlee-553c42c5bf.json";
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", arquivoApiKey);
            projectId = "clienteswebapi";
            fireStoreDb = FirestoreDb.Create(projectId);
        }

        // Método Get Clientes
        public async Task<List<Model.Cliente>> GetClientes()
        {
            try
            {
                Query clienteQuery = fireStoreDb.Collection("clientes");
                QuerySnapshot inscricaoQuerySnapshot = await clienteQuery.GetSnapshotAsync();
                List<Model.Cliente> listaCliente = new List<Model.Cliente>();

                foreach (DocumentSnapshot documentSnapshot in inscricaoQuerySnapshot.Documents)
                {
                    if (documentSnapshot.Exists)
                    {
                        Dictionary<string, object> city = documentSnapshot.ToDictionary();
                        String json = JsonConvert.SerializeObject(city);
                        Model.Cliente novoCliente = JsonConvert.DeserializeObject<Model.Cliente>(json);
                        novoCliente.Id = documentSnapshot.Id;
                        listaCliente.Add(novoCliente);
                    }
                }
                List<Model.Cliente> listaClienteOrdenada = listaCliente.OrderBy(x => x.Nome).ToList();
                return listaClienteOrdenada;
            } catch (Exception ex) {
                var erro = ex.Message;
                throw;
            }
        }

        public async Task<Model.Cliente> GetCliente(string id)
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

        public async void ExcluirCliente(string id)
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
    }
}
