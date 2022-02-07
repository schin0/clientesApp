# Cadastro de Clientes
---
A aplicação SPA tem como objetivo cadastrar clientes, assim como outras funções de um CRUD. A seguir temos as tecnologias utilizadas:

| Frontend | Backend | Banco de Dados | Documentação API |
| ------ | ------ | ------ | ------ |
| Angular 13 | C# | Firebase | Swagger
| HTML | .NET 6.0 |  | |
| CSS/SCSS |  |  | |
| Angular Material | | |

Escolhi essas linguagens por ter uma base de conhecimento consolidada, juntamente com a experiência nas mesmas.

---

### Backend 
O Backend foi construído com .NET 6.0, utilizando a IDE do Visual Studio 2022. 
O separei nas seguintes camadas: 
- Model - Classe que possui as propriedades da entidade Cliente.
- Dal - Interface dentro da pasta Repositories (ICliente) e a classe que herda a interface criada. Nessa classe acessamos o banco de dados e criamos os métodos do CRUD: 
--  Buscar todos os clientes (GetCliente); 
-- Buscar cliente pelo Id (GetCliente(id)); 
-- Adicionar cliente (AddCliente(cliente)); 
-- Editar cliente (EditarCliente(cliente)); 
-- Excluir cliente (ExcluirCliente(id)). 
- Controllers - Define a interação do usuário com a aplicação, também atribui as respostas para determinadas rotas.

---

### Frontend

Em construção ⚠️

---

##### _Desenvolvedor: Gabriel Schincariol_
