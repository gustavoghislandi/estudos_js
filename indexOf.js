// indexOf (retorna o índice, a posição)

// É um método que procura um valor dentro de uma string ou array.

// Sintaxe:

    // string.indexOf(valor, inicio?)

    // array.indexOf(valor, inicio?)

    // valor → o que você quer procurar
    // inicio (opcional) → posição inicial da busca

// Retorno:

    // ≥ 0 → posição onde encontrou
    // -1 → não encontrou

// Exemplos:

    "aeiou".indexOf("e");  // 1
    "aeiou".indexOf("x");  // -1

    [10, 20, 30].indexOf(20); // 1

// Casos de uso comuns:

    // Verificar se existe algo:

        texto = "texto.js"

        if (texto.indexOf("js") !== -1) {
        }

    // Validar caracteres:
        
        char = '5';

        "0123456789".indexOf(char) !== -1

    // Evitar duplicados em arrays

    const numeros = [];

    if (numeros.indexOf(10) === -1) {
        numeros.push(10);
    }

// Observações importantes

    // Diferencia maiúsculas de minúsculas
    // Retorna apenas a primeira ocorrência

// indexOf usa ===, que faz:

    // NaN === NaN → false

    // +0 === -0 → true

    // Por isso indexOf não encontra NaN.

// Para checagem simples, hoje usa-se muito:

        letra = 'a';

        "aeiou".includes(letra);

// o 'includes' retorna um boolean.

