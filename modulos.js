// Uma das estratégias para lidar com sistemas complexos, com muitos arquivos e linhas de código é a modularização.

// Em termos simples, modularizar significa dividir o código em partes que representam uma abstração funcional e reaproveitável da aplicação.

// Modularizar permiter organizar o código e reutilizá-lo. Também ajuda na redução de complexidade e na separação de responsabilidades. A manutenção de código é também facilitada.

// Serve para qualquer projeto ou linguagem de programação.

// Até a versão 5.1 do ECMAScript, ele não tinha suporte nativo a módulos. Utiliza-se bibliotecas externas como CommonJS e AMD (Asynchronous Module Definition).

// Passagem rápida por CommonJS e AMD:

// CommonJS

    // O CommonJS estrutura uma API síncrona para trabalhar com módulos no JavaScript.

    // É uma abordagem que funciona muito bem, principalmente do lado do servidor (estrutura para a qual foi projetada), como é o caso da sua implementação mais famosa, o Node.js.
    // CommonJS nasceu para ambientes onde acesso a disco não é um problema (Node.js).

    // O Node.js não depende da CommonJS, mas usou por muitos anos. Foi o padrão dominante até a chegada do ES Modules (import/export).

    // Sem muitos detalhes, no caso do Node.js:

        // Quando precisa-se usar um módulo (próprio ou não), usa-se a função reservada 'require'.
        // 'require' aceita um parâmetro que é o nome do módulo que se quer carregar.

        // Um exemplo clássico para importação de módulos é o uso da biblioteca Express.js (https://expressjs.com) para subir um servidor.

        // Para importar o módulo 'express' para subir a aplicação, precisa-se de um código semelhante a este:

            var express = require('express');
            var app = express();
            app.listen(8080, function() {
                console.log('Hello world!')
            });

            // Hoje em dia é possível usar:

            const express = require('express');

            // Se quiser testar o Express usando o Node.js, veja o arquivo express.js

        // Ao usarmos o 'require', o Node.js se encarrega de importar o módulo para dentro do arquivo.
        // Feito isso, já é possível utilizar os métodos disponíveis no módulo, como é feito na variável app, em que são usadas a função 'express' e 'listen' para subir o servidor.

        // Quando essa abordagem é levada para o lado do cliente, o funcionamento é um pouco diferente. É necessário usar "ferramentas de build pré-produção". Browsers não entendem 'require' nativamente.
        
        // Ferramentas de build pré-produção de front-end (fazem bundle, que é aquele código JavaScript que costuma ser minificado em uma linha, que o navegador entende):
    
            // Browserify (https://browserify.org)

            // Webpack (https://webpack.github.io)

        // Elas fazem o trabalho de buscar as dependências entre os módulos e juntá-los em um único arquivo (ou em poucos arquivos) que fica(m) disponível(eis) para o front-end.

        // Browserify e Webpack simulam o CommonJS no browser

        // Eles:

            // Resolvem dependências

            // Transformam require em algo que o navegador entende

            // Geram bundles

        // Hoje em dia, também é comum citar:

            // Vite

            // Rollup

            // Parcel