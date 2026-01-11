/* eslint-disable */
// @ts-nocheck


// Em JavaScript, arguments é um objeto especial disponível dentro de funções tradicionais (não arrow functions)
// que contém todos os argumentos passados para a função,
// independentemente de quantos parâmetros ela declarou.

// Resumo do funcionamento:

// - arguments[0], arguments[1], etc. acessam os valores passados por posição.
// - arguments.length indica quantos argumentos foram recebidos.
// - Ele não é um array, mas é array-like (tem índices e length).
// - Permite criar funções com quantidade variável de parâmetros.
// - arguments reflete apenas os valores realmente passados na chamada da função, não os defaults.

// No seu exemplo:

    const tabela = arguments[0];
    const qtdArgs = arguments.length;

// - arguments[0] recebe o nome da tabela.
// - Os demais argumentos (arguments[1], arguments[2], ...) são tratados como colunas.
// - O for percorre esses argumentos extras para montar a lista de colunas do SELECT.

// Observação importante:
// Hoje em dia, o uso de arguments é muitas vezes substituído pelo rest operator (...args),
// que é mais moderno e claro:

    function MontaQuerySelect(tabela, ...cols) {
        const colunas = cols.length ? cols.join(', ') : '*';
        return `SELECT ${colunas} from ${tabela}`;
}

// Mas o conceito do arguments é exatamente permitir trabalhar com parâmetros dinâmicos dentro da função.

//---

// No arguments, o “índice” é uma propriedade do objeto.

// Por que dizemos que é um índice?
// Porque as propriedades usam nomes numéricos, o que faz o objeto se comportar como um array.

// Exemplo real do arguments:

    arguments = {
        0: 'tabela',
        1: 'col1',
        2: 'col2',
        length: 3
    };

    // Aqui:

    // - arguments[0] → é o mesmo que arguments['0']
    // - arguments[1] → é o mesmo que arguments['1']
    // - length → é outra propriedade do objeto

    // Então sim:
    // - 0, 1, 2 são chaves (propriedades)
    // - O valor associado a cada chave é o argumento passado
    // - O JavaScript apenas permite acessar essas propriedades usando a sintaxe de array

// Por isso arguments não é um array
// Ele:
// - não herda de Array.prototype
// - não tem métodos como map, filter, forEach

// Mas ele é array-like porque:
// - tem propriedades numéricas sequenciais
// - tem length

// Comparação rápida

    const obj = {
        nome: 'Ana',
        idade: 30
    };

// arguments:
const argumentsExemplo = {
    0: 'tabela',
    1: 'col1',
    length: 2
};

// A única diferença é que no arguments:
// - as chaves são números (convertidos para string internamente)
// - existe a convenção de ordem

// Resumo em uma frase
// Sim — no arguments, o índice é apenas uma propriedade do objeto com nome numérico,
// acessada com sintaxe de array.

//---

// Isso significa que a é assim? 

    // minhaFuncao(arguments[0], arguments[1], arguments[2]...)

// Quase — a ideia está correta, mas a forma não é exatamente essa. Vamos ajustar o conceito.

// O que NÃO acontece
// Você não chama a função assim:

    minhaFuncao(arguments[0], arguments[1], arguments[2]);

// Isso não existe fora da função.

//------------------------------

// O que REALMENTE acontece

// Quando você chama:

    minhaFuncao('a', 'b', 'c');

// O JavaScript internamente cria o objeto arguments dentro da função como se fosse:

    function minhaFuncao() {
        arguments = {
            0: 'a',
            1: 'b',
            2: 'c',
            length: 3
        };
    }

// Ou seja:

// - Você chama a função normalmente
// - O JavaScript empacota os valores passados
// - Esses valores ficam disponíveis em arguments por índice

// Forma mental correta (modelo certo)

    minhaFuncao('a', 'b', 'c');
    // ↓
    arguments[0] === 'a'
    arguments[1] === 'b'
    arguments[2] === 'c'

// E não assim:

    // minhaFuncao(arguments[0], arguments[1], arguments[2]); // ❌

// Por que isso funciona sem parâmetros?

// Porque:
// - parâmetros são opcionais
// - argumentos sempre existem
// - arguments é criado automaticamente pelo JavaScript em funções tradicionais

//----

// Resumo final (uma linha)

// Você não passa arguments para a função;
// o JavaScript cria arguments dentro dela,
// com todos os valores passados, na ordem da chamada.


// COMO FUNCIONA (para tipos primitivos e objetos)

// 1. Primitivos

    function exemplo1(arg) {
        arguments[0] = 'x';
        console.log(arguments[0]); // x
    }
    exemplo1('a'); 

    // arguments[0] copia o valor 'a', não referencia a variável original

// 2. Objetos - alteração de propriedade

    function exemplo2(obj) {
        arguments[0].prop = 123;
    }
    const meuObj = {};
    exemplo2(meuObj);
    console.log(meuObj.prop); // 123

    // arguments[0] aponta para o mesmo objeto, alterações internas afetam o objeto original

// 3. Objetos - reatribuição

    function exemplo3(obj) {
        arguments[0] = { novo: true };
    }
    const outroObj = {};
    exemplo3(outroObj);
    console.log(outroObj); // {}

    // arguments[0] agora aponta para um novo objeto
    // a referência externa (outroObj) não muda

//Resumo em palavras:

// Primitivos → arguments[0] contém o valor, não é referência.

// Objetos → arguments[0] referencia o mesmo objeto, alterações internas afetam o original.

// Reatribuição → mudar arguments[0] para outro objeto não muda a variável externa, apenas a referência dentro do arguments.

// VALOR DEFAULT NA ASSINATURA DA FUNÇÃO

// Quando você passa um valor default na assinatura da função, o comportamento do arguments muda
// dependendo de como você chama a função.

// Exemplo

    function exemplo(a = 10) {
        console.log(a);
        console.log(arguments.length);
    }

    exemplo();      // a = 10, arguments.length = 0
    exemplo(5);     // a = 5, arguments.length = 1

// Observações:

// 1. arguments só contém os valores realmente passados na chamada.

    // - No primeiro caso, nada foi passado, então arguments.length = 0, mesmo que a tenha o valor default 10.  
    // - No segundo caso, 5 foi passado, então arguments[0] = 5.

// 2. Valor default não cria uma entrada automática no arguments.

    // - O default é apenas usado para inicializar o parâmetro internamente na função.

// 3. Se você passar undefined explicitamente, o default é aplicado, mas arguments contém undefined:

    function exemplo2(a = 10) {
        console.log(a);             // 10
        console.log(arguments[0]);  // undefined
        console.log(arguments.length); // 1
    }
    exemplo2(undefined);

// Regra prática:

    // - arguments reflete apenas os valores realmente passados na chamada da função, não os defaults.
