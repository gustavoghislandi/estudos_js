// // 1️⃣ Sintaxe completa de then

// promise.then(
//   onFulfilled,
//   onRejected
// );

// // Onde:
// // - onFulfilled → função chamada quando a Promise é resolvida
// // - onRejected → função chamada quando a Promise é rejeitada
// // - Ambos são opcionais

// // Exemplo completo:

// promise.then(
//   (valor) => {
//     console.log("Sucesso:", valor);
//     return valor;
//   },
//   (erro) => {
//     console.log("Erro:", erro);
//     return "tratado";
//   }
// );

// // Importante:
// // then sempre retorna uma nova Promise, mesmo que você não retorne nada.


// // 2️⃣ Sintaxe completa de catch

// promise.catch(
//   onRejected
// );

// // Onde:
// // - onRejected → função chamada quando ocorre rejeição
// // - É equivalente a:

// promise.then(null, onRejected);

// // Exemplo:

// promise.catch((erro) => {
//   console.error("Falha:", erro);
// });


// // 3️⃣ Assinatura formal (nível especificação)

// // then
// // Promise.prototype.then = function (onFulfilled?, onRejected?) → Promise

// // catch
// // Promise.prototype.catch = function (onRejected?) → Promise

// // O ? significa opcional.


// // 4️⃣ O que cada callback pode retornar

// // Dentro de then ou catch, você pode:

// // Retornar um valor comum
// promise.then(v => v * 2);
// // a próxima Promise resolve com esse valor

// // Retornar outra Promise
// promise.then(v => fetch(url));
// // a cadeia espera essa Promise

// // Não retornar nada
// promise.then(v => console.log(v));
// // a próxima recebe undefined

// // Lançar um erro
// promise.then(v => {
//   throw new Error("erro");
// });
// // a Promise resultante é rejeitada


// // 5️⃣ Fluxo real de execução (modelo mental)

// promise
//   .then(onFulfilled1, onRejected1)
//   .then(onFulfilled2, onRejected2)
//   .catch(onRejectedFinal);

// // Funciona assim:
// // - Se resolve → chama onFulfilled
// // - Se rejeita → chama o primeiro onRejected disponível
// // - catch pega qualquer erro acima, se não tratado antes


// // 6️⃣ Exemplo cobrindo TODOS os casos

// new Promise((resolve, reject) => {
//   resolve(10);
// })
// .then(
//   valor => {
//     console.log("Resolvido:", valor);
//     return valor * 2;
//   },
//   erro => {
//     console.log("Erro no then:", erro);
//     return 0;
//   }
// )
// .then(valor => {
//   console.log("Segundo then:", valor);
//   throw "Falha aqui";
// })
// .catch(erro => {
//   console.log("Capturado no catch:", erro);
//   return 999;
// })
// .then(valor => {
//   console.log("Após catch:", valor);
// });

// // Saída:
// // Resolvido: 10
// // Segundo then: 20
// // Capturado no catch: Falha aqui
// // Após catch: 999


// // 7️⃣ Boas práticas (importante!)

// // Prefira:
// promise
//   .then(onFulfilled)
//   .catch(onRejected);

// // Evite:
// promise.then(onFulfilled, onRejected);

// // Motivo:
// // O catch captura erros de toda a cadeia,
// // enquanto o segundo argumento do then captura só daquele passo.


// // 8️⃣ Resumo rápido

// // - then(onFulfilled, onRejected)
// // - catch(onRejected) ≡ then(null, onRejected)
// // - Ambos retornam nova Promise
// // - O valor passado adiante é sempre o retorno do callback
// // - Encadeamento é linear e previsível

// //-----------------------------------------------------------------------------------------

// // 1️⃣ esclarecer o que pode ir dentro de resolve
// // 2️⃣ entregar o resumo pequeno, exatamente no formato que você pediu


// // 1️⃣ O que pode ser passado para resolve

// resolve(data);

// // Normalmente você passa dados

// resolve(42);
// resolve("ok");
// resolve({ id: 1 });
// resolve([1, 2, 3 ]);

// resolve(() => console.log("função que retornei"));

// // Também pode, porque:
// // - resolve aceita qualquer valor
// // - funções em JS são valores

// // Mas ⚠️ ATENÇÃO ⚠️ ao significado:

//             promise.then(fn => fn());

//             // A função não é executada automaticamente
//             // Ela apenas é entregue ao then


//             // Diferença importante

//             resolve(console.log("oi"));

//             // Aqui você executa a função antes
//             // O que vai para o then é undefined

//             resolve(() => console.log("oi"));

//             // Aqui você retorna a função, sem executar


// // 2️⃣ Resumo pequeno

// // Resolve

//     // Quando você chama:

//         resolve("ok");

//     // Você está dizendo ao motor JS:

//         // "Essa Promise terminou com sucesso
//         // e o valor final dela é ok."

//     // Tecnicamente:

//     // O estado da Promise muda de:

//         // pending → fulfilled

//     // O valor interno passa a ser:

//         // "ok"

//     // Esse valor será recebido por qualquer then():

//         promise.then(valor => {
//         console.log(valor); // "ok"
//         });


// // Reject / catch

//     // Quando você chama:

//      reject("erro");

//     // Você está dizendo ao motor JS:

//         // "Essa Promise terminou com falha
//         // e o motivo do erro é erro."

//     // Tecnicamente:

//     // O estado da Promise muda de:

//         // pending → rejected

//     // O valor interno passa a ser:

