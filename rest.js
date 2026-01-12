// Parâmetros infinitos com operador Rest

// Para trabalhar com um número desconhecido de parâmetros.

// Um caso útil é em um método que gere uma query SQL para ser executada no banco de dados.

// De exemplo, vamos fazer uma consulta simples (sem condição 'where'). Nesse método passaremos somente o nome da tabela e as colunas que queremos extrair.

// No ES5, pode-se usar o objeto 'arguments' para fazer isso.

// O objeto 'arguments' está disponível em todas as funções construídas no JavaScript.
// Ele contém um registro para cada argumento passado para a função no contexto de sua execução, sendo que o primeiro índice de registro começa no 0 (zero).

// No exemplo, vamos impor que somente o primeiro parâmetro (tabela) é obrigatório; quando nenhuma coluna for passada como argumento será utilizado o símbolo * (asterisco).

function MontaQuerySelect(){
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

const query1 = MontaQuerySelect('tabela'); // SELECT * from tabela
const query2 = MontaQuerySelect('tabela', 'col1'); // SELECT col1 from tabela
const query3 = MontaQuerySelect('tabela', 'col1', 'col2'); // SELECT col1, col2 from tabela

console.log(query1) // SELECT * from tabela
console.log(query2) // SELECT col1 from tabela
console.log(query3) // SELECT col1, col2 from tabela

// ------------------------ [continuar em 13.1]