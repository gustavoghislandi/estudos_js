// Mapas são estruturas de dados em que é possível associar uma chave a um valor, como em um dicionário. Cada uma das chaves é única e possui apenas um valor, mesmo que este se repita.

// Segundo o ChatGPT, não seria como uma função matemática, mas próximo:

// Função: É um tipo específico de mapeamento em que cada entrada tem uma única saída.

// Mapeamento: Pode ser qualquer tipo de relação entre dois conjuntos, podendo ser mais geral. Por exemplo, um mapeamento pode associar um elemento de um conjunto a vários elementos de outro conjunto (isso não é permitido em uma função, que exige uma única saída para cada entrada).

// Isso significa que no mapeamento x poderia resultar em 1, 2 e 3; enquanto na função x teria que resultar ou em 1, ou em 2, ou em 3. Ou em algum array [1,2,3] ou tupla (1,2,3), porque nesse caso seria ainda uma saída única.

// Ou seja, função é saída única (1-1) e mapeamento é única ou múltipla (1-N)

// ------------------------------------------------------------------

// Map e WeakMap

// São implementações reais de mapas como estruturas de dados.
/* Elas permite:
    - Adicionar elementos pelo par (chave, valor);
    - Remover elementos pela chave;
    - Acessar elementos dada uma chave;
    - Pesquisar elementos, descobrindo se ele pertence ou não à coleção por meio da chave;
    - Ingadar sobre atributos (como o número de elementos, por exemplo).
*/

// MAP

// No JS, em um 'Map', qualquer valor (pode ser objeto, função ou valor primitivo) pode ser usado como chave ou valor.
// Vericando essa afirmação:

var map = new Map();
function funcao(){};
var objeto = {}


// 'setando' valores com 'set'
map.set("string", "Sou uma string"); // Estrutura (chave, valor)
map.set(objeto, "Sou um objeto");
map.set(funcao, "Sou uma função");


// resgatando valores com 'get'
console.log(map.get("string"));
console.log(map.get(objeto));
console.log(map.get(funcao));

// Para saber quantos itens um mapa tem, usa-se a propriedade 'size':
console.log("tamanho:" + map.size); // tamanho: 3

// Para saber se já existe uma chave específica dentro do mapa, usa-se 'has'. Isso retornará um booleano: true, para existente; false, caso não.

console.log(map.has("string")); // true
console.log(map.has("abc")); // false

// Para remoção de registro, usa-se o 'delete':

console.log(map.delete("string"));
console.log(`É para mostrar false: ${map.has("string")}`);

// Para limpar o mapa inteiro (remover todos os registros), usa-se 'clear':

map.clear();
console.log(map.size) // 0

// Como o Map é um objeto iterável, é possível usar for...of nele.
// Podemos utilizar os métodos:
    // .keys(), para chaves;
    // .values(), para valores;
    // .entries(), para entradas (par chave:valor).

var mapa = new Map();

mapa.set('um', 1);
mapa.set('dois', 2);
mapa.set('três', 3);

console.log("Chaves da variável mapa")
for (var chave of mapa.keys()){
    console.log(chave)
}

console.log("Valores da variável mapa")
for (var valor of mapa.values()){
    console.log(valor)
}

console.log("Entradas da variável mapa")
for (var entrada of mapa.entries()){
    console.log(entrada)
}


// ----- ChatGPT sobre usar objetos ou Map -----

// Diferenças principais entre Map e Objeto:

// Chaves:

    // Objeto: as chaves são sempre convertidas para strings. Ou seja, mesmo se você usar um número ou um objeto como chave, ele será transformado em string.

    // Map: pode usar qualquer tipo de dado como chave (strings, números, objetos, funções, etc.).

// Ordem de inserção:

    // Objeto: a ordem das chaves não é garantida (para chaves numéricas, por exemplo, pode ser diferente).

    // Map: mantém a ordem de inserção dos elementos.

// Desempenho:

    // Objeto: tem um desempenho bom para pequenos conjuntos de dados, mas para operações em grande escala (muitas inserções e buscas), o Map tende a ser mais eficiente.

    // Map: otimizado para manipular pares chave-valor e é mais eficiente em termos de tempo de execução para coleções grandes.

// ----- Fim doChatGPT sobre usar objetos ou Map -----

// Em resumo, usar mapas (instâncias de Map) quando:
    // as chaves precisarem ser não-string;
    // quiser uma iteração ordenada das chaves;
    // quiser maior desempenho em coleções grandes.



// WEAKMAP

