// JavaScript Object Notation (JSON) é um formato leve, criado como:

    // subconjunto da notação de objetos literais do JavaScript, para troca de dados.

// Existe a extensão .json. Exemplo: arquivo.json, onde você pode guardar diversos JSON.

// NOTA: Daqui em diante, ao se falar em objeto, em geral isso será válido para arrays também. A conversão de arrays basicamente adiciona ou remove aspas aos extremos do array.

// Sintaxe:

    // JSON.stringify(objeto, replacer, espaçamento); // Para replacer, ver replacer_json.js

    // TODAS AS CHAVES PRECISAM ESTAR ENTRE ASPAS;
    // STRINGS PRECISAM ESTAR SEMPRE ENTRE ASPAS DUPLAS;
    // OS VALORES POSSUEM LIMITAÇÕES (POR EXEMPLO, NÃO PODEM SER FUNÇÕES).

// PARA CONVERTER UM OBJETO EM JSON: JSON.stringify(objeto)

// Abaixo, um exemplo de objeto que será convertido para JSON:

console.log("\n-----JSON.stringify(objeto)-----\n")

const dados = {
  "nome": "Ana",
  "idade": 25,
  "ativo": true,
  "enderecos": [
    {
      "tipo": "casa",
      "rua": "Rua das Flores, 123",
      "cidade": "São Paulo",
      "cep": "01000-000"
    },
    {
      "tipo": "trabalho",
      "rua": "Avenida Paulista, 456",
      "cidade": "São Paulo",
      "cep": "01310-000"
    }
  ],
  "contatos": {
    "telefone": "1234-5678",
    "email": "ana@example.com"
  },
  "dataNascimento": "1996-05-15T00:00:00Z",
  "habilidades": ["JavaScript", "React", "Node.js"],
  "projetoAtivo": null, // Propriedade sem valor (null)
  "configuracoes": {
    "notificacoes": true,
    "modoNoturno": false
  },
  "historico": [
    {
      "ano": 2020,
      "descricao": "Certificação JavaScript"
    },
    {
      "ano": 2021,
      "descricao": "Curso de React"
    }
  ]
};


console.log(JSON.stringify(dados)); // conversão do objeto para JSON

// Abaixo, a saída JSON gerada:

    // {"nome":"Ana","idade":25,"ativo":true,"enderecos":[{"tipo":"casa","rua":"Rua das Flores, 123","cidade":"São Paulo","cep":"01000-000"},{"tipo":"trabalho","rua":"Avenida Paulista, 456","cidade":"São Paulo","cep":"01310-000"}],"contatos":{"telefone":"1234-5678","email":"ana@example.com"},"dataNascimento":"1996-05-15T00:00:00Z","habilidades":["JavaScript","React","Node.js"],"projetoAtivo":null,"configuracoes":{"notificacoes":true,"modoNoturno":false},"historico":[{"ano":2020,"descricao":"Certificação JavaScript"},{"ano":2021,"descricao":"Curso de React"}]}


// Caso queira um formato de JSON mais legível (com quebras de linha e indentação), pode passar um segundo parâmetro para o stringify, como no exemplo abaixo:
console.log("\n-----JSON.stringify(objeto) com indentação-----\n")

    const jsonString = JSON.stringify(dados, null, 2);  // Indentação de 2 espaços
    console.log(jsonString);

            // Explicação dos parâmetros de `JSON.stringify(dados, null, 2)`:

            // 1. 'dados': O objeto ou valor a ser convertido em uma string JSON.
            // 2. 'null': A função de *replacer* (usada para transformar ou filtrar os dados). Neste caso, 'null' significa que não estamos fazendo nenhuma modificação.
            // 3. '2': O número de espaços para a indentação, que define a formatação da string JSON para torná-la mais legível (neste caso, com 2 espaços de indentação).


