function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const person = criaPessoa('Kevin', 'Marcos');
console.log(person.nomeCompleto())