// REVISÃO DOS MÉTODOS AUXILIARES PARA ARRAY

/* 

Os mais utilizados:

    forEach
    map
    filter
    find
    every
    some
    reduce

Esses métodos funcionam de foram semelhante, mas cada um possui propósitos distintos. Como maior exceção à regra, o 'reduce' tem uma sintaxe e funcionamento um pouco diferente.

Esses métodos surgem para substituir a clássica iteração usando o laço de repetição 'for', tornando o código mais legível, deixando mais explícita a intenção da iteração. Porque somente com 'for', não dá pra saber o objetivo do corpo da iteração sem ver sua implementação (se será para listar, excluir, ordenar...); já com esses métodos, isso fica explicitado.

*/

// Maneira tradicional de iterar um array (a ser substituída)

var frutas = ['abacaxi', 'maçã', 'uva'];
for(var i = 0; i < frutas.length; frutas++) {
    //corpo da iteração
}

//----------------------------------------------------------------

//for...of (já é ES6)

let arr = [1, 2, 3];
for (let num of arr) {
  console.log(num);  
}

// saída:

// 1
// 2
// 3

// Diferenças do for...of:

// Iteração mais simples: Ele percorre diretamente os valores do array (ou qualquer objeto iterável), sem a necessidade de acessar os índices manualmente, como acontece no for tradicional.

// Não precisa de índice: Ao contrário do for tradicional ou forEach, você não precisa se preocupar com índices. O for...of vai diretamente ao valor de cada elemento.

// Uso de break, continue, e return: Uma das grandes vantagens do for...of é que você pode usar break, continue e até mesmo return (em funções), coisa que não pode ser feita no forEach.

//----------------------------------------------------------------

//forEach
console.log("-----forEach-----")

console.log("(com função anônima")

var nomes = ['Mario', 'Pedro', 'João'];
nomes.forEach(function(nome){  //função anônima (anônima porque sem nome)
    console.log(nome); 
})

// saída:

// Mario
// Pedro
// João

// Nele, passa-se como parâmetro uma função de retorno que aceita um outro parâmetro.

// A função passada é executada para cada elemento da lista. Ou seja, "Para cada elemento da lista, execute esta função"

// A cada iteração, o valor do item é atribuído à variável passada como parâmetro no callback. Nesse caso, a variável nome (no singular)

// Ou seja:
// 1ª iteração: nome = "Mario"
// 2ª iteração: nome = "Pedro"
// 3ª iteração: nome = "João"

// Ele não altera o array original.
// Ajuda a evitar erros com índices.
// Contras: não pode usar 'break' ou 'continue'.

// É possível passar funções que não sejam anônimas também:

console.log("(com função nomeada")

function imprimeNome(nome){
    console.log(nome)
}

nomes.forEach(imprimeNome);

// saída (diferente para o console não ficar bagunçado):

// O nome é Mario.
// O nome é Pedro.
// O nome é João.

//----------------------------------------------------------------

// map
console.log("-----map-----")

// A ideia do map é, além de iterar, modificar/transformar os elementos do array.

var numeros = [1,2,3];
var dobro = numeros.map(function(numero){
    return numero * 2;
}
);

console.log(numeros)
console.log(dobro)

// O map executa a função de callback recebida pro parâmerto para cada elemento iterado de 'numeros' e constrói um novo array com base nos retornos de cada uma das chamadas.

// Como o map devolve uma outra instância de array, o array original nunca é modificado.

// Assim como no forEach, não é possível modificar o array no meio do caminho.

// filter
console.log("-----filter-----")

// Serve para filtrar elementos da lista com algum critério.
// Ele também gera um novo array.

var alunos = [
    {nome: 'João', idade: 15},
    {nome: 'Carlos', idade: 18},
    {nome: 'Joana', idade: 21}
]

var alunosMaiorIdade = alunos.filter(function(aluno){
    return aluno.idade >= 18;
})

console.log(alunosMaiorIdade)

// saída
// [ { nome: 'Carlos', idade: 18 }, { nome: 'Joana', idade: 21 } ]

// Como nos outros métodos auxiliares para array, o parâmetro da função de parâmetro é o item do array original.

// O retorno da função de callback para o filter é um booleano, retornando 'true' ou 'false'. Se o retorno for 'true', o valor é inserido no novo array; do contrário, é ignorado e não incluído.

// find
console.log("-----find-----")

// Pegará O PRIMEIRO item que satisfizer o critério de busca. Se você quiser todos que satisfazem a condição, use o filter.
// Mesmo que seja somente um único item retornado, ele virá dentro de um novo array, como nos outros casos.

var funcionarios = [
    {nome: 'Elvira'},
    {nome: 'José'}, // Esse será retornado
    {nome: 'Maria'},
    {nome: 'José'}, // Esse não será retornado
]

var funcionario = funcionarios.filter(function(funcionario){
    return funcionario.nome === 'José';
});

console.log(funcionario)

// Assim que um elemento que satisfaça o critério for encontrado, o filter faz o equivalente a um 'break' na iteração, ele para ela.

// Ou seja, quando o funcionário for José, ele retornará aquele item do array original.

// every
console.log("-----every-----")

// Ao contrário dos métodos vistos até então, este não retorna um novo array, mas sim um valor booleano.

// Ela é utilizada para se todos os elementos do array satisfazem uma dada condição.

var alunos2 = [
    {nome: 'João', idade: 22},
    {nome: 'Carlos', idade: 18},
    {nome: 'Joana', idade: 21}
]

var todosAlunosMaiorIdade = alunos2.every(function(aluno){
    return aluno.idade >= 18;
})

console.log(todosAlunosMaiorIdade)

// Ele equivale a usar um 'for' (como todos os outros métodos iteradores vistos) que dará um 'break' assim que um dos elementos não satisfizer a condição com 'true'. É como testar cada elemento sob a condição e adicionar um operador lógico AND a cada iteração, pois o JavaScript já possui 'otimização de curto-circuito' no operador &&, que é ele parar assim que encontra um false.

// FIQUE ATENTO PARA NÃO ESQUECER DE COLOCAR O 'return', PORQUE, SE NÃO COLOCAR, ELE ACABARÁ IDENTIFICANDO O RETORNO COMO 'undefined' E ACABARÁ RESULTANDO EM 'false'


