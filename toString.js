import * as circunferencia from './circunferencia.js'

// Utilidade extra do método toString():

    // Use o método 'toString()' para ver o código da função.
    console.log(circunferencia.area.toString())
    console.log(circunferencia.default.toString())

    // Observações importantes (pegadinhas):
        // ⚠️ 1. Funções minificadas

        // Se o código passou por bundler/minificação, o toString() pode vir assim:

            // (r)=>3.1415*r*r

        // ⚠️ 2. Funções nativas

        // Para funções internas do JS:

            // console.log(Math.max.toString());

        // Resultado:

            // function max() { [native code] }

        // Não dá pra ver o código real.