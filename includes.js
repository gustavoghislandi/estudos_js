// includes (retorna um boolean - está incluso ou não)

// O que é:
// Método que verifica se um valor existe em uma string ou array.

// Sintaxe

    // string.includes(valor, inicio?)

    // array.includes(valor, inicio?)

// Retorno

    // true → encontrou
    // false → não encontrou

// Exemplos

    "aeiou".includes("e")      // true

    [10, 20, 30].includes(20)  // true

// Comparação: includes vs indexOf

    // Ponto            | includes              | indexOf

    // Retorno          | boolean               | índice ou -1 (quando não existente)
    // Leitura          | mais clara            | mais verbosa
    // Uso comum        | checar existência     | pegar posição
    // Comparação       | direta (true/false)   | exige !== -1
    // Suporte a NaN    | sim                   | não

    // indexOf não encontra NaN, porque NaN !== NaN.

    [NaN].indexOf(NaN) // -1

    // includes encontra NaN, porque usa uma comparação especial.

    [NaN].includes(NaN) // true

    // Resumo:
    // includes funciona com NaN, indexOf não.

// Quando usar

    // Use includes → só quer saber se existe
    // Use indexOf → precisa da posição

// Resumo final:

    // includes é mais simples e legível; indexOf é mais completo.

//------------

// O 'includes' usa a comparação SameValueZero, que é diferente da comparação === do JavaScript:

// Regras principais do 'SameValueZero':

    // 1. NaN é considerado igual a NaN → por isso [NaN].includes(NaN) retorna true.  
    // 2. +0 e -0 são considerados iguais → [+0].includes(-0) retorna true.  
    // 3. Para todos os outros valores, funciona como ===.

// Comparação com indexOf:

    // indexOf usa ===, que faz:
        // NaN === NaN → false
        // +0 === -0 → true  
        // Por isso indexOf não encontra NaN.

// Exemplo prático:

    [NaN].includes(NaN)   // true
    [NaN].indexOf(NaN)    // -1

    [+0].includes(-0)     // true
    [+0].indexOf(-0)      // 0

// Resumindo: SameValueZero é mais tolerante com NaN, mas age igual ao === na maioria dos outros casos.

//------------

// Quadro comparativo: indexOf vs includes vs === vs SameValueZero

// Valores de exemplo:

    const arr = [NaN, +0, -0, 1, "a"];

// Comparação de NaN
    arr.indexOf(NaN)      // -1, indexOf usa ===, NaN !== NaN
    arr.includes(NaN)     // true, includes usa SameValueZero, NaN = NaN
    NaN === NaN           // false, operador estrito
    Object.is(NaN, NaN)   // true, SameValueZero é similar ao Object.is para NaN

// Comparação de +0 e -0
arr.indexOf(-0)       // 1, indexOf considera +0 === -0
arr.includes(-0)      // true, SameValueZero considera +0 = -0
+0 === -0             // true
Object.is(+0, -0)     // false, SameValueZero considera +0 = -0

// Comparação de outros valores
arr.indexOf(1)        // 3
arr.includes(1)       // true
1 === 1               // true
Object.is(1, 1)       // true

// Resumo:
// indexOf → usa ===, retorna índice ou -1, não encontra NaN
// includes → usa SameValueZero, retorna true/false, encontra NaN
// === → operador estrito, NaN !== NaN
// SameValueZero → NaN = NaN, +0 = -0, para outros valores como ===
