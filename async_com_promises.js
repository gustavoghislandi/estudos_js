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

// Uma Promise tem 3 estados:

    // Não resolvido (pending): estado inicial, quando está esperando algo ser finalizado.

    // Resolvido (fulfilled): estado no qual a operação foi concluída sem erros. Função associada: then()

    // Rejeitado (rejected): estado no qual a operação foi concluída com erro. Função associada: catch()

    // Com o método then, tratamos o sucesso.

    // Com o método catch, tratamos os erros.

// O ESQUELETO DE UM PROMISE

    let promise = new Promise((resolve, reject) => {
        // corpo da promise
    });

    promise.then();
    promise.catch();

// Por padrão, o construtor da promise recebe uma função com dois parâmetros: 'resolve' e 'reject'.

// Utiizamos esses parâmetros dentro da lógica da promise para indicar quando ela foi resolvida ou rejeitada.

// Quando ela é resolvida, o 'then' é automaticamente ativado.

// Quando ela é rejeitada, o 'catch' é automaticamente ativado.

// Exemplo de simulação de promise:

    let promise2 = new Promise((resolve, reject) => {
        let resultado = false; // simulação de resultado da operação assíncrona
        if(resultado) {
            resolve("Deu tudo certo!");
        }
        else {
            reject("Deu errado!");
        }
    });


    // A variável 'resultado' contém o que seria o resultado da operação assíncrona.
    
    // Se tudo deu certo, o 'resolve' é invocado com uma string "Deu tudo certo!".

    // Em caso de falha, o 'reject' é invocado com uma string "Deu errado!".

// Para recuperar esses dados que estão sendo passados, usamos o parâmetro 'data', que, por padrão, também é definido dentro das funções 'then' e 'catch'.

    promise2
        .then((data) => console.log(`Resultado positivo: ${data}`))
        .catch((data) => console.log(`Resultado negativo: ${data}`)); 
        
        // Perceba que catch esta vinculado ao then, que está vinculado à promise. Sem isso, dará erro.

            //------

                    // tratá-la assim:

                        // promise2.then((data) => console.log(`Resultado positivo: ${data}`));
                        // promise2.catch((data) => console.log(`Resultado negativo: ${data}`));

                    // O problema ⚠️

                    // Apesar de parecer correto, o Node.js entende isso como duas cadeias diferentes:

                        // Uma Promise com .then() sem catch
                        // Outra Promise com .catch()

                    // Quando a promise é rejeitada, a cadeia do .then() não tem um .catch(), então o Node lança o erro:

                        // UnhandledPromiseRejection

                    // Por que isso funciona?

                        // .then() retorna uma nova Promise

                        // .catch() deve estar na mesma cadeia

                    // Se a promise for rejeitada, o fluxo pula direto para o catch

                    // Regra prática:

                        // Toda Promise precisa terminar com um catch() ou estar dentro de um try/catch (com async/await).

                    // Alternativa usando async/await (mais moderno):

                        async function executar() {
                            try {
                                const resultado = await promise2;
                                console.log(`Resultado positivo: ${resultado}`);
                            } catch (erro) {
                                console.log(`Resultado negativo: ${erro}`);
                            }
                        }

                        executar();


            //------

// Ao executar o código temos um resultado positivo:

    // Resultado positivo: Deu tudo certo!

// Se alteramos o valor para false, a resposta é a do catch.

    // Resultado negativo: Deu erro!

// OPERAÇÕES ASSÍNCRONAS

// Simulação de uma operação assíncrona, como uma chamada AJAX, usando a função setTimeout:

let promise3 = new Promise((resolve, reject) => {
    let resultado = true;
    let tempo = 2000;
    setTimeout(() => {
        if(resultado) {
            resolve("Deu tudo certo!")
        }
        else {
            reject("Deu errado.");
        }
    }, tempo)
});

    console.log('Fui executado antes do resultado da promise3 (e da promise2 também! Mesmo sendo sem setTimout ou busca externa)!')

promise3
    .then((data) => console.log(`Resultado positivo: ${data}`))
    .catch((data) => console.log(`Resultado negativo: ${data}`)); 
    
// Isso mostra o funcionamento das promises.

// ANINHAMENTO(encadeamento) then E catch

// NOTA: O termo correto é encademento neste caso. Veja mais ao final as diferenças, procure por 'Aninhamento:'

// console.log('-----Aninhameno de then e catch-----')

