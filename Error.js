/*
==================== Resumo sobre Error em JavaScript ====================

1️⃣ Criação de Error
- Pode ser criado com `new Error("mensagem")` ou apenas `Error("mensagem")`.
*/
const e1 = new Error("mensagem com new");
const e2 = Error("mensagem sem new");
console.log(e1 instanceof Error); // true
console.log(e2 instanceof Error); // true

/*
2️⃣ Propriedades padrão do Error
*/
console.log(e1.name);    // "Error"
console.log(e1.message); // "mensagem com new"
console.log(e1.stack);   // pilha de chamadas

/*
3️⃣ Lançando erros
*/
try {
  throw new Error("erro comum");
} catch (err) {
  console.log("catch recebeu:", err.message);
}

try {
  throw "uma string"; // também é permitido
} catch (err) {
  console.log("catch recebeu:", err);
}

/*
4️⃣ Subclasses de Error (custom errors)
*/
class MeuErro extends Error {
  constructor(codigo, msg) {
    super(msg);          // seta message
    this.codigo = codigo; // propriedade extra
    this.data = new Date();
  }
}

try {
  throw new MeuErro(404, "Página não encontrada");
} catch (e) {
  console.log(e instanceof Error); // true
  console.log(e.message);          // "Página não encontrada"
  console.log(e.codigo);           // 404
  console.log(e.data);             // data do erro
}

/*
5️⃣ Como funciona internamente (simplificado)
- Cria objeto com protótipo Error.prototype
- Seta name = "Error" e message = argumento
- Cria stack com pilha
- Retorna objeto mesmo sem `new` (comportamento especial)

6️⃣ Diferença de new
- new cria instância e define this corretamente
- Chamadas sem new funcionam apenas porque Error foi feito assim
- Para subclasses, super() e new são obrigatórios

7️⃣ Propagação e catch
- throw lança a exceção
- catch recebe o que foi lançado (qualquer tipo)
- Sem catch, erro sobe a pilha e pode encerrar script/processo
=========================================================================
*/


// Se você quiser ver todas as propriedades “enumeráveis” e não-enumeráveis do objeto de erro, dá pra fazer assim:

    console.log(Object.getOwnPropertyNames(err));
    // ["stack", "message", "name"]

// Ou ainda:

    console.log(Object.keys(err)); 
    // [] → porque as três propriedades padrão não são enumeráveis

// Então, resumindo: Error tem name, message e stack, mas são não-enumeráveis por padrão.
