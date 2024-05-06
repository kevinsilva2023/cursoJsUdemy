// MAP altera o valor do array, não o original

const numbers = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numberDobrado = numbers.map(valor => valor * 2);

console.log('Array antes de mapear:', numbers)
console.log('Array mapeado', numberDobrado)