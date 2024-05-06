// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
// ----------------------------------------------------------------------------------
    const numbers = [ 5, 50, 80, 1, 2, 8, 7, 11, 15, 22, 27 ];
// ----------------------------------------------------------------------------------

const numerosPares = numbers.filter(valor => valor % 2 === 0);
const dobrandoNumerosPares = numerosPares.map(valor => valor * 2);
const somandoTudo = dobrandoNumerosPares.reduce((acumulador, valor) => acumulador += valor)
console.log(somandoTudo);

// ----------------------------------------------------------------------------------

const somandoEncurtado = numbers
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac += valor);
console.log(somandoEncurtado);