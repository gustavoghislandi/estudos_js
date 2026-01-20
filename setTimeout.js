//setTimeout agenda a execução de uma função para acontecer depois de um tempo, em milissegundos.
// Você passa uma função porque o código não é executado na hora, só quando o tempo acabar. E não faria sentido executar um valor puro (como um atributo).

// Sintaxe:

    setTimeout(() => {
    // código a executar depois
    }, tempoEmMilissegundos);

// Exemplo:

    setTimeout(tocarAlarme, 3000);

// É como dizer:

    // “Daqui a 3 segundos, execute tocarAlarme.”

// Por que não passar o código direto?

// Se você fizesse isso:

    try { 
        setTimeout(console.log("Oi! Execução instantânea"), 3000); 
    }
    catch (e){
        console.log(`Erro que será mostrado: ${e.message}`)
    }

// O alert seria executado na hora, porque você estaria chamando a função, não passando ela. (Só executa com o try-catch, senão dá erro.)
// Na verdade, sem o try-catch, dá erro dizendo que preciso ser algo do tipo função. Mesmo usando 'console.log("algo")' ou 'tocarAlarme()', acusa erro.


//-----------

function tocarAlarme() {
    console.log("Alarme tocando!");
};

var tempoEmMilissegundos = 4000;

