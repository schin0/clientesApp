using Google.Cloud.Firestore;
using System.ComponentModel.DataAnnotations;

namespace Clientes.WebAPI.Model
{
    [FirestoreData]
    public class Cliente
    {
        [FirestoreProperty]
        public string Id { get; set; }
        
        [FirestoreProperty]
        public string Nome { get; set; }
        
        [FirestoreProperty]
        public string Sobrenome { get; set; }
        
        [FirestoreProperty]
        public string Cpf { get; set; }

        [FirestoreProperty]
        public string DataNascimento { get; set; }
        
        [FirestoreProperty]
        public int Idade { get; set; }
        
        [FirestoreProperty]
        public string Profissao { get; set; }
    }
}