// Isso vai resultar em uma saída com formatação mais legível.

    // {
    //   "nome": "Ana",
    //   "idade": 25,
    //   "ativo": true,
    //   "enderecos": [
    //     {
    //       "tipo": "casa",
    //       "rua": "Rua das Flores, 123",
    //       "cidade": "São Paulo",
    //       "cep": "01000-000"
    //     },
    //     {
    //       "tipo": "trabalho",
    //       "rua": "Avenida Paulista, 456",
    //       "cidade": "São Paulo",
    //       "cep": "01310-000"
    //     }
    //   ],
    //   "contatos": {
    //     "telefone": "1234-5678",
    //     "email": "ana@example.com"
    //   },
    //   "dataNascimento": "1996-05-15T00:00:00Z",
    //   "habilidades": [
    //     "JavaScript",
    //     "React",
    //     "Node.js"
    //   ],
    //   "projetoAtivo": null,
    //   "configuracoes": {
    //     "notificacoes": true,
    //     "modoNoturno": false
    //   },
    //   "historico": [
    //     {
    //       "ano": 2020,
    //       "descricao": "Certificação JavaScript"
    //     },
    //     {
    //       "ano": 2021,
    //       "descricao": "Curso de React"
    //     }
    //   ]
    // }



// Tipos de dados que podem ser convertidos com `JSON.stringify`:

    // 1. **Objetos** (`{}`)
    // 2. **Arrays** (`[]`)
    // 3. **Strings**
    // 4. **Números**
    // 5. **Booleanos** (`true`, `false`)
    // 6. **`null`**
    // 7. **Datas** (`Date`)
    // 8. **Funções** (não são incluídas no JSON, mas podem ser stringificadas como `undefined`)
    // 9. **Símbolos** (não são incluídos no JSON)

// Tipos de dados que causam problemas:

    // 1. **Funções** (serão ignoradas no JSON resultante)
    // 2. **`undefined`** (propriedades com valor `undefined` serão ignoradas)
    // 3. **Símbolos** (não são representáveis em JSON)
    // 4. **Referências cíclicas** (causam erro ao tentar stringificar)


// Detalhes importantes:

    // Funções e valores especiais: Funções ou propriedades com o valor undefined não são incluídas no JSON resultante.

    // Ciclos de referência: Objetos que têm referências cíclicas (onde um objeto referencia a si mesmo) causariam um erro.
        // const obj = {};
        // obj.self = obj;  // O objeto referencia a si mesmo

        // const jsonString = JSON.stringify(obj);  // Gera um erro


// PARA CONVERTER UM JSON EM OBJETO: JSON.parse(string_json)

console.log("\n-----JSON.parse(json_string)-----\n")

    const jsonString5 = '{"nome":"João","idade":30,"ativo":true}';

    const dados2 = JSON.parse(jsonString5);
    console.log(dados2);

    // IMPORTANTE: Se a string não estiver em um formato válido de JSON, JSON.parse lançará um erro.
    // Então é uma boa prática usar try...catch para capturar exceções:

        try {
        const dados3 = JSON.parse(jsonString5);
        process.stdout.write("Sem erros:");
        console.log(dados3);
        } catch (error) {
        console.error("Erro ao fazer parse do JSON:", error);
        }

    // Objetos e arrays: Como no exemplo acima, objetos e arrays podem ser recriados a partir de uma string JSON.

    // Tipos de dados: O parse também pode lidar com valores simples (como números, strings, booleanos, etc.) dentro de JSON.
        const jsonString6 = '42';  // Um número em formato de string JSON
        const numero = JSON.parse(jsonString6);
        console.log(numero);  // 42

//----------------------

// Se você já conhece JSON.stringify() e JSON.parse(), você já tem o básico para lidar com dados JSON em JavaScript. No entanto, há alguns pontos adicionais que podem ser úteis, dependendo do que você está tentando fazer. Aqui vão alguns detalhes extras que podem ser interessantes:

// 1. Transformação de Objetos com Função de Replacemente (JSON.stringify)

        // Ver arquivo replacer_json.js

// 2. Cuidado com Propriedades Cíclicas (JSON.stringify)  --- (já mencionado acimas)

    // Se você tentar stringificar um objeto que tenha referências cíclicas (onde um objeto aponta para ele mesmo), você receberá um erro.

        // const obj = {};
        // obj.self = obj;

        // const jsonString = JSON.stringify(obj); // Vai gerar um erro

// 3. Manipulação de Strings JSON Grandes

        // Se você estiver lidando com grandes quantidades de dados em formato JSON, talvez seja interessante considerar o uso de JSON.parse() e JSON.stringify() em partes (ou pedaços), para não sobrecarregar a memória. Isso pode ser feito manualmente ou com bibliotecas que tratam de streams JSON.

