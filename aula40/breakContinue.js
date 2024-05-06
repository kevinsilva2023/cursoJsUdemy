const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numeros) {

    // pula o numero dois e segue o codigo
    if (i === 2) {
        console.log('Pulei o numero 2')
        continue;
    };
    
    console.log(i);

    // para quando encontra o valor
    if (i === 7) {
        console.log('Numero 7 encontrado, encerrando...')
        break;
    }

}