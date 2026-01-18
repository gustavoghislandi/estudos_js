// =======================================================
// SYMBOL.ITERATOR — RESUMO DEFINITIVO (ES6)
// =======================================================

// -------------------------------------------------------
// 1) O que é Symbol
// -------------------------------------------------------
// Symbol é um tipo primitivo único e imutável.
// Cada Symbol criado é diferente de qualquer outro.
// Quando usado como chave de objeto, não aparece em
// enumerações comuns (Object.keys, for...in).

const sym = Symbol('exemplo');

const objComSymbol = {
  valor: 10,
  [sym]: 'sou um símbolo'
};

objComSymbol.valor;        // 10
objComSymbol.sym;          // undefined
objComSymbol['sym'];       // undefined
// Object.getOwnPropertySymbols(objComSymbol) -> [sym]

// -------------------------------------------------------
// 2) O que é Symbol.iterator
// -------------------------------------------------------
// Symbol.iterator é um Symbol ESPECIAL da linguagem.
// Ele define o PROTOCOLO DE ITERAÇÃO padrão de um objeto.
//
// Qualquer estrutura que possua obj[Symbol.iterator]
// é considerada ITERÁVEL.
//
// for...of, spread (...), Array.from, destructuring
// usam esse símbolo para obter valores.


// -------------------------------------------------------
// 3) Como funciona a iteração internamente
// -------------------------------------------------------
// Quando usamos for...of, o JS faz algo conceitualmente assim:
//
// const iterator = obj[Symbol.iterator]();
// iterator.next() -> { value, done }


// -------------------------------------------------------
// 4) Exemplo com Array (iterável nativo)
// -------------------------------------------------------

const primos = [2, 3, 5];

const iterador = primos[Symbol.iterator]();

iterador.next(); // { value: 2, done: false }
iterador.next(); // { value: 3, done: false }
iterador.next(); // { value: 5, done: false }
iterador.next(); // { value: undefined, done: true }

// Arrays são iteráveis POR PADRÃO porque já implementam
// Symbol.iterator.


// -------------------------------------------------------
// 5) Funções geradoras e iteração
// -------------------------------------------------------
// Funções geradoras (function*) retornam iteradores.
// Por isso, elas se integram perfeitamente ao for...of.

function* gerador() {
  yield 1;
  yield 2;
  yield 3;
}

for (const n of gerador()) {
  n; // 1, 2, 3
}


// -------------------------------------------------------
// 6) Criando um objeto iterável manualmente
// -------------------------------------------------------
// Objetos comuns NÃO são iteráveis.
// Podemos torná-los iteráveis definindo Symbol.iterator.

const equipe = {
  quantidade: 3,
  maturidade: 'alta',
  senior: 'Luís',
  pleno: 'Carla',
  junior: 'Marcos',

  [Symbol.iterator]: function* () {
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  }
};

for (const integrante of equipe) {
  integrante; // 'Luís', 'Carla', 'Marcos'
}

// Aqui definimos EXPLICITAMENTE como o objeto deve ser
// percorrido. Isso é o protocolo de iteração.


// -------------------------------------------------------
// 7) Existe apenas um Symbol.iterator por objeto
// -------------------------------------------------------
// Cada objeto pode ter APENAS UM iterador padrão.
// Definir outro substitui o anterior.
//
// for...of SEMPRE usa obj[Symbol.iterator].


// -------------------------------------------------------
// 8) map, filter, reduce NÃO usam Symbol.iterator
// -------------------------------------------------------
// Esses métodos pertencem ao Array.
// Eles iteram usando índices e length,
// não o protocolo de iteração.

primos.map(x => x * 2); // OK

// equipe.map(...) -> TypeError
// Mesmo sendo iterável, equipe NÃO é um Array.


// -------------------------------------------------------
// 9) Quem usa Symbol.iterator
// -------------------------------------------------------
// ✔ for...of
// ✔ spread (...)
// ✔ Array.from()
// ✔ destructuring iterável
// ✔ Promise.all(iterável)


// -------------------------------------------------------
// 10) Ponte entre iterável e array
// -------------------------------------------------------
// Para usar métodos de array em um iterável:

const dobrados = Array.from(equipe, x => x.toUpperCase());
// ou
const dobrados2 = [...equipe].map(x => x.toUpperCase());


// -------------------------------------------------------
// 11) Por que ITERÁVEL foi separado de ARRAY
// -------------------------------------------------------
// ITERÁVEL define "como percorrer".
// ARRAY define "estrutura indexada com tamanho".
//
// Nem tudo que pode ser percorrido precisa ser:
// - indexado
// - armazenado inteiro em memória
//
// Exemplos de iteráveis NÃO arrays:
// - streams de dados
// - geradores infinitos
// - leitura sob demanda
//
// Separar esses conceitos permite:
// ✔ iteração lazy
// ✔ estruturas customizadas
// ✔ menor consumo de memória
// ✔ integração universal com for...of


// -------------------------------------------------------
// 12) Regra mental final
// -------------------------------------------------------
// Symbol.iterator define COMO algo é percorrido.
// Array define ONDE e COMO os dados são armazenados.
//
// Todo Array é iterável.
// Nem todo iterável é Array.


//-------------------------
// =======================================================
// EXEMPLOS DE USO DO Symbol.iterator
// =======================================================


// -------------------------------------------------------
// ✔ for...of
// -------------------------------------------------------
// O for...of consome o iterador retornado por Symbol.iterator.

const iteravel = {
    tipo: 'custom',
    descricao: 'exemplo de objeto iterável',

    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (const valor of iteravel) {
    valor; // 1, 2, 3
}

// As propriedades existem no objeto:

    iteravel.tipo;        // 'custom'
    iteravel.descricao;   // 'exemplo de objeto iterável'

// Mas NÃO fazem parte da iteração.


// -------------------------------------------------------
// ✔ spread (...)
// -------------------------------------------------------
// O operador spread consome o iterável para criar uma coleção.

const arrayFromSpread = [...iteravel];
// [1, 2, 3]


// -------------------------------------------------------
// ✔ Array.from()
// -------------------------------------------------------
// Array.from consome o iterável e gera um Array.
// Pode receber uma função de mapeamento.

const arrayFromArrayFrom = Array.from(iteravel, x => x * 2);
// [2, 4, 6]


// -------------------------------------------------------
// ✔ destructuring iterável
// -------------------------------------------------------
// O destructuring usa o iterador para extrair valores
// na ordem em que são produzidos.

const [a, b, c] = iteravel;
// a = 1
// b = 2
// c = 3


// -------------------------------------------------------
// ✔ Promise.all(iterável)
// -------------------------------------------------------
// Promise.all aceita QUALQUER iterável de Promises,
// não apenas Arrays.

function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

const promessasIteraveis = {
      total: 3, // propriedade fora do iterador

  *[Symbol.iterator]() {
    yield delay(100, 'A');
    yield delay(200, 'B');
    yield delay(300, 'C');
  }
};

Promise.all(promessasIteraveis).then(resultados => {
  resultados; // ['A', 'B', 'C']
});

// Sempre que algo "consome" vários valores
// e aceita iteráveis, ele chama internamente:
// obj[Symbol.iterator]()

// Symbol.iterator NÃO percorre o objeto.
// Ele IGNORA o objeto.
//
// Ele apenas executa a função definida
// e consome os valores que ela produz.


// Iteração em JavaScript não é “andar pelo objeto”,
// é “consumir o que o iterator decide entregar”.