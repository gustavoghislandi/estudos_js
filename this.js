// Contexto de execução (THIS)

// Em termos simples, o 'this' é uma referência ao objeto no qual a função foi invocada.



// REGRA PRÁTICA: Sempre que você precisar usar o this de fora da função, use arrow function.

//                Ou atribua o this a uma variável (menos recomendável por poder causar confusão).
//                Ou use o método 'bind', determinando qual o contexto. Ex: .bind(this) linkado a chave } do bloco da função a qual você quer determinar o contexto.





// Sempre que executamos uma função em JavaScript, ela é associada a um contexto de execução.

// Esse contexto possui uma propriedade denominada:

    // ThisBinding

// que pode ser acessada a qualquer momento através da palavra reservada:

    // this

// O valor do 'this', que chamamos de 'contexto da função', é constante e existe enquanto esse contexto de execução existir.

// Na maior parte dos casos, o valor do 'this' é determinado pela forma como invocamos a função. Ele não pode ser assinado durante a execução, e isso pode ser diferente a cada vez que a função é chamada.

// Quando dizemos "não podemos assinar o this", queremos dizer que não podemos simplesmente atribuir um valor fixo ao this dentro de uma função; ele depende do contexto da invocação da função. Isso pode ser alterado usando algumas ferramentas do JavaScript, como bind(), call() ou apply().

// Em termos simples, O 'this' É UMA REFERÊNCIA AO OBJETO NO QUAL A FUNÇÃO FOI INVOCADA.

// No navegador - também conhecido como contexto global -, o this referencia o objeto global 'Window':

    console.log(this) // Window {...} // Fora do navegador aqui aparece: {}

// Toda função também declarada no escopo global possui o objeto 'Window' como valor do 'this'.

function imprimeContextoDeExecucao() {
    console.log(this);
}

imprimeContextoDeExecucao(); // Era para aparecer: Window ...mas apareceu:

/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
}
*/

// O comportamento que você está vendo é típico do Node.js, onde this no contexto global refere-se ao objeto global, e não ao 'Window', como acontece no navegador.

// No navegador, this dentro de uma função global aponta para o 'Window', mas no Node.js ele aponta para o objeto global.

//---

// Quando uma função representa um método de um objeto, o valor do 'this' passa a ser próprio objeto referenciado:

    const objeto = {
        meuContexto: function() {
            console.log(this);
        },
        atributo: "virtual",
        metodo: function fazCoisas(){
            console.log("Faz coisas como renderizar letras no console.")
        },
        metodo2: function() {
            console.log('Perceba que o nome da função será metodo2')
        }
    };

    objeto.meuContexto(); 
    /* Abaixo o próprio objeto

    {
    meuContexto: [Function: meuContexto],
    atributo: 'virtual',
    metodo: [Function: fazCoisas],
    metodo2: [Function: metodo2]
    }

    */

// A situação começa a ficar confusa quando usamos o this dentro de uma função de callback e acabamos confundindo seu valor.
// O this dentro do callback guarda o valor do objeto pai da função callback e não da função que recebe o callback. Confuso? Vejamos na prática:

// Espera-se que o this referencie o objeto pai. Mas não. Se você clicar dentro da IDE em cada this, são this diferentes.
console.log("-----Exemplo em callback-----")

const equipe = {
    nome: "Guerreiros Z",
    membros: ['Goku','Vegeta', 'Kuririn'],
    membrosDaEquipe: function() { 
        console.log(`Este é o this dentro da função membrosDaEquipe: ${this}`); // Aqui o this é o esperado, o do objeto pai.
        console.log(this)
        this.membros.forEach(function(membro){ // função callback (parâmetro dentro da função forEach)
            console.log(`Este é o this dentro do for.Each, dentro da função membrosDaEquipe: ${this}`); // Aqui o this é object global. Este é o this da função de callback que dá problema.
            console.log(`${membro} é da equipe ${this.nome}`); // está resultando em <membro> é da equipe undefined
        });
    }
}

equipe.membrosDaEquipe()

    // O contexto de execução dela é diferente do contexto de execução do objeto.

    // O this dentro da função de callback não faz referência ao objeto pai porque:

    // A callback é uma função comum
    // Funções comuns (não arrow function) não herdam o this do contexto externo. 
    // O forEach chama essa função sem vínculo com o objeto equipe

// Para resolver isso, uma das formas é atribuir o this a uma outra variável. Vamos usar o 'that', mas poderia ser 'self' também.

console.log("-----Exemplo em callback com 'this' dentro de uma variável-----")
const equipe2 = {
    nome: "Guerreiros Z",
    membros: ['Goku','Vegeta', 'Kuririn'],
    membrosDaEquipe: function() { 
        const that = this;
        console.log(`Este é o this dentro da função membrosDaEquipe: ${this}`); // Aqui o this é o esperado, o do objeto pai.
        // console.log(this)
        this.membros.forEach(function(membro){ // função callback (parâmetro dentro da função forEach)
            console.log(`Este é o this dentro do for.Each, dentro da função membrosDaEquipe: ${that}`); // Agora o that faz referência ao this que referencia o objeto pai.
            // console.log(that)
            console.log(`${membro} é da equipe ${that.nome}`);
        });
    }
}

equipe2.membrosDaEquipe()

// Ao usar arrow function, resolve-se o problema, porque ela herda o contexto externo (o this):

console.log("-----Exemplo em callback com arrow function-----")
const equipe3 = {
    nome: "Guerreiros Z",
    membros: ['Goku','Vegeta', 'Kuririn'],
    membrosDaEquipe: function() { 
        console.log(`Este é o this dentro da função membrosDaEquipe: ${this}`); // Aqui o this é o esperado, o do objeto pai.
        // console.log(this)
        this.membros.forEach((membro) => { // função callback (parâmetro dentro da função forEach)
            console.log(`Este é o this dentro do for.Each, dentro da função membrosDaEquipe: ${this}`); // Agora o this faz referência ao this que referencia o objeto pai.
            // console.log(this)
            console.log(`${membro} é da equipe ${this.nome}`);
        });
    }
}

equipe3.membrosDaEquipe()

// Também é possível resolver usando o método 'bind' (introduzido no ES5):

console.log("-----Exemplo com o método bind----")

const equipe4 = {
    nome: "Guerreiros Z",
    membros: ['Goku','Vegeta', 'Kuririn'],
    membrosDaEquipe: function() { 
        console.log(`Este é o this dentro da função membrosDaEquipe: ${this}`); // Aqui o this é o esperado, o do objeto pai.
        console.log(this)
        this.membros.forEach(function(membro){ // função callback (parâmetro dentro da função forEach)
            console.log(`Este é o this dentro do for.Each, dentro da função membrosDaEquipe: ${this}`);
            console.log(`${membro} é da equipe ${this.nome}`);
        }.bind(this)); // Este this é o mesmo this de membrosDaEquipe.
    }
}

equipe4.membrosDaEquipe()

// O 'bind', ao ser invocado, cria uma nova função com o mesmo corpo e escopo da função original, mas com o 'this' fixo no valor que foi passado como argumento para o 'bind'.