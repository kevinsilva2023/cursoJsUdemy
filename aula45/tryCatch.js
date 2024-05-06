try {
    // É executada quando não há erro
} catch (e) {
    // É executada quando há erros
} finally {
    // Sempre é executada
}
function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperava uma instancia de date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit', // zero a esquerda
        minute: '2-digit', //zero a esquerda
        hour12: false
    });
}
// agora aplico o try
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    // Tratar erro
} finally {
    const hora = retornaHora();
    if (hora >= 0 || hora <= 12) {
        console.log('Tenha um bom dia!');
    } else if (hora > 12 || hora <= 18) {
        console.log('Tenha uma ótima tarde!');
    } else {
        console.log('Tenha uma boa noite!')
    }
}

