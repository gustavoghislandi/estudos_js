// Classes em JavaScript ainda funciona em cima da herança por prototipagem (não é Orientada a Objetos igual a Java).

// No caso do JavaScript, classes são uma camada de abstração para deixar a linguagem mais semelhante aos padrões de linguagens orientadas a objetos.

// Exemplo com Carro:

// Vamos criar uma função construtora:

    function Carro(modelo, chassi, qtdPortas){
        this.modelo = modelo;
        this.chassi = chassi;
        this.qtdPortas = qtdPortas;
    }

// Agora que temos um modelo de Carro como base, podemos instaciar objetos protótipos dele:

    const prototipo400 = new Carro('Hatch', '1234WWEX', 4);

    console.log(prototipo400.modelo); // Hatch
    console.log(prototipo400.chassi); // 1234WWEX
    console.log(prototipo400.qtdPortas); // 4
    console.log(prototipo400); // Carro { modelo: 'Hatch', chassi: '1234WWEX', qtdPortas: '4' }

// Criados alguns atributos básicos, agora vamos adicionar métodos:

// Usando a propriedade prototype de Carro:

    Carro.prototype.andar = function(){
        console.log("Carro andando!");
    };

// Isso fará com que todas as instâncias de Carro tenham o método 'andar()':

    prototipo400.andar(); // Carro andando!

// Criando outro objeto:

const sonix = new Carro('Sonix', '0000001', 4)

    console.log(sonix.modelo); // ECMA 2026
    console.log(sonix.chassi); // 0000001
    console.log(sonix.qtdPortas); // 4
    console.log(sonix); // Carro { modelo: 'ECMA 2026', chassi: '0000001', qtdPortas: 4 }
    sonix.andar();

// O modelo 'Sonix' é um carro diferenciado dos outros, para isso, ele irá herdar características do prototype de Carro, mas terá outros atributos e métodos:

    function Sonix(modelo, chassi, qtdPortas){
        Carro.call(this, modelo, chassi, qtdPortas)
    }

    // O 'this' é o objeto que está sendo criado por 'new Sonix()'.

    // O call faz com que o 'this' dentro de Carro aponte para esse mesmo objeto.
    // Assim, por exemplo, 'this.modelo = modelo' em Carro grava a propriedade no objeto Sonix.

        // console.log(Carro.prototype) // { andar: [Function (anonymous)] }

    Sonix.prototype = Object.create(Carro.prototype) 
   
        // Sem Sonix.prototype.constructor = Sonix; :

            console.log(Sonix.prototype.constructor === Carro) // true

            // Por quê?

                // Object.create(Carro.prototype) cria um objeto cujo [[Prototype]] é Carro.prototype

                // E Carro.prototype tem constructor = Carro

                // Logo, a busca por constructor sobe a cadeia e acha Carro

        // Após Sonix.prototype.constructor = Sonix; :

        Sonix.prototype.constructor = Sonix;

            // O que essa linha faz:

                // Cria um constructor próprio em Sonix.prototype

                // Corrige a identidade do tipo

                console.log(Sonix.prototype.constructor === Carro) // false
                console.log(Sonix.prototype.constructor === Sonix) // true // Identidade do tipo corrigida.

                //console.log(typeof Sonix) // function

                // Importante, sonix2.constructor === Sonix; :

                    //     Não afeta a herança

                    //     Não muda comportamento

                    //     Serve para:

                        //     reflexão

                        //     debug

                        //     documentação

                        //     ferramentas / frameworks

                    // Object.create quebra a referência correta do constructor;
                    // essa linha apenas restaura quem criou o objeto.

//------------ continuando, explicando de outro modo:

    // Não muda “a referência do objeto”, muda a referência do 'constructor'.

    // O que 'Object.create' fez
    
        // Sonix.prototype = Object.create(Carro.prototype)

    // - 'Sonix.prototype' não tem 'constructor' próprio
    // - Ao acessar:

        // sonix2.constructor 

    // o JS procura assim:

        // sonix2
        // → Sonix.prototype        (não acha constructor)
        // → Carro.prototype        (acha constructor = Carro)

        // Resultado:

            // sonix2.constructor === Carro // true

    // ---

    // O que esta linha muda

        // Sonix.prototype.constructor = Sonix;

        // - Cria um 'constructor' direto em 'Sonix.prototype'
        // - A busca para ali, não sobe mais

    // Agora:

        // sonix2
        // → Sonix.prototype (constructor = Sonix) ✅

    // Resultado:

            // sonix2.constructor === Sonix // true

    // ---
    // O ponto-chave (frase final)

        // 'Object.create' não “faz o objeto virar Carro”;  
        // ele só faz o lookup do 'constructor' cair em 'Carro.prototype'.  
        // A atribuição corrige esse lookup.

