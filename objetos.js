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


[ Parei em 11.1]