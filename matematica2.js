// O * sempre retornará um objeto. Por esse motivo é necesário definir uma variável na qual ele será alocado para que possa ser utilizado.


import * as circunferencia from './circunferencia.js';

console.log(circunferencia.default(3)); // 18.849 // aqui ficou 'default' porque o comprimento não foi uma exportação nomeada, como seria adequado para o caso.

console.log(circunferencia.area(3)); // 28.273500000000002

console.log(circunferencia.pi); // 3.1415

// Análise do objeto 'circunferencia'

console.log(circunferencia)
    /*
    [Module: null prototype] {
    area: [Function: area],
    default: [Function: comprimento],
    pi: 3.1415
    }
    */

// Use o método 'toString()' para ver o código da função.
console.log(circunferencia.area.toString())
console.log(circunferencia.default.toString())