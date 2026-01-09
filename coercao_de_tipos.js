// Tabela de coerção de tipos, feita via ChatGPT.

// ============================================================================
// MINI-SUMÁRIO — COERÇÃO DE TIPOS NO JAVASCRIPT (ORDEM DESTE ARQUIVO)
// ============================================================================
//
// 1. COERÇÃO PARA NUMBER
//    - Operações matemáticas (* / - < > <= >=), Number()
//    - null → 0 | undefined → NaN | Boolean → 1/0 | strings → número | arrays → ToPrimitive
//
// 2. COERÇÃO PARA STRING
//    - String(), concatenação com +
//    - null → "null" | undefined → "undefined" | arrays/objetos → ToPrimitive
//
// 3. COERÇÃO PARA BOOLEAN
//    - if, while, !, Boolean()
//    - Falsy: false, 0, -0, 0n, "", null, undefined, NaN
//    - Truthy: todo o resto
//
// 4. OPERADOR +
//    - Se qualquer lado for string → concatenação
//    - Caso contrário → soma numérica
//    - {} no início da linha pode virar bloco (pegadinha de parsing)
//
// 5. IGUALDADE
//    - == aplica coerção especial (null == undefined, Number/String, Boolean → Number, Object → ToPrimitive)
//    - === sem coerção (use sempre)
//
// 6. OBJECTS & ARRAYS
//    - Primeiro tentam valueOf(), depois toString()
//    - Symbol.toPrimitive tem prioridade absoluta
//
// ============================================================================
//
// Regra de ouro:
// Entenda o operador, o contexto e se há objeto, não apenas o valor.


// ============================================================================
// MINI-ÍNDICE — COERÇÃO DE TIPOS NO JAVASCRIPT (ORDEM DO MOTOR)
// ============================================================================
//
// 1. PARSING
//    - {} no início da linha pode virar bloco, afetando expressões tipo {} + []
//
// 2. TOPRIMITIVE
//    - Objetos e arrays: Symbol.toPrimitive → valueOf → toString
//    - Hint ("number", "string", "default") orienta o resultado
//
// 3. OPERADORES / CONVERSÕES
//    - + decide concatenação string ou soma numérica
//    - * / - < > → ToNumber
//    - String() / template literals → ToString
//    - if / while / ! → ToBoolean
//
// 4. IGUALDADE
//    - == aplica coerção especial (null == undefined, Number/String, Boolean → Number, Object → ToPrimitive)
//    - === não faz coerção (use sempre)
//
// ============================================================================
//
// Regra de ouro:
// Entenda o operador e o contexto, não apenas o valor.

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Início das tabelas


// ============================================================================
// TABELA COMPLETA DE COERÇÃO DE TIPOS DO JAVASCRIPT
// ============================================================================


// ============================================================================
// COERÇÃO PARA NUMBER
// Usada em: * / - < > <= >=, Number(), operações matemáticas
// ============================================================================

    // | Valor                 | Resultado |
    // | --------------------- | --------- |
    // | null                  | 0         |
    // | undefined             | NaN       |
    // | true                  | 1         |
    // | false                 | 0         |
    // | "" (string vazia)     | 0         |
    // | " " (espaço)          | 0         |
    // | "0"                   | 0         |
    // | "2"                   | 2         |
    // | "2.5"                 | 2.5       |
    // | "01"                  | 1         |
    // | "0x10"                | 16        |
    // | "abc"                 | NaN       |
    // | NaN                   | NaN       |
    // | Infinity              | Infinity  |
    // | -Infinity             | -Infinity |
    // | []                    | 0         |
    // | [0]                   | 0         |
    // | [2]                   | 2         |
    // | [1,2]                 | NaN       |
    // | {}                    | NaN       |
    // | function(){}          | NaN       |
    // | BigInt(10)            | 10        |
    // | Symbol()              | TypeError |


// ============================================================================
// COERÇÃO PARA STRING
// Usada em: String(), concatenação com +
// ============================================================================

    // | Valor                 | Resultado              |
    // | --------------------- | ---------------------- |
    // | null                  | "null"                 |
    // | undefined             | "undefined"            |
    // | true                  | "true"                 |
    // | false                 | "false"                |
    // | 0                     | "0"                    |
    // | NaN                   | "NaN"                  |
    // | Infinity              | "Infinity"             |
    // | []                    | ""                     |
    // | [1]                   | "1"                    |
    // | [1,2]                 | "1,2"                  |
    // | {}                    | "[object Object]"      |
    // | function(){}          | "function(){}"         |
    // | BigInt(10)            | "10"                   |
    // | Symbol("id")          | TypeError              |

    // Exemplo:
    // "Olá " + null        -> "Olá null"
    // "Valor: " + undefined -> "Valor: undefined"


