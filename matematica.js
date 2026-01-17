// import comprimento from "./circunferencia"; // Hoje em dia o import não pode mais ser sem a extenção (.js, no caso). Somente bundlers como Vite, Webpack e CRA aceitam assim.


// import do export default (padrão)
import comprimento from "./circunferencia.js"; // com extensão

// import de export nomeado
import { area, pi} from "./circunferencia.js";

console.log(comprimento(3)) // 18.849

console.log(area(3)); // 28.273500000000002
console.log(pi); // 3.1415