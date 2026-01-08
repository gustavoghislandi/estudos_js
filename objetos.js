// Apesar de não possuir classes (até o ES5, depois no ES6 sim) e nem interfaces, o JavaScript é uma linguagem de programação orientada a objetos (baseada em prototipagem).

// Para o JavaScript, um objeto é uma coleção de propriedades.
// E cada propriedade é uma associação de chave/valor.
// O valor pode ser primitivo,
// assim como uma função, que é considerada um método do objeto.

//Além dos objetos pré-estabelecidos no navegador, como o objeto 'Window', é possível definir nossos próprios objetos.

//-----

// Existem duas maneiras de se criar objetos no JavaScript:

    // por meio de funções construtoras,
    // ou por objetos literais.

// OS 'construtores' são funções que, quando invocadas com a palavra reservada 'new', criam uma nova instância de um objeto, conforme este exemplo:

    function Livro(titulo) { // função construtora
        this.titulo = titulo;
    }

    const livro = new Livro('Entendendo ES6');
    console.log(livro.titulo)

// Quando executa-se a função Livro acompanhada do new, quatro coisas ocorrem por debaixo dos panos:

    // Um novo objeto literal é criado;
        const obj = {}; // const livro = {}

    // O construtor do objeto 'livro' é definido como "Livro", assim como o seu tipo (que pode ser verificado com 'instanceof')
        // Em JavaScript, o 'instanceof' é usado para verificar se um objeto foi criado a partir de uma 'função construtora' ou 'classe específica'.
            // Sintaxe: 

                // objeto instanceof Construtor
                
                console.log(livro instanceof Livro) // true
                
    // O protótipo do objeto 'livro' é definido como 'Livro.prototype'
            // ChatGPT: O protótipo do objeto é ligado ao prototype do construtor
                livro.__proto__ = Livro.prototype;
            // É por isso que:
                livro instanceof Livro // true
            // o instanceof verifica essa cadeia de protótipos, não o “tipo” no sentido clássico.


    // Durante a execução da função construtora, o 'this' aponta para o novo objeto, permitindo definir propriedades como this.titulo.

        // ChatGPT:

        // O construtor é executado com this apontando para o novo objeto

        // Aqui acontece o ponto mais importante:

            Livro.call(livro, 'Entendendo ES6');


        // Ou seja:

            // A função Livro é executada

            // O VALOR DE this DENTRO DA FUNÇÃO Livro PASSA A SER O NOVO OBJETO CRIADO.

            // Por isso isto funciona:

                // this.titulo = titulo;

            // Você está adicionando a propriedade no novo objeto, não na função nem no escopo global.


// O new Livro(titulo) cria um novo objeto,
//  associa seu protótipo a Livro.prototype
//  e executa Livro com this apontando para esse objeto (equivalente a Livro.call(livro, ...)),
//  permitindo que as propriedades definidas na função construtora sejam adicionadas ao objeto.


// RESUMO:

// O que o new realmente faz (forma expandida) (via ChatGPT):
    // const livro = {};                       // 1. Cria o objeto
    Object.setPrototypeOf(livro, Livro.prototype); // 2. Liga o prototype
    Livro.call(livro, 'Entendendo ES6');    // 3. Executa o construtor com this = livro
    // 4. Retorna livro (se o construtor não retornar outro objeto)

//-----

// A diferença crucial das 'funções construtoras' em relação aos 'objetos literais' é que estes são estáticos e únicos. Isso significa que mesmo que ele seja armazenado em diferentes variáveis, todas apontarão para a mesma referência.

const livro2 = {
    titulo: 'História Sem Fim'
}

console.log(livro2.titulo) // História Sem Fim

const outroLivro2 = livro2;
livro2.titulo = 'Dom Casmurro';

console.log(outroLivro2.titulo); // Dom Casmurro
console.log(livro2.titulo); // Dom Casmurro

// Ao atribuir livro2 à variável outroLivro2, ambas apontam para a mesma referência.
// Quando alteramos uma das propriedades, ela se reflete nas duas variáveis, pois se tratam do mesmo objeto.

