// Uma 'função de callback' é uma função passada como argumento para outra função e que será chamada de volta (executada) em algum momento durante a execução dessa função. É usada para lidar com tarefas assíncronas, como em eventos ou requisições.

function saudacao(callback) {
  console.log("Olá!");
  callback();
}

// função anônima
saudacao(function(){
  return console.log("Como você está?")});

// array function
saudacao(() => console.log("Como você está?"));



// saída: 
// Olá!
// Como você está? // essa é a execução da função de callback
