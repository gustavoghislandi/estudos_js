// Aqui está um exemplo simples de como usar o `\r` em JavaScript:


let count = 0;
let interval = setInterval(() => {
  process.stdout.write(`Contagem: ${count}\r`);  // O '\r' faz o cursor voltar para o início da linha (eu testei é ao início da palavra aqui no console usando node)
  count++;
  
  if (count > 5) {
    clearInterval(interval);
    console.log("Fim da contagem!");
  }
}, 1000);


// Neste código, a contagem vai aparecer na mesma linha no terminal, sendo sobrescrita a cada segundo. O `\r` faz com que o cursor volte para o começo da linha (palavra pelo que testei), e a próxima contagem substitui a anterior.
