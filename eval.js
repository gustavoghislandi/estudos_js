// `eval` é uma função que executa código contido em uma string.

// Traduz e executa um pedaço de código contido numa string no momento do Runtime.

// É comum em linguagens interpretadas, como Lisp, Perl, Ruby, Python e JavaScript.

// Exemplo (JavaScript):

    eval("2 + 2") // 4

    // ⚠️ Perigoso: pode executar código malicioso.
    // ✅ Use só se for realmente necessário.


// 'eval' avalia uma string como se fosse código da linguagem em tempo de execução.

// Para que serve

    // Pode ser usado quando o código só é conhecido em tempo de execução, como em uma calculadora simples.

// Exemplo (JavaScript)

    function calcular(expressao) {
        return eval(expressao)
    }

    calcular("10 + 5 * 2") // 20

// Problema
    // Se a string vier do usuário, ele pode executar código perigoso:

    eval("alert('hackeado')") // Eu ri quando eu li isso.

        // Para rodar esse no node, use:

            eval("console.log('hackeado')")

// Alternativa
    // Prefira parsers, funções seguras ou bibliotecas específicas em vez de 'eval'.


// Perceba que ele faz uso de variáveis também:

    x = 3
    s = 'x + 1'
    console.log(eval(s)) // 4

// A string 'x + 1' é traduzida e executada quando o código está rodando, resultando no valor 4. Cabuloso, hein?



