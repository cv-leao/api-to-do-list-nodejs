## API To Do List utilizando Node.js

Primeiramente, para iniciar o projeto, é executado o seguinte comando no terminal dentro da pasta desejada:

    npm init

Agora, vamos instalar o [express](https://expressjs.com/pt-br/), que é um framework web para aplicações Node.js que flexibiliza o gerenciamento de requisições, criação de rotas, criação de middlewares... E para realizar a instalação, utilize o seguinte comando no terminal:

    npm install express

Instale as seguintes dependências de desenvolvimento:

    npm install typescript ts-node-dev @types/node tsconfig-paths -D

Para criar o arquivo tsconfig.json já habilitando alguns recursos, utilize o comando a seguir:

    npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
