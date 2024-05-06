// indice        0  1  2  3  4  5  6  7  8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
//              ^^^^^ são os valores ^^^^^
//o primeiro numero informado está no indice zero e assim por diante

const [primeiroNumero, segundoNumero, terceiroNumero, ...teste] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(teste); // usando os ... consigo pegar o resto

const [um , , ,,tres, , cinco] = numeros;
console.log(um, tres, cinco);



//                         0        1        2 
//                       0 1 2    0 1 2    0 1 2 
const arrayComplexo = [ [8,7,4], [9,5,2], [0,2,6]];

// ai para pegar o numero 3 do terceiro array, preciso fazer assim:
console.log(arrayComplexo[2][2])// 6
console.log(arrayComplexo[1][0])// 9
console.log(arrayComplexo[0][1])// 7