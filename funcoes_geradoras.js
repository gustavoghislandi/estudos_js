// Funções geradoras, no JavaScript, são funções que podemos SUSPENDER e retornar sua execução várias vezes. Ou seja, a função é executada, para em um ponto e, quando invocada novamente, continua daquele ponto em que havia parado. (No livro está a palavra interromper, mas, em termos técnicos, a palavra suspender que representa isso adequadamente.)

    function* percorrerLinha470(){
        console.log('Passei pela Rua 1');
        yield 'Fim da linha';
    }

// Perceba o * (asterisco) após a palavra reservada 'function' e a palavra reservada 'yield'.

// O * (asterisco) após a palavra 'function' quer dizer que é uma função geradora.
// Isso indica ao interpretador do JavaScript que essa função pode ser suspendida nos pontos definidos com a palavra 'yield'.

// O * (asterisco) pode fica imediatamente após 'function', como no exemplo anterior, ou imediatamente antes do nome da função, assim:

    function *percorrerLinha471(){
        console.log('Passei pela Rua 1');
        yield 'Fim da linha';
    }

// Pelo explicado até aqui, rodar a função deverá fazer com que imprima 'Passei pela Rua 1' no console. Certo? 

    percorrerLinha470(); // "Nada acontece". É criado um object generator.

// Porém, não é isso que acontece.

// A mensagem não foi exibida porque, quando chamamos uma função geradora, seu corpo não é executado imediatamente.
// Em vez disso, um objeto iterável é retornado.

    console.log(percorrerLinha470()); // Object [Generator] {}

// Esse objeto possui uma função muito útil chamada 'next()'.

// Ao utilizar esse método next(), o corpo da função geradora é executado até a primeira expressão 'yield', que define o valor que será devolvido no retorno da função.

    const linha = percorrerLinha470(); // objeto iterável armazenado na constante 'linha'
    linha.next(); // Passei pela Rua 1

// Para ver o valor retornado pelo 'yield', vamos atribuir o valor de "iteravel.next" e imprimir seu valor no console:

console.log('---- Exemplo 471 (não 470) ----')

    const linha1 = percorrerLinha471(); // Executa, mas nada acontece.
    const parada = linha1.next(); // Passei pela Rua 1 // (foi executado o primeiro next() aqui)

    console.log(parada) // { value: 'Fim da linha', done: false } //

// Perceba que ao alcançar o 'yield', recebemos um objeto literal com as propriedades 'value' e 'done', ao invés de somente uma string.

    // 'value' é o valor ao lado de 'yield'
    // 'done' nos diz se todas as execuções daquela função geradora já ocorreram.

// Então, ao chamar novamente o método, teremos o valor de 'done' como 'true', agora:

    console.log(linha1.next()) // Executa next() e imprime no console.

// ATENÇÃO: 
    // Fique atento que 'parada' é uma referência para linha1.next(). Ao criar a variável, next() foi chamado, mas ao usar console.log(parada), next() não roda novamente e daria como resultado { value: 'Fim da linha', done: false }.
    // Porém, ao chamar console.log(linha1.next()), aí sim a função roda e termos o valor { value: undefined, done: true }

// Vejamos um exemplo com mais yields:

console.log('---- Exemplo 472 ----')

    function *percorrerLinha472(){
        console.log('Passei pela Rua 1');
        yield 'Parada 1';
        console.log('Passei pela Rua 2');
        yield 'Parada 2';
        console.log('Passei pela Rua 3');
        yield 'Parada 3';
        console.log('Passei pela Rua 4');
        yield 'Parada 4';
        console.log('Passei pela Rua 5');
        yield 'Parada 5';
        console.log('Passei pela Rua 6');
        yield 'Parada 6';
        console.log('Passei pela Rua 7');
        yield 'Fim da linha';
        console.log("Este é o último avanço do gerador (linha 117). Sem yield adiante. Portanto, o retorno terá o valor de done como 'true'")
    }

const linha2 = percorrerLinha472(); // Executa e nada acontece porque precisa do next() // AQUI É CRIADO UM objeto generator
let next = linha2.next(); // Passei pela Rua 1
console.log(next); // { value: 'Parada 1', done: false } // Qual o valor de next? É o retorno do último next().
console.log(next); //  { value: 'Parada 1', done: false } // Qual o valor de next? Permanece com o retorno do último next(). Ou seja, não é executado nenhum método next().
next = linha2.next(); // Passei pela Rua 2 // Aqui executa novamente porque a variável next foi reatribuída e chamou linha2.next() para rodar. O ponto de execução já está sobre próximo yield. E continuará DALI EM DIANTE.
console.log(next); // { value: 'Parada 2', done: false } // Novo valor de next.
next = linha2.next(); // Passei pela Rua 3
console.log(next); // { value: 'Parada 3', done: false }
next = linha2.next(); // Passei pela Rua 4
console.log(next); // { value: 'Parada 4', done: false }

