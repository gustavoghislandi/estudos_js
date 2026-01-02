// Laço de repetição FOR...IN

// Ele percorre os nomes dos atributos de um objeto. 

// Enquanto, de outro modo, o for...of percorre os valores de um objeto exclusivamente iterável.

var perfilDoFacebook = {
    nome: "Jonas",
    idade: 23,
    // outras propriedades
}

for (var dado in perfilDoFacebook){ 
    console.log(dado) // Se tentar dado.value dará undefined
}

// Saída:

// nome
// idade

// Abaixo, uma maneira que pega os valores das propriedades.

for (var propriedade in perfilDoFacebook){
    console.log(`prop: ${propriedade}`)
    var info = perfilDoFacebook[propriedade]
    console.log(info)
}

// Saída:

// Jonas
// 23

// Chamar no laço for...in perfilDoFacebook[propriedade] é como chamar o que está dentro dos console.log abaixo:

console.log(perfilDoFacebook['nome'])
console.log(perfilDoFacebook['idade'])
// ou
console.log(perfilDoFacebook.nome)
console.log(perfilDoFacebook.idade)

// porque, lembre-se, a variável auxiliar traz o 'nome (ou a chave) dos atributos'