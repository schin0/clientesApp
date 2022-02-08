# Cadastro de Clientes

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

    --  Buscar todos os clientes (GetClientes); 
    -- Buscar cliente pelo Id (GetClienteId(id)); 
    -- Adicionar cliente (AddCliente(cliente)); 
    -- Editar cliente (EditarCliente(cliente)); 
    -- Excluir cliente (DeleteCliente(id)). 

- Controllers - Define a interação do usuário com a aplicação, também atribui as respostas para determinadas rotas.

---

### Frontend

Utilizei como principal ferramenta de construção do frontend a framework Angular (versão 13). Com ela, também fiz o uso de Typescript, HTML, CSS, SCSS e Angular Material.
Separei minha aplicação em diversos componentes, a parte de visualização em geral, em três principais categorias: 
- Template: aqui estão os componentes fixos da aplicação (Header e Nav), onde há necessidade de mostrá-los em todas as partes da mesma;
- Views: nessa parte ficam os componentes que ocuparam a tela toda do usuário, mas com conteúdo sem muita interação, ou seja, para componentes mais explicativos e conteudistas;
- Components: nessa última parte estão todos os componentes funcionais, tais como o CRUD (Cadastro, Editar, Excluir, Listar);
 
Há uma separção das funcionalidades globais, nos chamados serviços. Elas se encontram na pasta *shared*. Nela, possuímos as seguintes separações:

- Header: esse serviço é responsável por mudar o título da página com base na sua página atual.
- Interfaces: aqui estão todas as interfaces utilizadas no projeto (ICliente);
- Mensagem: serviço responsável por mostrar uma mensagem ao usuário informando a situação, seja ela de um erro ou de sucesso.
- Cliente: abriga todas as funcionalidades do CRUD e acesso à API.

---

### Bibliotecas utilizadas 

Usei algumas bibliotecas para agilizar estilizações e funcionamentos em geral. Suas documentações estão a seguir:
- [Angular Material]  (Estilização) 
- [ngx-mask] (Formatação de CPF) 
- [Moment js] (Formatação de Datas)

---

##### _Desenvolvedor: Gabriel Schincariol_

   [Angular Material]: <https://material.angular.io>
   [ngx-mask]: <https://www.npmjs.com/package/ngx-mask/>
   [Moment js]: <https://momentjs.com>