linha2.next(); // Passei pela Rua 5                      // ATENÇÃO: Executou... ISSO SIGNIFICA QUE: O generator agora está suspenso no yield 'Parada 5'.
console.log(next); // { value: 'Parada 4', done: false } // AINDA ATENÇÃO: Porém, na execução anterior (linha 93), a variável 'next' não foi reatribuída. Mas o next() já parou em cima do yield da Parada 5.

    // Ou seja:

        // A variável 'next' está com o valor { value: 'Parada 4', done: false }.

        // Porém 'next()' já rodou. Tanto que imprimiu 'Passei pela Rua 5', que vem depois de '{ value: 'Parada 4', done: false }'.

        // "next()" já está sobre o yield da Parada 5. Na verdade, "o ponto de execução do generator" e não o método next() está suspenso no yield 'Parada 5'.

    // Retomando o rumo:

        // COMO AO RODAR 'linha2.next();' (na linha 93) o valor de 'linha2.next();' não foi armazenado (como estava sendo antes sempre na variável 'next), não será possível imprimir 'Parada 5'.
        // O próximo será 'Parada 6':

            next = linha2.next(); // Rodou 'next()'. Imprime 'Passei pela Rua 6'. E 'next' armazena o retorno do próximo yield.
            console.log(next) // Imprime o valor armazenado em 'next', que é o yield da Parada 6, portanto '{ value: 'Parada 6', done: false }'.

// Concluindo:

next = linha2.next(); // Roda next(). 'Passei pela Rua 7'. E 'next' Armazena o retorno do próximo yield.
console.log(next) // { value: 'Fim da linha', done: false }

next = linha2.next(); // último avanço do gerador. Armazenou o último retorno de next(), que é o valor impresso via o console.log da próxima linha. 
console.log(next) // { value: undefined, done: true }



//-----

// Forma mental correta de pensar:

    // next() sempre avança o generator
    // A variável só muda se você reatribuir

// Visualmente:

    // linha2.next()  --> generator avança
    // next = ...     --> variável atualiza

// Se não fizer o segundo passo, você perde o valor.

// PARA ENTENDER BEM: DISTINGUINDO FUNÇÃO GERADORA, OBJETO GENERATOR E MÉTODO NEXT():

    // O generator NÃO é o next() e NÃO é a função percorrerLinha472() em si.

    // O que fica suspenso é o objeto generator, criado quando você chama a função geradora.

// Vamos nomear corretamente cada coisa

    // 1️⃣ Função geradora

        // function* percorrerLinha472() { ... }

        // Isso é uma função
        // Ela é apenas um molde
        // Sozinha, não executa nada e não mantém estado

    // 2️⃣ Objeto generator (o que realmente “anda” e “para”)

        // const linha2 = percorrerLinha472();

        // Aqui é criado um objeto generator
        // É esse objeto que:
        // mantém o estado interno
        // sabe em que linha parou
        // pode ser suspenso e retomado
        // Ele implementa o protocolo de Iterator

        // 👉 É esse objeto (linha2) que fica suspenso no yield 'Parada 5' (e nos outros yield).

    // 3️⃣ Método next()

        // linha2.next();

        // next() é apenas um método
        // Ele:
            // manda o generator avançar
            // devolve { value, done }
            // Ele não guarda estado
            // Ele não fica “em cima do yield”

// Forma correta de dizer (tecnicamente precisa):

    // Correto:
    // O objeto generator retornado por percorrerLinha472() está suspenso no yield 'Parada 5'.

    // Aceitável (didático):
    // O generator está suspenso no yield 'Parada 5'.

    // Incorreto:
    // “O next() está suspenso…”
    // “A função percorrerLinha472() está suspensa…”

// Analogia rápida (bem comum)

    // Função geradora → planta do trajeto
    // Objeto generator (linha2) → ônibus andando na rota
    // next() → botão “andar até a próxima parada”
    // yield → parada de ônibus

    // 👉 Quem fica parado na parada é o ônibus, não o botão nem o mapa.

// Resumo final

    // percorrerLinha472 → função (molde)
    // linha2 → objeto generator (estado + execução)
    // next() → método que avança
    // yield 'Parada 5' → (um dos) ponto(s) onde o objeto generator está (ficou) suspenso
