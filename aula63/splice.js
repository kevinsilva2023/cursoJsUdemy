//                0         1          2        3          4
const nomes = ['Kevin', 'Giovanna', 'Diego', 'Giulia', 'Isadora'];

// como usar?
// nomes.splice(indice, delete, elem1, elem2, elem3);

const removidos = nomes.splice(2, 1);
console.log(nomes, removidos)