```markdown
# Descrição do Projeto

Este projeto é uma API criada com Node.js, Express e MongoDB Atlas, e tem como objetivo gerenciar um CRUD de produtos, onde é possível criar, ler, atualizar e deletar produtos. Além disso, o projeto está integrado com o Cloudinary para o upload e armazenamento de imagens dos produtos.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB Atlas** (para armazenamento dos dados)
- **Multer** (para gerenciamento do upload de arquivos)
- **Cloudinary** (para upload e armazenamento de imagens)

## Estrutura do Projeto

O projeto possui a seguinte estrutura de pastas e arquivos:

```
models/
  └── Produto.js          # Contém o modelo do produto, com os campos name, description, quantity, imageUrl.
routes/
  └── produtos.js         # Define as rotas para CRUD de produtos, incluindo a funcionalidade de upload de imagens.
app.js                     # Configura o servidor Express, adiciona os middlewares e conecta-se ao MongoDB Atlas.
server.js                  # Responsável por inicializar o servidor.
cloudinaryConfig.js        # Configura o Cloudinary para upload de imagens.
.env                        # Contém as variáveis de ambiente necessárias, como a URI do MongoDB e as credenciais do Cloudinary.
```

## Configuração Inicial

1. Clone o repositório ou baixe o código do projeto.
2. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
    ```
    MONGO_URI=<sua_mongo_uri_aqui>
    CLOUDINARY_CLOUD_NAME=<seu_cloud_name_aqui>
    CLOUDINARY_API_KEY=<sua_api_key_aqui>
    CLOUDINARY_API_SECRET=<seu_api_secret_aqui>
    PORT=3000
    ```
3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## Rodando o Projeto

1. No terminal, navegue até a pasta do projeto.
2. Execute o seguinte comando para iniciar o servidor:
    ```bash
    npm start
    ```
   Ou, caso utilize o nodemon para recarregar automaticamente:
    ```bash
    npm run dev
    ```

O servidor ficará rodando em [http://localhost:3000](http://localhost:3000).

## Rotas da API

- **GET /produtos**: Retorna todos os produtos cadastrados no banco de dados.
- **POST /produtos**: Cria um novo produto. A requisição deve conter os campos `name`, `description`, `quantity` e opcionalmente `image` (imagem a ser carregada para o Cloudinary).
- **PUT /produtos/:id**: Atualiza um produto existente. Aceita os mesmos campos de POST e também o campo `image` para um novo upload.
- **DELETE /produtos/:id**: Deleta um produto pelo seu ID.

## Como Testar

Use uma ferramenta como **Insomnia** ou **Postman** para testar as rotas da API. Para criar um novo produto com imagem, envie uma requisição POST para `http://localhost:3000/produtos` com os campos `name`, `description`, `quantity` e um arquivo de imagem (no campo `image`).
```
