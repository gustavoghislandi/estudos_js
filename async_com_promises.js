// Operações assíncronas com promises

//--------------

// Para não ter mais que lidar com callback hell, criou-se as Promises.

// Promises são objetos que representam o resultado futuro de uma operação assíncrona.

    // Elas começam em um estado chamado "pending", que significa que a operação ainda não terminou.

// Quando a operação assíncrona termina, a Promise muda de estado para:
    // - "fulfilled" (ou "resolved") se deu certo, e a função passada em 'then()' será executada.
    // - "rejected" se deu erro, e a função passada em 'catch()' será executada.

// Ou seja:

// Operação assíncrona foi concluída (êxito ou falha)?
// Execute a função que a Promise referencia (via 'then' para êxito e catch para 'erro').

//--------------


// O ES6 dá suporte nativo a promises. As promises já estavam no ecossistema no JavaScript antes, por meio de bibliotecas como JQuery, Axios e Bluebird, cada uma com suas particularidades e funcionam bem. Mas agora os navegadores dão suporte nativo.

// Promises são objetos que nos ajudam a trabalhar com operações assíncronas.

    // Esse tipo de objeto aguarda a operação ser completada e oferece uma resposta positiva (resolvida) para quando houver sucesso,
    // ou resposta negativa, caso tenha ocorrido algum erro no processo (rejeitada).

// O QUE SÃO PROMISES

// Elas são uma alternativa criada para lidar com resultados de operações assíncronas.

// Como a execução do JavaScript é ininterrupta (mesmo com o uso de funções como 'SetTimeout' ou 'setInterval'), temos um problema quando um trecho do código depende do resultado de uma operação que não sabemos quanto tempo demorará até ser completada.

// Uma situação comum é quando consumimos APIs REST.
    // Ao solicitar dados à API, não sabemos quanto tempo levará e isso tem uma latência suficiente para o JavaScript seguir para o próximo trecho de código, que necessitará dos dados advindos da interação com a API. A partir disso, não é possível executar a lógica desse trecho de código conforme esperado. Nesse tipo de situação, acaba sendo comum ter o valor indefinido no momento em que o código é executado. O que, evidentemente, não se deseja.

// A abordagem mais comum para lidar com esse tipo de situação são os CALLBACKS.

// Para uma operação em que o tempo de execução é indefinido, 
// usamos uma função de retorno que será chamada somente quando a operação for finalizada.

// Como no trecho a seguir, em que passamos dois argumentos para 'funcaoAssincrona', sendo um deles a função que é chamada no final de sua execução:

    // function funcaoAssincrona(arg1, callback) {
    //     // faz request e afins
    //     // e, ao final, executamos o callback
    //     callback();
    // };

    // function callback(){
    //     // Operação que quero fazer depois que tiver a resposta da request
    // };

// ATENÇÃO:

// callback() não é assíncrono por si só.
// Ele só será chamado de forma assíncrona se você o executar dentro do retorno de uma operação assíncrona (como fetch, eventos, I/O, etc.).

//------
    // Explicando assíncronicidade do fetch:

    // O fetch é nativamente assíncrono, então tudo que executar dentro dele aguardará resposta.
    // O que for fora dele será executado de imediato.

    // O fetch() é assíncrono, então qualquer código fora do .then()
    // vai rodar imediatamente, sem esperar a resposta da requisição.

    // Aqui está um exemplo com duas funções de callback:

    // 1. Uma que aguarda o resultado do fetch() (dentro do .then()).
    // 2. Outra que não aguarda e é chamada logo após a requisição ser feita.

    function funcaoAssincrona(url, callbackAguardar, callbackNaoAguardar) {
        // A primeira callback vai aguardar o fetch
        fetch(url)
            .then(response => response.json())
            .then(data => {
                callbackAguardar(data); // Executa depois que o fetch termina
            });

        // A segunda callback não vai aguardar o fetch
        callbackNaoAguardar(); // Executa imediatamente, sem esperar o fetch
    }

    function callbackAguardar(data) {
        console.log('Resposta recebida (aguardou):', data);
    }

    function callbackNaoAguardar() {
        console.log('Essa foi chamada imediatamente (não aguardou fetch)');
    }

    // Chamada de exemplo
    funcaoAssincrona(
        'https://jsonplaceholder.typicode.com/todos/1',
        callbackAguardar,
        callbackNaoAguardar
    );

    // O que acontece aqui:
    // 1. callbackNaoAguardar() é chamada logo de cara, porque está fora do .then().
    // 2. callbackAguardar(data) só é chamada depois que o fetch() terminar de buscar a resposta,
    //    porque está dentro do .then().

    // No caso de uma API real (ex: https://jsonplaceholder.typicode.com),
    // a função de callback que aguarda vai ser executada somente depois
    // de a requisição ser finalizada.
    // Já a outra callback vai ser chamada instantaneamente.

//------

// O problema dessa abordagem é que, ao trabalhar com múltiplas operações assíncronas, fica mais difícil entender a sequência, pois são trechos que dependem um do outro, e o código ficará mais ou menos assim:

    // Callback hell
    obj.funcaoAssincrona2(function(response){
        response.funcaoAssincrona2(function(response2) {
            response2.funcaoAssincrona2(function(response3) {
                response3.funcaoAssincrona2(function(response4) {
                    return response4;
                });
            });
        });
    });

// Esse tipo de estrutura é classicamente chamado de "callback hell". 
// A execução não funciona como “sequência imediata”, ela é aninhada: cada callback só roda quando a função assíncrona do nível acima termina.

// Se representarmos com setas mostrando o fluxo de quem depende de quem, fica assim:

    // response4 -> response3 -> response2 -> response

// Porém a ordem de chegada dos dados é:

    // response -> response2 -> response3 -> response4

// A lógica é:

    // Você primeiro pega response (da primeira função assíncrona).
    // Com response, você consegue response2 (segunda função assíncrona).
    // Com response2, você consegue response3.
    // Com response3, você finalmente consegue response4.

    // Então: response4 depende de response3, que depende de response2, que depende de response.

// A manutenção e o debug de códigos assim são uma enorme dor de cabeça para os desenvolvedores.

//---
// O que é o "callback hell"?

    // Este nome foi dado para a situação na qual temos várias chamadas assíncronas que dependem uma da outra.
    // Como as operações assíncronas ocorrem simultaneamente e respondem em tempos diferente, torna-se uma tarefa extremamente árdua para o desenvolvedor entender o que acontece na execução desse tipo de código.

    // Para maiores informações, consulte https://callbackhell.com

//---

// Para não ter mais que lidar com callback hell, criou-se as Promises.

// Promises são objetos que representam o resultado futuro de uma operação assíncrona.

    // Elas começam em um estado chamado "pending", que significa que a operação ainda não terminou.

// Quando a operação assíncrona termina, a Promise muda de estado para:
    // - "fulfilled" (ou "resolved") se deu certo, e a função passada em 'then()' será executada.
    // - "rejected" se deu erro, e a função passada em 'catch()' será executada.

// Ou seja:

// Operação assíncrona foi concluída (êxito ou falha)?
// Execute a função que a Promise referencia (via 'then' para êxito e catch para 'erro').


// OS ESTADOS DAS PROMISES

