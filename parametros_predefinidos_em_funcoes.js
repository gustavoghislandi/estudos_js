// Parâmetros predefinidos em funções

// NOTA IMPORTANTE: A ordem dos argumentos importa em JavaScript. E os argumentos faltantes serão sempre os últimos na ordem.

// No JS, por padrão (default) as funções têm como parâmetro o valor 'undefined' (é como estar declarado, mas não definido).

    function funcao(param1){
        console.log(param1)
    }

    funcao('Argumento') // Argumento
    funcao() // undefined

// Isso também é válido para funções com múltiplos parâmetros:

    function imprimeNomeCompleto( nome, sobrenome, nomeDoMeio){
        console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
    }

    imprimeNomeCompleto('Jorge', 'Matos') // Jorge undefined Matos
    imprimeNomeCompleto('João','Silva', 'Pedro') // João Pedro Silva

// Então, qualquer parâmetro que a função esteja esperando que não for definido, o valor é assumido como undefined na execução. É como estar declarado, mas não definido.

// Até o ES5, era comum o desenvolvedor atribuir um valor para os parâmetros que tivessem como argumento o valor undefined.

    function imprimeNomeCompleto2( nome, sobrenome, nomeDoMeio){
        if (nomeDoMeio === undefined){
            console.log(`${nome} ${sobrenome}`)
        } else {
        console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
        }
    }

    imprimeNomeCompleto2('Jorge', 'Matos') // Jorge Matos
    imprimeNomeCompleto2('João','Silva', 'Pedro') // João Pedro Silva

// No ES6 não há mais a necessidade de atribuir valores predefinidos aos parâmetros via bloco de código da função.

// Agora, é possível atribuir um valor default já no campo dos parâmetros, veja como fica o exemplo anterior:

    function imprimeNomeCompleto3( nome, sobrenome, nomeDoMeio = ""){ // nomeDoMeio recebe "" (string vazia)
        console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
    }

    imprimeNomeCompleto3('Jorge', 'Matos') // Jorge  Matos // Pra mim, só isso de código não ficou bom, porque adicionou um espaço extra entre o nome e sobrenome. Para outros casos a tendência é ser mais útil.
    imprimeNomeCompleto3('João','Silva', 'Pedro') // João Pedro Silva

// Isso é importante para algumas coisas, como não precisar validar valores internamente ou usar duas funções com mesmo comportamento e diferentes assinaturas.


// VALORES 'undefined' E 'null' (IMPORTANTE!)

// Se uma função tiver um valor default predefinido e receber como parâmetro um valor 'undefined', ela usará o valor predefinido:

function multiplicaPor(valor, multiplicador = 2){
    return valor * multiplicador;
}

console.log(multiplicaPor(2,2)) // 4
console.log(multiplicaPor(2,undefined)) // 4

// Para que o valor do argumento seja interpretado intencionalmente como um valor desconhecido e/ou que não existe, precisamos utilizar o 'null' em vez do 'undefined':

console.log(multiplicaPor(2,null)) // 0 // Aqui deu zero, não estava como exemplo no livro. Pensei que 2 * 'null' seria 'null'. 'null' vira 0 em contexto numérico (coerção de tipos em JavaScript).

// Isso me levou a fazer o arquivo coercao_de_tipos.js

// Exemplo do livro:

    function print(valor = ''){
        console.log(valor);
    }

print(); // '' // Fica um espaço sem caracteres aparentes, parecendo que pulou de linha, no console.
print(null); // null

// É preciso ter muito cuidado ao trabalhar com variáveis que podem assumir o valor de 'undefined'.

// REFERENCIANDO OUTROS VALORES PADRÕES

// Podemos definir o valor padrão de um parâmetro como sendo o valor de outro parâmetro vizinho (com isso, ele pode acabar recebendo o valor padrão do vizinho também). Exemplo:

function calculaPotencia(x=2,y=x){
    console.log(x**y) // No livro ele usou Math.pow(x,y). Pra mim não faz sentido, só se for precisar de compatibilidade com JS muito antigo.
}

calculaPotencia(); // 4 
calculaPotencia(2); // 4 
calculaPotencia(3,4); // 81 
calculaPotencia(3); // 27

// No primeiro, y recebeu o valor padrão de x, que é 2.
// No segundo, y recebeu o valor que x recebeu de fora, que é 2 (igual ao padrão).
// No terceiro, y recebeu o valor 4 e x recebeu o valor 3. (Nada de valores padrões)
// No quarto, y recebeu o valor que x recebeu de fora, que é 3. (Para mostrar que não é o padrão que ele recebe, mas o valor de x. O livro viajou aqui, mas eu consertei. ;) )

