function somando(x, y) {
    if (
        typeof x != 'number' ||
        typeof y != 'number'
    ) {
        throw('x e y precisam ser numeros.');
    }

    return x + y;
}
// caputurando erro
try {
    console.log(somando(1,2));
    console.log(somando('1',2)); 
} catch(error) {
    console.log(error);
}