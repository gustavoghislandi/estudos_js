// Exemplo simples de fetch:

// Quando você lida com APIs, o formato JSON é muito utilizado para enviar e receber dados entre cliente e servidor.

    const dados15 = {
        nome: "João",
        idade: 30
    };

    fetch('https://api.exemplo.com/endpoint', {  // URL do endpoint da API que será acessado
        method: 'POST',  // Método HTTP, nesse caso é POST (enviar dados)
        headers: {  // Cabeçalhos da requisição HTTP
            'Content-Type': 'application/json'  // Define o tipo de conteúdo como JSON, informando ao servidor
        },
        body: JSON.stringify(dados15)  // Corpo da requisição. 'dados15' é convertido em uma string JSON para ser enviado
    })
    .then(response => response.json()) // response.json(): Este método extrai o corpo da resposta (que é normalmente um JSON) e o transforma em um objeto JavaScript. Ele retorna uma Promise que resolve com o conteúdo do corpo da resposta, já convertido para um objeto.
    .then(responseData => { // O responseData vem do método .json() que é chamado sobre a resposta da requisição (response).
        console.log('Resposta recebida do servidor:', responseData);
    })
    .catch(error => console.error('Erro na requisição:', error));

    // responseData: O nome responseData é uma variável de sua escolha. No caso do código, ela armazena o objeto retornado da response.json(). Pode ser qualquer nome que você queira, como data, result, etc.
    // A conexão/link entre responseData e response.json() acontece porque o response.json() retorna uma Promise. No código, essa Promise é resolvida e o valor (o JSON convertido) é passado para a variável responseData no segundo .then().

    // O valor é passado devido ao encadeamento de Promises no JavaScript.

    // O response.json() retorna uma Promise, e quando ela é resolvida, o valor (JSON convertido) é automaticamente passado para o próximo then().

    // Isso é uma sintaxe padrão do JavaScript para Promessas (Promises), não é exclusivo do fetch. A Promise "resolve" o valor e o passa automaticamente para o próximo .then().

    // Ou seja, o then() recebe o resultado da resolução da Promise e o passa para o próximo then().

// PROPRIEDADE mais comuns:

// 1. 'method' (Método HTTP)

// Define o tipo de requisição HTTP (GET, POST, PUT, DELETE, etc.).

    method: 'GET'  // Default, mas pode ser explicitamente informado.

// 2. 'headers' (Cabeçalhos)

// Define os cabeçalhos da requisição, como tipo de conteúdo e autenticação.

    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token'
    }

// 3. 'body' (Corpo)

// Usado para enviar dados na requisição (geralmente em POST ou PUT). O corpo deve ser uma string (como JSON) ou FormData.

    body: JSON.stringify({ key: 'value' })

// 4. 'mode' (Modo de CORS)

// Especifica como a requisição lida com o CORS (Cross-Origin Resource Sharing).

    // - 'no-cors': Não permite o compartilhamento de recursos entre origens.
    // - 'cors': Permite o compartilhamento de recursos entre origens (pode ser que o servidor negue, mas aí é do servidor não da requisição fetch).
    // - 'same-origin': Só permite requisições para a mesma origem.

    //'CORS' e 'origem' estão relacionados a 'requisições (fetch, XMLHttpRequest)', ou seja, para 'buscar dados' de outros servidores.

        // - 'no-cors': A requisição é feita, mas o navegador 'não permite' acessar a resposta (não permite ler os dados) se a origem for diferente. 
            
            // O servidor pode receber, mas a resposta não é acessível no JavaScript. 
            
            // Usado para requisições simples sem leitura de dados (ex: imagens externas).

                // A opção 'no-cors' é usada para "requisições simples", como buscar "imagens ou recursos externos" sem a necessidade de acessar a resposta (não ler os dados).

                // Vantagens:

                //  Segurança: Evita o vazamento de dados sensíveis entre origens diferentes.
                //  Desempenho: Permite carregar recursos (como imagens) de outros domínios sem exigir permissões CORS, simplificando o processo.

                // Não é útil para ler dados (ex: JSON), apenas para carregar recursos sem interação.


        // - 'same-origin': Só permite requisições para 'a mesma origem' (mesmo domínio, protocolo e porta). Não permite qualquer requisição para origens diferentes.

            // Quando você usa 'same-origin', ele 'só permite requisições para o mesmo domínio, protocolo e porta'.

            // Então, se sua aplicação está rodando em 'http://localhost:3000' e o servidor está em 'http://localhost:3001', uma requisição de 'same-origin' 'não será permitida', porque o 'domínio (localhost)' é o mesmo, mas a 'porta (3000 vs 3001)' é diferente.

    // Diferença:

        // - 'no-cors': Permite enviar a requisição, mas não acessar a resposta.
        // - 'same-origin': Só permite a requisição se for para o mesmo servidor/origem.

        // Se a origem for diferente, 'cors' permite se o servidor permitir, e 'no-cors' apenas envia a requisição, sem acesso à resposta.

    mode: 'cors'

// 5. 'cache' (Cache de Requisição)

// Define o comportamento do cache da requisição.

    // - 'default': Armazena a requisição em cache quando possível. Usa o comportamento padrão do navegador, que armazena a requisição em cache quando possível, com base nas configurações do servidor.
    // - 'no-store': Não armazena a requisição em cache.
    // - 'reload': Recarrega a requisição da rede.

    cache: 'no-store'

// 6. 'credentials' (Credenciais)

// Define se os cookies e credenciais de autenticação são enviados.

    // - 'same-origin': Envia credenciais somente se a requisição for para a mesma origem.
    // - 'include': Envia credenciais para todas as requisições.
    // - 'omit': Não envia credenciais.

    credentials: 'include'

// 7. 'redirect' (Redirecionamento)

// Define como o 'fetch' lida com redirecionamentos.

    // - 'follow': Segue redirecionamentos.
    // - 'manual': Lida manualmente com redirecionamentos.
    // - 'error': Lança um erro em caso de redirecionamento.

    redirect: 'follow'

// 8. 'referrer' (Referenciador)

// Define a origem da requisição, como o cabeçalho 'Referer'.

    referrer: 'no-referrer'

// 9. 'signal' (Abortar a requisição)

// Utilizado para abortar uma requisição, com um 'AbortController'.

    signal: controller.signal

// Exemplo completo com várias propriedades:

    const controller = new AbortController();

    fetch('https://api.exemplo.com/endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer meuToken'
    },
        body: JSON.stringify({ chave: 'valor' }),
        mode: 'cors',
        cache: 'no-store',
        credentials: 'include',
        redirect: 'follow',
        referrer: 'no-referrer',
        signal: controller.signal
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erro:', error));
