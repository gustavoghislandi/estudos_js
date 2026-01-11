/*
==================== Resumo sobre throw em JavaScript ====================

1️⃣ O que throw faz
- `throw` lança uma exceção que interrompe a execução atual
- Quem recebe é o primeiro `catch` na pilha
*/

try {
  throw "uma string";  // pode lançar qualquer coisa
} catch (e) {
  console.log("catch recebeu:", e); // "uma string"
}

/*
2️⃣ Qualquer valor pode ser lançado
*/
try {
  throw 42;            // número
} catch (e) {
  console.log("catch recebeu:", e); // 42
}

try {
  throw { msg: "objeto de erro" }; // objeto literal
} catch (e) {
  console.log("catch recebeu:", e.msg); // "objeto de erro"
}

/*
3️⃣ Lançando instâncias de classes
*/
class Carro {
  constructor(placa, marca) {
    this.placa = placa;
    this.marca = marca;
  }
}

try {
  throw new Carro("ABC-1234", "Ford"); // qualquer classe pode ser lançada
} catch (c) {
  console.log("catch recebeu marca:", c.marca); // "Ford"
}

/*
4️⃣ Throw com Error ou subclasses
- É comum lançar `Error` ou classes que estendam Error
- Permite propriedades extras e stack trace
*/
class MeuErro extends Error {
  constructor(codigo, msg) {
    super(msg);
    this.codigo = codigo;
  }
}

try {
  throw new MeuErro(500, "Erro interno");
} catch (e) {
  console.log(e.message); // "Erro interno"
  console.log(e.codigo);  // 500
}

/*
5️⃣ Propagação de erros
- Se não houver catch, o erro sobe a pilha até o topo
- Pode encerrar o script ou o processo Node.js
*/

function a() { 
    throw new Error("boom"); 
}

function b() {
    a(); 
}

try {
  b();
} catch (e) {
  console.log("Erro capturado na pilha:", e.message); // "boom"
}

/*
Resumo rápido:
- throw lança qualquer valor
- catch recebe exatamente o que foi lançado
- throw new Error(...) é padrão, mas throw Error(...) também funciona
- throw pode lançar instâncias de classes próprias
- Se não houver catch, erro não tratado sobe a pilha
=========================================================================
*/
