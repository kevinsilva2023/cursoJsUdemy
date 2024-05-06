// return
// retorna um valor
// termina a funcao

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}
const p1 = criaPessoa('Kevin', 'Silva');
const p2 = {
    nome: 'Giovanna',
    sobrenome: 'Varano'
}
console.log(p1,':' , p1.nome, p1.sobrenome);
console.log('Type Of:', typeof p1);

console.log('--------------------------------------------------------');

console.log(p2,':' , p2.nome, p2.sobrenome);
console.log('Type Of:', typeof p2)

// ------------------------------------------------------------------------------------------------
console.log('--------------------------------------------------------');

function comecoFrase(comeco) {
    function fimFrase(resto) {
        return comeco + ' ' + resto;
    }
    return fimFrase;
}

const olaMundo = comecoFrase('Ola');
console.log(olaMundo('mundo!'));
// ------------------------------------------------------------------------------------------------
console.log('--------------------------------------------------------');

// function duplica(n) {
//     return n * 2;
// }
// function triplica(n) {
//     return n * 3;
// }
// function quadriplica(n) {
//     return n * 4;
// }

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function(n) {
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));