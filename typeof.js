// typeof retorna uma string, nunca o construtor Number ou String.

// Você escreveu:
typeof elemento === Number
typeof elemento === String

// Mas o correto é comparar com strings:

typeof elemento === "number"
typeof elemento === "string"

// Versão corrigida do seu código:

function numerosELetras3(...numerosELetras){
    console.log(numerosELetras)
    const arrayN = [];
    const arrayL = [];

    for (const elemento of numerosELetras) {
        if (typeof elemento === "number"){ // Eu estava usando Number aqui
            arrayN.push(elemento)
        }
        if (typeof elemento === "string"){ // Eu estava usando String aqui
            arrayL.push(elemento)
        }
    }

    console.log(arrayN) // Aqui acabava saindo []
    console.log(arrayL) // Aqui acabava saindo []
}

console.log('----pequeno teste----')
numerosELetras3(1,2,3,'a','b','c') 

// Por isso antes só saía []:
 // as condições nunca eram verdadeiras.
