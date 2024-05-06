
// retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 63 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Ana', idade: 28 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosanna', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if ( acumulador.idade > valor.idade ) return acumulador;
    return valor
});
console.log(maisVelha)