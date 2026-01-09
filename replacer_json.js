// O 'replacer' é uma função opcional que você pode passar para `JSON.stringify()` para controlar como as propriedades do objeto são convertidas em JSON. Ele permite modificar, excluir ou transformar os valores durante a conversão.

// Sintaxe:

    // JSON.stringify(objeto, replacer, espaçamento);

// 'replacer' pode ser:

  // - Uma 'função' que modifica os valores durante a conversão.
  // - Um 'array de strings' que especifica as propriedades a serem incluídas no JSON.

// Exemplo 1: 'Função como replacer'

// A função recebe dois parâmetros: `key` (nome da propriedade) e `value` (valor da propriedade). Você pode alterar ou excluir valores com base na chave e/ou no valor.

  // Exemplo com base na chave:

      const obj = { nome: "João", idade: 25, senha: "12345" };

      const jsonString = JSON.stringify(obj, (key, value) => {
        if (key === "senha") {
          return undefined;  // Exclui a propriedade 'senha'
        }
        return value;  // Mantém as outras propriedades
      });

      console.log(jsonString); // {"nome":"João","idade":25}


  // Exemplo com base no valor:

      // Neste exemplo, vamos excluir qualquer propriedade cujo valor seja `25`.

      const obj2 = { nome: "João", idade: 25, senha: "12345" };

      const jsonString2 = JSON.stringify(obj2, (key, value) => {
        if (value === 25) {
          return undefined;  // Exclui qualquer propriedade com o valor 25
        }
        return value;  // Mantém as outras propriedades
      });

      console.log(jsonString2); // {"nome":"João","senha":"12345"}

      // Resumo:

        // - A função de replacer verifica o valor de cada propriedade ('value').
        // - Se o valor for '25', ela retorna 'undefined', o que exclui a propriedade.
        // - Caso contrário, ela retorna o valor original da propriedade.

// Evidentemente outras modificações podem ser feitas, além de altrações nos valores dos dados, podemos, por exemplo:

    // Adicionar uma nova propriedade (não presente no objeto original)

    // Você pode adicionar uma propriedade extra à estrutura do JSON dentro do replacer. Neste caso, você simplesmente retorna um novo objeto com a chave e valor extra.

    const obj3 = { nome: "João", idade: 25 };

    const jsonString3 = JSON.stringify(obj3, (key, value) => {
      if (key === "") {
        // Adiciona uma nova chave no início
        const newObj = { ...value, novaPropriedade: "Valor adicionado" };
        return newObj;
      }
      return value;  // Retorna as propriedades originais
    });

    console.log(jsonString3); // {"nome":"João","idade":25,"novaPropriedade":"Valor adicionado"}


// Exemplo 2: 'Array como replacer'

// O array permite especificar quais propriedades devem ser incluídas no JSON. Se uma propriedade não estiver no array, ela será excluída.

const obj4 = { nome: "Pedro", idade: 30, senha: "12345" };

const jsonString4 = JSON.stringify(obj4, ["nome", "idade"]);
console.log(jsonString4); // {"nome":"João","idade":25}

// RESUMO dos valores possíveis para o 'replacer':

// 1. 'Função': Modifica ou filtra valores (recebe `key`, `value` como parâmetros).
// 2. 'Array de strings': Filtra propriedades a serem incluídas no JSON.

