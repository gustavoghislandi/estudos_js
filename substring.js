// O método substring() é usado para extrair uma parte de uma string em JavaScript.

// Sintaxe

    string.substring(inicio, fim);

// Parâmetros

    // inicio (obrigatório):    índice inicial (inclusivo).
    // fim       (opcional):    índice final   (exclusivo).

// Funcionamento

    // Retorna os caracteres entre inicio e fim.
    // Se fim não for informado, vai até o final da string.
    // Se (inicio > fim), o JS troca os valores automaticamente.
    // Valores negativos são tratados como 0.

// Exemplos

    let s = "0123456789"

    console.log(s.substring(0,8)) // 01234567 (começa na posição 0 vai até a posição 8-1)

    console.log(s.substring(5,3)) // 34 (inverteu e começou na posição 3 até a 5-1)

    console.log(s.substring(2)) // 23456789 (começa na posição 2 e vai até o fim)

    console.log(s.substring(-5,2)) // (começa na posição 0 e vai até a posição 2-1)

// Observações importantes

    // Não aceita índices negativos reais (diferente de slice()).
    // Não altera a string original (strings são imutáveis).

