// reduce — resumo rápido

// Sintaxe geral do reduce

    // array.reduce((acumulador, elementoAtual, indice, arrayOriginal) => {
    //     // lógica
    //     return novoAcumulador;
    // }, valorInicial);

//----- RELEVANTE:

    // O mínimo obrigatório é ter o acumulador e o elemento.

    // Altamente recomendável ter o valorInicial do acumulador.

//-----

// Parâmetros da função callback

// A função passada ao reduce recebe até 4 parâmetros:

// acumulador
    // É o valor “acumulado” até o momento
    // O que você retorna em uma iteração vira o acumulador da próxima (ver exemplo 2 que está mais didático)

// elementoAtual
    // É o valor do array na posição atual

// indice (opcional)
    // Índice do elemento atual

// arrayOriginal (opcional)
    // O array sobre o qual o reduce está sendo aplicado

// Valor inicial (valorInicial)
    // É o valor inicial do acumulador
    // Evita erros com arrays vazios
    // Boa prática: sempre usar

// reduce serve para transformar um array em um único valor
    // (soma, média, objeto, etc.)

// ===============================
console.log('-----Exemplo 1-----')
// Exemplo 1 — normal (mais comum) 
// Soma todos os números do array
// ===============================

const numeros = [1, 2, 3, 4];

const soma = numeros.reduce((acumulador, elementoAtual) => {
    return acumulador + elementoAtual;
}, 0);

console.log(soma); // 10



// ===============================
console.log('-----Exemplo 2-----')
// Exemplo 2 — completo
// Usa todos os parâmetros do reduce
// ===============================

const numeros2 = [10, 20, 30];

const resultado = numeros2.reduce((acumulador, elementoAtual, indice, arrayOriginal) => {
    console.log(`--Início da ${indice+1}ª iteração:`)

    console.log("   acumulador:", acumulador);
    console.log("   elementoAtual:", elementoAtual);
    console.log("   indice:", indice);
    console.log("   arrayOriginal:", arrayOriginal);

    console.log(`      return ${acumulador} + ${elementoAtual} (acumulador + elemento atual), que é = ${acumulador + elementoAtual} <- esse é o valor do return, que está indo para o acumulador`); // Isso mostra o que está acontecendo no return abaixo

    console.log("---------------------------------")

    return acumulador + elementoAtual; // acumulador recebe... (acumulador + elementoAtual)

}, 0); // valor inicial do acumulador

console.log(resultado); // 60



// ===============================
console.log('-----Exemplo 3-----')
// Exemplo 3 — outro uso comum
// Contar ocorrências em um array
// ===============================

const frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

const contagem = frutas.reduce((acumulador, elementoAtual) => {
    acumulador[elementoAtual] = (acumulador[elementoAtual] || 0) + 1;
    return acumulador;
}, {});

console.log(contagem);
// { maçã: 3, banana: 2, laranja: 1 }
