// O 'FormData' é uma maneira de enviar dados de formulário para o servidor, permitindo que você envie arquivos, texto e outros tipos de dados de forma fácil.

// Para 'enviar imagens', é muito mais adequado usar o 'FormData' do que o JSON. O 'FormData' foi projetado justamente para lidar com 'envio de arquivos' e outros tipos de dados de formulário, como texto e arquivos binários (imagens, vídeos, etc.), de forma eficiente.

// Resumo:

    // Use 'FormData' para enviar imagens: É o método mais eficiente, sem a necessidade de conversões e com o formato adequado para upload de arquivos.
    // Evite JSON para imagens: Converter imagens para Base64 aumenta o tamanho e o custo de desempenho, especialmente com imagens grandes.

// Resumo dos Métodos:

    // 'append(name, value)': Adiciona um novo valor.
    // 'delete(name)': Remove um campo.
    // 'get(name)': Retorna o primeiro valor de um campo.
    // 'getAll(name)': Retorna todos os valores de um campo.
    // 'has(name)': Verifica se o campo existe.
    // 'set(name, value)': Substitui o valor de um campo.
    // 'forEach(callback)': Itera sobre todos os pares chave-valor.

// Exemplo de como você usaria o 'FormData' no corpo de uma requisição 'fetch':

    // Criando um objeto FormData
    const formData = new FormData();
    formData.append('nome', 'João'); // chave, valor
    formData.append('idade', 30);
    formData.append('foto', document.querySelector('input[type="file"]').files[0]);  // Enviando um arquivo

    // Enviando a requisição
    fetch('https://api.exemplo.com/endpoint', {
      method: 'POST',  // Método POST para enviar dados
      body: formData,  // Corpo da requisição com FormData
    })
    .then(response => response.json())
    .then(data => console.log('Resposta recebida:', data))
    .catch(error => console.error('Erro na requisição:', error));


// Explicação:

    // - 'formData.append()': Adiciona dados ao corpo da requisição. O primeiro parâmetro é o nome do campo/chave (que será acessado no servidor), e o segundo parâmetro é o valor (que pode ser texto ou um arquivo).

    // - 'body: formData': O 'FormData' é automaticamente configurado para o tipo correto de requisição ('multipart/form-data'), que é usado para enviar arquivos e dados do formulário.

// Observação:

// O 'FormData' pode ser útil para enviar arquivos (como imagens ou documentos) junto com dados de texto. Ele cuida da parte do cabeçalho 'Content-Type' automaticamente, e você não precisa especificar o 'Content-Type' como faria com JSON.


// -----------

// Principais métodos que você pode usar com 'FormData':

// Métodos do 'FormData':

// 1. append(name, value):

    // Adiciona um novo par chave-valor ao 'FormData'.
    // 'name': O nome do campo.
    // 'value': O valor do campo (pode ser uma string, número, ou um arquivo).

   formData.append('nome', 'João');

// 2. delete(name)':

    // Remove a chave e o valor associados a um nome específico.

   formData.delete('nome');

// 3. get(name)':

    // Retorna o 'primeiro' valor associado ao nome especificado.
    // É usado para obter o valor de um campo já preenchido no 'FormData', seja ele enviado ou preenchido previamente.


   const nome = formData.get('nome');     // Pega o 'primeiro valor' associado ao campo 'nome' que já foi 'adicionado' ao 'FormData' com o método 'append()'.
   console.log(nome);  // Exemplo: "João"

// 4. getAll(name)':

    // Retorna 'todos' os valores associados ao nome especificado como um ARRAY.

   formData.getAll('nomes');  // Retorna todos os valores do campo 'nomes' (se houver múltiplos)

// 5. has(name)':

    // Retorna 'true' se o 'FormData' contiver um campo com o nome especificado.

   console.log(formData.has('nome'));  // Retorna true ou false

// 6. set(name, value)':

    // Define um valor para a chave especificada. Se a chave já existir, o valor anterior será substituído.

   formData.set('nome', 'Maria');  // Substitui qualquer valor existente para 'nome'

