# Sales API

## Descrição

Esta é uma API para gerenciamento de vendas. O objetivo deste projeto é colocar em prática o que aprendi em cursos relacionados a desenvolvimento de APIs, práticas de programação e boas práticas de desenvolvimento de software.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JWT para autenticação

## Funcionalidades

- Cadastro de usuários
- Autenticação de usuários
- CRUD de produtos
- CRUD de vendas

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/igorsouzaa98/sales-api.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd sales-api
   ```
3. Instale as dependências:
   ```bash
   yarn install
   ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:
   ```env
   PORT=3000
   MONGO_URI=sua_uri_do_mongodb
   JWT_SECRET=sua_chave_secreta_jwt
   ```

## Uso

1. Inicie o servidor:
   ```bash
   yarn dev
   ```
2. Acesse a API em `http://localhost:3000`.

## Endpoints

### Autenticação

- **POST /auth/signup**: Cadastro de novo usuário
- **POST /auth/login**: Autenticação de usuário

### Produtos

- **GET /products**: Listar todos os produtos
- **GET /products/:id**: Obter detalhes de um produto
- **POST /products**: Criar um novo produto
- **PUT /products/:id**: Atualizar um produto
- **DELETE /products/:id**: Deletar um produto

### Vendas

- **GET /sales**: Listar todas as vendas
- **GET /sales/:id**: Obter detalhes de uma venda
- **POST /sales**: Criar uma nova venda
- **PUT /sales/:id**: Atualizar uma venda
- **DELETE /sales/:id**: Deletar uma venda

## Contribuição

Sinta-se à vontade para fazer um fork deste repositório e enviar pull requests. Todas as contribuições são bem-vindas!

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
