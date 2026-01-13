// Operador Spread (expande os elementos do array, individualizando-os)

// Em muitos casos, os parâmetros que queremos passar estão contidos em uma lista. Então, para usá-los, precisamos dos seus índices, passando um a um. Exemplo:

var argumentos = [1,2,3];
console.log(argumentos[0],argumentos[1],argumentos[2]); // 1 2 3

// No ES5, para evitar isso, usa-se a função 'apply', que usa dois argumentos: o primeiro é o this; e o segundo é o array com os argumentos.

// Ela executa a função original (abaixo, a função log),
// substituindo o objeto especificado para o contexto de execução (o this, que abaixo vai receber 'console'),
// enquanto os argumentos são passados via array (o parâmetro seguinte do apply)

console.log.apply(console, argumentos) // 1 2 3

// Com o ES6 há uma alternativa semelhante, porém otimizada. É o 'operador Spread'. Também chamado de 'operador de propagação'.

// Nesse operador, não há a necessidade de lidar com o contexto de execução,
// e há a vantagem de poder tratar listas formadas dinamicamente (que são as que não sabemos em qual índice está a informação que queremos)

// A sintaxe do operador Spread é bem semelhante à do operador Rest, porém eles têm comportamentos opostos.

// Enquanto o 'operador Rest' pega vários argumentos passados e os comprime em um array,
// o 'operador Spread' faz o contrário, ele expande os elementos do array, individualizando-os.

// Ainda no exemplo do console.log, se usarmos o operador Spread, ele expandirá os elementos do array como se os argumentos fossem passados separadamente:

console.log(...argumentos) // 1 2 3

//-----

// Num exemplo de compras no supermercado, podemos unir as compras com 'concat':

    const listaMae = ['arroz', 'feijão', 'bife']
    const listaNamorada = ['suco', 'leite','ovos']

    const listaCompras = listaMae.concat(listaNamorada)

    console.log(listaCompras) // [ 'arroz', 'feijão', 'bife', 'suco', 'leite', 'ovos' ]
    console.log(listaCompras.length) // 6

// Chegando no mercado, você lembra de mais uma lista, então você adiciona na lista de compras:

    listaEscritorio = ['papel', 'caneta', 'clips']

    listaCompras2 = listaMae.concat(listaNamorada, listaEscritorio)

    console.log(listaCompras2) // ['arroz', 'feijão', 'bife', 'suco', 'leite', 'ovos', 'papel', 'caneta', 'clips']
    console.log(listaCompras2.length)

// Perceba que com 'concat' não é possível fazer isto:

    listaCompras.concat(listaEscritorio)
    console.log(listaCompras) // [ 'arroz', 'feijão', 'bife', 'suco', 'leite', 'ovos' ]   // NÃO ALTEROU O ARRAY

    // Porque concat não modifica o array original.
    // Ele retorna um novo array com os valores unidos.

    // Como não guardou-se o retorno em uma variável, o resultado foi descartado e listaCompras continuou igual.

// Evidentemente, isso é diferente de fazer isto:

    const listaCompras3 = [listaMae, listaNamorada, listaEscritorio] // array de arrays

    console.log(listaCompras3) // array de arrays

// Por isso é um array de arrays.   Enquanto o 'concat' ou 'Spread' ambos criam um array único com elementos individualizados.

// ADICIONANDO ITENS A UM ARRAY (com Spread)

const produtoSelecionado = {
    descricao: 'Camiseta',
    preco: 69.90
};

const carrinho = [
    {descricao: 'Boné', preco: 79.99},
    {descricao: 'Calça jeans', preco: 129.99},
    {descricao: 'Luvas (par)', preco: 42.99},
];

const carrinhoAtualizado = [...carrinho, produtoSelecionado] // Isso desmembra 'carrinho' e compõe um novo array com 'produtoSelecionado'

console.log(carrinhoAtualizado) // array com os itens

for (let item of carrinhoAtualizado){ // iteração item a item
    console.log(item.descricao) // pega só o valor da propriedade descricao
}

// OPERADOR SPREAD EM CHAMADAS DE FUNÇÕES

// Podemos chamar uma função assim:

    function soma(a,b){
        console.log(a + b);
    }

    soma(1,2); // 3

// Ou com o 'Spread', assim:

    const numeros = [1,2];

    soma(...numeros); // 3

// Isso é útil não somente para arrays, mas para qualquer objeto que seja iterável (como Map, String, e Set).

// Em uma String:

    function contaVogaisNaoAcentuadas(palavra){
        let qtdVogais = 0;
        const palavraLowerCase = palavra.toLowerCase()
        const letras = [... palavraLowerCase]; // funciona com um espaço entre o Spread e a variável. Segundo o ChatGPT não deveria, mas funciona.
        for(let letra of letras){
            if("aeiou".indexOf(letra) !== -1) {
                qtdVogais++;
            }
        }

        return qtdVogais;
    }

    console.log(contaVogaisNaoAcentuadas('ECMAScript')) // 3

    // Explicando o if:

//         if ("aeiou".indexOf(letra) !== -1){
//             // código
//         }

    // "aeiou" é uma string com vogais

    // indexOf(letra) procura a letra dentro dessa string

    // Se encontrar, retorna a posição (0 ou maior)

    // Se não encontrar, retorna -1

    // Ou seja, o for itera cada letra da palavra e cada letra é verificada se existe na string com as vogais.

// FAZENDO A FUNÇÃO RECEBER UMA QUANTIDADE INDETERMINADA DE VARIÁVEIS (textos, palavras, frases...) (Operador Rest junto ao Spread)

// Ambos operadores (Rest e Spread) usam ... (três pontos antes da variável)

// A diferença é que:
    // O Rest compacta tudo em um único array.
    // Enquanto o Spread expande e  individualiza.

// No exemplo anterior

        function contaVogaisNaoAcentuadas(...palavras){ // Rest operator (porque no último parâmtro)
            let qtdVogais = 0;
            for (let palavra of palavras) {
                let palavraLowerCase = palavra.toLowerCase();
                const letras = [...palavraLowerCase]; // Spread operator aplicado a String, letras fica como um array de caracteres string separados
                // console.log(letras) // vai imprimir um array de string, que representa cada argumento desmembrado em caracteres string separados.
                for(let letra of letras){
                    if("aeiou".indexOf(letra) !== -1) {
                        qtdVogais++;
                    }
                }
            }

            return qtdVogais;
        }

    console.log(contaVogaisNaoAcentuadas('ECMAScript',"panorama", "Uma frase maior que uma palavra.", "Um texto um pouco maior do que a frase anterior. Certo?")) // 43

    console.log(contaVogaisNaoAcentuadas('Não considera acentuações.')) // 10