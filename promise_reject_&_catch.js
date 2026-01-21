/**
 * ============================================
 * PROMISES, REJECT, THEN, CATCH e TRY/CATCH
 * ============================================
 */

// OBS: Comente os blocos dos erros 3, 4 e 5 para rodar sem dar erro com stack trace no console.

/*
Pergunta:
"Se eu forçar um reject, qualquer then não vai mais rodar e vai cair no primeiro catch?"
*/

// Resposta:
// Sim. Quando uma Promise é rejeitada, nenhum `.then()` seguinte é executado.
// A execução pula direto para o primeiro `.catch()` encadeado.

Promise.reject('erro 1')
  .then(() => {
    console.log('isso não roda');
  })
  .catch(err => {
    console.log('catch da promise capturou:', err);
  });

/*
Pergunta:
"Reject lança erro?"
*/

// Resposta curta:
// NÃO. `reject` não lança erro JS.
// Ele apenas marca a Promise como rejeitada.

// Mas no fluxo de Promises, o efeito é semelhante a um erro.

Promise.reject('erro 2')
  .catch(err => {
    console.log('reject não lançou erro, mas foi capturado:', err);
  });

/*
Pergunta:
"Exemplo. Se eu tiver uma promise, e usar um reject.
Aí eu só usar promise.then(data)

mas não botar catch encadeado.

Aí em seguida eu faço um try-catch que não dá erro.
Mas ele tem o catch.
Pergunta: Esse catch do try-catch (e não da promise) pega o reject?"
*/

// NÃO pega. Try/catch só captura erros síncronos.
// Reject é assíncrono.

try {
  Promise.reject('erro 3')
    .then(data => {
      console.log(data);
    });
} catch (e) {
  // nunca entra aqui
  console.log('try/catch NÃO pega reject:', e);
}

/*
Pergunta (reformulada pelo usuário):
"Não. Assim:

Promise (resolve, reject){
   reject
  return data
}

try{
 console.log('nada demais e nada a ver com a promise')
}
catch (e) {
   console.log(`Se apareceu este erro é porque ele é do reject da promisse: ${e})
}
"
*/

// Mesmo nesse caso, o try/catch NÃO pega o reject da Promise.

new Promise((resolve, reject) => {
  reject('erro 4');
  return 'data';
});

try {
  console.log('nada demais e nada a ver com a promise');
} catch (e) {
  // nunca entra
  console.log('isso NÃO é executado:', e);
}

/*
Pergunta final (conclusão do usuário):

"Então, sim, o reject lança um erro que pode ser capturado por um catch
que não esteja vinculado a uma promise (ou depois de um then da promise),
ou seja, por qualquer catch (desde que dentro de uma async."
*/

// Correção da conclusão:
//
// ❌ reject NÃO lança erro
// ❌ NÃO pode ser capturado por "qualquer catch"
// ✅ Pode ser capturado por try/catch SOMENTE se houver `await`

/**
 * REGRA FUNDAMENTAL:
 * reject só é capturado por try/catch quando a Promise é awaitada.
 */

// ❌ async SEM await NÃO funciona
async function asyncSemAwait() {
  try {
    Promise.reject('erro 5');
  } catch (e) {
    // nunca entra
    console.log('não captura:', e);
  }
}

asyncSemAwait();

// ✅ async COM await FUNCIONA
async function asyncComAwait() {
  try {
    await Promise.reject('erro 6');
  } catch (e) {
    console.log('try/catch capturou reject com await:', e);
  }
}

asyncComAwait();

/**
 * EQUIVALÊNCIA IMPORTANTE:
 *
 * Dentro de uma função async:
 *
 * await Promise.reject('erro')
 *
 * é o mesmo que:
 *
 * throw 'erro'
 */

async function equivalencia() {
  try {
    throw 'erro 7';
  } catch (e) {
    console.log('throw capturado:', e);
  }

  try {
    await Promise.reject('erro 8');
  } catch (e) {
    console.log('reject capturado via await:', e);
  }
}

equivalencia();

/**
 * CONCLUSÃO FINAL:
 *
 * - reject NÃO lança erro JS
 * - reject NÃO é capturado por try/catch comum
 * - async sozinho NÃO captura reject
 * - await transforma reject em throw
 * - try/catch só funciona com await
 */


//------------------------------

// O .catch() é como um await + try/catch embutido só para aquela Promise.
// Ele escuta a Promise e reage se ela for rejeitada, sem precisar pausar a função inteira.

// Ou seja: 

  promessa.catch(e => console.log(e))

// funciona independentemente do await.