// Servidor: é o programa que fica “escutando” requisições e respondendo (ex.: um site ou sistema rodando).

// API: é o conjunto de regras/rotas que define como pedir e trocar dados com esse servidor.

// Resumindo: o servidor hospeda; a API define como conversar com ele.

// ----

// Servidor ≈ a porta aberta + o app rodando (ex.: Node + Express escutando na porta 3000)

// API ≈ o conjunto de rotas e regras que o servidor expõe

// Dentro da API, normalmente ficam:

    // Controller → recebe a requisição

    // Service → regra de negócio

    // Module / Router → organiza as rotas

// Então: Module, Controller e Service fazem parte da API, não do servidor em si.

// ----

// Servidor sem API ainda serve para:

    // Servir páginas HTML (sites tradicionais)

    // Arquivos estáticos (imagens, CSS, JS)

    // Outros serviços (ex.: servidor de e-mail, FTP, banco de dados)

// API é só um tipo de coisa que um servidor pode oferecer, não uma obrigação.

// ----

// De forma simplificada:

    // Existe um 'servidor' rodando em 'servidor.com'
    // A rota '/servidor' pode apontar para uma 'pasta'
    // Dentro dessa pasta pode existir um arquivo como 'arquivo_servido.html'
    // Quem acessa 'servidor.com/servidor' recebe 'uma página HTML', não uma API

// Isso é o modelo 'clássico de servidor web' (Apache, Nginx, ou até Express servindo arquivos estáticos).

// Exemplo mental:

    // '/servidor' → pasta
    // '/servidor/arquivo_servido.html' → página HTML renderizada no navegador

    // API entra quando, em vez de devolver HTML, o servidor devolve 'dados' (geralmente JSON), tipo:
    // '/api/usuarios → { nome: "Ana" }'

// Resumo curto:

    // 'Sem API' → servidor entrega 'páginas/arquivos'
    // 'Com API' → servidor entrega 'dados' para outros sistemas/front-ends

    // ----

// 'Com API':
    //   Você faz uma 'requisição (GET, POST, etc.)' e recebe uma 'resposta' (dados).
    //   Você acessa 'um serviço'.

// 'Sem API':
    //   Você 'não acessa o computador remotamente'.
    //   Você só recebe 'o que o servidor decidiu expor' (HTML, imagens, arquivos).

// Então o melhor paralelo é:

    // 'Servidor sem API' → você pede uma URL e recebe 'uma página/arquivo'
    // 'Servidor com API' → você pede uma URL + método e recebe 'dados / ação executada'

// Diferenciação importante:
    // Acesso a computador remotamente (SSH, Remote Desktop) 'é outro tipo de servidor', não um servidor web comum.

// Resumo em uma frase:

    // 'API é uma interface de serviços; servidor é onde isso roda — com ou sem API.'

// ----

// Em um servidor estático, o fluxo é:

    // Você acessa uma URL (ex.: / ou /servidor)

    // O servidor entrega um HTML (ex.: index.html ou o HTML da rota)

    // O navegador carrega o HTML

    // Ao ler o HTML, o navegador:

    // baixa o CSS (<link rel="stylesheet">)

    // baixa o JS (<script src="...">)

    // O CSS estiliza a página

    // O JS é executado no navegador

// Importante:

    // O servidor não “roda” o HTML, CSS ou JS

    // Quem executa tudo isso é o navegador do usuário

// Resumo curto:

// Servidor entrega arquivos → navegador interpreta e executa

// --

// Fluxo do servidor com API:

    // O navegador (ou app) faz uma requisição (GET, POST…)

    // A API processa a lógica (controller → service → banco, etc.)

    // O servidor responde com dados (geralmente JSON)

        // O JS do front-end recebe esses dados

        // O JS decide o que fazer (renderizar tela, atualizar estado, etc.)

    // A API não entrega a interface pronta, só dados/ações.

// Na prática

    // Servidor estático → HTML já vem pronto

    // Servidor com API → HTML pode nem existir ali

// Normalmente hoje:

    // Front-end (React, Vue, etc.) → roda no navegador

    // Back-end (API) → só responde dados

// Resumo em uma frase:

    // Servidor estático entrega telas; servidor com API entrega informação e comportamento.

// ----

// Servidor estático: Ele serve arquivos como HTML, CSS, imagens, JS, mas sem lógica adicional. Só entrega aquilo que está ali, sem processamento.

