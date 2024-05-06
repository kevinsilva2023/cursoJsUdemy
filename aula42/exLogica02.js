// Escreva uma função chamada ePaidagem que
// Recebe dois argumentos, largura e altura
// Retorno ture se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura) {
    return largura >= altura;
};
console.log(ePaisagem(1920, 1080))

//passando para arrowFunction
const ePaisagemFunction = (largura, altura) => 
    largura > altura;
console.log(ePaisagemFunction(1920, 1080))