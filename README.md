## API To Do List utilizando Node.js

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
