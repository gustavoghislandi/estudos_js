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
