// Funções geradoras, no JavaScript, são funções que podemos SUSPENDER e retornar sua execução várias vezes. Ou seja, a função é executada, para em um ponto e, quando invocada novamente, continua daquele ponto em que havia parado. (No livro está a palavra interromper, mas, em termos técnicos, a palavra suspender que representa isso adequadamente.)

//----------------------------------------------
// Funções geradoras são vantajosas porque economizam memória e são mais eficientes: 
// elas produzem valores sob demanda, sem criar toda a lista de uma vez. Ideal para dados grandes ou infinitos.

// Em JavaScript, uma função geradora (function*) usa lazy loading porque só gera valores quando você pede por eles, em vez de gerar tudo de uma vez.

// Exemplo para uma lista de 20000 dados:

// Com função geradora:

    // você não carrega 20 000 registros
    // busca 200 por vez
    // processa → pede mais (next)
    // para quando quiser

// Isso é perfeito para:

    // paginação
    // streams de dados
    // consultas grandes
    // leitura de arquivos, APIs, cursores de banco

// Sem gerador:

    // traz tudo pra memória
    // só depois começa a usar
    // mais lento e mais caro


//-----------------

// Fiz umas perguntas as ChatGPT para melhorar o entendimento e uso complementar com Banco de Dados:

// PERGUNTA: Mas o próprio banco de dados não faz isso? Ou é melhor o backend processar e o BD ser exclusivo para consultas?

// RESPOSTA:

// Ótima pergunta — aqui entra nuance de arquitetura 👀

// Resposta curta:
    // 👉 o banco JÁ faz paginação, mas isso não elimina a utilidade de geradores no backend.

// Como funciona na prática:

    // 📦 Banco de dados

        // Paginação via LIMIT/OFFSET, cursor, streaming
        // É muito bom em filtrar, ordenar e buscar
        // Deve fazer o máximo possível de trabalho pesado
        //
    // ⚙️ Backend (com geradores)

        // Consome os dados aos poucos
        // Evita carregar tudo em memória
        // Permite pipeline (processar, transformar, enviar, parar)

    // O padrão saudável

        // BD filtra e pagina → backend consome em stream

// Exemplo mental:

    // BD retorna um cursor
    // Backend usa um gerador pra iterar
    // API envia 200, processa, envia mais se precisar

// Quando NÃO usar gerador

    // Resultado pequeno
    // Consulta simples
    // Precisa de acesso aleatório aos dados

// Resumo final:

    // BD não substitui geradores. Eles trabalham juntos.
    // BD busca bem. Backend consome com inteligência 😎

// PERGUNTA: Mas aí no caso, o backend itera um a um os 200 que recebeu?

// RESPOSTA:

// Sim — mas isso não é um problema (na verdade, é o ponto).

// Fluxo típico:

    // 1. BD retorna um batch (ex: 200 registros)
    // 2. Backend itera um a um
    // 3. A cada item:

        // transforma
        // valida
        // serializa
        // envia / acumula
//
    // 4. Para quando quiser

// Iterar 200 objetos em memória é baratíssimo.
// O custo real está em:

    // I/O com o banco
    // rede
    // serialização

// E o detalhe importante 👇
    // O backend não precisa saber do total nem carregar tudo:

        // acabou os 200 → pede mais
        // cliente cancelou → para
        // erro no meio → só processou o necessário

// Resumo mental:

    // BD pagina, backend processa item a item
    // É isso que dá controle, eficiência e escalabilidade 💡


//----------------------------------------------


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


// ITERAÇÃO COM GERADORES


// Ao invés de realizar diversas chamadas, sabendo de antemão os valores, podemos usar laço de repetição 'while' para iterar, verificando o valor de 'next.done' a cada iteração.

// Refazando o exemplo:

console.log('---- Exemplo 473 (exemplo com while) ----')

    function *percorrerLinha473(){
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
        console.log("console.log após o yield 'Fim da linha'. Antes de done: true.")
    }

const linha3 = percorrerLinha473(); // criação do object generator
next = linha3.next(); // Primeiro avanço do generator, fora do while.

while(!next.done){
    console.log(next) // Imprime o valor armazenado em next (valor que o next() retornou)
    next = linha3.next(); // Avança o generator e armazena o valor retornado por next().
}

console.log(next) // Exibe o últmo: { value: undefined, done: true }

// Nota para ajudar na compreensão: Fique atento que, em todos os exemplos, os console.log de dentro da função percorrerLinha47X() não foram armazenados, então não é possível replicá-los, nesse caso específico. 

// ITERAÇÃO USANDO O FOR...OF

// O método de iteração de array 'for...of' foi criado de modo a interpretar funções geradoras.
// Isso nos permite iterar qualquer tipo de estrutura de dados.

// Façamos um teste de exemplo usando o 'for...of':

console.log('---- Exemplo 473 (exemplo com for...of) ----')

const linha4 = percorrerLinha473();

for (let parada of linha4){ // para cada yield (parada) do object generator
    console.log(parada)
}

// ENTENDENDO O Symbol.iterator (outra novidade do ES6)

