// Template Strings

// TEMPLATE STRING SIMPLES

// Usa interpolação por meio de cifrão-chaves -> ${variavel}
// Usa crase para abrir e fechar a string -> `texto`
// Funciona para quebra de linha sem ter que usar \n

const nome = "Alfredo";
console.log(`Bem-vindo, ${nome}!`);

const n1 = 1, n2 = 2;
console.log(`O resultado de ${n1} + ${n2} = ${n1 +n2}`);

soma = n1+n2+n1+n2

console.log(`
Texto
com
quebra
de
linha.
Total ${soma}`)

// Isso é bastante bom para estruturar um nó HTML para inserir no DOM. Exemplo:]

let idade = 22;
let endereco = `Rua das palmeiras, ${n1}`

// aqui
const div =
`<div>
    <p><b>Nome:</b>${nome}<p>
    <p><b>Idade:</b>${idade}<p>
    <p><b>Endereço:</b>${endereco}<p>
</div>`;


// TEMPLATE STRING MARCADO (TAGS)


// 'template strings com funções', onde você pode personalizar a maneira como as variáveis são interpoladas na string. Isso é feito usando uma 'função de tagged template literals'.

//  Exemplo:

function saudacao(strings, nome, idade) {
  // strings: um array de strings literais
  // nome, idade: as variáveis interpoladas

  return `${strings[0]}${nome}${strings[1]}${idade}${strings[2]}`;
}
// Estas já foram declaradas lá no exemplo simples, por isso estão comentadas.
// const nome = "João"; 
// const idade = 16;

const resultado = saudacao`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;

console.log(resultado);

// Explicação:

// * A função `saudacao` é uma função de 'tag' que processa a template string.
// * O parâmetro `strings` é um array contendo as partes fixas da string (a parte "não interpolada").
// * As variáveis (como `nome` e `idade`) são passadas depois do parâmetro `strings`, e você pode manipulá-las dentro da função.
// * A função então retorna a string final combinando as partes literais com as variáveis.

//  Como funciona:

// 1. '`strings`': é um array que contém as partes fixas da string, ou seja, tudo o que está fora de `${}`.
// 2. 'Variáveis' (como `nome` e `idade`): são passadas após o array `strings` e podem ser manipuladas ou formatadas como você quiser dentro da função.

// Você pode até fazer algo mais avançado dentro da função, como formatação de números, tratamento de strings e outras lógicas.

// Por exemplo, se você quiser fazer uma manipulação mais interessante, como formatar o nome em letras maiúsculas:


function saudacao2(strings, nome, idade) {
    // console.log(strings)
    return `${strings[0]}${nome.toUpperCase()}${strings[1]}${idade}${strings[2]}`;
}

const resultado2 = saudacao2`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(resultado2);



// Para ficar claro:

const resultado3 = saudacao2`Esta é a strings[0] ${nome} Esta é a strings[1] ${idade} E aqui é a strings[2]. Perceba que o que define a string na posição 0, 1 ou 2 são os elementos \$\{\} que as separam.`;

console.log(resultado3)

// ---------

// Às funções utilizadas, que criam o array de string sem precisar declarar ele (porém tem que colocar o array como O PRIMEIRO parâmetro da função) chama-se TAG FUNCTION.

// Evidentemente, 'strings' poderia se chamar 'mensagem' ou qualquer outro nome que você quiser.

// O 'array de partes fixas'(a parte não interpolada) será sempre o primeiro parâmetro da função.

// Se você quiser ver o somente o array de strings, você pode, por exemplo, dentro da função saudacao2 escrever(descomentar) console.log(strings). Isso mostrará no console o array somente, sem os elementos interpolados, assim:

// [
//   'Esta é a strings[0] ',
//   ' Esta é a strings[1] ',
//   ' E aqui é a strings[2]. Perceba que o que define a string na posição 0, 1 ou 2 são os elementos ${} que as separam.'
// ]