// Servidor sem API: Pode ser estático (só serve arquivos), ou dinâmico, mas não tem API para interagir com a aplicação via requisições. Ou seja, pode até ter algum processamento no servidor (como renderização de páginas no servidor, com PHP, por exemplo), mas não há um ponto de entrada tipo REST para enviar e receber dados dinamicamente (sem usar HTML diretamente).

// Então, quando falamos de servidor estático e sem API, estamos basicamente falando de um servidor que:

// Entrega arquivos estáticos

// Não oferece rotas API para consumir e enviar dados de maneira programática

// Resumo:

// Servidor estático = entrega somente arquivos (HTML, CSS, JS).

// Servidor sem API = pode ser estático ou dinâmico, mas não oferece uma API (não tem rotas como /api/users).

// Em ambos os casos, você não tem uma API REST, mas o servidor pode ser mais ou menos complexo dependendo do seu propósito.

// --

// Servidor estático e servidor sem API são bastante próximos, mas com um pequeno detalhe:

    // Servidor estático: Ele serve arquivos como HTML, CSS, imagens, JS, mas sem lógica adicional. Só entrega aquilo que está ali, sem processamento.

    // Servidor sem API: Pode ser estático (só serve arquivos), ou dinâmico, mas não tem API para interagir com a aplicação via requisições. Ou seja, pode até ter algum processamento no servidor (como renderização de páginas no servidor, com PHP, por exemplo), mas não há um ponto de entrada tipo REST para enviar e receber dados dinamicamente (sem usar HTML diretamente).

// Então, quando falamos de servidor estático e sem API, estamos basicamente falando de um servidor que:

    // Entrega arquivos estáticos

    // Não oferece rotas API para consumir e enviar dados de maneira programática

// Resumo:

    // Servidor estático = entrega somente arquivos (HTML, CSS, JS).

    // Servidor sem API = pode ser estático ou dinâmico, mas não oferece uma API (não tem rotas como /api/users).

// Em ambos os casos, você não tem uma API REST, mas o servidor pode ser mais ou menos complexo dependendo do seu propósito.

// --

    // Servidor estático: Serve arquivos fixos (HTML, CSS, JS, imagens) sem alteração ou processamento. Ex.: Nginx, Apache.

    // Servidor dinâmico: Processa informações ou lógica no servidor antes de enviar a resposta. Ex.: Node.js, PHP, Ruby on Rails.

// Resumindo: estático só entrega arquivos, dinâmico pode gerar conteúdo ou realizar ações antes de entregar a resposta.

// ----

// Servidor com API tende a ser dinâmico (mais abaixo um exemplo de estático com API), porque uma API envolve interações de dados e não apenas arquivos fixos.

// API + Dinamismo:

// Uma API (geralmente REST ou GraphQL) permite que o servidor processar requisições e retornar dados dinâmicos.

// Exemplo:

    // O servidor pode consultar um banco de dados, aplicar lógica de negócio e retornar um JSON com dados atualizados em tempo real.

// Exemplo de Dinamismo em API:

    // Você pede para a API GET /usuarios e o servidor consulta o banco de dados para te dar a lista mais recente de usuários.

    // Se você faz um POST /usuarios, ele pode criar um novo usuário no banco, modificar algum dado e retornar a confirmação.

// Resumo:

    // Com API, o dinamismo é quase garantido, pois a interação envolve processos de consulta, manipulação e retorno de dados.

    // Um servidor sem API pode até ser dinâmico (ex.: usando PHP ou templates), mas sem essa interação via API.

// ----

// Se a API só serve "Hello World" com Module, Controller e Service, ela não é estática; é dinâmica.

// Por que?

    // Estática implica que o conteúdo não muda, é fixo. No caso de uma API, mesmo retornando algo simples como "Hello World", ela ainda está processando uma requisição e respondendo dinamicamente.

    // Dinâmica: A chave aqui é a lógica que a API pode processar. Mesmo que a resposta seja simples, o fato de você estar fazendo uma requisição para um servidor processar e retornar algo de forma programática já a torna dinâmica. (REQUISIÇÃO JÁ TORNA A API DINÂMICA)

// A API com "Hello World" é:

// Dinâmica, porque ela envolve:

    // Processamento de uma requisição

    // Resposta de dados (mesmo que seja um texto simples)

    // Uso de controllers, services, e possivelmente até módulos

