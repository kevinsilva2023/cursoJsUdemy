function relogio() {
    function getTimeFromSeconds(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}; //reset

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function inicaRelogio() {
    timer = setInterval( function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000); 
};

//get target click
document.addEventListener('click', function(event) {
    const elementos = event.target;

    if(elementos.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer);
        inicaRelogio();
    }
    if(elementos.classList.contains('pausar')) {
        clearInterval(timer);
        relogio.classList.add('pausado')
    }
    if(elementos.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.classList.remove('pausado')
        segundos = 0;
        relogio.innerHTML = '00:00:00'
    }
});
};
relogio();


