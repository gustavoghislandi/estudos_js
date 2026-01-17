/*
===========================
BARREL FILE (index.js)
===========================

Um "barrel" é um arquivo que centraliza e reexporta
exports de vários módulos.

Objetivo:
- Simplificar imports
- Expor uma API pública do módulo
- Evitar imports longos e espalhados
*/

// Reexportando funções de outros arquivos
export { area } from './area.js';
export { comprimento } from './comprimento.js';
export { pi } from './constantes.js';

/*
Com essa estrutura de pastas:

math/
 ├─ area.js
 ├─ comprimento.js
 ├─ constantes.js
 └─ index.js   ← este arquivo (barrel)

Você pode importar assim:
*/

import { area, comprimento, pi } from './math';

// Em vez de:

import { area } from './math/area.js';
import { comprimento } from './math/comprimento.js';
import { pi } from './math/constantes.js';


/*
IMPORTANTE:
- O barrel NÃO duplica código
- Ele apenas "repassa" exports
- Funciona porque o runtime/bundler resolve automaticamente ./math → ./math/index.js
*/
