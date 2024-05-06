// arguments que sustenta todos os argumentos enviados
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    c = 18
    console.log(total, a, b, c);

    // a = 1
    // b = 2
    // c = 18
}
funcao(1, 2, 3, 4, 5, 6, 7);

//=================================

function funcao2(d, e, f, g, h) {
    console.log(d, e, f, g, h)
};
funcao2(15, 12, 16);

//=================================

function somarParametro(a = 2, b = 3, c = 4) {
    console.log(a + b + c);
} 
//undefined para b permanecer com o seu valor de origem
somarParametro(1,undefined,3);

//=================================

function desestruturacao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let objects = {nome: 'Kevin', sobrenome: 'Marcos', idade: 20 };
desestruturacao(objects);

// =================================

function desestruturacaoArray( [valor1, valor2, valor3] ) {
    console.log(valor1, valor2, valor3);
}
desestruturacaoArray(['Kevin', 'Marcos', 'Com Array'])

// =================================
// no for in retorna indice
// of retorna os valores dos indices

// rest operator ...lorem pega o resto dos parametros
const calculadora = function(operador, acumulador, ...numeros) {
    for (let number of numeros) {
        if (operador === '+') acumulador += number;
        if (operador === '-') acumulador -= number;
        if (operador === '/') acumulador /= number;
        if (operador === '*') acumulador *= number;
    }
    console.log(acumulador)
};
calculadora('+', 200, 20, 30, 40, 50);