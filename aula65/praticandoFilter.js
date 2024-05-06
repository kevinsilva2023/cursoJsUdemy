
// Retornne as pesssoas quem tem o nome com 5 letras ou mais;
// Retorne as pessoas com mais de 50 anos;
// Retorbe as pessoas cujo nome termina com A.

const pessoas = [
    { nome: 'Luiz', idade: 63 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Ana', idade: 28 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosanna', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
// Nome >= 5
const name = pessoas.filter(objeto => objeto.nome.length >= 5);

// > 50 anos
const idade = pessoas.filter(objeto => objeto.idade > 50);

// Termina com A
const letraFinal = pessoas.filter(objeto => objeto.nome.toLowerCase().endsWith('a'));
// toLowerCase().endsWith() para verificar todas que terminam com 'a'.
