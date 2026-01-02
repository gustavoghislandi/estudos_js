// Laço de repetição FOR...OF

// Esse tipo de laço de repetição foi criado para percorrer um objeto se, e somente se, ele for iterável.

// Ele já traz o valor de cada item, além de controlar automaticamente a iteração.

// Sintaxe:

const iteravel = ['a','b','c']

for (variavel of iteravel) {
    //corpo
}

// 'variavel' é uma variável auxiliar que assumirá valores diferentes a cada iteração. Enquanto 'iteravel' é o objeto que será iterado.

// Comum passar por um Array, um Set ou um Map.

var numeros = [1,2,3,4,5,6]

for (numero of numeros){
    console.log(numero)
}

// Saída:
// 1
// 2
// 3
// 4
// 5
// 6


// Por debaixo dos panos, o for...of acessa o iterador da estrutura. Por esse motivo, usar for...of para objetos que não são iteráveis dará erro.

var perfilDoFacebook = {
    nome: "Jonas",
    idade: 23
    // outras propriedades
}

// for (var dado of perfilDoFacebook){ 
//     console.log(dado)
// }

// Vai acusar 'TypeError: perfilDoFacebook is not iterable'

// No passado, acusaria 'TypeError: perfilDoFacebook[Symbol.iterator] is not a function', indicando o uso do iterador que foi visto em iteracao.js

// Para contornar isso, idealmente, deve-se usar o FOR...IN, que vou colocar em outro arquivo, o for...in.js





console.log("----ChatGPT alternativas-----")

console.log("----ex 1-----")
// 1. Usando for...in:
for (var dado in perfilDoFacebook) {
    console.log(dado);  // Vai imprimir as chaves (nome, idade)
}

console.log("----ex 2-----")
// 2. Usando Object.keys():
for (var dado of Object.keys(perfilDoFacebook)) {
    console.log(dado);  // Vai imprimir as chaves (nome, idade)
}

console.log("----ex 3-----")
// 3. Usando Object.values():
for (var dado of Object.values(perfilDoFacebook)) {
    console.log(dado);  // Vai imprimir os valores (Jonas, 23)
}

console.log("----ex 4-----")
// 4. Usando Object.entries() (chave-valor):
for (var [chave, valor] of Object.entries(perfilDoFacebook)) {
    console.log(chave, valor);  // Vai imprimir chave e valor, como 'nome Jonas'
}


