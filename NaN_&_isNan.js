// No JavaScript, NaN significa Not a Number — ele representa um valor numérico que não é definido ou não pode ser representado.  

// NaN não é igual a nada, nem mesmo a outro NaN.  
// A ideia é que dois erros de cálculo distintos não podem ser considerados iguais.  

// A razão de NaN === NaN ser false é uma regra da linguagem, baseada no padrão IEEE 754 de números de ponto flutuante:  

    0 / 0 === NaN     // false, 0/0 gera NaN
    parseInt("x") === NaN // false, resultado não numérico

// Se você quiser checar se algo é NaN, não use ===, use:

    Number.isNaN(valor)   // true se valor é NaN

// Ou isNaN(valor) para conversão mais permissiva.  

// RESUMO:

    // converte valor para Number e depois testa se é NaN
    isNan(valor) 

    // checa estritamente se valor já é um NaN, não converte.
    Number.isNaN(valor)

    // Então, se:

        valor = 'abc'

        isNan(valor) // true, porque converte para Number e depois testa.

        Number.isNaN(valor) // false, porque 'abc' não é NaN, é string.