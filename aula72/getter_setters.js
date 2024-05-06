// defineProperty 
// Construction
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // re-configurável?
        get: () => {
            return estoquePrivado;
        },
        set: valor => {
            if (typeof valor !== 'number') {
                console.log('Isso não é um número.')
                return;
            }
            estoquePrivado = valor
        }
    });
}
const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
p1.estoque = 90;  
console.log(p1.estoque)


 