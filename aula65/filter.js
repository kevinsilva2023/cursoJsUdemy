// FILTER 
// sempre retorna um array com a mesma quantidade de elementos ou menos;

// Return numbers > 10
const numbers = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callBackFilter(valor) {
//     return (valor > 10);
// }
// const numberFilter = numbers.filter(callBackFilter);

const numberFilter = numbers.filter(valor =>  valor > 10);

console.log(numberFilter);