// É uma coleção de pares chave/valor na qual as chaves só podem ser objetos.
// As referências dos objetos nas chaves são fracamente mantidas. Isso significa que eles não estão previnidos de serem coletados pelo Garbage Collector, se não existir nenhuma outra referência para o objeto em memória.

// ATENÇÃO: WeakMap só aceita objetos (pelo que testei funciona com função agora também) como chave. Mas string não funciona.

// O WeakMap permite armazenar dados em um objeto particular e, quando o objeto é destruído, os dados também são destruídos deixando a memória livre para novos processos. Com isso, tem-se a segurança de que não haverá vazamento de memória(memory leak)

// Exemplo, armazenando dois elementos de uma página HTML (teste isso no console do DevTools):

    var weakMap = new WeakMap();
    var elemento1 = window;
    var elemento2 = document.querySelector('body');

    weakMap.set(elemento1, 'sou o elemento1');
    weakMap.set(elemento2, 'sou o elemento2');

    console.log(weakMap.get(elemento1));
    console.log(weakMap.get(elemento2));




    elemento2.parentNode.removeChild(elemento2); // Isso remove o elemento2 do nó da árvore DOM
    console.log(elemento2); // Ele ainda existe. Sua chave é o body.
    console.log(weakMap.get(elemento2)); // Aqui seu valor
    elemento2 = null; // Remove a referência local (não apaga ele, quem fará isso é o garbage collector)
    // teste qualquer um dos dois abaixo
    console.log(elemento2); // Sumiu, já era
    console.log(weakMap.get(elemento2)); // Sumiu, já era

// ATENÇÃO: WeakMap só aceita objetos (pelo que testei funciona com função agora também) como chave. Mas string não funciona.

// Exemplo:

var weakMap2 = new WeakMap();
var s = "string"
function funcao(){};
var objeto = {};

weakMap2.set(s, "Isso é uma string") // Dá erro.
weakMap2.set(funcao, "Isso é uma função") // Funcionou... parece que não deveria, mas funcionou.
weakMap2.set(objeto, "Isso é um objeto") // Funciona e é o esperado.

//------

// Ainda, o WeakMap serve para manter os dados privados dentro da aplicação, não expondo o que não for necessário.

// Por exemplo, em uma API em que queremos disponibilizar dados ao usuário dela, mas que ele não saia espiando o que não deve.

// Convencionalmente, a maneira de fazer isso é utilizando o caractere '_' (underscore) como prefixo no atributo. Isso fará com que ele seja privado. 

// No código a seguir, queremos que 'nome' seja um atributo privado do objeto 'Pessoa'.

function Pessoa(nome){ // função construtora
    this._nome = nome;
}

Pessoa.prototype.getNome = function(){
    return this._nome;
}

// Nessa abordagem acima, utilizada pelos desenvolvedores no JavaScript ES5, atribuiu-se a propriedade 'nome' no construtor do objeto 'Pessoa' e, por prototipagem, atribuiu-se a função 'getNome', de modo que todas as instâncias de 'Pessoa' usem o mesmo método para recuperar o valor da propriedade 'nome'.

// Porém,  essa abordagem NÃO protege a propriedade, já que ela continua acessível:

var alfredo = new Pessoa('Alfredo')
console.log(alfredo.getNome()); // Alfredo (Até aqui tudo certo)
console.log(alfredo._nome); // Alfredo (Aqui não deveria ser acessível)

// Ao usar um 'WeakMap', consegue-se esconder a propriedade que guarda o valor e oferecer somente um método para recuperá-lo.

var Pessoa1 = (function() {

    var dadosPrivados = new WeakMap();

    function Pessoa1(nome) {
        dadosPrivados.set(this, {nome: nome}); // Um Weakmap com objeto this como chave e {nome: nome} como valor.
    }
        // this é o próprio objeto 'eduarda' que será criado. Se criar o objeto 'mario', será também a quem o this se refere.

        // Então, internamente, fica assim:
        // dadosPrivados.set(eduarda, { nome: "Eduarda" });
        // Cada instância tem seus próprios dados privados.

    Pessoa1.prototype.getNome = function() { 
        return dadosPrivados.get(this).nome;
    };
    // Mais explicações no * abaixo.

        
    return Pessoa1; //IIFE Immediately Invoked Function Expression (função autoexecutável) // Sem isso, Pessoa1 seria undefined.
}());

var eduarda = new Pessoa1('Eduarda'); 
console.log(eduarda.getNome()); // Eduarda (Tudo certo, porque usamos o método feito para isso)
console.log(eduarda.nome); // undefined


