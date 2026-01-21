// Proxies

// Esses objetos nos permitem interceptar e customizar operações fundamentais em objetos, tais como:

    // Acessar uma propridade
    // Setar um propriedade (nova ou não)
    // Enumerar propriedades
    // Deletar propriedades
    // Verificar a existência de uma propriedade

// Um proxy é um objeto que representa outro objeto.

// Ele possui capacidade de interceptar chamadas às propriedades do objeto que ele representa, tendo o poder de alterar o resultado dela.

// Os proxies fazem parte do que chamamos de metaprogramação.

// O QUE É METAPROGRAMAÇÃO?

// Muitas tarefas são extremamente repetitivas na programação, precisando fazer algo de novo e de novo. Para contornar isso, cria-se algoritmos que automatizam essas tarefas.

// Entretanto, nem sempre é possível eliminar toda a repetição.
// Quando não conseguimos criar diretamente no programa algo que evite essa repetição, escrevemos um programa diferente que altera o primeiro de forma automatizada. A esse processo, chamamos metaprogramação.

// Definição de metaprogramação (do livro):

    // É a programação de programas que manipulam a si mesmo e/ou a outros programas. Um metaprograma é todo programa que atua sobre ele mesmo ou outro programa, seja no formato fonte, binário, ou em uma representação abstrata em memória. Em resumo: um programa que gera programas.

// Fazendo uma analogia simples, é como ter uma fábrica, que cria fábricas, que criam carros.

    // Fábrica de fábricas de carros -->> Fábricas de carros -->> Carros

// A fábrica de carros cria o produto final, mas utilizamos uma outra fábrica para criar as fábricas que geram os produtos finais.

//------- (feito com base no artigo citado no livro)

// Há uma analogia mais próxima da realidade no artigo:

    // An Introduction to Metaprogramming, de Ariel Ortiz, 1997, publicado no portal Linux Journal https://www.linuxjournal.com/article/9604

        //  O artigo é bem didático. Disso, criei o eval.js e quinej.js

// Linguagens dinâmicas, como Ruby ou JavaScript (veja linguagens_dinamicas.js), permitem você modificar diferentes partes do seu programa facilmente durante o Runtime (tempo de execução) sem ter que gerar código fonte explicitamente.

// Metaprogramação permite você automatizar programação mais sujeita a erros ou de tarefas mais repetitivas. Você pode usar para pré-gerar tabelas de dados, gerar código boilerplate automaticamente que não pode ser abstraído em uma função.

// “I'd rather write programs that write programs than write programs.” — Richard Sites 

//-------

// Gerando programas com programas

// (Aqui parece ser uma tradução resumida do artigo original)

// Erika foi pega conversando em um chat na internet enquanto em sala de aula e o professor disse que ela deveria escrevesse um programa com 1000 prints de "Eu não vou conversar em sala de aula", e ela não poderia usar nenhum tipo de laço de repetição (for, while...) nem instrução 'goto'.

// Erika usou a metaprogramação. Ela criou um programa que escreveu as mil linhas de 'printl' (em C) pra ela (no fim das contas tinha uma repetição ali... mas não no programa final). Com isso, ela se safou.

// Por isso é gerar programas que geram programas. Ela criou um programa que cria os 'printl' e ese programa ia ser o que foi pedido, que printava as linhas usando 1000  linhas de 'printl'.

// PROXIES

// Um proxy é um objeto que representa outro objeto. Vejamos:

// Imagine que estamos na etapa de implementação de um sistema e estamos tendo dificuldades para trabalhar no desenvolvimento de uma funcionalidade. O programa está dando problemas em determinada etapa e não sabemos o porquê. 
// Para facilitar o debug, vamos criar um mecanismo de logs nos objetos.
// A principal classe da operação é 'Usuario', representada a seguir:

    class Usuario {
        constructor(login, senha, idade) {
            this.login = login;
            this.senha = senha;
            this.idade = idade; // Adicionado por conta do exemplo mais à frente
        }
    }

// Para começar a validação, criaremos um usuário e verificaremos se ele está funcionando.

    const usuario = new Usuario('SuperJS', '123');
    console.log(usuario.login); // SuperJS
    console.log(usuario.senha); // 123

// A classe parece estar funcionando bem, mas como não temos certeza de como ela se comporta nos algoritmos, vamos utilizar um proxy para nos ajudar.

// Para todas as propriedades que forem chamadas dentro do objeto, queremos que saia no console um log nos avisando que a propriedade foi acessada.

// Para fazer isso, podemos usar um proxy que intercepta o acesso às propriedades do objeto.

// Em outras palavras, utilizaremos um proxy para alterar o comportamento do objeto. Faremos isso com o código a seguir:

    const proxy = new Proxy(usuario, {
        get(alvo, propriedade) {
            console.log(`${propriedade} foi solicitada!`);
            return alvo[propriedade];
        }
    });

