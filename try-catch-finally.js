// Exemplo de funcionamento de um try catch.

console.log('-----Com o try-catch. Erro capturado, execução prossegue-----')

function somar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Ambos os argumentos devem ser números');
  }
  return a + b;
}

function calcular() {
  try {
    somar(3, 'a');  // Vai gerar um erro
  } catch (error) {
    console.log('Erro capturado:', error.message); // Loga o erro, mas a execução continua
  }

  console.log('Execução continua após o erro.');
}

calcular();


console.log('Até aqui tudo em ordem.')
console.log('----------------------')


// remova o try-catch e será lançado um erro no stack trace. Vejamos no calcular2, onde o try-catch foi suprimido:
console.log('-----Agora sem o try-catch, dará erro no stack trace-----')


function calcular2() {
//   try {
    somar(3, 'a');  // Vai gerar um erro
//   } catch (error) {
//     console.log('Erro capturado:', error.message); // Loga o erro, mas a execução continua

    console.log('Este jamais será impresso.') // Não será impresso por causa do erro em somar(3, 'a');

  }

console.log("Execução não continua porque antes do erro. Já que o erro acontecerá ao chamar calcular2(), que chamar somar(3,'a'), que então gerará o erro.");
// }

calcular2(); // O erro é acusado no stack trace ao tentar rodar isso sem o try-catch.

// CATCH 

// catch pega qualquer exceção lançada dentro do try,
// seja por você (throw) ou pela própria linguagem (built-in).

  try {
    JSON.parse("isso não é JSON"); // erro built-in
  } catch (e) {
    console.log("Erro capturado:", e.message);
  }

  try {
    const x = y;          // ReferenceError
  } catch (e) {
    console.log(e.name); // ReferenceError
  }

  try {
    null.f();             // TypeError
  } catch (e) {
    console.log(e.name);  // TypeError
  }


// O QUE O TRY-CATCH NÃO PEGA

  try {
    setTimeout(() => {
      throw new Error("erro async");
    }, 1000);
  } catch (e) {
    console.log("não pega");
  }

// ❌ Não pega porque o erro ocorre fora do fluxo síncrono do try.

// ✔️ Correto:

  setTimeout(() => {
    try {
      throw new Error("erro async");
    } catch (e) {
      console.log("agora pega");
    }
  }, 1000);


// Resumo final

  // ✅ try/catch funciona com funções built-in

  // ✅ funciona sem throw explícito

  // ❌ não pega erro assíncrono fora do bloco

  // 🔥 só pega erros lançados durante a execução do try

// FINALLY

// Sempre roda. E vem opcionalmente depois de um try. Não precisa do catch no meio do caminho.

/*
O `finally` sempre vem associado a um try, geralmente junto com catch, mas ele não é obrigatório que exista um catch. O ponto é: ele roda independente de erro.

Estrutura típica:
*/

try {
  // código que pode lançar erro
} catch (e) {
  // captura o erro
} finally {
  // sempre executa, para limpeza ou finalização
}

/*
Alguns pontos-chave:

1. Sempre roda, com ou sem erro.
2. Pode ser usado sem catch, mas não faz sentido sem try:
*/

try {
  console.log("try, sem catch");
} finally {
  console.log("finally roda de qualquer forma");
}

/*
3. Não recebe nenhum parâmetro — diferente do catch, que recebe o erro.
4. Pode alterar o fluxo se fizer return ou lançar outro throw.

Então, resumindo: finally é um bloco de finalização ligado a try (com ou sem catch) e não pega erro, só garante execução.
*/

