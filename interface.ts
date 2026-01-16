// (arquivo em .ts para evitar ficar vermelho no VS Code)

// Definição geral de interface (importante para entender bem o conceito de API - Application Programming Interface)

    // Uma interface é simplesmente o ponto de contato entre duas coisas, onde você interage com algo sem precisar conhecer todos os detalhes internos.  

    // - É uma forma padronizada de se comunicar.  
    // - Serve para ocultar complexidade e facilitar o uso.  

    // Analogia cotidiana:  

        // - Controle remoto da TV → interface para a TV.  
        // - Você aperta “volume +” e a TV aumenta o som.  
        // - Você não precisa abrir a TV e entender os circuitos.  

// Interface em programação

    // Em programação, “interface” pode aparecer em diferentes contextos:  

        // 1. API  
            // - A API é uma interface de programação.  
            // - Permite usar funções, módulos ou serviços sem se preocupar com implementação.  

        // 2. Interface de objetos / classes  
            // - Por exemplo, um objeto JavaScript tem métodos que você pode chamar:  
            
                const arr = [1, 2, 3];
                arr.push(4);  // push é a interface do array para adicionar elementos

            // - Você usa o método push sem saber como o array armazena os elementos internamente.  

        // 3. Interface formal em linguagens tipadas (TypeScript, Java, C#)  
            // - Uma interface define quais métodos e propriedades um objeto deve ter, sem implementar o que eles fazem.
            
            interface Pessoa {
                nome: string;
                idade: number;
                saudacao(): void;
            }

            // - Aqui, Pessoa é uma interface: define como interagir com um objeto “Pessoa” sem dizer como cada método funciona internamente.

            // Perceba que no exemplo dado em TypeScript, a palavra 'interface' é uma palavra reservada, usada para declarar interfaces de tipos.
                // É específica do TypeScript para definir 'contratos de tipos': quais propriedades e métodos um objeto deve ter, sem implementar a lógica (por isso interface).

// 3️⃣ Resumindo

// - Interface = ponto de contato / forma de interagir com algo  
// - Oculta complexidade  
// - Pode ser uma função, um objeto, um módulo, um serviço ou até uma classe  
// - A API é uma interface específica para programadores  

// 💡 Resumo mental:  
// Interface = “como você vê e usa algo”  
// Implementação = “como isso realmente funciona por dentro”  

// Se você quiser, posso fazer um esquema visual mostrando Interface → API → Função → Módulo → Servidor, que conecta tudo de forma instantânea e muito fácil de memorizar. Quer que eu faça?