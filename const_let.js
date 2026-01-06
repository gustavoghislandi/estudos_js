// Declarações de variáveis com 'const' e 'let'

/* resumo rápido:

    var -> Escopo de função
    let -> Escopo de bloco
    const -> Referência constante

*/

// Sabe-se que o JavaScript é fracamente tipado. E que para definir uma varável usa-se a palavra reservada 'var', dá-se um nome a essa variável e um valor.

// Definir (ou inicializar) uma variável é atribuir um valor a ela. O que é diferente de declarar uma variável, que é declarar ela sem um valor ainda.


var numero = 1;
var string = "string";
var objeto = {}
var lista = []
var booleano = true;

// O TypeScript (tecnologia de código aberto adotada pelo Angular como linguagem oficial) é a versão fortemente tipada do JavaScript, que ao final compila para JavaScript puro.

// Pelo JavaScript ser fracamente tipado, isso permite coisas como concatenar string e número.

var texto = "texto";
var num = 5;

console.log(texto + num); // texto5

// O interpretador JavaScript identifica os tipos, convete um deles no outro e, em seguida, realiza operação.

// Até o ES5, 'var' era o único modo de declarar variáveis. Agora, no ES6, há 'const' e 'let'.



// CONST (referência constante)

// O 'const' é para as variáveis (nesse caso, constantes) que não esperamos que mudem de valor com o decorrer do tempo/execução do programa dentro de um escopo.

const dataNascimento = "01/01/2001"; // está como string, não Date

console.log(dataNascimento)

// Ao tentar atribuir outro valor a ela, dará erro decorrente da tentativa de atribuir um novo valor à constante.

    // dataNascimento = "02/02/2002" // TypeError: Assignment to constant variable.

// Porém, IMPORTANTE, não se trata de uma variável constante, trata-se de uma REFERẼNCIA CONSTANTE. Isso significa que o valor não é imutável, sendo possível adicionar e remover propriedades da constante.

// No exemplo abaixo, é feita a declaração do objeto 'pessoa', com uma propriedade 'nome' e em seguida adicionada outra propridade 'idade' a esse objeto, sem problemas.

const pessoa = {nome: 'Rodrigo'} // inicialização da constante pessoa
pessoa.idade = 12 // adição de nova propriedade ao objeto pessoa

console.log(pessoa) // { nome: 'Rodrigo', idade: 12 }

// A referência ao objeto continua a mesma, por isso não dá erro.

    // pessoa = {nome: 'Rodrigo', idade: 12, cabelo: 'azul'} // Assim não é possível. Dará 'TypeError: Assignment to constant variable.'

// Do mesmo modo, tentar atribuir outro objeto (nova referência) à constante já definida, dará erro.

const novaPessoa = {nome: 'Maria'}

    // pessoa = novaPessoa // TypeError: Assignment to constant variable.



// LET

// Pode-se considerar o 'let' como o novo substituto do 'var'.

// Idealmente, ele deve ser usado para declarar variáveis que se espera que mudem de valor e com o tempo de execução do programa.

function soma(x,y) {
    return x + y
}

let resultado = 0;
resultado = soma(2,3);
console.log(resultado); // 5

// Se uma mesma variável, dentro do mesmo escopo, é declarada duas vezes, toma-se erro de sintaxe. Isso acontece tanto para o 'let' quano para o 'const', mas não para o 'var', que é sobrescrito.

var id = 1;
var id = 2;
console.log(id) // 2


// declaração duas vezes

    // var r;
    // var r;

    // let abc;
    // let abc;

// definição/inicialização duas vezes

    // let outroId = 1;
    // let outroId  = 2; // SyntaxError: Identifier 'idd' has already been declared
    // console.log(outroId)

// Então, para o const ou let o sistema não permite sobrescrever a variável

// No ES5, 'var' é limitado por escopo de função. Isso significo que no contexto do exemplo imediatamente abaixo, ele sofrerá alteração, por não estar delimitado dentro de uma função.

var mensagem = 'Olá!';
{
    var mensagem = 'Adeus!'
}
console.log(mensagem) // Adeus!

// Porém, agora, por causa da delimitação de escopo por função, ele ficará restrito ao seu escopo de função.

var msg = 'Olá!'
function saudacao(){
    var msg = 'Adeus!'
}
console.log(msg) // Olá!

// Então, essa delimitação de escopo do 'var' só ocorre porque há uma função. Se houvesse um, loop de repetição, como um 'for' ou qualquer outro que use somente uma delimitação por bloco, por não ser uma função, isso fará com que o a nova definição de valor ao var sobrescreva o outro var, que está fora do bloco.

// Para evitar isso, é que o 'let' foi criado no ES6. O 'let' possui escopo de bloco.

// Exemplificando para esclarecer:

const arrayVar = [];
    for (var i = 0; i < 5; i++){
        arrayVar.push(function(){
            console.log(i);
        });
    }

const arrayLet = [];
    for (let i = 0; i < 5; i++){
        arrayLet.push(function(){
            console.log(i);
        });
    }


// Assim não dá de ver porque acusa 
// [
//   [Function (anonymous)],
//   [Function (anonymous)],
//   [Function (anonymous)],
//   [Function (anonymous)]
// ]
console.log(arrayVar) 
console.log(arrayLet)

