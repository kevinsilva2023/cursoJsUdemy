// Função fabrica -> objetos
// Fabria criaPessoa {}

// Função construtora -> objetos
// Construtora Pessoa (new) {}

function Pessoa(nome, sobrenome) {

    //Atributos Privados
    const ID = 123456;
    const metodoInterno = () => {

    };

    //Atributos Públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ": sou um metodo");
    };
}

const p1 = new Pessoa('Kevin', 'Silva');
const p2 = new Pessoa('Giovanna', 'Varano');
p1.metodo();