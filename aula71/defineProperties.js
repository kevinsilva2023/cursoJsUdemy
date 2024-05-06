// defineProperties

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar?
        configurable: false // re-configurável?
    });
    
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome, 
            writable: true,
            configurable: false 
        },
        preco: {
            enumerable: true,
            value: preco, 
            writable: true,
            configurable: false      
        },
    });
}

const p1 = new Produto('Camiseta', 220, 3);
console.log(p1)