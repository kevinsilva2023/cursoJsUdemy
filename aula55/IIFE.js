// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    const sobrenome = "Marcos";
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Kevin'));
    }

    falaNome() ;
    console.log(idade, peso, altura)
})(19, 85, 1.78);
