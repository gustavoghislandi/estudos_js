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

// Apesar da sintaxe ser mais simples, a herança por prototipagem ainda atua por debaixo dos panos.

// Agora vamos usar a palavra reservada 'class':

    class Carro2 {
        constructor(modelo, chassi, qtdPortas){
            this.modelo = modelo;
            this.chassi = chassi;
            this.qtdPortas = qtdPortas;
        }

        andar(){
            console.log("Carro andando!");
        }
    }

// Classe definida, agora é só instanciar:

    const basico = new Carro2('Básico','1234',2);

    console.log(basico.modelo); // Básico
    console.log(basico.chassi); // 1234
    console.log(basico.qtdPortas); // 4
    basico.andar() // Carro andando!

// Perceba que a sintaxe agora é bem semelhante a de outras linguagens orientadas a objetos.

// ESTENDENDO CLASSES

// Para estender uma classe, usa-se a palavra reservada 'extends':

    class Sonix2 extends Carro2 { // criando a classe já extendida
        abrirTetoSolar() { // método exclusivo de Sonix2 (não existe em Carro)
            console.log('Abrindo teto solar')
        }
    }

    const sonix4 = new Sonix2(); // criando uma instância

    sonix4.abrirTetoSolar(); // Abrindo teto solar
    sonix4.andar(); // Carro andando!

// Quando estendemos uma classe, emprestamos todos os métodos e atributos da classe pai para as classes filhas (descendentes).

// Porém, até agora a classe Sonix2 não está com os atributos da classe Carro, somente os métodos, veja:

    console.log(sonix4.modelo) // undefined

// Primeiro precisaremos criar um construtor dentro da classe Sonix2
// e dentro dele usar a palavra reservada 'super' para invocar o construtor da classe pai.
// Assim:

    // constructor(modelo, chassi, qtdPortas){
    //     super(modelo, chassi, qtdPortas)
    // }


    class Sonix3 extends Carro2 {
        constructor(modelo, chassi, qtdPortas){
            super(modelo,chassi,qtdPortas)
        }
        abrirTetoSolar() {
            console.log('Abrindo teto solar')
        }
    }

// Dessa maneira, podemos verificar que os atributos também foram herdados:

    const sonix5 = new Sonix3('Sonix5','ASH123',4);

    console.log(sonix5.modelo);
    console.log(sonix5.chassi);
    console.log(sonix5.qtdPortas);
    sonix5.andar();
    sonix5.abrirTetoSolar();

// HOISTING EM CLASSES

// Diferentemente das funções, as classes de JavaScript não podem ser içadas, dará erro de referência (ReferenceError), exemplo:

    // const carro3 = new Carro3('sonix'); // ReferenceError: Cannot access 'Carro3' before initialization

    // class Carro3 {
    //     constructor(modelo){
    //         this.modelo = modelo
    //     }
    // }

// DECLARAÇÃO POR MEIO DE EXPRESSÕES

// Apesar de incomum, também é possível declarar as classes por expressões, assim como feito com as funções.

// Elas podem também ser 'anônimas'(pra mim tem nome ainda), como no exemplo que segue:

    const Classe = class {
        constructor(atributo){
            this.atributo = atributo
        }
    };

    const instancia = new Classe('atributo 1');

    console.log(instancia.atributo); // atributo 1

// Ou elas podem ser nomeadas localmente:

    const Classe2 = class NomeDaClasse {
        getClassName() {
            return NomeDaClasse.name;
        }
    };

    // const instancia2 = new NomeDaClasse(); // Dará erro, porque é nome interno

    const instancia2 = new Classe2(); // funciona, porque o é o nome externo

    console.log(instancia2.getClassName()); // "NomeDaClasse"

// DETALHE IMPORTANTE:

    // De onde veio o valor da propriedade 'name' se e não declarei nada?

    // Todas as funções e classes têm uma propriedade 'name' automática.

        // Mesmo sem você definir name, a classe tem essa propriedade.
        // Ela é somente leitura e retorna o nome da função ou classe.
    
    // Então:
        // NomeDaClasse é o nome interno, usado somente dentro da próŕia definição.
        // .name é interna e automática, atribuída pelo engine do JavaScript quando você declara uma função ou classe com nome.
        // Não é algo que você define manualmente (a não ser que queira sobrescrever).
        // Isso vale tanto para funções quanto para classes.

        console.log(Classe.name) // Classe
        // Aqui chamaoua referência externa 'Classe', porque não tem nome interno para chamar, é anônima nesse sentido.

