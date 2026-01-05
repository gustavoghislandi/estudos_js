// Declarações de variáveis com 'const' e 'let'

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