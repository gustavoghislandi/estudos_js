// 'concat' é um método nativo de Array

//---

// Resumo:

    // Use 'concat' para juntar arrays de modo ligeiramente mais eficiente
    // use 'spread' para compor arrays de modo mais moderno.

//----------

// 'concat' faz parte do Array.prototype, ou seja, é um método padrão da linguagem:

    const a = [1, 2]
    const b = [3, 4]

    const c = a.concat(b)

    console.log(c) // [1, 2, 3, 4]


// Características importantes:

    // Retorna um novo array (tem que guardar em algum lugar)

    // Não altera o array original

    // Pode receber um ou mais arrays ou valores (aceita múltiplos parâmetros)

    const d = [1, 2].concat(3, [4, 5]) // guardado em 'd' e recebendo parâmetros 3 e [4,5]

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
    // - Vai misturar valores + arrays (o concat faz isso também)
    // - Código mais moderno/idiomático

    const r2 = [...a, 1, ...b]

// ✔️ Mais expressivo
// ✔️ Fácil de compor

// ⚠️ Observação rápida
// Para arrays muito grandes, concat costuma ser ligeiramente mais eficiente.

// Resumo rápido
    // Escolha pelo contexto e legibilidade, não por regra fixa.