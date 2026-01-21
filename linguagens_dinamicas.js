// Uma linguagem dinâmica é uma linguagem de programação onde certos aspectos do programa, como tipos de dados, variáveis, ou estrutura do código, podem ser determinados ou modificados em tempo de execução, ao invés de serem decididos de antemão, durante a compilação.

// Em outras palavras, a tipagem e outras características podem ser alteradas enquanto o programa está sendo executado, o que dá uma grande flexibilidade e, por vezes, facilita o desenvolvimento de soluções rápidas. No entanto, isso também pode aumentar o risco de erros em tempo de execução, já que muitas verificações que normalmente seriam feitas na compilação são adiadas.

// Características de linguagens dinâmicas:
// - Tipagem dinâmica: o tipo de uma variável pode ser alterado em tempo de execução, sem a necessidade de declaração explícita.
// - Atraso na verificação de erros: erros de tipo e outros problemas podem só ser identificados enquanto o programa está rodando.
// - Maior flexibilidade: pode ser mais fácil escrever código flexível e reutilizável, pois a linguagem permite mais mudanças em tempo de execução.

// Exemplos de linguagens dinâmicas:
// - JavaScript
// - Python
// - Ruby
// - PHP
// - Lua

// Exemplo de tipagem dinâmica em Python:
x = 10      // x é um inteiro
console.log(x);
x = "Olá"   // agora x é uma string
console.log(x);

// Nesse exemplo, x começa como um inteiro e, mais tarde, se torna uma string, sem a necessidade de uma declaração explícita de tipo, o que é uma característica de linguagens dinâmicas.

// Vantagens:
// - Maior produtividade: você não precisa se preocupar tanto com tipos e declarações antecipadas.
// - Código mais conciso e flexível.

// Desvantagens:
// - Menos segurança em tempo de compilação: erros que poderiam ser detectados antes de rodar o programa (como problemas de tipo) podem só ser descobertos quando o programa estiver em execução.
// - Possíveis dificuldades de performance: a flexibilidade pode tornar o programa mais lento, pois há mais verificações em tempo de execução.

// Em resumo, uma linguagem dinâmica oferece maior liberdade e flexibilidade ao programador, mas, em contrapartida, pode resultar em mais desafios para depurar e garantir que o código funcione corretamente em diferentes condições.