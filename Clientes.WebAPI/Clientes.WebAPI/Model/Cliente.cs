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
        public int IdCliente { get; set; }

        [MaxLength(30)]
        [FirestoreProperty]
        public string Nome { get; set; }

        [MaxLength(100)]
        [FirestoreProperty]
        public string Sobrenome { get; set; }

        [FirestoreProperty]
        [MaxLength(11)]
        public string Cpf { get; set; }

        [FirestoreProperty]
        public DateTime DataNascimento { get; set; }

        [FirestoreProperty]
        public int Idade { get; set; }

        [FirestoreProperty]
        public int Profissao { get; set; }
    }
}