//         // "erro"

//     // Esse valor será recebido por qualquer catch():

//         promise.catch(erro => {
//         console.log(erro); // "erro"
//         });

// // Se não chamar resolve nem reject

//     new Promise((resolve, reject) => {
//     // nada
//     });

// // Resultado:

//     // A Promise fica pendente para sempre
//     // Nenhum then ou catch será chamado

// //--

// // Conclusão rápida

//     // valor inicial: pending
//     // resolve(valor) → sucesso(fulfilled) → then(valor)
//     // reject(erro) → falha(rejected) → catch(erro)
//     // O valor pode ser qualquer coisa (inclusive função)
//     // Promise sem resolve nem reject nunca termina

//     // resolve entrega o valor ao then
//     // reject entrega o valor ao catch

// //-----------------

// Exemplo de Promise consumindo API real

const fetch = globalThis.fetch || require("node-fetch"); // só para Node.js < v18

// Criamos uma Promise explícita
const apiPromise = new Promise((resolve, reject) => {
  // Fazemos a requisição para a API
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
      if (!response.ok) {
        // Se o status não for 200-299, rejeitamos a Promise
        reject(`Erro na requisição: ${response.status}`); //Esse reject() é opcional. Serve para que o .catch() externo (ou outro then com segundo argumento) saiba que deu erro.
      } else {
        // Se tudo estiver certo, transformamos em JSON e resolvemos a Promise
        return response.json();
      }
    })
    .then(data => resolve(data)) // resolve: Promise agora está fulfilled, valor = data, que é o response.json() retornado do primeiro then.
    .catch(err => reject(err));  // reject: qualquer erro da requisição vai para catch
});

// Consumindo a Promise
apiPromise
  .then(API_data => {
    // Este bloco é chamado se a Promise foi resolvida com resolve(data)
    console.log("Dados recebidos da API:");
    console.log(API_data);
  })
  .catch(erro => {
    // Este bloco é chamado se a Promise foi rejeitada com reject(...)
    console.error("Ocorreu um erro:", erro);
  });


// Observação importante:

    // Mesmo que você tenha dois reject() diferentes, a Promise só será rejeitada uma vez.

    // Chamadas de resolve() ou reject() depois da primeira são ignoradas.

// É comum ter esses dois tipos de rejeição:

    // reject() manual, quando o status HTTP não é OK

    // reject() no catch, para erros de rede ou JSON


//------------------------------

// O .catch() é como um await + try/catch embutido só para aquela Promise.
// Ele escuta a Promise e reage se ela for rejeitada, sem precisar pausar a função inteira.

// Ou seja: 

  promessa.catch(e => console.log(e))

// funciona independentemente do await.

//------------------------------------------

// FINALLY

// Ficar atento, que a partir do ES2019 a Promise já tem a propriedade 'finally', que serve para qualquer tipo de caso (é igual no try-catch)

// Exemplo curto:

  Promise.resolve(42)
  .then(value => console.log('Sucesso:', value))
  .catch(err => console.log('Erro:', err))
  .finally(() => console.log('Sempre executa'));


// O 'finally' não recebe argumento algum. Ele é “esvaziado” de parâmetro de propósito.

// Por que isso acontece?

  // Em uma Promise, then e catch são “pass-through”: eles podem ler o valor ou o erro e devolver outro valor para o próximo then.

// 'finally' não deve alterar o valor ou o erro da cadeia, ele só serve para executar algo de limpeza/finalização, tipo:

Promise.resolve(42)
  .finally(() => console.log('Sempre executa')) // não interfere no valor
  .then(value => console.log(value)); // 42 ainda passa aqui


// Se 'finally' recebesse o valor ou o erro, você poderia acidentalmente alterar a cadeia de Promises. Por isso ele é “desacoplado” do fluxo.

// Diagrama visual:

  //     Promise --> then --> then --> catch
  //                \
  //                 --> finally (não altera nada, não recebe valor)

// Então, resumindo:

  // then: recebe valor/resolução, pode transformar e passar adiante
  // catch: recebe erro, pode tratar e passar adiante
  // finally: não recebe nada, só executa código de limpeza, e o valor/erro continua passando para o próximo then/catch

//-----

// É possível “pegar o valor dentro do finally” sem quebrar a cadeia usando uma variável externa ou encapsulando o valor. Aqui vai um exemplo curto:

let resultado; // variável para guardar o valor

Promise.resolve(42)
  .then(value => {
    resultado = value;       // salva o valor
    return value * 2;        // continua a cadeia
  })
  .finally(() => {
    console.log('Valor dentro do finally:', resultado); // acessa aqui
  })
  .then(value => {
    console.log('Valor final:', value); // 84
  });


// Como funciona:

  // 'finally' não recebe argumento, mas você pode usar variáveis externas.
  // O valor original da Promise continua passando para o próximo then.

// Outra forma, mais “auto-contida”, é criar uma função que retorna um 'finally' customizado:

function tapFinally(callback) {
  return promise => promise.finally(() => callback(promise));
}

let p = Promise.resolve(42);

tapFinally(p => console.log('Dentro do finally, Promise original:', p))(p)
  .then(value => console.log('Valor final:', value));


// Essa segunda forma é um pouco mais avançada, mas mostra como você inspeciona a Promise sem alterar o fluxo.

// O ChatGPT deu alguns outros exemplos mais curtos e tal, mas de menor legilibilidade. Não faz sentido, principalmente para aprendizado.