// Mas ainda que sejam estáticos e únicos (em termos de referência), eles são altamente flexíveis.
// Podemos acessar e modificar suas propriedades e adicionar novas utilizando a sintaxe de

        // . (ponto)

    // ou

        // [] (colchetes)

const livro3 = {
    titulo: 'Anjos e Demônios' // adicionando propriedade na criação do objeto
}

livro3.autor = "Dan Brown" // Adicionando uma nova propriedade

livro3['mostrarLivro'] = function () { // Adicionando uma nova propriedade (nesse caso, um método)
    console.log(`${this.titulo}, ${this.autor}`);
}

livro3.mostrarLivro(); // Anjos e Demônios, Dan Brown

// Objeto literal

    // Um objeto literal é um objeto criado diretamente no código, “na mão”, sem usar classes ou funções construtoras.

        const pessoa = {
        nome: "Ana",
        idade: 25,
        falar() {
            console.log("Olá!");
        }
        };

        // Aqui:

        // {} → é a notação literal

        // O objeto já nasce pronto

        // Simples e direto


// Um objeto também pode ser criado a partir de uma classe ou função construtora.
    class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    falar() {
        console.log("Olá!");
    }
    }

    const pessoa2 = new Pessoa("Ana", 25);

    // Aqui:

    // Pessoa é o molde

    // new Pessoa(...) cria o objeto

    // Ideal para criar vários objetos semelhantes



//Regra prática

    // Objeto literal: quando você precisa de algo simples e único

    // Classe/construtor: quando precisa criar muitos objetos semelhantes
//-----

// DECLARAÇÃO DE PROPRIEDADES DENTRO DE UM OBJETO LITERAL

// No ES5

var nome = "Maria";
var sobrenome = "Madalena";

var pessoa3 = {
    nome: nome,
    sobrenome: sobrenome
}

console.log(pessoa3)

// Acima, foram criadas duas variáveis (nome e sobrenome) e atribuiu-se seus valores às propriedades do objeto pessoa3, usando o próprio nome da variável como nome da propriedade.

// No ES6

// Quando temos propriedades e variáveis com nomes iguais, podemos declarar as propriedades passando somente o nome uma vez:

// A isso chama-se 'Property shorthand':

const nome2 = "Mario";
const sobrenome2 = "Madaleno";
const pessoa4 = { // Ou em uma única linha const pessoa 4 = { nome2, sobrenome2 }
    nome2,
    sobrenome2
}

console.log(pessoa4)

// O próprio interpretador já associa o nome da propriedade com a variável de mesmo nome dentro do seu escopo.

// Ou seja, quando só é passada a variável (que será o valor da propriedade), a propriedade já fica com o mesmo nome que a variável.

// O mesmo princípio é válido para a adicionar funções como propriedade:

const seApresentar = () => { // no exemplo estava como = function() {
    console.log(`Olá! Sou ${nome} ${sobrenome}!`)
}

const pessoa5 = {nome, sobrenome, seApresentar};

pessoa5.seApresentar();

// Há outra melhoria que veio com o ES6. Podemos declarar o método diretamente dentro do objeto sem escrever o sinal de igual e function (na arrow function seria sem o 'fat arrow'), assim: 

const pessoa6 = {
    nome,
    sobrenome,
    seApresentar(){
        console.log(`Olá! Eu me chamo ${nome} ${sobrenome}!`)
    }
}

pessoa6.seApresentar();

// NOTA: A preferência é usar um return na função ao invés de ela imprimir.

//-----

// ÍNDICES DE PROPRIEDADES COMPUTADAS

// Podemos passar expressões das quais resultado será equivalente ao nome que será relacionado à chave.
// Exemplo:

const nomeMetodo = 'invocar';

const objeto = {
    [nomeMetodo](){
        console.log('Executou método.')
    }
}

objeto[nomeMetodo]() // Executou método.
objeto['invocar']() // Executou método.
objeto.invocar() // Executou método.

// Passou-se o nome da propriedade do objeto 'objeto' como sendo equivalente ao valor atribuído à variável 'nomeMetodo'.