arrayVar.forEach(function(funcao){
    funcao(); // 5 5 5 5 5
})

arrayLet.forEach(function(funcao){
    funcao(); // 0 1 2 3 4
})

// Perceba que com 'var', o 'i' recebeu valor 5 e já nem deveria estar no loop. 

// Já com 'let', 'i' teve o comportamento esperado, delimitado pelo bloco e mesmo que o 'i' ao final da execução seja 5, ele foi delimitado pelo bloco e o seu valor foi adicionado 'corretamente' a cada iteração e não imprimiu o 5 conforme 'esperado', de acordo com a ordem do loop 'for'.

// Ou seja, como as variáveis declaradas com var possuem escopo de função, toda ver que atribuímos um novo valor à variável, na verdade estaremos atualizando o valor da mesma referência. Tanto que se atribuir um novo valor a var 'i' fora do loop, teremos o valor impresso diversas vezes no console.

// var i = 10;

arrayVar.forEach(function(funcao){
    funcao(); // 10 10 10 10 10
});

// let i = 10; // Aqui nem dá porque já acusa como já declarado e não permite sobrescrição (ele foi declarado lá dentro do for do arrayVar, afinal, como var, indo além do bloco. Mas se você comentar lá e permitir o let i = 10, ainda assim irá imprimir 0 1 2 3 4 no forEach abaixo)

arrayLet.forEach(function(funcao){
    funcao(); // 0 1 2 3 4
})

// Então, por causa do escopo de bloco, 'i' fora do bloco e dentro do bloco serão 'i's diferentes. Serão referências diferentes.

// ------

// É bastante comum usar letras maiúsculas para nomear variáveis que são constantes. Praticamente considerado uma boa prática. 

var API_KEY = 'xxxxxxxxxxxxx';

// Porém, nada nisso impede essa variável de ser alterada. O 'const' veio para resolver isso.

// Diferenciar constantes ou não também torna o código mais claro. Quanto maior for a aplicação, maiores as chances de dar problemas e mais difícil de "debuggar" fica.

// ------------------

// HOISTING (conceito importante em JS) (içamento para o topo de um escopo)

// No JavaScript, a declaração das funções e variáveis possuem um efeito de Hoisting (içamento). Este nome é dado ao comportamento de mover declarações para o topo de um escopo (global ou não).

// Em outras palavras, isso significa que é possível usar uma variávl ou função antes mesmo de declará-la no código. Como no exemplo abaixo, em que chama-se a função antes mesmo de realmente declarar ela. Sem acusar erro.

imprimirNome('Mateus'); // Mateus

function imprimirNome(nome) {
    console.log(nome);
}

// Esse comportamente ocorre porque, antes da execução, a declaração da função é movida para o topo do escopo. Então, na verdade, o que é executado é:

    // function imprimirNome(nome) {
    //     console.log(nome);
    // }

    // imprimirNome('Mateus'); // Mateus

// No ES6, o "hoisting" do 'let' e do 'const' é diferente do de 'var' e de funções.

// Quando uma variável é declarada usando 'let' ou 'const', ela possui o que se chama de "Temporal Dead Zone" (TDZ). Esse nome descreve o comportamente de que, no seu escopo, esse tipo de variável será inacessível até que a execução alcance sua declaração.

// Para exemplificar:

let valor = 0;

if (true) {
    // novo escopo, o TDZ do (novo) 'valor' começa, mas só porque valor foi declarado aqui dentro do bloco, senão usaria o valor de fora (0).

    // console.log(valor)

    let valor; // Ao declarar valor aqui dentro, isso causa ReferenceError no  console.log(valor) de cima (duas linhas acima).
    console.log(valor) // Esse segundo console.log(valor), sem o erro do primeiro, dará como undefined.

    valor = 1;

    console.log(valor) // 1
}

console.log(valor) // 0

// Para deixar claro a questão do ReferenceError. No caso abaixo não dará erro:

let outro_valor = 3;

if (true) {
    // Aqui será impresso no console sem problemas, porque não foi declarada uma variável de mesmo nome dentro deste bloco.
    console.log(outro_valor) // 3

    // se aqui fosse declarada 'let outro_valor;' já seria o suficiente para causar erro de referência.
}

console.log(outro_valor) // 3

// Essa atualização do ES6 evita diversos problemas em que os valores resultantes se tornavam estranhos.

/*
Conclusão:

Sempre use let ao invés de var.
Se precisar que seja uma referência constante, que não deve ser alterada use o const.
O const, é referência constante, então acaba que se for, por exemplo, um objeto, ele pode sofrer ainda assim, adição ou remoção de propriedades.
O valor de uma const deve ser sempre declarado logo de início. Do contrário, dará erro.
O const pode ter alteradas as propriedades de objetos, ou elementos de arrays, ou métodos de funções de:

    - Arrays
    - Objetos
    - Funções
    - Instâncias de classes
    - Mapas (Maps)
    - Conjuntos (Sets)

porém nenhum deles poderá sofrer reatribuição (ou seja, você não pode fazer algo como apontar a variável const para um novo objeto, array, função, etc.). Isso se aplica aos tipos de referência listados acima.
*/