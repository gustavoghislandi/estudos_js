// 'process.stdout.write()' mantém a próxima linha na mesma linha. Diferentemente do 'console.log' que equivale a um 'println' de algumas linguagens.

// Sintaxe: 

    process.stdout.write("Texto a ser renderizado")


// Exemplo:
    console.log("") // Pulando linha para o exemplo

    const jsonString = '{"nome":"João","idade":30,"ativo":true}';

    const dados = JSON.parse(jsonString);
        process.stdout.write("Dado do console.log abaixo:"); // Mantém a próxima linha na mesma linha.
        console.log(dados);

// Qual a importância disso? Veja:

    console.log(`Renderizando o objeto sem usar process.stdout.write() antes de um console.log somente com o objeto: resultado --> ${dados} . O conteúdo do objeto não é renderizado.`)

// Em síntese, se não usar o process.stdout.write(), você não conseguirá usar uma string e renderizar o conteúdo integral de um objeto na mesma linha. Caso seja do seu interesse.