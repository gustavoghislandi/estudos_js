// =======================================================
// EXEMPLO DE LAZY LOADING E LAZY EVALUATION
// =======================================================

// Lazy: Executa de forma preguiçosa, só quando necessário.

// Eager: Executa tudo de uma vez, consumindo os dados imediatamente.

// -------------------------------------------------------
// ✔ Lazy Evaluation (Avaliação sob Demanda)
// -------------------------------------------------------
// Em Lazy Evaluation, a execução ocorre SOMENTE quando
// um valor ou resultado for realmente necessário.

function* geradorLazy() {
  yield 1;   // 1 só é gerado quando solicitado
  yield 2;   // 2 só é gerado quando solicitado
  yield 3;   // 3 só é gerado quando solicitado
}

const iterador = geradorLazy();

// A avaliação acontece sob demanda (lazy).
console.log(iterador.next()); // { value: 1, done: false }
console.log(iterador.next()); // { value: 2, done: false }
console.log(iterador.next()); // { value: 3, done: false }


// -------------------------------------------------------
// ✔ Lazy Loading (Carregamento Sob Demanda)
// -------------------------------------------------------
// Em Lazy Loading, os dados ou recursos são carregados
// APENAS quando realmente necessários, ao invés de carregar
// tudo de uma vez.

const bancoDeDados = {
  // Simulando carregamento de dados sob demanda
  obterUsuario(id) {
    return { id, nome: 'João' }; // Carrega dados sob demanda
  },

  obterPosts(id) {
    return [
      { id: 1, titulo: 'Post 1' },
      { id: 2, titulo: 'Post 2' }
    ]; // Carrega posts sob demanda
  }
};

// Carrega usuário e posts apenas quando necessário
const usuario = bancoDeDados.obterUsuario(1);
const posts = bancoDeDados.obterPosts(1);


// -------------------------------------------------------
// ✔ Lazy Evaluation x Eager Evaluation
// -------------------------------------------------------
// Lazy: Operação executada apenas quando necessário.
function* lazyExemplo() {
  yield 'carregar dados';
  yield 'processar dados';
  yield 'exibir resultados';
}

// Eager: Todos os valores são gerados de uma vez, consumindo mais memória.
const eagerExemplo = ['carregar dados', 'processar dados', 'exibir resultados'];


// -------------------------------------------------------
// ✔ Lazy Loading em Bancos de Dados
// -------------------------------------------------------
// Lazy Loading no BD: Relacionamentos são carregados somente quando acessados.

const cliente = {
  nome: 'Maria',
  pedidos: [
    { id: 1, valor: 100 },
    { id: 2, valor: 150 }
  ],
  // Simulação de lazy loading para pedidos
  getPedidos() {
    return this.pedidos;  // Carrega pedidos sob demanda
  }
};

console.log(cliente.getPedidos()); // Só carrega quando acessar


// -------------------------------------------------------
// ✔ Vantagens do Lazy
// -------------------------------------------------------
// - Melhor uso de memória (não carrega tudo de uma vez)
// - Maior performance em dados grandes (só carrega o necessário)
// - Menor custo de rede em casos como API ou BD (carrega dados sob demanda)


// -------------------------------------------------------
// ✔ Desvantagens do Lazy
// -------------------------------------------------------
// - Possível erro de "nulo" ou "indefinido" se não for bem tratado
// - Não é adequado para todas as situações, especialmente se os dados precisam estar prontos imediatamente


// -------------------------------------------------------
// ✔ Resumo
// -------------------------------------------------------
// Lazy: A execução ou carregamento ocorre só quando necessário.
// Eager: Tudo é feito ou carregado de uma vez.

// =======================================================
// EXEMPLOS DE LAZY EAGER LOADING
// =======================================================

// -------------------------------------------------------
// ✔ Lazy Loading / Lazy Evaluation
// -------------------------------------------------------
// Só executa quando necessário.

function* gerarDados() {
  yield new Promise(resolve => setTimeout(() => resolve('Dado 1'), 1000));
  yield new Promise(resolve => setTimeout(() => resolve('Dado 2'), 1000));
  yield 'Dado 3';  // síncrono
}

const iterador2 = gerarDados();

(async () => {
  console.log(await iterador2.next().value); // "Dado 1" depois de 1s
  console.log(await iterador2.next().value); // "Dado 2" depois de 1s
  console.log(await iterador2.next().value); // "Dado 3" imediatamente
  console.log(await iterador2.next().value); // undefined, iterador terminado
})();

