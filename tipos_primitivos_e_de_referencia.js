// TIPOS PRIMITIVOS:

// São valores 'imutáveis' e são diretamente armazenados. Quando você atribui um valor primitivo a uma variável, o valor é copiado diretamente. Os tipos primitivos em JavaScript são:

// 1. `string` (texto)
// 2. `number` (números)
// 3. `bigint` (números inteiros grandes)
// 4. `boolean` (verdadeiro ou falso)
// 5. `undefined` (valor não definido)
// 6. `null` (valor nulo)
// 7. `symbol` (símbolos exclusivos, usados para identificadores)
// 8. `undefined` (valor não atribuído)

// O valor de uma variável primitiva é armazenado como o próprio dado, e não por referência.

    var x = 5;        // x armazena um valor primitivo (número).
    var y = x;        // Agora y também armazena 5, que é um valor primitivo.
    x = 10;           // Aqui, x é reatribuído, mas y continua com o valor 5.

    console.log(x);   // 10
    console.log(y);   // 5

// Esse comportamento só será diferente em C/C++ quando se usar ponteiros, pois ponteiros fazem manipulação de dados por referência, ao invés de copiar o valor. Senão, mesmo em C/C++ o comportamento será igual ao de JavaScript e outras linguagens, onde tipos primitivos são passados por valor..


// TIPOS DE REFERÊNCIA:

// São valores 'mutáveis' e são armazenados por 'referência'. Quando você atribui um valor de tipo de referência a uma variável, a variável guarda o 'endereço de memória' onde o valor está armazenado, não o valor em si. Esses são os tipos de referência em JavaScript:

// 1. Objetos (Objetos literais, funções, arrays, etc.)
// 2. Arrays
// 3. Funções
// 4. Instâncias de classes
// 5. Mapas (Maps)
// 6. Conjuntos (Sets)

// Então, 'tipos primitivos' são valores simples, como números e strings, enquanto 'tipos de referência' são mais complexos, como objetos e arrays, e são manipulados por referência. Isso significa que, ao usar `const` com tipos de referência, a 'referência' não pode ser reatribuída, mas o conteúdo que está dentro dessa referência pode ser alterado.