// Este é o modo aninhado(encadeado) de 'then' e 'catch'. (Eu fiz assim antes porque o exemplo separado/individualizado do livro não funcionou)

promise3
    .then((data) => console.log(`Resultado positivo: ${data}`))
    .catch((data) => console.log(`Resultado negativo: ${data}`));

// É possível aninhar(encadear) mais de um 'then:

promise3
    .then((data) => console.log(`Resultado positivo 1: ${data}`)) // Resultado positivo 1: Deu tudo certo!
    .then((data) => console.log(`Resultado positivo 2: ${data}`)) // Resultado positivo 2: undefined
    .catch((data) => console.log(`Resultado negativo 1: ${data}`)); 

// Perceba que a saída deu undefined no segundo 'then'

// Por que o resultado não foi igual ao primeiro 'then'?

    // Porque o valor da variável 'data', disponível na primeira chamada do 'then' não é passado adiante.
    // O valor da variável 'data' é sempre correspondente ao retorno da função anterior.
    // Isso significa que para ter a mesma mensagem da primeira na segunda chamada do 'then' é necessário alterar o código, retornando a variável 'data' dentro da execução do 'then':

    promise3
        .then((data) => {
            console.log(`Resultado positivo D1: ${data}`);
            return data;
        })
        .then((data) => {console.log(`Resultado positivo D2: ${data}`); // coloquei esse extra para ver e no fim das contas vi as async em operação no console "se misturando" na ordem.
            return data;
        })
        .then((data) => {console.log(`Resultado positivo D3: ${data}`);
            return data;
        })
        .catch((data)=> console.log(`Resultado negativo 1: ${data}`));

    // Com o retorno de 'data', tornou-se possível fazer uso de 'data' na chamada seguinte.

// COMO LIDAR COM ERROS INESPERADOS

// Quando utilizamos o 'reject' nas nossas promises, estamos tratando os casos em que já esperamos de antemão que algum cenário possa dar problema.

// Contudo, há situações de erros inesperados.

// Vamos simular erros para ver isso:

let promise4 = new Promise((resolve, reject) => { //Uma promise SEMPRE recebe uma função como parâmetro, que tem 'resolve' e 'reject' como argumento
    throw new Error('Erro!');
    resolve('OK!');
});

promise4
    .then((data) => console.log(`Sucesso 41: ${data}`))
    .catch((data) => console.log(`Falha 41: ${data}`));

// Mesmo esperando que o resolve ative a função 'then', como o erro está sendo lançado, o then passa adiante e o catch é ativado.

    // Falha: Error: erro!


// O mesmo acontece com vários 'then' encadeados.
// Se um deles der erro, o catch é automaticamente ativado:

let promise5 = new Promise((resolve, reject) => { 
    resolve('OK!');
});

promise5
    .then((data) => {
        console.log(`Sucesso 51: ${data}`) // Rodou antes do erro.
        throw new Error('Erro!');
        console.log('Depois do erro. Não roda. Portanto, não imprime'); // Depois do erro. Não roda
        return data;
    })
    .then((data) => console.log(`Sucesso 52: ${data}`))
    .catch((data) => console.log(`Falha 51: ${data}`));

    // Sucesso 51: OK!
    // Falha 51: Error: Erro!

//-------------------

// Mesmo que você não use resolve ou reject, a função precisa existir:

    let p = new Promise((resolve, reject) => {
    // vazio → Promise fica pendente para sempre
    });

    // Aqui não vai quebrar, mas a Promise nunca termina.

    // resolve e reject existem, só que você não os chamou.

//-------------------

// Aninhamento de Promises
// Uma Promise é criada dentro de outra, criando níveis internos.
// Fluxo mais profundo e menos legível, precisa retornar valores manualmente.
let promiseAninhada = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resultado 1"), 500);
})
.then(res => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(res + " → Resultado 2"), 500);
  }).then(res2 => console.log(res2))
);

// Encadeamento de Promises
// Vários .then() em sequência, cada um recebendo o valor do anterior.
// Fluxo linear e legível, padrão moderno de uso.
let promiseEncadeada = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resultado 1"), 500);
})
.then(res => {
  console.log(res);
  return res + " → Resultado 2";
})
.then(res2 => console.log(res2));

// Aninhamento: um 'then' cria uma nova Promise dentro do outro.

// Encadeamento: cada 'then' recebe o valor do anterior de forma linear.

//-------------------

// Ver mais em promise_then_catch.js


