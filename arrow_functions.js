//Arrow functions (mais ao final)

// Existem 3 maneiras de declarar funções em JavaScript. Por meio de:
    
    // Declarações de função ('function declaration');
    // Expressão de função ('function expresion');
    // Invocação do construtor de Function;

// ---------------------

// FUNCTION DECLARATION ('declarada' e nomeada)

// Na declaração de função, não há a necessidade de atribuir uma variável a ela.

// A função é inteiramente içada (hoisting) ao topo do escopo. Podendo ser executada sem dar undefined ou ReferenceError.

function desligar() {
    //corpo da função
}

// Ou seja, é como que além do 'var', 'let' e 'const', existe ainda o 'function'. Por isso você está 'declarando' uma função.

// Portanto, ela não necessita estar atribuída a uma variável.

// Por conta disso, essa função sempre receberá um nome.

// ---------------------

// FUNCTION EXPRESSION (Pode ser função anônima ou não)

// Neste caso, o comportamento de hoisting ocorre somente para a declaração da variável, mas não para a atribuição da função. isso significa que chamar ela antes dará undefined se for declarada com var. Já let e const dará o ReferenceError. (conforme visto em const_let.js)


// Function Expression Anônima
const ligar = function() { // aceita var, let, const
    //corpo da função
}

// Aqui a 'const' ligar recebe como valor uma função, mas é uma 'const', não uma 'function' (como seria na declaração de função).

// Esse tipo é conhecido por função anônima (quem é nomeado é a variável onde ela está)

//---
// Function Expression Nomeada
const turnOn = function turnOnFunc(){
    // corpo da função
}

// Ou seja, na verdade, isso nada mais é que uma função declarada colocada dentro de uma variável.

//------------------

// 3 VANTAGENS DE UMA FUNÇÃO NOMEADA (serve para function declaration e function expression)

// 1. Recursão:

// Funções nomeadas permitem chamadas recursivas dentro de si mesmas, pois o nome da função está disponível no escopo. Isso é essencial para resolver problemas que exigem chamadas repetidas à função, como no caso de cálculos recursivos.

// 2. Depuração:

// Quando ocorre um erro, o nome da função aparece nos logs e no stack trace, o que facilita a depuração. Ter o nome da função visível no erro torna mais fácil identificar onde o problema aconteceu, especialmente em códigos mais complexos.

// 3. Legibilidade:

// Funções nomeadas tornam o código mais legível e intuitivo. O nome da função pode descrever claramente sua finalidade, facilitando a compreensão do que o código faz, tanto para quem o escreveu quanto para outros desenvolvedores.




// ---------------------

// CONSTRUTOR DE Function

// Pouco utilizada, aceita diversos parâmetros, sendo o último o corpo da função.
// Todos os parâmetros e o corpo entram como string

const ligarDesligar = new Function('//corpo da função');
const ligarDesligarComParam = new Function('arg1', 'arg2', 'arg3', '//corpo da função');

// ATENÇÃO: Os parâmetros enrtam sempre na forma de string
const soma = new Function('n1', 'n2', 'return n1 + n2');

console.log(soma(1,2))

// Achei ruim essa sintaxe. Faz sentido que as pessoas não prefiram.

// ---------------------

// ARROW FUNCTION

// Com o ES6, surgiu esta notação. Ela é uma estrutura simplificada para facilitar a implementação de funções por expressão no JavaScript.

// Ela segue esta ordem:

    // Parâmetros dentro de parênteses: (...)

    // Fat arrow: =>

    // Corpo da função entre chaves: {...}

// Sintaxe:

    // (param1, param2, paramN) => {
    //     // corpo da função
    // }

// Possui duas vantagens em relação à sua antecessora:

    // -> São menos verbosas:

// Exemplo:

    const boasVindas = function(nome){ // function expression anônima
        return `Seja bem-vindo, ${nome}`;
    }

console.log(boasVindas("Luiz"))

    // Agora em arrow function:

    const boasVindas2 = (nome) => {
        return `Seja bem-vindo, ${nome}`;
    }

console.log(boasVindas2("Luiz"))

// Foi removido o termo 'function' e à frente do parâmetro foi colocada a 'fat arrow' (=>).

// CURIOSIDADE: Fat arrow é uma contrapartida a 'thin arrow' (->), usada na linguagem CoffeeScript (ela transpila para JS).

    // Como a função feita é em uma única linha, pode-se remover as chaves e o return:

    const boasVindas3 = (nome) => `Seja bem-vindo, ${nome}`;

//------

    // -> O contexto de execução é diferente

    // (ler arquivo this.js)

