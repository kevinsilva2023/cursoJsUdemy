
// Retorne apenas uma string com o nome da pessoa;
// Remova apenas a chave nome do obejto;
// Adicione uma chave id em cada objeto;

const pessoas = [
    { nome: 'Luiz', idade: 63 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Ana', idade: 28 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosanna', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// objeto com name
const objNome = pessoas.map(objeto => ( { nome: objeto.nome }))

// string
const nomeString = pessoas.map(obejeto => obejeto.nome);

// objeto com idade
const objIdade = pessoas.map(obejeto => ( { idade: obejeto.idade}));

//apenas idade
const idade = pessoas.map(obejeto => obejeto.idade);

// Adicionando Id
const comId = pessoas.map(function(objeto, indice) {
    const newObj = { ...objeto};
    newObj.id = (indice + 1) * 13; //esse calculo para criar numero aleatorio    
    return newObj;
});
console.log(comId)