// Porém, pode-se ir além:

// Pode-se fazer qualquer tipo de concatenação entre strings ou avaliação dentro dos [] (colchetes) que
// o resultado da expressão será computado como a chave daquela propriedade.

// Veja no exemplo abaixo, em que se faz com que o 'objeto2' tenha uma propridade chamada 'mostrarNome' por meio da concatenação de duas outras variáveis:

const tipoFuncao = 'mostrar';
const propriedade = 'Nome';

const objeto2 = {
    Nome: 'Objeto 2', // JS é case sensitive, para dar certo a chave tem que ser igual ao valor da propriedade. Para nomear o método em camelCase, foi preciso capitalizar o nome da propriedade.
    [`${tipoFuncao}${propriedade}`](){ // sintaxe de arrow function:  [`${tipoFuncao}${propridade}`]: () => {  (é adicionado o : e a fat arrow)
        console.log(this[propriedade])
    }
}

objeto2.mostrarNome(); // Objeto 2


    // NOTA SOBRE O 'this'
    // Comportamento do this em Funções Tradicionais:

    // No caso de funções normais, o valor de this depende de como a função é chamada. No seu exemplo, você está usando uma função normal dentro do objeto, então o valor de this será o próprio objeto (objeto2), já que a função é chamada no contexto de um método do objeto.

    // Comportamento do this em Arrow Functions:

    // Em uma arrow function, o this não é vinculado ao contexto de execução da função. Em vez disso, ele herda o valor de this do contexto onde a função foi definida (ou seja, o this do escopo externo). Portanto, se a função fosse uma arrow function, o valor de this não seria o objeto2, mas o valor de this do contexto onde a função foi definida.

// Isso também é válido para propriedades que não são métodos (ou seja, para atributos):

const apel = 'apelido';
const pessoa7 =  {
    nome: 'José',
    [apel]: 'Zé'
}

console.log(pessoa7[apel]); // Zé
console.log(pessoa7['apelido']); // Zé
console.log(pessoa7.apelido); // Zé
console.log(pessoa7['apel']); // undefined  --- Já fiz assim para mostrar que não existe a propriedade 'apel' em pessoa7, somente 'apelido', que pode ser chamada pela variável (que nada mais faz do que apontar para a string de nome idêntico ao da propriedade), pelo nome da propriedade como string dentro de colchetes (que é a mesma coisa que a variável fez, ao ser substituída pelo seu valor), ou pelo nome da propriedade após um . (ponto).
console.log(pessoa7) // { nome: 'José', apelido: 'Zé' }


// OBJETOS LITERAIS vs JSON

// JavaScript Object Notation (JSON) é um formato leve, criado como subconjunto da notação de objetos literais do JavaScript, para troca de dados.

// Grande parte das empresas que hoje oferecem APIs do tipo Reprensentational State Tranfer (REST) utilizam o JSON para comunicação, em que temos a requisição e a resposta em JSON (application/json).

// 'application/json' é o tipo de conteúdo (ou 'content type') que é especificado no cabeçalho HTTP de uma requisição ou resposta. Quando você vê 'application/json', significa que o corpo da requisição ou resposta contém dados em formato JSON.

    // Exemplo:

    // Quando o cliente envia dados para o servidor: Ele define no cabeçalho:
        //  Content-Type: application/json 
    // para avisar que está enviando dados em JSON.

    // Quando o servidor responde: Ele define no cabeçalho:
        //  Content-Type: application/json 
    // para avisar que a resposta está em formato JSON.

// Então, application/json é a maneira de o sistema informar que os dados estão em JSON, para que o destinatário saiba como interpretar o conteúdo.

// Algumas plataformas que usam APIs com JSON:

    // - Redes sociais (Facebook, Twitter, Google+)
    // - Plataforma de pagamentos online (PayPal, Cielo, PagSeguro)
    // - Serviços de localização (Google Maps, Foursquare)
    // - Plataformas de comércio eletrônico (Mercado Livre, Amazon)
    // - Serviços de comparação de preços (Buscapé, Indix)