// Vamos analisar o que foi feito nesse código.

// Instanciamos um objeto do tipo Proxy.
    // O construtor de um proxy aceita dois argumentos:

        // O objeto que queremos representar (usuario) - que é o objeto do qual iremos interceptar as chamadas.

        // Um objeto chamado por convenção de 'handler'. Ele define o comportamento do proxy.

// As chaves do objeto 'handler' são chamadas de 'traps' (armadilhas) com os valores sendo funções que definem como o proxy s comportará quando essa 'trap' for disparada.

// Anteriormente, usamos apenas a 'trap' de 'get', que é disparada quando tentamos ler uma propriedade do 'alvo'.

// Podemos validar nosso proxy invocando as propriedades do 'usuario'.

    console.log(proxy.login);
    // login foi solicitada!
    // SuperJS
    
    console.log(proxy.senha);
    // senha foi solicitada!
    // 123

// Repare que, para cada chamada da propriedade do 'usuario', tivemos duas saídas.

// Isso porque antes do console imprimir o valor da propriedade, o proxy interceptou essa chamada e jogou o que havíamos definido no proxy.

// Ou seja, usamos o proxy no lugar do objeto representado e chamamos a propriedade dele. Com isso, ativou-se o 'handler' (comportamento do proxy), para depois, em seguida, invocar o objeto com sua propriedade. Ou seja, o proxy "se atirou" na frente da execução, fez o que ele tinha que fazer e deixou a execução seguir.

// Nesse caso, usamos somente a 'trap' para o 'get', mas existem outras:

    // getPrototypeOf
    // setPrototypeOf
    // isExtensible
    // getOwnPropertyDescriptor
    // defineProperty
    // has
    // set
    // deleteProperty
    // ownKeys
    // apply
    // construct

// Veremos mais um caso de uso para proxies.

// VALIDAÇÕES DE INPUTS COM PROXIES E TRAPS

// Podemos usar proxies para fazer validações de inputs.

// Imagine, agora, que temos uma nova propriedade na classe: 'idade'.

// O objetivo é ter certeza de que o usuário vai preencher a idade com um número. Qualquer outra entrada deve dar erro.

// Vamos usar o 'trap' de 'set', que aceita 3 parâmetros:

    // o objeto representado (alvo)
    // a propriedade
    // o valor

    const validador = {
        set(alvo, propriedade, valor) {

            if(propriedade === 'idade'){

                if(!Number.isInteger(valor)){
                    throw new TypeError('A idade não é um número!');
                }

            }

            alvo[propriedade] = valor;
        }
    }

// Vamos testá-lo:

    const usuario2 = new Proxy({}, validador);
    usuario2.idade = 10;
    console.log(usuario2.idade); // 10

// Agora com valores que não sejam números:

    // usuario2.idade = 'dez'; // throw new TypeError('A idade não é um número!');
    // usuario2.idade = {}; // throw new TypeError('A idade não é um número!');
    // usuario2.idade = true; // throw new TypeError('A idade não é um número!');

// Como os proxies alteram o comportamento dos objetos, é preciso ser bem cauteloso no seu uso. Do contrário, pode-se gerar grandes problemas e inconsistências nos sistemas. Podemos acidentalmente acabar alterando comportamentos de objetos que não planejávamos e podemos levar um bom tempo até descobrir.

// DESATIVANDO UM PROXY

// É possível revocar um proxy, ou seja, desligá-lo, de certa forma.

// Para isso é necessário construir o proxy com um:

    // Proxy.revocable

// Ele retornará o proxy e o método 'revoke'.

// OBS: Não é necessário utilizar a palavra reservada 'new' para criar um proxy revocável.

    // const {proxy2, revoke} = Proxy.revocable(alvo,handler);

// Feito isso, agora podemos invocar o método 'revoke'.

    // Ele pode ser invocado diversas vezes, mas só terá efeito na primeira. 
    // Depois disso, qualquer operação realizada dará um TypeError:

    const {proxy: proxy3, revoke: revoke3} = Proxy.revocable({},{}); // renomeei as chaves que o proxy retorna (proxy e revoke)

    proxy3.teste = 'teste';

    console.log(proxy3.teste); // teste

    revoke3();
    console.log(proxy3.teste) // TypeError: Cannot perform 'get' on a proxy that has been revoked

// IMPORTANTE: Proxies desativados não podem mais ser ativados.

// ÚLTIMAS CONSIDERAÇÕES

// Metaprogramação é algo poderoso. Ela nos permite alterar o comportamento dos objetos e customizá-los.
// No entanto, é necessario sempre ESTAR ATENTO À PERFORMANCE.
// Tome sempre cuidado com as alterações e, sempre que possível, faça medições dos impactos.