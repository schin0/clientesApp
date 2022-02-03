using System.ComponentModel.DataAnnotations;

namespace Clientes.WebAPI.Model
{
    public class Cliente
    {
        public int Id { get; set; }
        [MaxLength(30)]
        public string Nome { get; set; }
        [MaxLength(100)]
        public string Sobrenome { get; set; }
        [MaxLength(11)]
        public string Cpf { get; set; }
        public DateTime DataNascimento { get; set; }
        public int Idade { get; set; }
        public int Profissao { get; set; }
    }
}
