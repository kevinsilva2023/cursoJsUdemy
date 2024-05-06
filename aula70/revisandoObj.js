const pessoa = new Object();
pessoa.nome = 'Kevin';
pessoa.sobrenome = 'Marcos';
pessoa.idade = 19;
pessoa.falaNome = function() {
    return(`${this.nome} está falanndo seu nome`);
};
pessoa.getDataNasc = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade 
};

for (let chave in pessoa) {
    console.log(pessoa[chave])
}