// Está resumido.

// A função crucial do Node.js é executar JavaScript fora do navegador, 
// permitindo que você construa aplicações de servidor e scripts de linha de comando com JS.

// Mais especificamente, ele:

    // 1. Fornece um runtime JavaScript baseado no motor V8 do Chrome.

    // 2. Gerencia I/O de forma assíncrona e não bloqueante (arquivos, rede, banco de dados) 
    // — ideal para servidores que precisam lidar com muitas requisições simultâneas.

    // 3. Permite usar módulos e pacotes (via CommonJS ou ES Modules) 
    // para organizar código e reutilizar funcionalidades.

// Resumindo: Node pega JavaScript e transforma em uma ferramenta de backend, 
// permitindo que você escreva servidor, CLI e scripts usando a mesma linguagem do front-end.

// Exemplo prático de uso de Node para criar um servidor HTTP básico:

    const http = require('http');

    const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node!\n');
    });

    server.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
    });
