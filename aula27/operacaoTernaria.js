// ? :
// exemplo, site que eu tenha usuário vip's e normais
// e com base na pontuação desse usuário eu termino se ele é vip ou normal.

const pontuacaoUsuario = 1200;

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário Normal')
// }



// como posso encurtar esse código?? com a operação ternária!
//codição ? valor verdadeiro : valor falso
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log(nivelUsuario);