// 7. forEach(callback)':

    // Itera sobre todos os pares chave-valor no 'FormData' e executa uma função de 'callback' para cada par.

   formData.forEach((value, name) => { // A estrutura do FormaData é chave-valor, mas o forEach() é projetado para seguir assinatura (value, name).
     console.log(name, value);
   });

// Exemplo de uso de todos os métodos:

// Criando o FormData

    const formData2 = new FormData();

// Adicionando dados

    formData2.append('nome', 'João');
    formData2.append('idade', 30);
    formData2.append('foto', document.querySelector('input[type="file"]').files[0]);

// Modificando um valor existente

    formData2.set('nome', 'Maria');  // Substitui 'João' por 'Maria'

// Checando se existe um campo

    console.log(formData2.has('nome'));  // true

// Pegando um valor

    console.log(formData2.get('nome'));  // Maria

// Pegando todos os valores de um campo (caso haja múltiplos)

    formData2.append('nome', 'José');
    console.log(formData2.getAll('nome'));  // ['Maria', 'José']

// Iterando sobre os campos

    formData2.forEach((value, name) => {
        console.log('${name}: ${value}');
    });

// Deletando um campo

    formData.delete('idade');
    console.log(formData.has('idade'));  // false

// Resumo dos Métodos:

    // 'append(name, value)': Adiciona um novo valor.
    // 'delete(name)': Remove um campo.
    // 'get(name)': Retorna o primeiro valor de um campo.
    // 'getAll(name)': Retorna todos os valores de um campo.
    // 'has(name)': Verifica se o campo existe.
    // 'set(name, value)': Substitui o valor de um campo.
    // 'forEach(callback)': Itera sobre todos os pares chave-valor.


// Para 'enviar imagens', é muito mais adequado usar o 'FormData' do que o JSON. O 'FormData' foi projetado justamente para lidar com 'envio de arquivos' e outros tipos de dados de formulário, como texto e arquivos binários (imagens, vídeos, etc.), de forma eficiente.

// Motivos para usar 'FormData' em vez de JSON para imagens:

// 1. 'Envio de Arquivos Binários':

    // O 'FormData' pode facilmente lidar com 'arquivos binários', como imagens, sem a necessidade de conversões complexas.

    // 'JSON', por outro lado, não suporta envio direto de arquivos binários. Para enviar uma imagem em JSON, você precisaria 'converter o arquivo em Base64', o que pode aumentar significativamente o tamanho do arquivo e não é ideal para grandes imagens.

// 2. 'Formato 'multipart/form-data':

    // O 'FormData' usa o formato 'multipart/form-data', que é o 'padrão' para enviar dados de formulários com arquivos, permitindo que você envie 'dados e arquivos' de maneira eficiente em uma única requisição.

    // Esse formato divide os dados em partes e cada parte é tratada corretamente, mantendo a estrutura de 'arquivo binário' intacta.

// 3. 'Simplificação no Envio de Arquivos':

    // Ao usar 'FormData', você pode simplesmente 'adicionar arquivos' com 'formData.append('campo', arquivo)' e o navegador cuida da codificação e do tipo de conteúdo.

// Exemplo de Envio de Imagem com 'FormData':

// Criando o FormData

    const formData3 = new FormData();
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.files[0];

// Adicionando a imagem ao FormData3

    formData3.append('imagem', file);  // 'imagem' será o nome do campo para o arquivo

// Enviando a imagem

    fetch('https://api.exemplo.com/upload', {
        method: 'POST',
        body: formData3  // Envia a imagem como parte do FormData
    })
    .then(response => response.json())
    .then(data => console.log('Imagem enviada com sucesso:', data))
    .catch(error => console.error('Erro ao enviar imagem:', error));


// Quando Usar JSON para Imagens (não recomendado para upload):

    // Você 'poderia' enviar uma imagem em JSON, mas a imagem precisaria ser 'convertida para Base64'. Isso pode ser feito, mas não é a solução ideal, principalmente para imagens grandes.




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
