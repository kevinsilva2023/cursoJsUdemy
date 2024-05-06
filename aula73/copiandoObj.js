const produto = { nome: 'Caneca', preco: 1.8 };
const outroProduto = { 
    ...produto,
    material: 'Porcelana'
};
// spred operator
// para que nao substitua o original

outroProduto.nome = "Outro Nome";
outroProduto.preco = 2.50;

console.log(produto);
console.log(outroProduto);

// -----------------------------------------------

//vou fazer agora a mesma coisa com assing
const produto2 = { nome2: 'Produto', valor: 19.90 };
const outroAssign = Object.assign( {}, produto2, {
    material: 'Porcelanato',
    materiaPrima: 'Pó'
});

outroAssign.nome2 = 'Produto Assign';
outroAssign.valor = 19.99

console.log(produto2);
console.log(outroAssign);

// -----------------------------------------------

// mostra um array com o obj
console.log(Object.keys(produto2));

// -----------------------------------------------

// nao altera o objeto
Object.freeze(produto2);
produto2.nome2 = 'Kevin' // nao funciona