// NOTA IMPORTANTE: A ordem dos argumentos importa em JavaScript. E os argumentos faltantes serão sempre os últimos na ordem.

// REFERENCIANDO VARIÁVEIS INTERNAS

// É possível também referenciar variáveis que estão fora do escopo da função. Porém, é necessário estar atento aos seus escopos.

const v = 'valor 1';

function funcao2(x = v){
    const v = 'valor 2';
    console.log(`Valor de x dentro da função (que é o v externo): ${x}`)
    console.log(`Valor de v dentro da função (que é o v interno, outro v): ${v}`)
}

funcao2()
          // Valor de x dentro da função (que é o v externo): valor 1
          // Valor de v dentro da função (que é o v interno, outro v): valor 2


// Ou seja, 'x' recebeu o valor de 'v externo'. E o valor de 'v externo' só faz parte da função por meio de 'x'.
// Isso equivaleria a declarar x que recebe v dentro da função, assim:

function funcao3(v){
    const x = v;
    console.log(`Valor de x dentro da função (que é o v externo): ${x}`)
}

funcao3(v) // Valor de x dentro da função (que é o v externo): valor 1

// ATENÇÃO AQUI:
// Só que não é disso que estamos tratando.
// Porque ao chamar a funcao2() sem parâmetros, 'x' recebeu o valor default padrão), que nesse caso é o valor de uma variável externa. É disso que se trata.
// Na funcao3(v), com parâmetro foi só uma forma de escrever, mas o parâmetro o default seria undefined. Veja:

funcao3() // Valor de x dentro da função (que é o v externo): undefined |||| (Na verdade o parâmetro não recebeu o argumento do v externo nem de nenhum outro lugar, por isso undefined.

// UTILIZANDO FUNÇÕES COMO VALORES PADRÕES

// Podemos usar funções (anônimas ou não) como valores padrões de outras funções. 
// Um bom exemplo disso é a definição de um 'callback' padrão para a chamada de uma função.

function facaAlgoComMeuNome(nome, callback = z => { // se o parâmetro callback não receber nada, ele recebe por padrão a arrow function de parâmetro 'z'.
    console.log(z)
}) {
    callback(nome);
}

facaAlgoComMeuNome('Murialdo'); // Murialdo

// Ordem os acontecimentos:
// Entrou somente o argumento para o parâmetro 'nome', de valor 'Murialdo'. 
// O parâmetro callback recebeu a arrow function de parâmetro 'z'.
// A função facaAlgoComMeuNome foi executada. Nela há no bloco de código a função callback recebendo nome como parâmetro. Como 'callback' não é uma função externa ou com bloco de código próprio, callback recebe seu valor default (padrão), que é a arrow function de parâmetro 'z', aí 'z' recebe o valor de 'nome'. que é o argumento em callback(nome).

// Para demonstrar que 'callback' aqui é um parâmetro da função, vou criar uma função chamada callback fora da função facaAlgoComMeuNome() e vou usar ela como parâmetro.

var callback = (a,b) => { console.log(`Valor do argumento "a": ${a}; e valor do argumento "b": ${b}. Ambos parâmetros da função que criei e nomeei 'callback'.`)}

facaAlgoComMeuNome('Murialdo', callback) // Estou jogando a função que criei, chamada callback, como parâmetro, então o default (a arrow function com parâmetro 'z' não será usada.)

// Isto será impresso no console:
// Valor do argumento "a": Murialdo; e valor do argumento "b": undefined. Ambos parâmetros da função que criei e nomeei 'callback'.

// Ou seja, a arrow function z => {console.log(z)} não foi executada. Porém callback(nome) sim. Ou seja, callback com o argumento nome, que recebeu o valor 'Murialdo'.
// Então, isso equivale a função 'var callback' que criei receber os argumentos desta forma callback(nome, undefined).

// TORNANDO PARÂMETROS OBRIGATÓRIOS

function parametroObrigatorio(parametro){
    throw new Error (`O Parâmetro ${parametro} é obrigatório!`);
}

function inserirNaTela(objeto = parametroObrigatorio("'objeto'")){
    // lógica de implementação do método
    console.log("Isso não será impresso porque o erro será lançado.")
}

inserirNaTela() // Error: O Parâmetro 'objeto' é obrigatório!

// Ou seja, como o parâmetro objeto não recebeu um argumento externo, o parâmetro objeto recebeu o argumento valor default, que é a função parametroObrigatorio() com o argumento 'objeto' (com as aspas inclusas, para maior destaque na mensagem de erro).

// Isso obriga quem irá usar a função a utilizar os parâmetros.
