// Tudo que vem depois do 'await', dentro da mesma função 'async', fica esperando, não só a linha imediatamente abaixo.

// 'async' marca a função como uma função que:

    // pode usar 'await' (sem 'async', usar 'await' dá erro.)

    // sempre retorna uma Promise (mesmo sem 'await')

        // começa em pending

        // vira fulfilled com o valor do return

        // ou rejected se der erro (throw)

    async function f() {
        return 10
    }
    // é o mesmo que:
    Promise.resolve(10)

        // Isso não precisa de um construtor? Do new?

        // Não precisa.
        // Promise.resolve(10) é um método estático da classe Promise.
        // Ele cria internamente a Promise já fulfilled com 10.

        // Já o new Promise(...) você usa quando quer controlar quando resolve ou rejeita.

        // é uma Promise já resolvida, sem processamento

        // Você usa isso quando:

            // quer padronizar retorno (função pode retornar valor ou Promise)

            // precisa de algo que espera uma Promise (await, Promise.all, etc.)

            // quer encadear .then() mesmo com valor síncrono

            await Promise.resolve(10) // funciona igual

            // É mais sobre consistência de fluxo, não sobre processamento.

            //------

            Promise.reject('Rejeitado') // ria uma Promise já rejeitada.

            // Equivale a:

            async function f() {
            throw 'Rejeitado'
            }

            // E ela:

                // já nasce em rejected

                // cai direto no .catch() ou no try/catch com await


                // O promise.catch() pega o que a Promise lançar. Mas o catch o try catch só pega se antes da promisse tiver um await, assim a linha do catch não vai se antecipar?

                    // Curto e direto:

                    // - '.catch()' pega rejeição sem 'await' (cadeia de Promise)
                    // - 'try/catch' só pega rejeição se você usar 'await'

                        // Sem 'await', o erro não “sobe” pro 'try/catch' — ele fica dentro da Promise.

                        // Exemplo mental:

                        try {
                            promessa()        // NÃO pega
                            await promessa()  // PEGA
                        } catch (e) {}



                        try {
                            promessa1()        // NÃO pega
                        await promessa2()  // PEGA
                        } catch (e) {} // Pega a promissa2

                        promessa1.catch(e => console.log(e)) // aqui pega.

                        // Porque o método catch da promisse é vinculado ao processamento dela, é como ter um await embutido nele.