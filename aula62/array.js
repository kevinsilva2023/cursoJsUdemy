// valor por referencia
//                 0        1         2      
const nomes = [ 'kevin', 'marcos', 'safasg'];
nomes[2] = 'lucass';
nomes[3] = 'terciario';
nomes[4] = 'vou ser apagado'
delete nomes[4]
nomes[5] = 'sou o 5'
console.log(nomes)

