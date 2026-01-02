// Iteração é definida por dois conceitos centrais: iteradores e iteráveis.

// Um iterável está ligado a um iterador, que define como ele será percorrido.

// O objetivo é prover uma forma de sequencialmente acessar os elementos de um iterável sem expor sua representação interna, retirando dele a responsabilidade de saber como acessar e caminhaar sobre sua estrutura.

// ITERADORES

// Iterador é um objeto que sabe como acessar, um a um, os itens de um iterável, enquanto mantém o status da posição atual na estrutura. Esses objetos (os iteradores) oferecem o método 

    // next()

//  que retorna duas propriedades: value e done.

// 'value' vai apresentar o valor do item.
// 'done irá ser false e se mostrar como true, quando a estrutura do iterável tiver terminado.

// Exemplo:

// Se tivermos uma coleção com um único número (o número 1) e chamarmos o método next() teremos:

    // iterável.next(); // {value: 1, done: false}

// Chamando novamente, não haverá mais itens na coleção, que foi toda percorrida, com isso, done fica true:

    // iterável.next(); // {value: undefined, done: true}

// ITERÁVEIS

// Um objeto é definido como iterável se ele define explicitamente o seu comportamento de iteração. Para isso, é necessário que ele implemente o seu iterador na propriedade de chave:

    // Symbol.iterator

// Symbol.iterator é uma propriedade que faz parte de um símbolo global no JavaScript.

/* No JS, alguns tipos são iteráveis por padrão:

    Arrays
    Strings
    Maps
    Sets

*/

var bruxos = ['Harry Potter', 'Hermione Granger', 'Rony Weasley']

var iteradorBruxos = bruxos[Symbol.iterator]();

console.log("-----valor de cada next()-----")

console.log(iteradorBruxos.next()); // {value: Harry Potter, done :false}
console.log(iteradorBruxos.next()); // {value: Hermione Granger, done :false}
console.log(iteradorBruxos.next()); // {value: Rony Weasley, done :false}

console.log(iteradorBruxos.next()); // {value: undefined, done :true}


// O iterador veio da propriedade Symbol.iterator. Em seguida usou-se o seu método next() para passar por toda a lista.

// Os parênteses indicam que você está invocando o método Symbol.iterator. Quando você faz bruxos[Symbol.iterator](), você está chamando o método que vai criar um iterador para o array bruxos. Esse iterador possui o método next(), que pode ser usado para acessar os itens do array, um por um.

// Em resumo, chamamos um método do objeto iterável que criará um iterador (um método next(), por exemplo) e esse poderá ser usado para percorrer o iterável.

// Quando você usa um laço for...of em um iterável, o JavaScript chama automaticamente o método Symbol.iterator().

// Na prática, sempre se usa o for...of e geradores.

// Um exemplo com do-while:

// Aqui é a classe só para poder funcionar os próximos códigos.
class ChapeuSeletor {

    fazerSelecaoDaCasa(pessoa) {
        const casas = ["Grifinória", "Corvinal", "Lufa-Lufa", "Sonserina"];
        const casa = casas[Math.floor(Math.random() * casas.length)];

        return { pessoa: pessoa, casa: casa };
    }
}


// O exemplo com do-while é este:

console.log("-----iteração com do-while-----")

var iterador = bruxos[Symbol.iterator]();
var proximo = iterador.next();

do {
    var bruxo = proximo.value;
    console.log(new ChapeuSeletor().fazerSelecaoDaCasa(bruxo));
    proximo = iterador.next();
} while (!proximo.done)



/* Explicação do Math usado acima

Math.random() gera um número decimal entre 0 (inclusive) e 1 (exclusivo).

Multiplicação: Multiplicamos esse número por casas.length para fazer com que ele se encaixe no intervalo de índices válidos para o array.

Math.floor() arredonda para baixo esse número, garantindo que o índice será um número inteiro.

Finalmente, usamos esse índice para acessar o valor correspondente no array casas.

*/

// Agora usando o exemplo do chapéu com for..of (que já possui um iterador), para mostrar a diferença:

console.log("-----iteração com for...of-----")

for (bruxo of bruxos){
    console.log(new ChapeuSeletor().fazerSelecaoDaCasa(bruxo));
}