 // Desestruturamento (destructuring)

 // É uma maneira de extrair valores armazenados em objetos e arrays.

 // A ideia é usar a mesma sintaxe de construção de dados para extrair dados.

 // Exemplo:

    const usuario = {
        nome: "Thomas",
        sobrenome: "Branson",
        senha: "12345",
        email: "thomas.branson@email.com",
        profissao: "Engenheiro de Cibersegurança",
        github: "https://github.com/ThomasBransonFicticio"
    }

    // Até o ES5, se quiséssemos validar o email, faríamos uma extração de dados assim:

    const prop_email = usuario.email; // coloquei prop_email porque quero usar email no exemplo com desestrutaramento.

        // E enviaríamos para função:

            // validarEmail(prop_email);

    // No ES6, usamos a sintaxe de objetos literais para extrair valores:

    const {email} = usuario;
    console.log(email);

// Perceba que do lado esquerdo da atribuição colocamos as propriedades dentro de chaves (como a sintaxe de objeto literal) e do lado direito colocamos de onde queremos extrair os dados.

// Isso funciona para múltiplos valores:

    const {senha, confirmacaoSenha} = usuario;
    console.log(senha);
    console.log(confirmacaoSenha); // undefined

// Como visto acima, tentar extrair uma propriedade inexistente o valor do dado será undefined.

// A principal vantagem é evitar perder tempo com inúmeras declarações de variáveis.

// ROTULANDO PROPRIEDADES

// Nem sempre o nome da propriedade extraida é bom ou claro o suficiente para nomear uma variável.

// Para isso usa-se 'label' (rótulo), com esta sintaxe:

    // <propriedade>:<label>

// Ou seja, após a propriedade escrevemos : (dois pontos) e o rótulo que queremos para nomear aquela propriedade.

// Exemplo:

    const pessoa  = {
        sobrenome: "Fagundes"
    }

    const {sobrenome:apelido} = pessoa; // Aqui demos o rótulo de 'apelido' para a propriedade 'sobrenome'.

    // Agora 'sobrenome' não será mais utilizável neste escopo, foi substituída por 'apelido':

    console.log(typeof sobrenome) // undefined
    //onsole.log(sobrenome) // ReferenceError: sobrenome is not defined   
    console.log(apelido) // Fagundes

// Ou seja, foi criada a variável apelido que se refere a usuario.sobrenome.

// O rótulo atua no escopo onde a desestruturação acontece.

// Testando:

    // const apelido = "algo"

// Se tentar criar a variável 'apelido' vai acusar:

    // SyntaxError: Identifier 'apelido' has already been declared

// Ou seja, 'apelido' já foi declarada nesse escopo.

// DESESTRUTURAMENTO DE VÁRIOS OBJETOS

    // Resumo: Se quisermos desestruturar 2 ou mais objetos de uma vez, precisamos utilizar uma vírgula (como em separação de parâmetros).

// Desestruturando um objeto e passando para uma função:

const suco = {
    sabor: 'uva',
    quantidade: '500ml'
}

function descreveSuco({sabor, quantidade}) { // Perceba que aqui entra como parâmetro um objeto com as propriedades sabor e quantidade
    return `Este suco é de sabor ${sabor} e possui ${quantidade}.`
}

console.log(descreveSuco(suco)) // Este suco é de sabor uva e possui 500ml.

// Perceba que o argumento usado é o objeto suco, que tem as propriedades sabor e quantidade.

// Se ao invés de 'quantidade', a propriedade se chamasse 'peso', o retorno seria com 'undefined' para aquela variável, porque ela não existe no objeto:

    // Este suco é de sabor uva e possui undefined.

// Porém, se existissem tanto 'sabor', quanto 'peso' e 'quantidade', a função retornaria o esperado perfeitamente, sem problemas:

    // Este suco é de sabor uva e possui 500ml.

// Se quisermos desestruturar 2 ou mais objetos de uma vez, precisamos utilizar uma vírgula (nada mais é que separação de parâmetros).

const doce = {
    tipo: 'açúcar'
}

function descreveSuco2({sabor, quantidade},{tipo}){
    return `Este suco é de sabor ${sabor},  possui ${quantidade} e é adoçado com ${tipo}.`
}

