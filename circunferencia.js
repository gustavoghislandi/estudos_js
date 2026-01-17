// export const pi = 3.1415; // export nomeado (1ª vez)

const pi = 3.1415; // Refiz sem o export porque exportar duas vezes está dando erro

function comprimento(raio){
    return 2 * pi * raio;
}

function area(raio){
    return pi * raio**2;
}

export default comprimento; // export padrão

export { area, pi }; // export nomeado (2ª vez)

//Regra prática de ouro:
    // Repita exports somente quando estiver mudando o “caminho”, o “nome” ou a “responsabilidade” do módulo.
    // (costuma ser em arquivos chamados index.js ou barrel.js)

//----------------------------------
// Isto, abaixo, já não funciona, o node não aceito duplicação, acusou erro de sintaxe:

    // O export (nomeado) de pi está sendo duplo. É permitido, mas é redundante.
    // O JavaScript entende que é o mesmo binding (pi), não cria duas cópias nem gera conflito.

        //O que NÃO acontece:
            // Não cria duas variáveis
            // Não duplica memória
            // Não causa erro
            // Não muda como o pi é importado

    // O ideal é ou colocar export ao lado de cada um (mais comum), ou exportar tudo no final.