// Comparação:

    // Servidor estático: Retorna conteúdo fixo sem processamento, como um arquivo HTML que é simplesmente enviado.

    // API: Mesmo que o conteúdo seja simples (como "Hello World"), ela está processando a requisição e respondendo dinamicamente.

// Então, não importa o quão simples a resposta seja — o fato de a API ter uma lógica interna (Module, Controller, Service) para processar a requisição a torna dinâmica, e não estática.

// ----

// Servidor com API e estático existe? Sim.

// Servidor com API e estático/dinâmico: 

// 1. Servidor com API e estático:

    // - Pode ser uma situação em que você tenha uma API que não faz nenhum processamento dinâmico. 
    // - A API ainda tem rotas e controllers, mas ela não faz lógica complexa nem interage com banco de dados. Em vez disso, apenas serve arquivos fixos ou respostas predeterminadas.
    // - Exemplo: Uma API que apenas retorna um arquivo JSON fixo em todas as requisições, sem realizar nenhuma lógica ou alteração nos dados. Ou seja, a API serve conteúdo estático (dados fixos, como "Hello World" ou informações não alteráveis).

// Exemplo de API estática:

    app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello World" });
    });

    // Nesse caso, a API ainda existe e interage, mas não há dinamismo, porque sempre responde com a mesma coisa.

// 2. Servidor com API e dinâmico:

    // - Aqui, a API realiza algum tipo de processamento, como consultar banco de dados, realizar autenticação, ou modificar dados. 
    // - A resposta da API pode ser diferente a cada requisição, dependendo dos dados ou ações realizadas.
    // - Exemplo: Uma API que consulta um banco de dados para retornar a lista de usuários ou faz cálculos com base nos dados da requisição.

// Exemplo de API dinâmica:

    app.get('/api/usuarios', (req, res) => {
    // Consulta ao banco de dados
    const usuarios = db.query('SELECT FROM usuarios');
    res.json(usuarios);
    });

// Resumo:
    // - Servidor com API estático: Tem rotas e controllers, mas não há processamento dinâmico, só respostas fixas (ex.: retornar o mesmo JSON, sem interação com banco de dados).
    // - Servidor com API dinâmico: Realiza processamento (consulta de dados, lógica de negócio) e responde de forma diferente conforme a requisição.

// Exemplo de ambos no mesmo servidor:

    // - Você pode ter uma API que serve arquivos estáticos (ex.: GET /api/arquivos retorna o mesmo arquivo JSON) e também tem outras rotas dinâmicas que consultam banco de dados ou fazem cálculos.

// Portanto, sim, um servidor pode ser com API e estático, mas isso implica em não ter lógica dinâmica por trás das rotas.

// ----

// D forma curta e clara:

    // 'Controller que retorna string fixa' → API 'estática', porque não há processamento, só repassa conteúdo.
    // 'Controller que chama Service que retorna string fixa' → ainda 'estática', não muda nada.
    // 'Service processa dados ou acessa banco' → API 'dinâmica', porque a resposta depende de lógica ou dados externos.

// 'Regra prática:'

    // 'Se a resposta depende de alguma lógica ou fonte externa, é dinâmica; se sempre retorna o mesmo, é estática.'

// --

// Curto e direto:

    // 'Cálculo no Service' → API 'dinâmica', porque a resposta depende de lógica, mesmo sem banco de dados.
    // 'Cálculo na Controller' (função do Service chamada na Controller) → também 'dinâmica', pelo mesmo motivo: a saída depende de lógica, não é fixa.

// 'Regra:'

// Sempre que a resposta 'pode variar' por lógica, input ou dados externos, é 'dinâmica'. Só é estática se a resposta for sempre "literalmente a mesma", sem processamento.

// ----

// Fontes externas

    // são qualquer coisa que possa alterar a resposta da API fora do código “fixo” do serviço. Alguns exemplos:

    // 'Banco de dados' (MySQL, MongoDB…)
    // 'Outra API' (chamada HTTP a outro serviço)
    // 'Arquivos no servidor' (JSON, CSV, etc., se lidos dinamicamente)
    // 'Sensores ou hardware' (IoT, GPS, câmeras)
    // 'Variáveis de ambiente' ou configuração externa que mudam em tempo de execução

// Resumindo:

// > Se a resposta depende de "algo que pode mudar fora do código", é dinâmica. Caso contrário, é estática.





