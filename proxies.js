
// 1. O que são proxies?

// De forma geral, um proxy é um intermediário.

// Algo (ou alguém) não acessa o recurso diretamente — passa antes por um proxy.

// Esse intermediário pode:
// - Observar
// - Modificar
// - Controlar
// - Bloquear
// - Registrar (logar)
// o que entra e sai.


// 2. Para que servem proxies?

// Dependendo do contexto, proxies servem para:

// - Controle e segurança
// - Monitoramento
// - Otimização
// - Abstração / Encapsulamento
// - Interceptar comportamentos

// Existem dois grandes “mundos” onde proxies aparecem muito:


// 3. Proxies em redes (HTTP / Internet)

// O que fazem?
// Um proxy de rede fica entre você e a internet.

// Você → Proxy → Internet
// Internet → Proxy → Você

// Usos comuns
// - Ocultar IP real
// - Cache de requisições
// - Controle de acesso (firewall)
// - Bypass de restrições
// - Balanceamento de carga
// - Logs e auditoria

// Exemplos práticos
// - Proxy corporativo
// - Proxy reverso (Nginx, Cloudflare)
// - Proxy para scraping
// - VPNs (não são proxies puros, mas relacionados)

// Isso é conceitualmente parecido com Proxy em JS: alguém “no meio do caminho”.


// 4. Proxies em JavaScript (Proxy Object)

// Aqui entra a parte mais interessante pra quem programa.

// O que é um Proxy em JS?

// É um objeto especial que permite interceptar operações feitas em outro objeto.


// 5. Para que servem proxies em JS?

// Usos mais comuns e recomendados

// Validação de dados
// Logging / Debug
// Reatividade (Vue 3 usa Proxy!)
// Controle de acesso (privado / público)
// API mais inteligente / fluente
// Fallback de propriedades
// Lazy loading


// 6. Sintaxe completa do Proxy em JS

// Forma geral

const proxyFormaGeral = new Proxy(target, handler)

// Onde:
// - target → objeto original
// - handler → objeto com traps (interceptadores)

//----

    // Sintaxe das traps: como elas funcionam de verdade
    // Regra fundamental

    // Cada trap é simplesmente uma função dentro do objeto handler.

        const proxy = new Proxy(alvo, {
        trap1() {},
        trap2() {},
        trap3() {}
        })


    // Sim, você pode usar várias traps ao mesmo tempo.
    // Cada uma intercepta um tipo específico de operação.

    // O JavaScript decide qual trap chamar, não você.

//----

// 7. Principais traps (interceptações)

// Trap | Quando dispara
// get | Leitura de propriedade
// set | Escrita de propriedade
// has | Operador in
// deleteProperty | delete obj.prop
// ownKeys | Object.keys()
// getPrototypeOf | Object.getPrototypeOf()
// setPrototypeOf | Object.setPrototypeOf()
// apply | Chamada de função
// construct | new função()


// 8. Exemplos práticos


// Exemplo 1 — Interceptar leitura (get)

const user1 = {
  name: "Ana",
  age: 25
}

const proxy1 = new Proxy(user1, {
  get(target, prop) {
    console.log(`Acessando ${prop}`)
    return target[prop]
  }
})

proxy1.name


// Exemplo 2 — Validação ao escrever (set)

const user2 = {}

const proxy2 = new Proxy(user2, {
  set(target, prop, value) {
    if (prop === "age" && value < 0) {
      throw new Error("Idade inválida")
    }
    target[prop] = value
    return true
  }
})

proxy2.age = 30
// proxy2.age = -5


// Exemplo 3 — Propriedades privadas

const data = {
  public: "ok",
  _secret: "não pode"
}

const proxy3 = new Proxy(data, {
  get(target, prop) {
    if (prop.startsWith("_")) {
      throw new Error("Acesso negado")
    }
    return target[prop]
  }
})

proxy3.public
// proxy3._secret


// Exemplo 4 — Valor padrão (fallback)

const obj = {}

const proxy4 = new Proxy(obj, {
  get(target, prop) {
    return prop in target ? target[prop] : "default"
  }
})

proxy4.foo


// Exemplo 5 — Proxy em funções (apply)

function soma(a, b) {
  return a + b
}

const proxy5 = new Proxy(soma, {
  apply(target, thisArg, args) {
    console.log("Chamando soma com", args)
    return target(...args)
  }
})

proxy5(2, 3)


// Exemplo 6 — Proxy + Reactividade (estilo Vue)

function reactive(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      return target[prop]
    },
    set(target, prop, value) {
      console.log(`Mudou ${prop} para ${value}`)
      target[prop] = value
      return true
    }
  })
}

const state = reactive({ count: 0 })

state.count++


// 9. Quando não usar Proxy

// - Para lógica simples
// - Quando performance é crítica
// - Quando Object.defineProperty já resolve
// - Quando o comportamento “mágico” confunde o time

// Proxies são poderosos, mas podem esconder complexidade.


// 10. Resumo rápido

