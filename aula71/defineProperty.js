// defineProperty 

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar?
        configurable: false // re-configurável?
    }) 
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

