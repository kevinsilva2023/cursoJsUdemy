const numbers = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numberFilter = numbers.filter((valor, indice, array) =>{
    // console.log(valor); // passa por todos os indices do array e mostra o valor.
    console.log(valor, indice);
    return valor > 10;
});

console.log(numberFilter);