// - Proxy = intermediário
// - Em redes → controle de tráfego
// - Em JS → interceptar operações
// - Muito usado em:
//   - Frameworks
//   - Validação
//   - Logs
//   - Reatividade
// - Sintaxe: new Proxy(target, handler)

//-------------------------------------------
// A trap set dá controle total sobre o valor final gravado no objeto.
// Mesmo que o valor recebido seja validado, o desenvolvedor pode:
// - gravar outro número
// - gravar uma string
// - gravar um valor calculado
// - ou não gravar nada
// O Proxy não altera nem mantém valores automaticamente.
// Tudo depende do que for atribuído manualmente ao alvo.


// =======================================================
// SINTAXE DAS TRAPS E USO DE MÚLTIPLAS TRAPS
// =======================================================

// Cada trap é uma função dentro do objeto handler.
// É possível usar várias traps ao mesmo tempo.
// Cada operação dispara apenas a trap correspondente.

const manipuladorCompleto = {
  get(alvo, propriedade) {
    return alvo[propriedade]
  },

  set(alvo, propriedade, valor) {
    alvo[propriedade] = valor
    return true
  },

  has(alvo, propriedade) {
    return propriedade in alvo
  }
}

const objetoProxy = new Proxy({}, manipuladorCompleto)


// =======================================================
// SINTAXE DE CADA TRAP (EXEMPLOS CURTOS)
// =======================================================


// TRAP: get
// Intercepta leitura de propriedade

const objetoGet = { nome: "Ana" }

const proxyGet = new Proxy(objetoGet, {
  get(alvo, propriedade) {
    return alvo[propriedade]
  }
})

proxyGet.nome


// TRAP: set
// Intercepta escrita de propriedade

const proxySet = new Proxy({}, {
  set(alvo, propriedade, valor) {
    alvo[propriedade] = valor
    return true
  }
})

proxySet.idade = 30


// TRAP: has
// Intercepta o operador in

const objetoHas = { ativo: true }

const proxyHas = new Proxy(objetoHas, {
  has(alvo, propriedade) {
    return propriedade === "ativo"
  }
})

"ativo" in proxyHas


// TRAP: deleteProperty
// Intercepta delete

const objetoDelete = { x: 1 }

const proxyDelete = new Proxy(objetoDelete, {
  deleteProperty(alvo, propriedade) {
    delete alvo[propriedade]
    return true
  }
})

delete proxyDelete.x


// TRAP: ownKeys
// Intercepta Object.keys e for...in

const objetoKeys = { a: 1, b: 2 }

const proxyKeys = new Proxy(objetoKeys, {
  ownKeys(alvo) {
    return ["a"]
  }
})

Object.keys(proxyKeys)


// TRAP: getPrototypeOf

const proxyGetProto = new Proxy({}, {
  getPrototypeOf(alvo) {
    return Object.prototype
  }
})

Object.getPrototypeOf(proxyGetProto)


// TRAP: setPrototypeOf

const proxySetProto = new Proxy({}, {
  setPrototypeOf(alvo, prototipo) {
    Object.setPrototypeOf(alvo, prototipo)
    return true
  }
})

Object.setPrototypeOf(proxySetProto, {})


// TRAP: apply
// Intercepta chamada de função

function dobrar(numero) {
  return numero * 2
}

const proxyApply = new Proxy(dobrar, {
  apply(alvo, contexto, argumentos) {
    return alvo(...argumentos)
  }
})

proxyApply(4)


// TRAP: construct
// Intercepta uso de new

function Pessoa(nome) {
  this.nome = nome
}

const proxyConstruct = new Proxy(Pessoa, {
  construct(alvo, argumentos) {
    return new alvo(...argumentos)
  }
})

new proxyConstruct("Carlos")


// =======================================================
// ANÁLISE DO SET DO EXEMPLO DO USUÁRIO
// =======================================================

// O set intercepta completamente a atribuição.
// Nada é gravado automaticamente.
// A escrita só ocorre se o código fizer isso manualmente.

const validador = {
  set(alvo, propriedade, valor) {

    if (propriedade === "idade") {

      if (!Number.isInteger(valor)) {
        throw new TypeError("A idade não é um número!")
      }

    }

    // Aqui poderia ser:
    // alvo[propriedade] = 20
    // alvo[propriedade] = "valor_string_mesmo_apos_validacao"
    // alvo[propriedade] = valor * 2

    alvo[propriedade] = valor
    return true
  }
}

const usuario2 = new Proxy({}, validador)

usuario2.idade = 10
console.log(usuario2.idade)


// Se a linha de atribuição não existisse,
// o valor simplesmente não seria salvo.

//-------
// =======================================================
// IMPORTÂNCIA DO RETURN TRUE NO SET
// =======================================================

// A trap set substitui completamente a atribuição padrão.
// Nada é gravado automaticamente.
// A escrita só ocorre se o código fizer isso manualmente.

