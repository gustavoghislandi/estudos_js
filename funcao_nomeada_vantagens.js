//  Função Nomeada: Vantagens

// 1. Recursão:
//    Funções nomeadas permitem chamadas recursivas, pois o nome da função está disponível dentro de seu escopo.

   function fatorial(n) {
     if (n <= 1) return 1;
     return n * fatorial(n - 1); // Chamada recursiva
   }

// 2. Depuração (Stack Trace):
//    O nome da função aparece no stack trace quando ocorre um erro, facilitando a depuração. (como aparece a linha, não sei se é tão necessário assim)

function somar(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Um dos argumentos não é um número');
  }
  return a + b;
}

function calcular() {
  somar(3, 'a');  // Vai gerar um erro com stack trace
}

// calcular();


    // Stack Trace:

    //    Uncaught NaN
    //        at somar (<path-to-file>/funcao_nomeada_vantagens.js:16:11)
    //        at calcular (<path-to-file>/funcao_nomeada_vantagens.js:22)

// 3. Legibilidade:
//    O nome da função torna o código mais claro, descrevendo sua finalidade e facilitando o entendimento.

   function calcularTotal() {
     return 100;
   }

//---------- chamando as funções para exemplificar

console.log(fatorial(5))
console.log(calcularTotal())
console.log(calcular());


// Sobre a recursividade:

// Alternativa usando uma expressão de função autoinvocável (IIFE):

// Se você quer uma função anônima que se autorreferencie, pode usar algo assim:

const fatorial2 = (function(n) {
  if (n <= 1) return 1;
  return n * arguments.callee(n - 1);
});

// Porém, ATENÇÃO:
// O uso de arguments.callee foi descontinuado em modo estrito ('use strict') e não é recomendado. Além disso, essa abordagem é menos clara e não é idiomática.

console.log(fatorial2(5))