//---

    // Cada objeto só pode ter um Symbol.iterator ativo.

    // Ele representa o protocolo padrão de iteração de um objeto.

    // Um objeto pode ter vários Symbols diferentes

    // Mas só existe um Symbol que o for...of reconhece como iterador padrão

    // Esse símbolo é exatamente Symbol.iterator

    // Então, quando você faz:

        // obj[Symbol.iterator] = ...


    // Você está dizendo:

        // “Esta é a única forma oficial de iterar esse objeto usando for...of.”

    // Se você tentar definir outro:

        // obj[Symbol.iterator] = outraFuncao;

    // você substitui o anterior, não cria um segundo iterador.

    // O for...of sempre faz, conceitualmente:

        // const iterator = obj[Symbol.iterator]();

    // Sem alternativas.

//---

// Para realmente entender como a estrutura do 'for...of' consegue interpretar funções geradoras e, a partir delas, iterar qualquer tipo de estrutura de dados, é preciso entender os conceitos de:

    // - Symbol
    // - Symbol.iterator

// O símbolo representa um tipo único e imutável de dado.

// Se usarmos um símbolo como propriedade/índice de um objeto, ele é armazenado de um forma especial, de modo que a propriedade não vai aparecer em enumerações das propriedades do objeto.
// Como no exemplo abaixo, em que definimos um Symbol de nome símbolo e tentamos extrair seu valor:

    const objeto = {
        valor: 10,
        [Symbol('simbolo')]: "Sou um símbolo"
    };

    console.log(objeto.valor); // 10
    console.log(objeto.simbolo); // undefined
    console.log(objeto['simbolo']); // undefined

    // Detalhe extra, ele pode ser acessado por:
    console.log(Object.getOwnPropertySymbols(objeto)) // [ Symbol(simbolo) ]


// No ES6, o 'Symbol.iterator' especifica o iterador padrão de um objeto.

// Quando usamos a estrutura 'for..of' para iterar um objeto, o método definido por este símbolo é chamado
// e o iterável retornado é usado para obter valores a serem iterados.

// Isso significa que todos os tipos de objetos iteráveis por padrão no JavaScript possuem este método definido.

// Tomando um objeto do tipo Array como exemplo, podemos recuperar sua propriedade de iteração e usar para iterá-lo:

    const primos = [2,3,5];
    const iterador = primos[Symbol.iterator]();

    console.log(iterador.next()); // { value: 2, done: false }
    console.log(iterador.next()); // { value: 3, done: false }
    console.log(iterador.next()); // { value: 5, done: false }

    console.log(iterador.next()); // { value: undefined, done: true }

    //-----
    // o iterador é um objeto com método next()

    // o for...of nada mais faz do que chamar isso por baixo dos panos
    //-----

// No caso das funções geradoras, elas também possuem um método de iteração na propriedade Symbol.iterator definido.

// É por isso que, quando as colocamos no laço for...of, o laço é iterado perfeitamente.

// O mesmo pode ser feito para qualque estrutura de dados que você definir.

// Vamos supor uma estrutura que representa um equipe:

    const equipe = {
        quantidade: 3,
        maturidade: 'alta',
        senior: 'Luís',
        pleno: 'Carla',
        junior: 'Marcos'
    }

    // Como podemos fazer para iterar os integrantes dessa equipe, sendo que quantidade e maturidade não interessam?
    
    // Podemos definir uma função geradora no Symbol.iterator para a estrutura, de modo que ela retorne somente os membros da equipe:

    const equipe2 = {
        quantidade: 3,
        maturidade: 'alta',
        senior: 'Luís',
        pleno: 'Carla',
        junior: 'Marcos',
        [Symbol.iterator]: function* () {
            yield this.senior;
            yield this.pleno;
            yield this.junior;
        }
    }

    // Agora o resultado com o for...of:

    for (let integrante of equipe2){
        console.log(integrante)
    }

// Ou seja, a partir do uso do Symbol.iterator com a função geradora, definiu-se a forma de iteração daquele objeto, como ele seria percorrido.

// Em outras palavras:

    // Ou seja, ao implementar o Symbol.iterator com uma função geradora, definimos explicitamente o protocolo de iteração daquele objeto, controlando como e quais valores serão produzidos quando ele for percorrido.

//-------------
// O que É possível (e comum)
    // Criar outros métodos de iteração

// Você pode oferecer outras formas de percorrer, mas fora do for...of:

    const equipe3 = {
    senior: 'Luís',
    pleno: 'Carla',
    junior: 'Marcos',

    *iterarNomes() {
        yield this.senior;
        yield this.pleno;
        yield this.junior;
    },

    *iterarCargos() {
        yield 'senior';
        yield 'pleno';
        yield 'junior';
    }
    };

    // Uso:

        // for (const nome of equipe3.iterarNomes()) { ... }
        // for (const cargo of equipe3.iterarCargos()) { ... }


    // Aqui você tem várias estratégias de iteração, mas só uma é o padrão.

// Em JavaScript, uma função geradora (function*) usa lazy loading porque só gera valores quando você pede por eles, em vez de gerar tudo de uma vez.