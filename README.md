## API To Do List utilizando Node.js

Primeiramente, para iniciar o projeto, é executado o seguinte comando no terminal dentro da pasta desejada:

    npm init

Agora, vamos instalar o [express](https://expressjs.com/pt-br/){:target="_blank"}, que é um framework web para aplicações Node.js que flexibiliza o gerenciamento de requisições, criação de rotas, criação de middlewares... E para realizar a instalação, utilize o seguinte comando no terminal:

    npm install express

Instale as seguintes dependências de desenvolvimento:

    npm install typescript ts-node-dev @types/node tsconfig-paths -D

Para criar o arquivo tsconfig.json já habilitando alguns recursos, utilize o comando a seguir:

    npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true

O ORM utilizado neste projeto será o [TypeORM](https://typeorm.io/){:target="_blank"}, que para instalar, é necessário executar o comando:

    npm install typeorm reflect-metadata pg

Obs: No comando acima, está sendo instalado também a biblioteca do postgres a partir do "pg", pois é o banco de dados que será utilizado.

Instalando o [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS){:target="_blank"}:

    npm install cors express-async-errors

Obs: O express-async-errors, é para conseguir trabalhar com requisições assíncronas em casos de tratamentos de erros

Execute também o seguinte comando no terminal:

    npm install @types/express @types/cors
