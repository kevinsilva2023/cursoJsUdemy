 // const data = new Date(); //cria uma data no exato momento
const data = new Date('2024-02-14 23:19:45');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //pq no js começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Sec', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay() + 1); // 0 = domingo, 6 = sabádo.

console.log(data.toString()); //toSting é um formato que é exibido
