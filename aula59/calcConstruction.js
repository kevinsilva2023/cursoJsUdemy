function Calculadora() {
    this.display = document.querySelector('.display');
    this.display.focus();

    //pegando os valor digitado
    this.inicia = () => {
        this.caputandoCliques();
        this.capturaEnter();
        
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', eve => {
            if (eve.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.caputandoCliques = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('btn-num')) this.addNumDisplay(element); //number
            if (element.classList.contains('btn-clear')) this.clear(); //clear
            if (element.classList.contains('btn-del')) this.del(); //delete
            if (element.classList.contains('btn-eq')) this.realizaConta(); // =
        });
    };

    this.addNumDisplay = element => {
        this.display.value += element.innerText; //inserindo numero
        this.display.focus(); //colocando foco no display
    };
    this.clear = () => this.display.value = ''; // limpando display
    this.del = () => this.display.value = this.display.value.slice(0, -1); //apagando um numero

    //calculando
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta Inválida');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta Inválida');
            return;
        }
    };

};

const calculadora = new Calculadora();
calculadora.inicia();



//consideração final:
//... pesquisar sobre slice
//... pesquisar sobre eval