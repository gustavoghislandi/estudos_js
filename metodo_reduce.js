// Sintaxe Completa do `reduce()`:


// array.reduce(callback(accumulator, currentValue[ index_opt[array_opt]])[initialValue_opt]);

// Explicação dos parâmetros:

// 1. **callback**: A função que será executada em cada item do array. Ela recebe até 4 argumentos:

//    * `accumulator`: O valor acumulado que será retornado no final. Inicialmente, é igual ao `initialValue` ou, se não fornecido, o primeiro valor do array.
//    * `currentValue`: O item atual sendo processado no array.
//    * `index` (opcional): O índice do item atual.
//    * `array` (opcional): O array original.

// 2. **initialValue** (opcional): O valor inicial do `accumulator`. Se não for fornecido, o primeiro item do array será usado como valor inicial, e a iteração começará a partir do segundo item.

// Exemplo básico:


const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);  // O valor inicial do accumulator é 0.

console.log(sum);  // Resultado: 10

// Neste exemplo:

// * **`accumulator`** começa com `0` (definido no `initialValue`).
// * O **`currentValue`** começa com `1` (o primeiro valor no array) e, depois, vai para o próximo valor do array a cada iteração.
// * O valor retornado pela função de callback é passado como o novo valor de `accumulator` na próxima iteração.
// * No final, o método `reduce()` retorna o valor acumulado, que é `10` neste caso (a soma de todos os números do array).

// Casos de uso comuns:

// 1. **Soma de elementos**:

//    * O exemplo anterior já demonstra como somar os elementos de um array.

// 2. **Encontrar o valor máximo ou mínimo**:


   const numbers2 = [1, 2, 3, 4, 5];
   const max = numbers2.reduce((acc, curr) => {
     return curr > acc ? curr : acc;
   }, numbers2[0]);

   console.log(max);  // Resultado: 5


// 3. **Transformar um array em um objeto**:
//    Vamos imaginar um array de objetos e queremos agrupar esses objetos por uma propriedade.


   const people = [
     { name: 'Alice', age: 25 },
     { name: 'Bob', age: 30 },
     { name: 'Charlie', age: 25 },
   ];

   const groupedByAge = people.reduce((acc, person) => {
     if (!acc[person.age]) {
       acc[person.age] = [];
     }
     acc[person.age].push(person);
     return acc;
   }, {});

   console.log(groupedByAge);


//    Resultado:


  //  {
  //    25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
  //    30: [{ name: 'Bob', age: 30 }]
  //  }


// 4. **Flattener de arrays aninhados**:


   const nestedArray = [1, [2, 3], [4, 5], 6];
   const flattened = nestedArray.reduce((acc, curr) => acc.concat(curr), []);

   console.log(flattened);  // Resultado: [1, 2, 3, 4, 5, 6]



// Sobre o uso do método .concat() acima:
// A principal diferença entre `concat()` e `push()` é que **`concat()` não altera o array original**, ela retorna um novo array, enquanto **`push()` altera o array original**.

// No caso do `reduce()`, `concat()` é usado para garantir que o acumulador (ac) não seja modificado diretamente e mantenha a imutabilidade, criando um novo array a cada iteração.

// Assim, a estrutura de dados não é alterada no lugar, o que pode ser útil em muitos casos, especialmente em programação funcional.


// Por que foi criado o `reduce()`?

// O método `reduce()` foi criado para fornecer uma maneira eficiente de iterar e "reduzir" um array a um único valor, sem precisar de loops explícitos. Ele permite operações de acumulação complexas, como somar, agrupar, concatenar ou até mesmo transformar arrays em objetos de forma elegante.

// Hipóteses de uso:

// 1. **Soma de valores** (como mostrado antes) — é um caso clássico, onde você pode facilmente somar números.
// 2. **Contagem de ocorrências** de elementos em um array (como contar quantas vezes um item aparece).
// 3. **Transformações em arrays** — Como combinar vários arrays em um único ou criar um objeto a partir de um array de objetos.
// 4. **Construir estruturas mais complexas**, como um novo array ou objeto, com base nos valores do array original.
// 5. **Operações acumulativas**, como multiplicação de todos os números de um array.



console.log("-----Exemplo 3 mais reduzido-----")

   const people2 = [
     { name: 'Alice', age: 25 },
     { name: 'Bob', age: 30 },
     { name: 'Charlie', age: 25 },
   ];

   const groupedByAge2 = people2.reduce((acc, person) => {
     if (!acc[person.age]) {
       acc[person.age] = [];
     }
     acc[person.age].push(person.name);
     return acc;
   }, {});

   console.log(groupedByAge2);

// Como a idade já está determinada nas propriedades de valor equivalente ao das idades, é só retornar o nome, sem necessidade de replicar a informaçao da idade.

//--------------------------------------------------------------
// Se não houver valor inicial explícito, o que ele será?

// Se não houver um valor inicial explícito fornecido no método reduce(), o primeiro valor do array será automaticamente usado como o valor inicial do acumulador (acc).

// O que acontece:

// O primeiro item do array será atribuído ao acumulador (acc).

// A iteração começará com o segundo item do array como o valor de currentValue.

// Exemplo 1: Sem valor inicial explícito
console.log("-----reduce mais simples, sem valor inicial explícito-----")

const numbers3 = [1, 2, 3, 4];
const result3 = numbers3.reduce((acc, curr) => {
  return acc + curr;  // Soma os valores
});

