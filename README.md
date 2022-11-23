## API To Do List utilizando Node.js

Este repositório é de uma to do list simples, não existe usuário(conta), porém é algo que eu talvez implemente daqui a algum tempo.

##

## Histórias de Usuário:

    01 - Como usuário, eu quero criar uma task                     - História Feita;
    02 - Como usuário, eu quero listar todas as tasks              - História Feita;
    03 - Como usuário, eu quero editar uma task                    - História Feita;
    04 - Como usuário, eu quero deletar uma task                   - História A Fazer;
    05 - Como usuário, eu quero listar as tasks com base no status - História A Fazer;

##

## Clonando o repositório:

[1](https://raw.githubusercontent.com/cv-leao/api-to-do-list-nodejs/main/assets/1.png)

## Utilização da API:

<h3>Criar Task:</h3>

    Método HTTP: POST

    Rota: /tasks/create

    Entrada(json):
    {
        "description": "Criar uma API",
        "status": "Fazendo"
    }

    Saída(json):
    {
        "id": "6b04e894-fc8f-43c5-8a51-b71e176467f2",
        "description": "Colocar no README.md",
        "status": "Fazendo"
    }

Informação adicional: Existem somente 3 tipos de status, "A Fazer", "Fazendo" e "Feito".
Obs: No momento da criação de uma task, o status eceita somente duas entradas, "A fazer" e "Fazendo".

<h3>Listar todas as Tasks:</h3>

    Método HTTP: GET

    Rota: /tasks/all

    Sem entrada.

    Saída(json):
    [
        {
            ...
        },
        {
            ...
        },
        {
            ...
        }
    ]

<h3>Atualizar Status da Task:</h3>

    Método HTTP: PUT

    Rota: /tasks/update/:id

    Entrada(json):
    {
        "status": "Feito"
    }

    Saída(json):
    {
        "id": "6b04e894-fc8f-43c5-8a51-b71e176467f2",
        "description": "Colocar no README.md",
        "status": "Feito"
    }

## Alguns passos que devem ser seguidos para replicar esta API:

Primeiramente, para iniciar o projeto, é executado o seguinte comando no terminal dentro da pasta desejada:

    npm init

Agora, vamos instalar o [express](https://expressjs.com/pt-br/), que é um framework web para aplicações Node.js que flexibiliza o gerenciamento de requisições, criação de rotas, criação de middlewares... E para realizar a instalação, utilize o seguinte comando no terminal:

    npm install express

Instale as seguintes dependências de desenvolvimento:

    npm install typescript ts-node-dev @types/node tsconfig-paths -D

Para criar o arquivo tsconfig.json já habilitando alguns recursos, utilize o comando a seguir:

    npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true

O ORM utilizado neste projeto será o [Prisma](https://www.prisma.io/), que para instalar, é necessário executar o comando:

    npm install prisma -D

Para que seja possível criar toda a estrutura do banco de dados, será necessário inicializar o prisma:

    npx prisma init

Para criar uma migration, use o seguinte comando:

    npx prisma migrate dev

Feito isso, será geranda uma pasta na raiz do projeto com o nome "prisma", você irá encontrar um arquivo com o nome "schema.prisma", a criação e edição das tabelas do banco de dados serão feitas nesse arquivo.

Instalando o [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS):

    npm install cors express-async-errors

Obs: O express-async-errors, é para conseguir trabalhar com requisições assíncronas em casos de tratamentos de erros

Execute também o seguinte comando no terminal:

    npm install @types/express @types/cors
