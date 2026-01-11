// Object.getOwnPropertyNames(obj)
// ---------------------------------
// Retorna um array com **todos os nomes de propriedades próprias** de um objeto,
// incluindo as **não enumeráveis**, mas **não inclui propriedades herdadas**.

// Exemplos:

const obj = {
  a: 1,
  b: 2
};

// Adicionando uma propriedade não enumerável
Object.defineProperty(obj, 'c', {
  value: 3,
  enumerable: false
});

console.log(Object.getOwnPropertyNames(obj));
// Saída: ["a", "b", "c"]
// Note que 'c' aparece mesmo sendo não enumerável

// Comparando com Object.keys (que pega só as enumeráveis)
console.log(Object.keys(obj));
// Saída: ["a", "b"]

// Pode ser usado em objetos built-in também
console.log(Object.getOwnPropertyNames(Error.prototype));
// Exemplo de propriedades próprias do prototype de Error
// Saída típica: ["constructor", "name", "message", "stack"]

// Resumo rápido:
// - Inclui propriedades enumeráveis e não enumeráveis
// - Não inclui propriedades herdadas via prototype
// - Retorna um array de strings com os nomes das propriedades