/* * Explicações extras:

    return dadosPrivados.get(this).nome;

Vamos quebrar isso em partes 👇

    dadosPrivados.get(this)

Busca no WeakMap o valor associado à chave this.

Isso retorna:

    { nome: "Eduarda" }

Depois, com:    

    .nome

Agora você acessa a propriedade nome do objeto retornado.

Então é exatamente isso:

    get(chave).propriedade_do_objeto-valor

Ou, expandindo:

    var dados = dadosPrivados.get(this);
    return dados.nome;

*/

/*
O return Pessoa1 diz:

“O valor final dessa execução é o construtor Pessoa1”

Sem isso, Pessoa1 seria undefined.

É assim que você:
    Esconde dadosPrivados
    Mas ainda consegue usar o construtor fora

Aqui:

A função não fica disponível

Apenas o resultado dela fica armazenado em Pessoa1

Ou seja:

Pessoa1 === resultado_da_execucao_da_IIFE
*/








/* ----- ChatGPT sobre o que realmente torna os dados privados ----

---

## 🔒 O que *realmente* torna os dados privados?

**Não é o `WeakMap` sozinho.**
**Não é o `prototype`.**

👉 O que torna os dados *efetivamente privados* é:

> **O fechamento de escopo (closure) criado pela IIFE**

---

## 🧠 Onde está a “mágica” da privacidade?

### Veja isto:

```js
var Pessoa1 = (function() {

    var dadosPrivados = new WeakMap(); // 🔒 PRIVADO

    function Pessoa1(nome) {
        dadosPrivados.set(this, { nome });
    }

    Pessoa1.prototype.getNome = function() {
        return dadosPrivados.get(this).nome;
    };

    return Pessoa1;
}());
```

### 🔐 Parte realmente privada:

```js
var dadosPrivados = new WeakMap();
```

Esse `dadosPrivados`:

* **Só existe dentro da IIFE**
* **Não pode ser acessado de fora**
* **Não vira propriedade de nenhum objeto**

Não existe:

```js
Pessoa1.dadosPrivados ❌
eduarda.dadosPrivados ❌
window.dadosPrivados ❌
```

---

## 📦 O papel da IIFE (closure)

Quando a IIFE é executada:

1. Cria um **escopo léxico**
2. Declara `dadosPrivados`
3. Retorna a função `Pessoa1`
4. O escopo **não é destruído**, porque:

   * `Pessoa1`
   * `Pessoa1.prototype.getNome`

… **continuam referenciando `dadosPrivados`**

Isso é um **closure**.

👉 O JavaScript mantém vivo o escopo **somente para quem tem referência a ele**.

---

## 🧩 O que é privado e o que é público?

### 🔒 Privado

* `dadosPrivados`
* Tudo que está **dentro da IIFE** e **não é retornado**

### 🔓 Público

* O construtor `Pessoa1` (porque foi retornado)
* Os métodos no `prototype` (porque estão acessíveis via instância)

---

## ❓ Mas por que o `nome` não é público?

Porque ele **não foi colocado no objeto**:

```js
// NÃO foi feito isso:
this.nome = nome;
```

Em vez disso:

```js
dadosPrivados.set(this, { nome });
```

Ou seja:

* O objeto `eduarda` **não tem** a propriedade `nome`
* O nome está guardado **fora do objeto**, num escopo inacessível

---

## 🧪 Teste mental rápido

```js
console.log(Object.keys(eduarda)); // []
console.log(eduarda.nome);         // undefined
```

Mas internamente:

```js
dadosPrivados.get(eduarda).nome // "Eduarda"
```

Só que você **não tem acesso a `dadosPrivados`**.

---

## 🧱 Por que `WeakMap` ajuda (mas não é o principal)?

O `WeakMap`:

* Permite usar **objetos como chave**
* Não impede o GC (garbage collector)
* Evita vazamento de memória

Mas a **privacidade vem do escopo**, não do `WeakMap`.

Sem IIFE:

```js
var dadosPrivados = new WeakMap(); // ❌ global
```

Aí já não seria privado.

---

## 🧠 Frase-chave para nunca esquecer

> **Privacidade em JavaScript vem de escopo, não de objeto.**

---

## ⚖ Comparação rápida

| Técnica          | Privacidade real? | Por quê                    |
| ---------------- | ----------------- | -------------------------- |
| `this.nome`      | ❌ Não             | Propriedade pública        |
| `_nome`          | ❌ Não             | Convenção apenas           |
| `WeakMap + IIFE` | ✅ Sim             | Closure                    |
| `class #nome`    | ✅ Sim             | Campo privado da linguagem |

---

*/