// ============================================================================
// COERÇÃO PARA BOOLEAN
// Usada em: if, while, !, Boolean()
// ============================================================================


// --------------------
// VALORES FALSY (false)
// --------------------

    // false
    // 0
    // -0
    // 0n
    // ""
    // null
    // undefined
    // NaN


// --------------------
// VALORES TRUTHY (true)
// --------------------

    // true
    // 1
    // -1
    // "0"
    // "false"
    // " "
    // []
    // {}
    // function(){}
    // Infinity
    // -Infinity


// ============================================================================
// OPERADOR +
// Regra: se QUALQUER lado for string, vira concatenação
// ============================================================================

    // | Expressão         | Resultado                   |
    // | ----------------- | --------------------------- |
    // | 1 + 2             | 3                           |
    // | 1 + "2"           | "12"                        |
    // | "1" + 2           | "12"                        |
    // | "1" + null        | "1null"                     |
    // | 1 + null          | 1                           |
    // | 1 + undefined     | NaN                         |
    // | null + null       | 0                           |
    // | true + true       | 2                           |
    // | [] + []           | ""                          |
    // | [] + {}           | "[object Object]"           |
    // | {} + []           | 0   // pegadinha de parsing |
    // | {} + {}           | NaN // em expressão isolada |


// ============================================================================
// OPERADORES MATEMÁTICOS (* / -)
// Sempre forçam coerção para NUMBER
// ============================================================================

    // | Expressão           | Resultado |
    // | ------------------- | --------- |
    // | "6" * "2"           | 12        |
    // | "6" - "2"           | 4         |
    // | "6" / "2"           | 3         |
    // | "6" * null          | 0         |
    // | "6" * undefined     | NaN       |
    // | true * 2            | 2         |
    // | false * 2           | 0         |
    // | [] * 2              | 0         |
    // | [2] * 2             | 4         |
    // | {} * 2              | NaN       |


// ============================================================================
// IGUALDADE
// ============================================================================


// --------------------
// == (COM COERÇÃO) – EVITE
// --------------------

    // | Expressão             | Resultado |
    // | --------------------- | --------- |
    // | null == undefined     | true      |
    // | 0 == false            | true      |
    // | "0" == false          | true      |
    // | "" == 0               | true      |
    // | [] == 0               | true      |
    // | [] == false           | true      |
    // | [1] == 1              | true      |
    // | [1,2] == "1,2"        | true      |


// --------------------
// === (SEM COERÇÃO) – USE SEMPRE
// --------------------

    // null === undefined   // false
    // 0 === false          // false
    // "" === 0             // false
    // [] === false         // false


// ============================================================================
// OBJECTS & ARRAYS (RESUMO IMPORTANTE)
// ============================================================================

    // Objetos e arrays:
    // 1. Tentam valueOf()
    // 2. Depois toString()
    // 3. Só então conversão primitiva

    // [] -> "" -> 0 (number)
    // [2] -> "2" -> 2
    // {} -> "[object Object]" -> NaN


// ============================================================================
// REGRA DE OURO (GUARDE ISSO)
// ============================================================================

    // JavaScript:
    // - Só faz conta com NUMBER
    // - + pode virar string
    // - null vira 0 em conta
    // - undefined vira NaN
    // - Boolean é falsy/truthy
    // - === sempre vence

// ============================================================================

// Agora entramos no núcleo do motor do JavaScript

// ORDEM REAL DE COERÇÃO

// ToPrimitive -> ToNumber -> ToString -> ToBoolean, com exemplos reais tipo `"1" + null`.

// ============================================================================
// ORDEM REAL DE COERÇÃO DO MOTOR JAVASCRIPT (ECMAScript)
// ============================================================================


// ============================================================================
// ETAPA 1 — ToPrimitive (quando o valor NÃO é primitivo)
// ============================================================================
//
// Aplicada a: Objects, Arrays, Functions, Dates, etc.
//
// Ordem:
// 1. Se houver Symbol.toPrimitive → usa
// 2. Senão, chama valueOf()
// 3. Se ainda for objeto, chama toString()
//
// Hint:
// - "number" → usado por * / - < >
// - "string" → usado por + (quando envolve string)
// - "default" → == e +
//
// ---------------------------------------------------------------------------

    // Exemplos:

    // []:
    // valueOf()  -> []        (ainda objeto)
    // toString() -> ""        (string)
    // Resultado primitivo -> ""

    // [2]:
    // valueOf()  -> [2]
    // toString() -> "2"
    // Resultado -> "2"

    // {}:
    // valueOf()  -> {}
    // toString() -> "[object Object]"
    // Resultado -> "[object Object]"


