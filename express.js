// Clássico “Hello World” do Node (usando Express)
// Passo a passo, bem direto.

// 1️⃣ Instalar o Node.js
    // Se você ainda não tem:
    // Baixe em: https://nodejs.org
    // Instale a versão LTS
    // Depois, no terminal, confirme:

        // node -v
        // npm -v

    // Se aparecer versão, tá ok.

// 2️⃣ Criar um projeto

    // No terminal:

        // mkdir meu-servidor
        // cd meu-servidor
        // npm init -y

        // Isso cria o package.json

// 3️⃣ Instalar o Express
    // Ainda no terminal:

    // npm install express

    // Isso cria:
        // node_modules/
        // package-lock.json

// 4️⃣ Criar o arquivo do servidor
    // Crie um arquivo chamado index.js(pode ser outro nome) e coloque:

    var express = require('express');
    var app = express();

    app.listen(8080, function () {
    console.log('Hello world!');
    });

    // Hoje em dia (ES6) pode usar:

    const express = require('express');

// 5️⃣ Rodar o servidor 🚀

    // node index.js

    // Se tudo deu certo, vai aparecer no console:
        // Hello world!

// 6️⃣ Teste no navegador

    // Abra o navegador e vá para:

        // http://localhost:8080

        // Vai dar “Cannot GET /” — isso é normal
        // O servidor está rodando, só não tem rota ainda.

// 7️⃣ (Opcional) Criar uma rota pra ver algo

    var express = require('express');
    var app = express();

    app.get('/', function (req, res) {
    res.send('Hello world!');
    });

    app.listen(8080, function () {
    console.log('Servidor rodando na porta 8080');
    });

    //ATENÇÃO:
    // no Express, você sempre deve registrar as rotas antes de chamar app.listen,
    // porque listen inicia o servidor e só passa a aceitar requisições depois que todas as rotas e middlewares já foram registradas;
    // se você colocar app.get depois do listen, a rota pode não funcionar corretamente.

// Resumo rápido
    // 1. Instala Node
    // 2. npm init -y
    // 3. npm install express
    // 4. cria index.js
    // 5. node index.js
    // 6. abre localhost:8080

// --------------------------------------------

// Importante ⚠️
    // Você precisa rodar o Node na pasta do projeto, onde estão:
        // node_modules
        // package.json
    // Se tentar rodar o arquivo fora dessa pasta, o require('express') vai falhar.

// Detalhe interessante
    // Quando você faz:

        require('./arquivo')

    // O Node:
        // 1. Procura um módulo chamado arquivo
        // 2. Vai subindo pastas até achar node_modules/express
        // 3. Carrega o módulo

// Resumo
// Não é obrigatório index.js
// Pode ser modulos.js, teste.js, server.js
// Roda com node nome-do-arquivo.js
// Execute dentro da pasta que tem node_modules

// --------------------------------------------

// Onde o Express fica quando você instala?
    // Quando você roda:

        // npm install express

    // O Express é instalado aqui:
    /*
        seu-projeto/
        ├─ node_modules/
        │   └─ express/
        │       ├─ lib/
        │       ├─ package.json
        │       └─ ...
        ├─ package.json
        └─ package-lock.json
    */

// O que é node_modules?
    // Pasta onde o npm guarda todas as dependências
    // Inclui: Express, dependências do Express, dependências das dependências

// Como require('express') acha isso?
    // Quando você escreve:

        var express = require('express');

    // O Node procura express em ./node_modules/express
    // Se não achar, sobe um nível
    // Continua até achar ou chegar na raiz do sistema

    // Express não fica global
    // A menos que você instale:

       // npm install -g express

    // Hoje isso praticamente não se usa

// Como confirmar onde ele está?

    // ls node_modules/express

    // ou no Windows

    // dir node_modules\express

// Resumo rápido
    // npm install express → instala localmente
    // Fica em node_modules/express
    // require('express') busca nessa pasta
    // node_modules normalmente não vai pro Git

// --------------------------------------------

// Estratégia teste rápido sem criar projeto completo
    // Suponha que você tenha modulos.js:

        var express = require('express');
        var app = express();

        app.get('/', function(req, res) {
            res.send('Testando Express rapidinho!');
        });

        app.listen(8080, function() {
            console.log('Servidor rodando');
        });
// Rodar:

        // node modulos.js

// Depois de testar, para limpar:

    // npm uninstall express
    // rm -rf node_modules package-lock.json

// No Windows:

    // rmdir /s /q node_modules
    // del package-lock.json

// --------------------------------------------

// Estratégia teste ultra rápido (sem package.json)

// Rode:

    // npm install express --no-save

    // Cria node_modules só nessa pasta, não cria package.json nem package-lock.json
// Rodar:

    // node modulos.js

// Depois limpar:

    // rm -rf node_modules

// --------------------------------------------

// Estratégia “Express zero bagunça” usando npx
// Rodar sem instalar nada permanentemente:
    // npx express modulos.js
    // ou para rodar seu arquivo normalmente:
    
    // npx node modulos.js

// Teste no navegador http://localhost:8080
// Fecha o terminal → nada sobra
