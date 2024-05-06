const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const juncao = a1 + a2; retorna uma string
// const juncao = a1.concat(a2, [7, 8, 9], 'Kevin');
const juncao = [...a1, ...a2, 'Kevin', ...[7, 8, 9]];

console.log(juncao);