console.log(descreveSuco2(suco, doce)); // Este suco é de sabor uva,  possui 500ml e é adoçado com açúcar.

console.log("----------")

// DESESTRUTURAMENTO EM RETORNO DE CHAMADAS DE MÉTODOS

// É bem comum o desestrutuamento em retorno de chamadas de métodos, principalmente trabalhando com JSON.

// Exemplo:

// Vamos consumir uma API REST que devolve um JSON assim:

    // {
    //     "temperatura": "25ºC",
    //     "descricao": "ensolarado",
    //     "umidade": "baixa",
    //     "maxima": "32ºC",
    //     "minima": "19ºC"
    // }

    // function recuperaDadosDaAPI(){
    //     // Realiza GET para o https://temperatura.com/api/temperatura/sp
    //     // Retorna JSON que veio na response

    //     return response.json;
    // }

// Vou simular o retorno do JSON pela função para rodar os console.log aqui:

    function recuperaDadosDaAPI(){
        // Realiza GET para o https://temperatura.com/api/temperatura/sp
        // Retorna JSON que veio na response

        const response = {} // criado para funcionar a simulação.

        response.json = { // simulação do JSON retornado da API ( para o JS isso é um objeto já e não um JSON, por isso não usei JSON.parse() )
            "temperatura": "25ºC",
            "descricao": "ensolarado",
            "umidade": "baixa",
            "maxima": "32ºC",
            "minima": "19ºC"
        }

        return response.json;
    }

    console.log(typeof recuperaDadosDaAPI()) // object

    // const {temperatura} = recuperaDadosDaAPI();
    // console.log(temperatura) // 25ºC

// Com o desestruturamento, obtém-se facilmente somente o que nos interessa em um único passo, deixando evidente para qualquer outro desenvolvedor quais dados se está extraindo. 
// Sendo necessário extrair mais informações do JSON, basta colocar a nova propriedade entre chaves:

    console.log("----------")

    const {temperatura, maxima, minima} = recuperaDadosDaAPI()
    console.log(temperatura)
    console.log(`Máxima: ${maxima} | Mínima: ${minima}`)


// Podemos misturar à desestruturação vista em DESESTRUTURAMENTO DE VÁRIOS OBJETOS:

    function exibeTemperaturas({ temperatura, maxima, minima, umidade }) { // adicionei umidade, para mostrar que são escopos distintos e que o retorno é o JSON integral

        console.log("----------")
        console.log(temperatura)
        console.log(`Máxima: ${maxima} | Mínima: ${minima}`)
        
        console.log(umidade) 
    }

    exibeTemperaturas(recuperaDadosDaAPI())

    // Aqui o retorno já entra direto como parâmetro e é desestruturado ali mesmo.


    //----------- fetch (para melhor contextualizar)

    // O que acontece no fetch de verdade?

    // Quando você faz:

        // const response = await fetch(url);
        // const dados = await response.json();

    // O fluxo real é:

        // 1️⃣ O servidor envia texto JSON
        // 2️⃣ O fetch recebe isso como texto
        // 3️⃣ O método response.json() faz internamente um JSON.parse():

            // JSON.parse(textoJSON)

        // 4️⃣ O retorno final é um objeto JavaScript

    // Ou seja:

        // Servidor → JSON (string)
        // fetch → response
        // response.json() → objeto JS

    // Como o JSON só existe como string, se quiser deixar a simulação parecido com real (convertendo um JSON em objeto), faria assim:

        function recuperaDadosDaAPI2() {
            const jsonEmTexto = `{
                "temperatura": "28ºC",
                "descricao": "nublado",
                "umidade": "baixa",
                "maxima": "30ºC",
                "minima": "22ºC"
            }`;

            response = {}

            response.json = JSON.parse(jsonEmTexto); // converte o JSON em objeto

            return response.json
        }

        console.log(recuperaDadosDaAPI2())

        const {descricao} = recuperaDadosDaAPI2()
        console.log(descricao) // nublado

    // Agora sim:

    //     Primeiro você tem JSON (string)

    //     Depois ele vira objeto

    //     E o destructuring funciona como no mundo real

// DESESTRUTURAMENTO DE ARRAYS