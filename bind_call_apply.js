// Resumo rápido:

    // bind → retorna uma nova função com 'this' fixo.

    // call → invoca a função imediatamente com 'this' e argumentos separados.

    // apply → invoca a função imediatamente com 'this' e argumentos como array.

// Em outras palavras:

// bind para usar um this. 
// call para rodar a função imediatamente (ela se atravessa no caminho mesmo, se antecipa), com um this e argumentos passados. 
// apply é a mesma coisa que o call, só que o argumento é um array.


// BIND

// A função principal do 'bind' é indicar (ou fixar) o contexto do 'this' de uma função.

// O 'bind', ao ser invocado, cria uma nova função com o mesmo corpo e escopo da função original, mas com o 'this' fixo no valor que foi passado como argumento para o 'bind'.

// Pense no bind como um “aperto de mão” da função com um objeto: a função sempre vai usar esse objeto como this, não importa quem a chame.

console.log("-----bind----")

const equipe = {
    nome: "Guerreiros Z",
    membros: ['Goku','Vegeta', 'Kuririn'],
    membrosDaEquipe: function() { 
        this.membros.forEach(function(membro){ // função callback (parâmetro dentro da função forEach)
            console.log(`${membro} é da equipe ${this.nome}`);
        }.bind(this)); // Este this é o mesmo this de membrosDaEquipe.
    }
}

equipe.membrosDaEquipe()

// CALL

// Seria uma forma de executar agora/imediatamente, com contexto garantido.

// A função principal do 'call' é executar uma função imediatamente, 
// definindo explicitamente o valor de 'this' e passando os argumentos separadamente.

// O call invoca a função que está “anexada” a ele imediatamente, usando o this e os argumentos que você passa. 
// Nesse sentido, ele serve para priorização de chamadas em contextos grandes.

// Pense no 'call' como “emprestar o contexto”: você chama a função agora, usando o objeto que passar como 'this'.

// O 'call' não serve para iteráveis, você pode até passar mais de um argumento, mas, em geral, para isso você pode usar o 'apply' que usa array.

// Um uso típico é priorizar ou forçar a execução de uma função em um contexto específico, por exemplo:

    // Quando você quer garantir que uma função use um certo this sem precisar criar uma nova função (ao contrário do bind).

    // Em sistemas grandes, frameworks ou bibliotecas, é usado para invocar métodos de objetos específicos imediatamente, especialmente quando o mesmo método pode ser chamado em contextos diferentes.

    // Então sim, você pode pensar no call como uma “forma de executar agora com contexto garantido”, enquanto o bind é “prepare a função para executar depois com contexto fixo”

console.log("-----call----")

const equipeCall = {
    nome: "Guerreiros Z",
    membros: ['Goku','Vegeta','Kuririn'],
    membrosDaEquipe: function() { // Exemplo 1: imprimir um membro por vez usando call
        this.membros.forEach(function(membro){
            // chamamos a função imediatamente com 'this' igual ao contexto da função pai
            (function() {
                console.log(`${membro} é da equipe ${this.nome}`);
            }).call(this); // this aqui é 'equipeCall'
        }, this); // também podemos passar 'this' para o forEach, mas call garante
    },
    
    todosMembros: function() { // Exemplo 2: imprimir todos os membros concatenados usando call
        (function(membros){
            console.log(`${membros.join(", ")} são da equipe ${this.nome}`);
        }).call(this, this.membros);
    }
}

equipeCall.membrosDaEquipe();
equipeCall.todosMembros();

// Executa a função imediatamente

// O primeiro argumento é o this

// Os próximos argumentos são os parâmetros da função, passados normalmente

//-----------

// ⚠️ Isto abaixo não funciona, porque call executa a função imediatamente.
// Pois a função dentro do forEach é executada imediatamente e não é passada como callback.

    // console.log("-----call simplificado----");

    // const equipeCall = {
    //     nome: "Guerreiros Z",
    //     membros: ['Goku','Vegeta','Kuririn'],
    //     membrosDaEquipe: function() {
    //         this.membros.forEach(function(membro) {
    //             // chamamos imediatamente usando call
    //             console.log(`${membro} é da equipe ${this.nome}`);
    //         }.call(this)); // ⚠️ Isso **não funciona**, porque call executa a função imediatamente!
    //     }
    // }

    // equipeCall.membrosDaEquipe();



// APPLY

// Em cenários complexos, frameworks e bibliotecas usam apply quando não sabem previamente quantos argumentos serão fornecidos, garantindo que a função seja executada com o contexto correto e todos os parâmetros necessários de forma dinâmica.

console.log("-----apply----")

const equipeApply = {
    nome: "Guerreiros Z",
    membros: ['Goku','Vegeta','Kuririn'],
    membrosDaEquipe: function() { // Exemplo: imprimir todos os membros usando apply
        (function(membros){
            membros.forEach(function(membro){
                console.log(`${membro} é da equipe ${this.nome}`);
            }, this); // passa o this correto para o forEach
        }).apply(this, [this.membros]); // this = equipeApply, argumentos em array
    }
}

equipeApply.membrosDaEquipe();

// O apply precisa envolver a função “pai” que recebe os argumentos, não o callback do forEach.


// O apply não está executando o forEach diretamente.

// Ele executa a função anônima inteira, que dentro dela chama forEach.

// O forEach é chamado normalmente dentro dessa função.

// Em termos de execução:

    // apply dispara a função (function(membros){ ... }).

    // Dentro dela, membros.forEach(...) é executado como um passo normal, usando o this passado via apply.





// ----- Sobre o exemplo do apply acima -----

// PERGUNTA: O apply não poderia ser nesta linha direto?

//    }, this); // passa o this correto para o forEach 

// RESPOSTA: Ver arquivo apply.md

// Resposta resumida, não. O Apply precisa chamar a função pai para executar o forEach corretamente.

  