// ============================================================================
// ETAPA 2 — Operador + (DECIDE STRING ou NUMBER)
// ============================================================================
//
// Regra:
// - Se QUALQUER operando for string → concatenação
// - Caso contrário → soma numérica
//
// IMPORTANTE:
// O operador + RODA ANTES ToPrimitive
//
// ---------------------------------------------------------------------------

    // "1" + null

    // Passo 1: "1" já é string
    // Passo 2: null é primitivo
    // Passo 3: como existe string → concatenação
    // Passo 4: null → "null"

    // Resultado:
    // "1" + null -> "1null"


// ============================================================================
// ETAPA 3 — ToNumber (quando operação é matemática)
// ============================================================================
//
// Usada em: * / - < > <= >=, + (quando NÃO é concatenação)
//
// ---------------------------------------------------------------------------

    // null        -> 0
    // undefined   -> NaN
    // true        -> 1
    // false       -> 0
    // ""          -> 0
    // " "         -> 0
    // "2"         -> 2
    // "abc"       -> NaN
    // []          -> 0
    // [2]         -> 2
    // {}          -> NaN

    // Exemplo:
    // 1 + null
    // -> ambos não são string
    // -> vira soma numérica
    // -> ToNumber(1) + ToNumber(null)
    // -> 1 + 0
    // -> 1


// ============================================================================
// ETAPA 4 — ToString (quando concatenação)
// ============================================================================
//
// Usada em: + (quando já decidiu concatenar), String()
//
// ---------------------------------------------------------------------------

    // null        -> "null"
    // undefined   -> "undefined"
    // true        -> "true"
    // false       -> "false"
    // 1           -> "1"
    // NaN         -> "NaN"
    // []          -> ""
    // [1,2]       -> "1,2"
    // {}          -> "[object Object]"


// ============================================================================
// ETAPA 5 — ToBoolean (controle de fluxo)
// ============================================================================
//
// Usada em: if, while, !, &&, ||
//
// ---------------------------------------------------------------------------

    // FALSY:
    // false
    // 0
    // -0
    // 0n
    // ""
    // null
    // undefined
    // NaN

    // TRUTHY:
    // todo o resto


// ============================================================================
// ETAPA 6 — Igualdade == (regra especial)
// ============================================================================
//
// Ordem resumida:
//
// 1. Tipos iguais → compara direto
// 2. null == undefined → true
// 3. Number vs String → String → Number
// 4. Boolean → Number
// 5. Object → ToPrimitive
// 6. Compara como Number
//
// ---------------------------------------------------------------------------

    // Exemplos:

    // [] == 0
    // [] -> ToPrimitive -> ""
    // "" -> ToNumber -> 0
    // 0 == 0 -> true

    // "0" == false
    // false -> 0
    // "0" -> 0
    // 0 == 0 -> true


// ============================================================================
// RESUMO MENTAL (USE ISSO PRA RACIOCINAR)
// ============================================================================

    // 1. Tem objeto? → ToPrimitive
    // 2. É + ? → decide string OU número
    // 3. É conta? → ToNumber
    // 4. É texto? → ToString
    // 5. É if? → ToBoolean
    // 6. É == ? → caos controlado
    // 7. É === ? → paz interior

// ============================================================================


// Frase pra nunca esquecer

    // Nada vira null.
    // Ou vira número, ou vira string, ou vira boolean.

// ============================================================================
// PEGADINHA CLÁSSICA — POR QUE {} + [] = 0
// ============================================================================
//
// ISSO NÃO É SÓ COERÇÃO — É PARSING (ANÁLISE SINTÁTICA)
//
// O JavaScript interpreta `{}` de DUAS formas possíveis:
// 1. Objeto literal
// 2. Bloco de código vazio
//
// A interpretação depende do CONTEXTO SINTÁTICO.
//
// ============================================================================


// ============================================================================
// CASO 1 — {} + []  (expressão isolada)
// ============================================================================
//
// O parser interpreta assim:
//
// {}        -> bloco de código vazio (NÃO é objeto)
// + []      -> operador unário +
//
// Ou seja, isso vira efetivamente:
//
// +[]
//
// Agora entra a coerção:
//
// [] -> ToPrimitive -> ""
// "" -> ToNumber    -> 0
// +0 -> 0
//
// RESULTADO FINAL:
// {} + [] === 0
//
// ============================================================================


