// Mapas são estruturas de dados em que é possível associar uma chave a um valor, como em um dicionário. Cada uma das chaves é única e possui apenas um valor, mesmo que este se repita.

// Segundo o ChatGPT, não seria como uma função matemática, mas próximo:

// Função: É um tipo específico de mapeamento em que cada entrada tem uma única saída.

// Mapeamento: Pode ser qualquer tipo de relação entre dois conjuntos, podendo ser mais geral. Por exemplo, um mapeamento pode associar um elemento de um conjunto a vários elementos de outro conjunto (isso não é permitido em uma função, que exige uma única saída para cada entrada).

// Isso significa que no mapeamento x poderia resultar em 1, 2 e 3; enquanto na função x teria que resultar ou em 1, ou em 2, ou em 3. Ou em algum array [1,2,3] ou tupla (1,2,3), porque nesse caso seria ainda uma saída única.

// Ou seja, função é saída única (1-1) e mapeamento é única ou múltipla (1-N)

// ------------------------------------------------------------------

// Map e WeakMap

// São implementações reais de mapas como estruturas de dados.
/* Elas permite:
    - Adicionar elementos pelo par (chave, valor);
    - Remover elementos pela chave;
    - Acessar elementos dada uma chave;
    - Pesquisar elementos, descobrindo se ele pertence ou não à coleção por meio da chave;
    - Ingadar sobre atributos (como o número de elementos, por exemplo).
*/

// MAP

// No JS, em um 'Map', qualquer valor (pode ser objeto, função ou valor primitivo) pode ser usado como chave ou valor.
// Vericando essa afirmação:

var map = new Map();
function funcao(){};
var objeto = {}


// 'setando' valores com 'set'
map.set("string", "Sou uma string"); // Estrutura (chave, valor)
map.set(objeto, "Sou um objeto");
map.set(funcao, "Sou uma função");


// resgatando valores com 'get'
console.log(map.get("string"));
console.log(map.get(objeto));
console.log(map.get(funcao));

// Para saber quantos itens um mapa tem, usa-se a propriedade 'size':
console.log("tamanho:" + map.size); // tamanho: 3

// Para saber se já existe uma chave específica dentro do mapa, usa-se 'has'. Isso retornará um booleano: true, para existente; false, caso não.

console.log(map.has("string")); // true
console.log(map.has("abc")); // false