//-------

// Caminho de busca (property lookup) em JavaScript:

// 1) O JavaScript procura primeiro no próprio objeto
    // sonix2

// 2) Se não encontrar, sobe para o prototype do construtor
    // sonix2.__proto__ === Sonix.prototype

// 3) Se ainda não encontrar, sobe para o prototype herdado
    // Sonix.prototype.__proto__ === Carro.prototype

// 4) Continua subindo até Object.prototype
    // Carro.prototype.__proto__ === Object.prototype

// 5) Se não encontrar em nenhum ponto (null), retorna undefined

// Representação linear do caminho:

    //sonix2
        // → Sonix.prototype
        // → Carro.prototype
        // → Object.prototype
        // → null

// Exemplo prático de busca:

    // sonix2.andar()
        // 1) não existe em sonix2
        // 2) não existe em Sonix.prototype
        // 3) existe em Carro.prototype → executa com this === sonix2

//------- voltando, criando um objeto a partir disso tudo

    const sonix2 = new Sonix('Sonix','0000002', 4);
    console.log(sonix2.modelo)
    sonix2.andar()

    // Exemplo prático de busca:

    sonix2.andar()
        // 1) não existe em sonix2
        // 2) não existe em Sonix.prototype
        // 3) existe em Carro.prototype → executa com this === sonix2

// ---

// Em JavaScript, toda função construtora nasce com uma propriedade automática chamada prototype.

// Esse prototype é o objeto que será usado como base para os objetos criados com new.

    // com Object.create(Carro.prototype):

    // Sonix.prototype = Object.create(Carro.prototype)

    // O que acontece:

    // Não executa o construtor de Carro

    // Copia somente a herança, não o estado

    // Herda apenas os métodos (não herda atributos)

        //Atributos são criados no construtor (Carro.call(this, ...))

        // Object.create(Carro.prototype) não executa o construtor

        // Logo, nenhum atributo é criado

            // O que é herdado então?

                //     Tudo que está em Carro.prototype

                //     Normalmente: métodos

    // É limpo, seguro e intencional

// Herança em JavaScript é por delegação, não por cópia.

    // Object.create cria um objeto que aponta para outro como fallback de propriedades.

        //Quando você faz:

        sonix2.andar()

        // O JS faz:

            // Procura andar em sonix2
            // Não acha

            // Vai para Sonix.prototype
            // Não acha

            // Vai para Carro.prototype
            // Acha e executa com this === sonix2

            // Nada foi copiado.
            // Só delegado via [[Prototype]].

// RESUMO PRÁTICO:

    // Carro.call(this, modelo, chassi, qtdPortas) dentro da função Sonix faz com que Sonix herde os ATRIBUTOS de Carro.

        // Atributos: Carro.call(this, ...) — executa o construtor de Carro no contexto de Sonix.

    // Sonix.prototype = Object.create(Carro.prototype) faz com que o protótipo de Sonix herde os MÉTODOS.

        // Métodos: Sonix.prototype = Object.create(Carro.prototype) — herança via protótipo (delegação).


    // Resumo do resumo:

        // call herda estado(atributos)
        // prototype herda comportamento (métodos)


// ATRIBUINDO MÉTODOS E ATRIBUTOS EXCLUSIVOS (não herdados)

    Sonix.prototype.abrirTetoSolar = function(){ // veja que prototype está ligado a métodos
        console.log('Abrindo teto solar')
    }

    const sonix3 = new Sonix('Sonix','0000003', 4);
    sonix3.abrirTetoSolar(); // Abrindo teto solar'

// Conseguimos completar a missão de modelar os carros. Mas não foi nem um pouco trivial.
// Para conseguir estender os modelos de carros, tivemos que usar:
    // o método 'call' na função construtora
    // e o Object.create no atributo(propriedade) prototype.
// Isso é bastante confuso para quem cria o código e para quem dá manutenção nele.

// Aqui entra o ES6

// UTILIZE CLASSES DO ES6