console.log(result3);  // Resultado: 10

// Passo a passo:

// Primeira iteração:

// acc = 1 (primeiro item do array)

// curr = 2 (segundo item do array)

// A função de callback retorna 1 + 2 = 3.

// Segunda iteração:

// acc = 3 (resultado da iteração anterior)

// curr = 3

// A função de callback retorna 3 + 3 = 6.

// Terceira iteração:

// acc = 6

// curr = 4

// A função de callback retorna 6 + 4 = 10.

// Resultado final:

// O reduce() soma todos os valores, e como não fornecemos um valor inicial, ele usa o primeiro item (1) como o valor inicial do acumulador. O resultado final é 10.

// Exemplo 2: Caso o array tenha apenas um item
const numbers4 = [5];
const result4 = numbers4.reduce((acc, curr) => {
  return acc + curr;
});

console.log(result4);  // Resultado: 5

// Passo a passo:

// Como não há um valor inicial, o primeiro e único valor (5) será atribuído ao acc, e o reduce() termina imediatamente sem realizar iterações.

// Resultado final:

// O valor final de result será 5, já que não há mais nenhum item para acumular.

// Resumo:

// Sem valor inicial: O reduce() usa o primeiro item do array como valor inicial do acumulador.

// A iteração começa no segundo item do array.

// Se o array tiver apenas um item, o reduce() retorna esse item diretamente, já que não há itens restantes para acumular.

// Se o array estiver vazio e não houver valor inicial, o reduce() lançará um erro (TypeError), porque não há nenhum valor para ser usado como acumulador.

// Exemplo de erro com array vazio:

console.log("-----se o array a ser iterado for vazio, lança erro-----")
console.log("Sem código para poder imprimir o restante")

// const emptyArray = [];
// const result = emptyArray.reduce((acc, curr) => acc + curr);

// console.log(result);  // Vai lançar um erro: TypeError: Reduce of empty array with no initial value

//--------------------------------------------------------------
// E se for um objeto o valor do primeiro elemento do array?

// Se o primeiro elemento do array for um objeto, e você não fornecer um valor inicial explícito no reduce(), esse objeto será usado como o valor inicial do acumulador (acc). Isso significa que a primeira iteração irá tratar o primeiro item do array como o acumulador.

// Exemplo 1: Sem valor inicial e o primeiro elemento é um objeto

console.log("-----reduce sem valor inicial e o primeiro elemento sendo um objeto-----")

const people4 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];

const groupedByAge4 = people4.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = [];
  }
  acc[curr.age].push(curr);
  return acc;
});

console.log(groupedByAge4);

// Passo a Passo:

// Primeira iteração:

// acc = { name: 'Alice', age: 25 } (o primeiro item do array).

// curr = { name: 'Bob', age: 30 } (o segundo item do array).

// O código tenta acessar acc[curr.age], mas acc não está preparado para isso (não é um objeto com chaves de idade), porque o valor inicial do acumulador foi o primeiro item do array, que é um objeto de pessoa.

// Erro: Aqui, o código falharia porque tentaria tratar acc como um objeto de agrupamento, mas, na verdade, acc foi inicialmente definido como { name: 'Alice', age: 25 } (o primeiro objeto do array). A função não espera esse comportamento e não pode agrupar corretamente.

// Como isso se comporta:

// Quando você não define um valor inicial e o primeiro elemento do array é um objeto, o comportamento do reduce() pode ser inesperado, pois o objeto será usado como acumulador. Isso pode fazer com que você tenha erros no seu código, especialmente se tentar acessar chaves no objeto onde o valor não está estruturado para isso.

// O que acontece na prática?

console.log("-----o que acontece com 'acc'-----")

const people5 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];

const result5 = people5.reduce((acc, curr) => {
  console.log(acc);  // O que acontece com o 'acc'?
  return acc;
});

console.log(result5);

// Saída do console.log:
// { name: 'Alice', age: 25 }  // Primeira iteração: 'acc' começa com o primeiro item do array
// { name: 'Alice', age: 25 }  // Segunda iteração: 'acc' é o mesmo objeto de pessoa, agora ele é 'curr'
// { name: 'Alice', age: 25 }  // Terceira iteração: O valor de 'acc' ainda não foi alterado


// Você verá que, na prática, o acc vai ser o objeto da primeira pessoa e não um objeto para acumulação de dados como esperado. Isso causa uma confusão, porque o reduce() estava esperando que o acumulador fosse um objeto para agrupar as idades, mas ele começou como um objeto de pessoa.


//--------------
// Conclusão:

// Se o primeiro elemento do array for um objeto e você não fornecer um valor inicial, o reduce() usará esse objeto como o acumulador, o que pode levar a comportamentos inesperados. Para evitar isso e garantir que o reduce() funcione como esperado, sempre forneça um valor inicial apropriado, como um objeto vazio {}.

// Correção:

// Aqui está como você pode corrigir o código fornecendo um valor inicial para o reduce():

console.log("-----conclusão-----")

const people6 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];

const groupedByAge6 = people6.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = [];
  }
  acc[curr.age].push(curr);
  return acc;
}, {});  // Valor inicial como objeto vazio

console.log(groupedByAge6);


// Agora, o acc começa como um objeto vazio {}, e o código vai funcionar corretamente, agrupando as pessoas por idade.

