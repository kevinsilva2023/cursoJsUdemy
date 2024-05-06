const paragrafo = document.querySelector('.paragrafos');
const todosParagrafos = paragrafo.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body); //pegando os estilos do css do body
const bgColorBody = estilosBody.backgroundColor; // pegando o bgcolor de todos os estilos


for (let p of todosParagrafos) {
    p.style.backgroundColor = bgColorBody; // colocando o bgcolor
    p.style.color = '#fff'; //colocando cor branca
    p.style.padding = '6px';
    p.style.borderRadius = '10px';
    p.style.textAlign
};
// ----------------------------------------------------------------------------------------
// agora sozinho vou tentar mudar o titulo
const titulo = document.querySelector('.title');
    titulo.style.backgroundColor = bgColorBody;
    titulo.style.color = '#fff';
    titulo.style.padding = '10px';
    titulo.style.borderRadius = '10px';
    titulo.style.textAlign = 'center';