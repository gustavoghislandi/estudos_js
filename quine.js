// quine as “a program that generates a copy of its own source text as its complete output”. 

// É um programa que imprime o próprio código fonte.

// Um exemplo em Ruby (por Ryan Davis), que seria dos mais curtos: 

    // f="f=%p;puts f%%f";puts f%f

// Ao rodar isso, você teria o isso mesmo como output.

    // Em shell seria assim:

        // ruby -e 'f="f=%p;puts f%%f";puts f%f' | ruby


// Um exemplo em JaaScript:

    (function() {
    var code = "(function() {\n  var code = ";
    console.log(code + JSON.stringify(code + "console.log(code + JSON.stringify(code + JSON.stringify(code) + ');')") + ");");
    })();


// O conceito de quine existe em várias linguagens de programação e é uma forma de demonstrar autorreferência em um código, o que pode ser um desafio interessante para quem está aprendendo ou praticando programação.