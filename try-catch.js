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

