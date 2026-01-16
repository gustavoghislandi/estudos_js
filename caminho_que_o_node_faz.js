// ======================================================
// Como o Node Resolve `require`
// ======================================================

// Quando você faz require('x'), o Node procura na seguinte ordem:
    // 1. Arquivo local ou relativo (./arquivo ou ../arquivo)
    // 2. node_modules na mesma pasta do arquivo que chamou o require
    // 3. Subindo pastas, procurando node_modules em cada nível até a raiz
    // 4. Se não achar → erro: "Cannot find module"

// ======================================================
// Exemplo de busca local
// ======================================================

// Estrutura de pastas:

    /*
        Projeto/
            │
            ├─ modulos.js       <-- require('./arquivo')
            ├─ node_modules/
            │   └─ express/
            └─ subpasta/
                └─ outro.js
    */

// Fluxo de require('./arquivo'):

    /*
        modulos.js
            |
            |-- procura './arquivo.js' na mesma pasta
            |       └─ encontrado → carrega
            |       └─ não → sobe uma pasta
            |
            |-- procura 'node_modules/arquivo'
            |       └─ encontrado → carrega
            |       └─ não → sobe uma pasta e repete
            |
            └─ raiz → erro se não achar
    */

// ======================================================
// Exemplo de módulo de terceiros
// ======================================================

    /*
    modulos.js
        |
        |-- require('express')
        |       └─ procura node_modules/express → encontrado → carrega
    */

// Código real de teste (executável):
// var express = require('express');

// ======================================================
// Exemplo de submódulo
// ======================================================

    /*
        node_modules/
        └─ express/
           ├─ index.js       <-- módulo principal
           └─ lib/
              └─ router.js   <-- submódulo
    */

// Exemplo de require de submódulo

    var router = require('express/lib/router')

// Melhor forma usando API pública:

    var express = require('express')
    var Router = express.Router

// ======================================================
// Observações importantes
// ======================================================

// - Node executa o módulo carregado junto com o arquivo principal
// - Retorna o que o módulo exporta (module.exports)  (para todo arquivo que importa tem um que exporta)
// - Submódulos podem mudar entre versões → usar API pública
// - Ordem importa: registre rotas/middlewares antes do app.listen

// ======================================================
// Exemplo prático de Express
// ======================================================

    var express = require('express');
    var app = express();

    // Rotas primeiro
    app.get('/', function (req, res) {
        res.send('Hello world!');
    });

    // Depois iniciar o servidor
    app.listen(8080, function () {
        console.log('Servidor rodando na porta 8080');
    });