// IMPORTANTE:

    // Um dos motivos para nomear uma classe é que:

        // No stack trace, você verá o "nome interno" em vez de “anonymous”, tornando mais fácil localizar o problema.

// MÉTODOS ESTÁTICOS

// No ES6 é possível usar métodos estáticos, com a palavra reservada 'static'.

// Esse tipo de método pode ser invocado sem que seja instanciado um novo objeto da classe.

    class Casa {
        static abrirPorta(){
            console.log('Abrindo a porta');
        }
    }

    Casa.abrirPorta(); // Abrindo a porta

    // Se o static fosse removido, daria 'TypeError: Casa.abrirPorta is not a function', porque aí seria um método da instância e não da Classe. Aí 'c.abrirPorta();' funcionaria.

    // Note que não foi necessário instanciar algo como const casa = new Casa(), para depois chamar casa.abrirPorta(), foi direto pela classe. Daria erro, incluse. Veja mais logo abaixo.

// Como funcionam métodos estáticos:

    // São chamados diretamente na classe, não na instância.

    // Não é criado nenhum objeto “extra” para usar o método; ele pertence à própria classe, não aos objetos.

    const c = new Casa();

    // c.abrirPorta(); // TypeError: c.abrirPorta is not a function 
                    // ❌ ERRO, porque não existe na instância 

    // Eles vivem enquanto a classe existir (que normalmente é durante todo o runtime do seu programa).

// Vantagens de static:

    // Não precisa criar instâncias só para executar funções utilitárias.

    // Organiza código: funções relacionadas à classe, mas não a objetos específicos, ficam na própria classe.

    // Boa performance: evita criação de instâncias desnecessárias.

// Desvantagens de static

    // Não tem acesso a 'this' da instância, só à própria classe.
        // Ou seja, não pode acessar propriedades individuais dos objetos.

    // Pode tornar o design mais rígido se você usar demais, pois muitas funções não terão contexto de objeto.

    // Testabilidade limitada: às vezes métodos estáticos são mais difíceis de mockar ou substituir em testes.

        // 1️⃣ Por que métodos estáticos dificultam testes?

        // Um método estático pertence à classe em si, não à instância.  
        // Isso significa que você não pode substituir facilmente o método em um objeto isolado, porque ele está “preso” à classe.  

            class Utils {
                static saudacao() {
                    return "Oi!";
                }
            }

        // Uso no código
        
            console.log(Utils.saudacao()); // "Oi!"

        // Se você quiser “mockar” para teste (por exemplo, retornar "Teste"), precisa sobrescrever na classe inteira:

            Utils.saudacao = () => "Teste"; // Sobrescreve para todos os usos da classe
            console.log(Utils.saudacao()); // "Teste"

        // Em contraste, métodos de instância podem ser substituídos apenas naquele objeto, sem afetar outras instâncias.  
        // Isso torna o teste menos isolado quando usamos estático demais.


        // 2️⃣ Exemplo comparativo: estático vs instância

            class Produto {
                constructor(nome) {
                    this.nome = nome;
                }

            // Método de instância
                descricao() {
                    return `Produto: ${this.nome}`;
                }

            // Método estático
                static saudacao() {
                    return "Bem-vindo!";
                    }
                }

                

        const p1 = new Produto("Caneta");

        // 1️⃣ Chamando método de instância

            console.log(p1.descricao()); // Produto: Caneta

        // 2️⃣ Chamando método estático

            console.log(Produto.saudacao()); // Bem-vindo!

        // 3️⃣ Mockando métodos

        // Método de instância

            p1.descricao = () => "Descrição mockada";
            console.log(p1.descricao()); // Descrição mockada

            // Afeta só esse objeto

        // Método estático

            Produto.saudacao = () => "Mock estático";
            console.log(Produto.saudacao()); // Mock estático

            // Afeta todas as chamadas da classe

        // ✅ Conclusão visual:  
            // Instância: mock isolado → seguro para testes unitários.  
            // Estático: mock global → pode afetar outros testes ou objetos.

