// SET

// Set é uma estrutura de dados que permite ter listas com valores que nunca se repetem, mantendo a ordem de inserção dos seus itens.

// Ele também é um objeto iterável.

// O Set no JS usa os mesmos métodos (ou propriedade size) que o Map:

    // add(value)      - adiciona um valor
    // delete(value)   - remove um valor
    // has(value)      - verifica se existe
    // clear()         - remove todos
    // size            - quantidade de elementos
    // forEach(fn)     - itera os valores
    // keys()          - iterator de valores
    // values()        - iterator de valores
    // entries()       - iterator [valor, valor]

console.log("-----console.log(set)-----")

var set = new Set();

set.add(2);
set.add(1);
set.add(2);

console.log(set) // Set(2) { 2, 1 }

// Significa:
// Set → o tipo do objeto
// (2) → quantidade de elementos (size === 2)
// { 2, 1 } → os valores armazenados

// Como é possível perceber, o Set mantém a ordem de inserção. Não é ordem numérida, é ordem de entrada.

// Podemos pegar somente os valores com for...of também:

console.log("-----set for...of-----")

for (var valor of set){
    console.log(valor)
}

// 2
// 1

// O construtor do Set permite passar os valores com os quais queremos que ele inicie. Basta passar os valores dentro de um Array, que será o parâmetro.

console.log("-----set2 for...of-----")

var set2 = new Set([2,1,2,4,3]);

for (const valor of set2) {
    console.log(valor)
}

// 2
// 1
// 4
// 3

// Perceba que o Set não permite a duplicação dos valores. Isso é muito bom para entradas do usuário no sistema.

// O método add aceita somente um parâmetro, o objeto a ser inserido:

var musicas = new Set();

musicas.add('musica1');

for (var musica of musicas){
    console.log(musica); // musica1
}

// Método delete:

var songs = new Set(['song1','song2']);

songs.delete('song1')

for (var song of songs){
    console.log(song); // song2
}

// Método clear:

musicas.clear(); // precisa fazer musicas receber valor 'null' se quiser deletar ela de vez. Aqui só limpa. É um conjunto vazio.

// Propriedade size (não é método, não usa '()'):

console.log(musicas.size); // Se rodar um for...of com ele vazio, não vai aparecer nada no console.

// Método has (retorna booleano):

if(songs.has('song2')){
    console.log("Já está na lista!");
}


// WEAKSET

// WeakSet, de comportamento semelhante ao WeakMap, é um Set que não previne que os seus elementos sejam coletados pelo Garbage Collector.

// Nessa estrutura só é possível adicionar objetos. Tipos primitivos como números e strings não são aceitos.

// O WeakSet NÃO é iterável.

//Não há como remover todos os elementos de uma vez: esta estrutura não implementa o método 'clear', pois assim que o elemento perde a referência forte, ele fica inacessível e o Garbage Collector dará conta dele. O Garbage Collector que gerencia o conteúdo dele. Em outras palavras, é só fazer a variável de tipo WeakSet ter valor null que tudo some junto.

var musica3 = {
    titulo: 'O amor não tem rollback',
    autor: 'SQL'
}

var musica4 = {
    titulo: 'Memória física de você',
    autor: 'HD'
}

var musicas3 = new WeakSet([musica3, musica4]);
console.log(musicas3); // WeakSet { <items unknown> } é proposital da linguagem.
console.log(musica3) // { titulo: 'O amor não tem rollback', autor: 'SQL' }
console.log(musica4) // { titulo: 'Memória física de você', autor: 'HD' }

// ----- ChatGPT sobre o resultado WeakSet { <items unknown> } -----

// WeakSet é um tipo especial de coleção em JavaScript com restrições intencionais:

    // Ele só aceita objetos (✔️ você fez certo)
    // Ele não é iterável
    // Ele não expõe seus itens
    // Ele não tem .size
    // Os objetos dentro dele podem ser coletados pelo garbage collector a qualquer momento

// Por causa disso, o console do navegador não pode listar os itens do WeakSet.

// Por isso aparece algo como:

    // WeakSet { <items unknown> }

// O console está dizendo literalmente:

    // “Eu sei que tem coisas aí dentro, mas não posso mostrar”

// Por que o JavaScript fez isso?

// O WeakSet foi criado para uso interno e controle de referência, não para armazenamento ou iteração de dados.

// Exemplo de uso típico:

    // Marcar objetos
    // Controlar estados internos
    // Evitar vazamentos de memória

// ----- Fim do ChatGPT sobre o resultado WeakSet { <items unknown> } -----
console.log("-----Hora de limpar com null-----")

musicas3 = null;
// musica3 = null;
// musica4 = null;

console.log(musicas3); // WeakSet { <items unknown> } é proposital da linguagem.

setTimeout(() => {

console.log(musica3) // { titulo: 'O amor não tem rollback', autor: 'SQL' }
console.log(musica4) // { titulo: 'Memória física de você', autor: 
// 'HD' }
}, 20000); // Ainda ficam acessíveis. Por causa do código abaixo que roda antes, ficam null.

// Melhor apagar cada uma.

musica3 = null;
musica4 = null;

console.log(musica3) // null
console.log(musica4) // { null

// Há poucas circunstâncias em que o WeakSet seja útil no dia a dia. Um dos casos é garantir que um método ou atributo (propriedade) pertença a um objeto específico e não a todas aquelas instâncias de mesmo tipo (classe).

// Em tese, é bom para não vazar memória.