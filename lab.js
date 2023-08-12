const calculadoraCumple = require('birthday-calculator');

const fecha = new Date ('2003,04,06');
const resultado = calculadoraCumple.getDayWhenBorn(fecha);

console.log(resultado);

var colors = require('colors');
 
console.log(resultado.green); 
console.log(resultado.underline.red)
console.log(resultado.inverse); 
console.log(resultado.rainbow); 
console.log(resultado.trap);