// Declaração de função (Functio Hoistig)
// idependente de onde esta minha função, ela é executada

function falaOi() {
    console.log('Oie')
} falaOi();
// Fist-class objects (Objetos de primeira classe)

// Function express
const souUmDado = function() {
    console.log('Sou um Dado');
} ;


function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo: ')
    funcao();
};
executaFuncao(souUmDado);

// Arrow Function
const funnncaoArrow = () => {
    console.log('Sou uma arrow Function')
};
funnncaoArrow();

// Dentro de um obejto
const obj = {
    falar() {
        console.log('Function dentro de objeto.');
    }
};
obj.falar();