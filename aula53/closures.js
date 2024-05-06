function retornaFuncao() {
    const nome = 'Kevin';
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();;
console.log(funcao());

// é a habilidade que a funcao tem de acessar o escopo lexico