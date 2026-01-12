// Parâmetros infinitos com operador Rest

// De início se apresentará o 'arguments' depois o 'Rest'.

// ARGUMENTS (OBJETO)

// Para trabalhar com um número desconhecido de parâmetros.

// Um caso útil é em um método que gere uma query SQL para ser executada no banco de dados.

// De exemplo, vamos fazer uma consulta simples (sem condição 'where'). Nesse método passaremos somente o nome da tabela e as colunas que queremos extrair.

// No ES5, pode-se usar o objeto 'arguments' para fazer isso.

// O objeto 'arguments' está disponível em todas as funções construídas no JavaScript.
// Ele contém um registro para cada argumento passado para a função no contexto de sua execução, sendo que o primeiro índice de registro começa no 0 (zero).

// No exemplo, vamos impor que somente o primeiro parâmetro (tabela) é obrigatório; quando nenhuma coluna for passada como argumento será utilizado o símbolo * (asterisco).

function montaQuerySelect(){
    const tabela = arguments[0];
    const qtdArgs = arguments.length;
    let cols = "";

    if (qtdArgs > 1){ // Quando tiver tabela (que é 1) mais algo (colunas) faça...
        for(let index = 1; index < qtdArgs; index++){ // Começa no 1 porque arguments[1] é a primeira coluna.
            cols += `${arguments[index]}, ` // Adiciona uma vírgula e um espaço
        }
        cols = cols.substring(0, cols.length -2); // após o for, remove a última vírgula e o espaço adicionados, por isso -2. 'cols' é a string com todos os parâmetros de coluna.
        // Cortar a string muito longa no final é mais interessante em termos de processamento do que um 'if' que corte quando o 'index' for o último. Porque o 'if' seria lido em toda iteração e tomaria mais processamento.
    } else {
        cols = '*'; // Caso não tenha colunas como argumentos, recebe o valor *.
    }

    return `SELECT ${cols} from ${tabela}`;
}

const query1 = montaQuerySelect('tabela'); // SELECT * from tabela
const query2 = montaQuerySelect('tabela', 'col1'); // SELECT col1 from tabela
const query3 = montaQuerySelect('tabela', 'col1', 'col2'); // SELECT col1, col2 from tabela

console.log(query1) // SELECT * from tabela
console.log(query2) // SELECT col1 from tabela
console.log(query3) // SELECT col1, col2 from tabela

//---

// Abaixo, são só dois exemplos de manipulação do 'arguments'.

function logarTodosArgumentos(){
    for (let i = 0; i < arguments.length; i++){
        console.log(arguments[i])
    }
}

logarTodosArgumentos(1,2,3);
// 1
// 2
// 3

function somar(){
    let soma = 0;
    const qtd = arguments.length;
    for(let i = 0; i < qtd; i++){
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(1,2)); // 3
console.log(somar(1,2,3)); // 6
console.log(somar(1,2,3,4)); // 10

// O 'arguments' nos concede o poder de resgatar parâmetros da função mesmo que eles não tenham sido declarados na assinatura do método.

// OPERADOR REST (OBJETO ARRAY)

// A sintaxe do operador Rest permite representar um número indefinido de argumentos em um array.

// Se o último argumento nomeado de uma função estiver acompanhado de ... (três pontos), ele vai se tornar um Array, no qual os elementos são disponibilizados pelos argumentos atuais passados à função.

// Para entender melhor, vamos reescrever o método somar (do exemplo acima) com o operador Rest:

function somar2(...valores){
    let soma = 0;
    const qtd = valores.length;
    for(let i = 0; i < qtd; i++){
        soma += valores[i];
    }

    return soma;
}

console.log(somar2(1,2)); // 3
console.log(somar2(1,2,3)); // 6
console.log(somar2(1,2,3,4)); // 10

// Na assinatura do método, usou-se '...valores' para representar uma quantidade indefinida de parâmetros passados para a função.
// Dentro da função 'valores' é um array.

// Como visto, o 'operador Rest' (valores) substituiu o 'arguments' e funcionou igual.

// A principal diferença entre o 'arguments' e o 'operador Rest' é que o 'arguments' não é um objeto Array, enquanto o 'operador Rest' é.
// Isso significa que é possível utilizar os métodos auxiliares de Array (visto em metodos_de_array.js), tais como forEach, map, filter, find, every, some, reduce, e o laço de repetição for...of.

// Assim, na função somar() podemos melhorar sua implementação com o método auxiliar reduce e a sintaxe de arrow function:

function somar3(...valores){
    return valores.reduce((soma, valor) => {
        return soma + valor;
    }, 0);
}

console.log(somar3(1,2)); // 3
console.log(somar3(1,2,3)); // 6
console.log(somar3(1,2,3,4)); // 10


// Agora o método ficou enxuto, de acordo com as melhorias do ES6.

// IMPORTANTE: O operador Rest só funciona no último parâmetro de uma função.

// Isso significa que não podemos usar mais de um operador Rest por função.

// Então, um código assim, para separar números e letras, não funcionará:

    function numerosELetras(numeros, ...letras){
        // corpo da função.
        console.log(numeros) // 1
        console.log(letras) // [2,3,'a','b','c']
    }

// Isso pareceria fazer sentido para esta chamada:

    numerosELetras(1,2,3,'a','b','c')

// Só que o resultado fica:

    // 1
    // [2,3,'a','b','c']

 // Ao invés do que gostaríamos que fosse:

    // [1,2,3]
    // ['a','b','c']

// O correto para este caso é:

    function numerosELetras2(...numerosELetras){
        console.log(numerosELetras)
    }

// Assim:

    numerosELetras2(1,2,3,'a','b','c') // [1,2,3,'a','b','c']

// Então, tudo fica dentro de um único array (desde que sejam as últimas variáveis).

// O operador sempre interpreta as últimas variáveis passadas na função para compactá-las num único array.

//---

        // Teste para saber se eu separaria tranquilamente um do outro:

                function numerosELetras3(...numerosELetras){
                    console.log(numerosELetras)
                    const arrayN = [];
                    const arrayL = [];

                    for (elemento of numerosELetras) {
                        if (typeof elemento === "number"){
                            arrayN.push(elemento)
                        }
                        if (typeof elemento === "string"){
                            arrayL.push(elemento)
                        }
                }

                    console.log(arrayN)
                    console.log(arrayL)
            }

            console.log('----pequeno teste----')
            numerosELetras3(1,2,3,'a','b','c')

//---

// Os parâmetros antes da variável com operador rest são chamados (livro) de 'parâmetros "fixos"'.

// Para concluir, a refatoração do código de montaQuerySelect():

function montaQuerySelect2(tabela, ...cols){
    let colsQuery = "";
    if (cols.length > 0){
        colsQuery = cols.reduce((colsQuery, coluna) => {
            return colsQuery += `${coluna}, `
        }, "");
        colsQuery = colsQuery.substring(0, colsQuery.length -2);
    }
    else {
        colsQuery = '*';
    }

    return `SELECT ${colsQuery} from ${tabela}`;
}

const query4 = montaQuerySelect2('tabela'); // SELECT * from tabela
const query5 = montaQuerySelect2('tabela', 'col1'); // SELECT col1 from tabela
const query6 = montaQuerySelect2('tabela', 'col1', 'col2'); // SELECT col1, col2 from tabela

console.log(query4) // SELECT * from tabela
console.log(query5) // SELECT col1 from tabela
console.log(query6) // SELECT col1, col2 from tabela
