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

