// CharacterData não é um tipo primitivo do JavaScript.

// É uma interface da DOM (Web APIs), usada em nós de texto do HTML/XML.

// Ela é a classe base de:
 // Text
 // Comment
 // CDATASection

// Exemplo no navegador:

    let texto = document.createTextNode("Olá");
    texto instanceof CharacterData; // true

// Ou seja:
 // JS puro: só string
 // DOM: CharacterData representa dados de texto em nós, não caracteres individuais.