// 4. Função JSON.stringify com Formatting (Espaçamento e Indentação) --- (não recomendo usar algo diferente de 2)

        // Você pode passar um número ou uma string como o terceiro parâmetro de JSON.stringify() para formatar melhor o JSON. Por exemplo:

        const jsonString10 = JSON.stringify(dados, null, 4); // Usando 4 espaços para indentação
        console.log(jsonString10);

        // Isso ajuda a tornar o JSON mais legível para seres humanos (ideal para depuração e visualização de dados).

// 5. Recuperando e Enviando Dados JSON

        // Quando você lida com APIs, o formato JSON é muito utilizado para enviar e receber dados entre cliente e servidor.

            const dados15 = {
                nome: "João",
                idade: 30
            };

            fetch('https://api.exemplo.com/endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados15) // Convertendo objeto para JSON para enviar
            })
            .then(response => response.json()) // response.json(): Este método extrai o corpo da resposta (que é normalmente um JSON) e o transforma em um objeto JavaScript. Ele retorna uma Promise que resolve com o conteúdo do corpo da resposta, já convertido para um objeto.
            .then(responseData => { // O responseData vem do método .json() que é chamado sobre a resposta da requisição (response).
                console.log('Resposta recebida do servidor:', responseData);
            })
            .catch(error => console.error('Erro na requisição:', error));

            // responseData: O nome responseData é uma variável de sua escolha. No caso do código, ela armazena o objeto retornado da response.json(). Pode ser qualquer nome que você queira, como data, result, etc.
            // A conexão/link entre responseData e response.json() acontece porque o response.json() retorna uma Promise. No código, essa Promise é resolvida e o valor (o JSON convertido) é passado para a variável responseData no segundo .then().

            // O valor é passado devido ao encadeamento de Promises no JavaScript.

            // O response.json() retorna uma Promise, e quando ela é resolvida, o valor (JSON convertido) é automaticamente passado para o próximo then().

            // Isso é uma sintaxe padrão do JavaScript para Promessas (Promises), não é exclusivo do fetch. A Promise "resolve" o valor e o passa automaticamente para o próximo .then().

            // Ou seja, o then() recebe o resultado da resolução da Promise e o passa para o próximo then().


//----------------------------------


// Exemplo de Envio de Imagem em JSON (não recomendado):

// 1. 'Converter a imagem para Base64':

   const reader = new FileReader();
   reader.onload = function(event) {
     const base64Image = event.target.result;  // Aqui está a imagem em Base64
     const jsonPayload = JSON.stringify({ imagem: base64Image });

     // Agora você envia o JSON
     fetch('https://api.exemplo.com/upload', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: jsonPayload
     })
     .then(response => response.json())
     .then(data => console.log('Imagem enviada com sucesso:', data))
     .catch(error => console.error('Erro ao enviar imagem:', error));
   };
   reader.readAsDataURL(fileInput.files[0]);

// Desvantagens de usar Base64 no JSON:

    // 'Tamanho aumentado': O Base64 aumenta o tamanho do arquivo em cerca de 33%. Isso pode ser um problema para imagens grandes.
    // 'Desempenho': A codificação/decodificação em Base64 é mais lenta e consome mais recursos do que simplesmente enviar o arquivo binário.

// Resumo:

    // 'Use 'FormData' para enviar imagens': É o método mais eficiente, sem a necessidade de conversões e com o formato adequado para upload de arquivos.
    // 'Evite JSON para imagens': Converter imagens para Base64 aumenta o tamanho e o custo de desempenho, especialmente com imagens grandes.

//------

// Converter para 'Base64' é útil quando você precisa 'incluir arquivos binários' (como imagens) diretamente dentro de 'strings'. Isso é útil em casos como:

    // 'Incluir imagens em documentos JSON ou HTML'.
    // 'Armazenar imagens em bancos de dados' como strings.
    // 'Evitar dependências externas' (como arquivos de imagem) em alguns contextos.

// Mas, para 'upload de arquivos', 'não é recomendado', pois aumenta o tamanho e o custo de processamento.