// -------------------------------------------------------
// ✔ Eager Loading
// -------------------------------------------------------
// Executa tudo de uma vez.

const dadosEager = [1, 2, 3, 4].map(x => x * 2);
console.log(dadosEager); // [2, 4, 6, 8], tudo de uma vez

// =======================================================
// EXEMPLO COMPLETO COM TRY/CATCH (ERRO NO LAZY)
// =======================================================

// Em Lazy Loading com Promises, o fluxo pode falhar se o erro não for tratado.

function* carregarDados() {
  try {
    yield new Promise(resolve => setTimeout(() => resolve('Dado 1'), 1000)); // Espera 1s
    yield new Promise(resolve => setTimeout(() => resolve('Dado 2'), 1000)); // Espera 1s
    yield 'Dado 3';  // Retorna imediatamente
    yield new Promise((_, reject) => setTimeout(() => reject('Erro ao carregar o dado 4'), 1000)); // Simula erro
  } catch (erro) {
    console.log("Erro capturado dentro do gerador:", erro);  // Captura e trata erro dentro do gerador
  }
}

const iteradorComErro = carregarDados();

(async () => {
  try {
    console.log(await iteradorComErro.next().value); // "Dado 1"
    console.log(await iteradorComErro.next().value); // "Dado 2"
    console.log(await iteradorComErro.next().value); // "Dado 3"
    console.log(await iteradorComErro.next().value); // Erro: "Erro ao carregar o dado 4"
  } catch (erro) {
    console.error("Erro fora do gerador:", erro);  // Caso o erro não seja capturado dentro do gerador
  }
})();


// =======================================================
// COMPARAÇÃO ENTRE LAZY E EAGER COM PROMISES
// =======================================================

// -------------------------------------------------------
// ✔ forEach não aguarda Promises (Eager com Assíncrono)
// -------------------------------------------------------
const dadosAsync = [1, 2, 3];

// O forEach executa imediatamente, não espera a Promise ser resolvida
dadosAsync.forEach(async (valor) => {
  const resultado = await new Promise(resolve => setTimeout(() => resolve(valor * 2), 1000));
  console.log(resultado);  // Exibe após 1s, mas não aguarda as Promises
});

// -------------------------------------------------------
// ✔ map aguarda Promises (Lazy com Assíncrono)
// -------------------------------------------------------
const resultadosMap = await Promise.all(dadosAsync.map(async (valor) => {
  const resultado = await new Promise(resolve => setTimeout(() => resolve(valor * 2), 1000));
  return resultado;
}));

console.log(resultadosMap);  // Exibe [2, 4, 6] após 1s, porque map aguarda a Promise

// -------------------------------------------------------
// ✔ Diferença entre Lazy e Eager em Assíncrono
// -------------------------------------------------------
// O forEach não aguarda a resolução das Promises. Por isso, pode ser **mais rápido**, mas sem controle total do fluxo assíncrono.
// O map (com Promise.all) aguarda que todas as Promises sejam resolvidas antes de continuar, sendo mais **controlado**.


// =======================================================
// MÉTODOS LAZY E EAGER
// =======================================================

// -------------------------------------------------------
// ✔ Métodos Lazy
// -------------------------------------------------------
const lazyMethods = [
  'for...of',             // Iteração sob demanda
  'Array.from()',          // Cria array sob demanda de iteráveis
  'spread (...)',          // Expande iteráveis sob demanda
  'Generator functions',  // Funções geradoras (yield)
  'Promise.all()',         // Aguarda múltiplas Promises de uma vez
  'map() (com iteráveis)', // Iteração sobre iteráveis sob demanda
  'filter() (com iteráveis)', // Filtra sob demanda
  'reduce() (com iteráveis)' // Reduz sob demanda
];

// -------------------------------------------------------
// ✔ Métodos Eager
// -------------------------------------------------------
const eagerMethods = [
  'forEach()',             // Executa imediatamente
  'map() (em arrays)',     // Executa imediatamente (em arrays)
  'filter() (em arrays)',  // Executa imediatamente (em arrays)
  'concat()',              // Executa imediatamente (concatenação)
  'push()',                // Adiciona elementos imediatamente
  'slice()',               // Cria cópias imediatamente
  'join()',                // Junta arrays imediatamente
  'reduce() (em arrays)'   // Reduz imediatamente (em arrays)
];



