// BREAK

// Serve para interromper um laço de repetição.

var numeros = [1,2,3,4,5]

console.log('break')

for (var numero of numeros){
    if(numero > 3) {
        break
    }
    console.log(numero)
}

// Saída:
// 1
// 2
// 3

// CONTINUE

// Serve para pular para a iteração seguinte.

console.log('continue')

for (var numero of numeros){
    if(numero === 3) {
        continue
    }
    console.log(numero)
}

// Saída:
// 1
// 2
// 4
// 5

