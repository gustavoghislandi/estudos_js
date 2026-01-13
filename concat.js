// 'concat' é um método nativo de Array

//---

// Resumo:

    // Use 'concat' para juntar arrays de modo ligeiramente mais eficiente
    // use 'spread' para compor arrays de modo mais moderno e se for necessário unir valores soltos junto ao array.

//----------

// 'concat' faz parte do Array.prototype, ou seja, é um método padrão da linguagem:

    const a = [1, 2]
    const b = [3, 4]

    const c = a.concat(b)

    console.log(c) // [1, 2, 3, 4]


// Características importantes:

    // Retorna um novo array

    // Não altera o array original

    // Pode receber um ou mais arrays ou valores

    const d = [1, 2].concat(3, [4, 5])

    console.log(d) // [1, 2, 3, 4, 5]

//-----

// É possível usar 'Spread operator' também:

    const e = [...a, ...b]

    console.log(e) // [1, 2, 3, 4]

//-------------

// Quando usar 'concat' ou 'Spread operator'?

// 🟢 Quando usar concat:
    // - Você já tem arrays prontos
    // - Quer algo explícito e legível
    // - Código mais “clássico”

    const r1 = a.concat(b, c)

// ✔️ Não cria array intermediário
// ✔️ está juntando arrays

//---

// 🟢 Quando usar spread (...):
    // - Quer flexibilidade
    // - Vai misturar valores + arrays
    // - Código mais moderno/idiomático

    const r2 = [...a, 1, ...b]

// ✔️ Mais expressivo
// ✔️ Fácil de compor

// ⚠️ Observação rápida
// Para arrays muito grandes, concat costuma ser ligeiramente mais eficiente.

// Resumo rápido

    // - Concat → juntar arrays
    // - Spread → compor arrays

// Escolha pelo contexto e legibilidade, não por regra fixa.