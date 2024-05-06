const pessoa = {
    nome: 'Kevin',
    sobrenome: 'Marcos',
    idade: 19,
    endereco: {
        rua: 'Rua Iraxim',
        numero: 93
    }
};

// const nome1 = pessoa.nome; // atribuição normal;
// const { nome, sobrenome, idade } = pessoa; // atribuição via desestruturação 

// //mudando o nome da variavel
// const { nome: teste = '', sobrenome2} = pessoa;

// pegando o endereço
const {
    endereco: {rua, numero} 
} = pessoa;

console.log(rua, numero);