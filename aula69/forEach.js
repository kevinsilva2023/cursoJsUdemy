const a1 = [1, 2, 3];
let total = 0;

a1.forEach(valor => {
    valor = valor * 10;
    total += valor;
});

console.log(total)