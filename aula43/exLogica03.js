// Escreva um função que recebe um número e 
// retorne o seguinte:
// Número divisivel por 3 = Fizz
// Número divisivel por 5 = Buzz
// Número divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisivel por 3 e 5 = Retorna o próprio numero
// Checar se o número é realmente um número = Retorna o próprio numero
// Use a função com número de 0 a 100.

function FizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0 ) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}
console.log('a', FizzBuzz('a'));
for (let number = 0; number <= 100; number++) {
    console.log(number, FizzBuzz(number));
}