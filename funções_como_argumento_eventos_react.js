// ===============================================
// FUNÇÕES COMO ARGUMENTO (muito comum no React)
// ===============================================

// 1️⃣ Funções são valores de primeira classe em JS
function mostrar() {
  console.log("Olá");
}

function executar(fn) {
  fn(); // chama a função passada
}

executar(mostrar); // passa a função, não o resultado
// mostrar  → referência da função
// mostrar() → executa imediatamente

// 2️⃣ Eventos no React ou DOM
function handleClick(e) {
  console.log("Botão clicado!", e.target);
}

// React passa automaticamente o evento 'e'

  // <button onClick={handleClick}>Clique</button>

// equivalente a:

  // <button onClick={e => handleClick(e)}>Clique</button>

// 3️⃣ Passando parâmetros extras junto com o evento
function handleClickExtra(e, id) {
  console.log("Botão clicado!", id);
}

<button onClick={e => handleClickExtra(e, 42)}>Clique</button>
// NÃO usar: onClick={handleClickExtra(e, 42)} → executa na hora

// 4️⃣ Resumo rápido:
// - onClick={handleClick} → passa a função, React chama com evento
// - onClick={e => handleClick(e)} → mesma coisa, mais explícito
// - onClick={e => handleClick(e, extra)} → necessário quando há parâmetros extras
// - handleClick() → executa imediatamente, não queremos isso no onClick