// ============================================================================
// CASO 2 — ({}) + []  (objeto FORÇADO)
// ============================================================================
//
// Aqui não há ambiguidade sintática.
// ({}) é garantidamente um objeto.
//
// Passo a passo:
//
// ({}) -> ToPrimitive
// valueOf()  -> {}
// toString() -> "[object Object]"
//
// [] -> ToPrimitive -> ""
//
// Operador +:
// existe string -> concatenação
//
// RESULTADO FINAL:
// ({}) + [] === "[object Object]"
//
// ============================================================================


// ============================================================================
// CASO 3 — [] + {}
// ============================================================================
//
// [] NÃO pode ser interpretado como bloco.
// Logo, {} aqui é objeto literal normalmente.
//
// Passo a passo:
//
// [] -> ToPrimitive -> ""
// {} -> ToPrimitive -> "[object Object]"
//
// String + String -> concatenação
//
// RESULTADO FINAL:
// [] + {} === "[object Object]"
//
// ============================================================================


// ============================================================================
// REGRA MENTAL IMPORTANTE
// ============================================================================
//
// SOMENTE o {} NO INÍCIO DA EXPRESSÃO pode virar bloco.
//
// Tabela-resumo:
//
// {} + []     -> 0
// ({}) + []   -> "[object Object]"
// [] + {}     -> "[object Object]"
//
// ============================================================================



// ============================================================================
// SYMBOL.TOPRIMITIVE — CONTROLE TOTAL DA COERÇÃO
// ============================================================================
//
// Symbol.toPrimitive é um HOOK que permite ao objeto decidir
// como ele será convertido para valor primitivo.
//
// Ele TEM PRIORIDADE ABSOLUTA sobre:
// - valueOf()
// - toString()
//
// Ordem REAL do motor:
//
// 1. obj[Symbol.toPrimitive](hint)
// 2. obj.valueOf()
// 3. obj.toString()
//
// ============================================================================


// ============================================================================
// O PARÂMETRO hint (DETALHE CRUCIAL)
// ============================================================================
//
// O motor passa um argumento chamado "hint":
//
// "number"  -> operações matemáticas, +obj, < > - *
// "string"  -> String(obj), template literals
// "default" -> + (binário), ==
//
// ============================================================================


// ============================================================================
// EXEMPLO BÁSICO
// ============================================================================
//
// const obj = {
//   [Symbol.toPrimitive](hint) {
//     console.log(hint);
//     return 10;
//   }
// };
//
// obj + 1
//
// hint recebido: "default"
// Resultado: 11
//
// ============================================================================


// ============================================================================
// EXEMPLO — COMPORTAMENTO DIFERENTE POR HINT
// ============================================================================
//
// const user = {
//   name: "Lucas",
//   age: 30,
//
//   [Symbol.toPrimitive](hint) {
//     if (hint === "string") return this.name;
//     if (hint === "number") return this.age;
//     return `${this.name} (${this.age})`;
//   }
// };
//
// String(user) -> "Lucas"
// +user        -> 30
// user + ""    -> "Lucas (30)"
//
// ============================================================================


// ============================================================================
// COMPARAÇÃO — SEM Symbol.toPrimitive
// ============================================================================
//
// const obj = {
//   valueOf() {
//     return 5;
//   },
//   toString() {
//     return "5";
//   }
// };
//
// obj + 1
//
// Ordem:
// valueOf() -> 5
// Soma numérica
//
// Resultado: 6
//
// OBS:
// Se Symbol.toPrimitive existir,
// valueOf() e toString() NUNCA rodam.
//
// ============================================================================


// ============================================================================
// EXEMPLO REAL — USO PRÁTICO E SEGURO
// ============================================================================
//
// const money = {
//   amount: 100,
//   [Symbol.toPrimitive](hint) {
//     return hint === "string"
//       ? `R$ ${this.amount}`
//       : this.amount;
//   }
// };
//
// money + 50    -> 150
// String(money) -> "R$ 100"
// money > 20    -> true
//
// ============================================================================


// ============================================================================
// RESUMO FINAL (MODELO MENTAL)
// ============================================================================
//
// 1. O parser decide se {} é bloco ou objeto
// 2. Objetos -> ToPrimitive
// 3. Symbol.toPrimitive vence tudo
// 4. + decide string ou número
// 5. Conta -> ToNumber
// 6. Texto -> ToString
// 7. if / while -> ToBoolean
//
// ============================================================================


// ============================================================================
// FRASE PRA NUNCA ESQUECER
// ============================================================================
//
// Coerção não é conversão.
// É negociação entre o operador e o tipo.
//
// ============================================================================
