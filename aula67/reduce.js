
// Some todos os números; (Reduce)
// Retorne um array com pares (Filter);
// Retorne um array com o dobro dos valores (Map).

const numbers = [ 5, 50, 80, 1, 2, 8, 7, 11, 15, 22, 27 ];

// Soma
const somando = numbers.reduce(function(acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0); // valor inicial do meu acumulador
console.log(somando);

// Numbers Pares
const numberPares = numbers.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []) // meu acumulador passa ser um array
console.log(numberPares);

// Numbers Inpares
const numberInpares = numbers.reduce(function(acumulador, valor) {
    if(valor % 2 !== 0) acumulador.push(valor);
    return acumulador;
}, []) // meu acumulador passa ser um array
console.log(numberInpares);

// Dobro dos valores
const dobrandoNumber = numbers.reduce(function(acumulador, valor){
    acumulador.push(valor*2)
    return acumulador;
}, []);
console.log(dobrandoNumber);