const produto = { nome: 'Produto', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
    value: 'Kevin',
    writable: false,
    configurable: false
});

//retona as propriedades
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); 
produto.nome = 'nao vai funcionar';
delete produto.nome;
// delete produto.preco; // funciona pq eu nao mexi na property

// retorna valor
console.log(Object.values(produto));

// retorna chave e valor
console.log(Object.entries(produto));