// ATRIBUTOS PRIVADOS COM WeakMap

// Como o livro é de 2017, o ES6 ainda não tinha atributos privados. Vou mostrar eles em seguida do WeakMap.

    const propriedades =  new WeakMap();

    class VideoGame {
        constructor (nome, controles, saida, midia){
            propriedades.set(this,{
                nome, controles, saida, midia
            });
        }
    }

    const caixa360 = new VideoGame('caixa360',2,'HDMI','DVD');
    console.log(caixa360.nome) // undefined

    // Perceba que não é possível acessar as propriedades.
    
    // Lembrando que ali foi 'setado' como chave, o objeto (this) e o valor como { nome, controles, saida, midia }, que equivale a { nome: 'caixa360', controles: 2, saida: 'HDMI', midia: 'DVD' }, e isso acontece assim porque estamos usando, além do método .set do WeakMap, a 'shorthand property'.

// Para tornar acessíveis as propriedades, vamos criar um método 'recuperaPropriedade':



    const propriedades2 =  new WeakMap();

    class VideoGame2 {
        constructor (nome, controles, saida, midia){
            propriedades2.set(this,{
                nome, controles, saida, midia
            });
        }

        recuperaPropriedade(propriedade){
            return propriedades2.get(this)[propriedade]; // get do WeakMap retorna o valor da chave, que aqui é 'this'; mas como o valor é um objeto, eu passo a propriedade que eu quero retornar. Senão, retornaria o objeto inteiro.
        }
    }

    const caixa720 = new VideoGame2('caixa720',2,'HDMI','DVD');
    console.log(caixa720.recuperaPropriedade('nome')); // caixa720


//----------------

// PROPRIEDADES PRIVADAS ES6 (2022+)

    class VideoGame4 {
        // Declaração opcional com valores default
        #nome = "Sem Nome";
        #controles = 1;
        #saida = "HDMI";
        #midia = "Nenhuma";
        #semdefault; // declaração de atributo sem valor default

        constructor(nome, controles = 1, saida, midia){
            // Se forem passados valores, sobrescreve o default
            if(nome !== undefined) this.#nome = nome;       // IMPORTANTE: o 'if(nome !== undefined)' é obrigatório para não dar valor undefined. OU, faz assim:
            this.#controles = controles;                    // Dessa forma também evita o valor undefined.
            if(saida !== undefined) this.#saida = saida;
            if(midia !== undefined) this.#midia = midia;    // Apague o 'if(midia !== undefined)' e veja surgir o undefined ao executar o arquivo.
        }

        // Getters públicos
        getNome() {
            return this.#nome;
        }

        getControles() {
            return this.#controles;
        }

        getSaida() {
            return this.#saida;
        }

        getMidia() {
            return this.#midia;
        }

        // Método privado (só acessível dentro da classe)
        #descricaoCompleta() {
            return `${this.#nome} com ${this.#controles} controles, saída ${this.#saida} e mídia ${this.#midia}`;
        }

        // Método público que usa o privado
        mostrarDescricao() {
            return this.#descricaoCompleta();
        }
    }

// Criando instâncias

    const caixa1080 = new VideoGame4('Caixa1080', 2, 'HDMI', 'DVD');
    console.log(caixa1080.getNome());         // Caixa1080
    console.log(caixa1080.getControles());    // 2
    console.log(caixa1080.mostrarDescricao()); // Caixa1080 com 2 controles, saída HDMI e mídia DVD

    const gameSemParametros = new VideoGame4();
    console.log(gameSemParametros.getNome());         // Sem Nome
    console.log(gameSemParametros.getControles());    // 1
    console.log(gameSemParametros.mostrarDescricao()); // Sem Nome com 1 controles, saída HDMI e mídia Nenhuma

    //console.log(caixa1080.#nome); // SyntaxError: Private field '#nome' must be declared in an enclosing class
                                    // ❌ SyntaxError: não pode acessar fora da classe
