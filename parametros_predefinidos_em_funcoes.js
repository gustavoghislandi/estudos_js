// Parâmetros predefinidos em funções

// No JS, por padrão (default) as funções têm como parâmetro o valor 'undefined' (é como estar declarado, mas não definido).

    function funcao(param1){
        console.log(param1)
    }

    funcao('Argumento') // Argumento
    funcao() // undefined

// Isso também é válido para funções com múltiplos parâmetros:

    function imprimeNomeCompleto( nome, sobrenome, nomeDoMeio){
        console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
    }

    imprimeNomeCompleto('Jorge', 'Matos') // Jorge undefined Matos
    imprimeNomeCompleto('João','Silva', 'Pedro') // João Pedro Silva

// Então, qualquer parâmetro que a função esteja esperando que não for definido, o valor é assumido como undefined na execução. É como estar declarado, mas não definido.

// Até o ES5, era comum o desenvolvedor atribuir um valor para os parâmetros que tivessem como argumento o valor undefined.

    function imprimeNomeCompleto2( nome, sobrenome, nomeDoMeio){
        if (nomeDoMeio === undefined){
            console.log(`${nome} ${sobrenome}`)
        } else {
        console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
        }
    }

    imprimeNomeCompleto2('Jorge', 'Matos') // Jorge Matos
    imprimeNomeCompleto2('João','Silva', 'Pedro') // João Pedro Silva

// No ES6 não há mais a necessidade de atribuir valores predefinidos aos parâmetros via bloco de código da função.

// Agora, é possível atribuir um valor default já no campo dos parâmetros, veja como fica o exemplo anterior:

    function imprimeNomeCompleto3( nome, sobrenome, nomeDoMeio = ""){ // nomeDoMeio recebe "" (string vazia)
        console.log(`${nome} ${nomeDoMeio} ${sobrenome}`);
    }

    imprimeNomeCompleto3('Jorge', 'Matos') // Jorge  Matos // Pra mim, só isso de código não ficou bom, porque adicionou um espaço extra entre o nome e sobrenome. Para outros casos a tendência é ser mais útil.
    imprimeNomeCompleto3('João','Silva', 'Pedro') // João Pedro Silva

// Isso é importante para algumas coisas, como não precisar validar valores internamente ou usar duas funções com mesmo comportamento e diferentes assinaturas.


// VALORES 'undefined' E 'null' (IMPORTANTE!)

// Se uma função tiver um valor default predefinido e receber como parâmetro um valor 'undefined', ela usará o valor predefinido:

function multiplicaPor(valor, multiplicador = 2){
    return valor * multiplicador;
}

console.log(multiplicaPor(2,2)) // 4
console.log(multiplicaPor(2,undefined)) // 4

// Para que o valor do argumento seja interpretado intencionalmente como um valor desconhecido e/ou que não existe, precisamos utilizar o 'null' em vez do 'undefined':

console.log(multiplicaPor(2,null)) // 0 // Aqui deu zero, não estava como exemplo no livro. Pensei que 2 * 'null' seria 'null'. 'null' vira 0 em contexto numérico (coerção de tipos em JavaScript).

// Isso me levou a fazer o arquivo coercao_de_tipos.js

// Exemplo do livro:

    function print(valor = ''){
        console.log(valor);
    }

print(); // '' // Fica um espaço sem caracteres aparentes, parecendo que pulou de linha, no console.
print(null); // null

// É preciso ter muito cuidado ao trabalhar com variáveis que podem assumir o valor de 'undefined'.

[ continuar em: "Referenciando outros valores padrões"]