const validador2 = {
  set(alvo, propriedade, valor) {

    if (propriedade === "idade" && !Number.isInteger(valor)) {
      throw new TypeError("A idade não é um número!")
    }

    // O valor final é totalmente controlado pelo desenvolvedor.
    // Poderia ser qualquer outro valor.

    alvo[propriedade] = valor

    // Sem este return true:
    // - em strict mode ocorre TypeError
    // - a operação é considerada rejeitada

    return true
  }
}

const usuario3 = new Proxy({}, validador2)

usuario3.idade = 10
console.log(usuario3.idade)


//-----
// =======================================================
// REFLECT VS ACESSO DIRETO
// =======================================================

// Acesso direto ao alvo:
 // alvo[propriedade] = valor
// Simples e direto
// Pode violar invariantes internas
// Não replica exatamente o comportamento padrão do JavaScript

// Uso de Reflect:
 // Reflect.set(alvo, propriedade, valor, receiver)
// Replica o comportamento padrão do JavaScript
// Retorna true ou false corretamente
// Respeita regras internas do motor JS
// Evita bugs sutis em Proxies

// Regra prática:
// Dentro de traps, prefira Reflect ao acesso direto.


// =======================================================
// ORDEM EXATA DE EXECUÇÃO DAS TRAPS
// =======================================================

// Exemplo de escrita:
// proxy.propriedade = valor

// Ordem:
// 1. O JavaScript verifica se existe a trap set
// 2. Se existir, chama a trap set
// 3. Se não existir, usa o comportamento padrão
// 4. Se set retornar true, a operação é aceita
// 5. Se set retornar false, a operação falha (TypeError em strict mode)

// Exemplo de leitura:
// proxy.propriedade

// Ordem:
// 1. O JavaScript verifica se existe a trap get
// 2. Executa a trap get
// 3. Retorna o valor definido pela trap

// Cada operação dispara apenas uma trap.
// Não há execução paralela ou encadeada automática.


// =======================================================
// COMO DEBUGAR PROXY SEM ENLOUQUECER
// =======================================================

// Regras práticas para debugar Proxy:

// - Logar todas as traps no início
//   console.log("set", propriedade, valor)

// - Usar Reflect para evitar reimplementar o JavaScript

// - Evitar lógica pesada dentro das traps

// - Nunca esconder erros
//   Sempre lançar erro ou retornar false

// - Se algo parecer estranho:
//   Remova o Proxy temporariamente
//   Teste o alvo puro

// Proxy é ferramenta de precisão.
// Use como bisturi, não como martelo.

//--------------------

// =======================================================
// BUGS REAIS CAUSADOS POR PROXY
// =======================================================

// Bug 1 — esquecer return true no set
// O código parece funcionar
// Em "use strict" quebra com TypeError
// Difícil de rastrear porque o valor pode ter sido atribuído antes do erro

// Bug 2 — ownKeys incoerente
// Object.keys retorna um conjunto
// Acesso direto retorna outro
// Bibliotecas como React, ORMs e serializers quebram

// Bug 3 — Proxy com JSON.stringify
// Trap get mal implementada
// Propriedades retornam undefined
// Dados somem silenciosamente

// Bug 4 — Proxy em objetos de terceiros
// Bibliotecas esperam comportamento padrão
// Invariantes do JS são violadas
// Erros internos difíceis de debugar

// Regra prática:
// Não use Proxy em objetos que você não controla.


// =======================================================
// INVARIANTES INTERNAS (PARTE OBSCURA)
// =======================================================

// Mesmo com Proxy, o JavaScript impõe regras obrigatórias.
// Essas regras não podem ser quebradas.

// Exemplos de invariantes:

// - ownKeys deve incluir todas as propriedades não configuráveis
// - getPrototypeOf deve retornar o protótipo real do objeto
// - set não pode retornar true se a escrita for impossível
// - deleteProperty não pode remover propriedade não configurável

// Se uma invariante for violada, o motor JS lança:
// TypeError: invariant violated

// Proxy não dá liberdade total.
// Ele opera dentro das regras do motor JavaScript.


// =======================================================
// COMPARAÇÃO: PROXY vs DECORATORS vs MIDDLEWARES
// =======================================================

// PROXY
// Intercepta operações da linguagem
// Atua em runtime
// Muito poderoso
// Mais perigoso

// Usar Proxy quando:
// - precisa interceptar leitura ou escrita de propriedades
// - precisa alterar comportamento padrão do JavaScript


// DECORATORS
// Modificam classes, métodos ou propriedades
// Aplicados na definição, não em runtime
// Mais previsíveis
// Menos mágicos

// Usar Decorators quando:
// - quer adicionar comportamento
// - quer código explícito e rastreável


// MIDDLEWARES
// Interceptam fluxo de execução
// Não alteram o objeto diretamente
// Extremamente previsíveis

// Usar Middlewares quando:
// - precisa controlar fluxo
// - logging
// - autenticação
// - pipelines


// =======================================================
// REGRA DE OURO
// =======================================================

// Se Decorator ou Middleware resolve o problema,
// não use Proxy.

// Use Proxy apenas quando for necessário
// interceptar ou simular comportamento da própria linguagem JavaScript.
