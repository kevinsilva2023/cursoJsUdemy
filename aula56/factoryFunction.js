// como eu faria
function criaUser(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto = 'Falando sobre JS') {
            return `${nome} está ${assunto}.`
        },

        altura: a,
        peso: p,
        get imc() {
            const indice = this.peso / this.altura ** 2;
            return indice.toFixed(2)
        }
    };
}
const person1 = criaUser('Kevin', 'Silva', 1.75, 82);
person1.nomeCompleto = 'Kevin Marcos Pereira da Silva'
console.log(person1.nome);
console.log(person1.sobrenome);
console.log(person1.fala());

