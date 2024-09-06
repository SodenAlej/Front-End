
const obtenerInfo = (name = 'Ivan', apellido = 'Salas') => `${name} ${apellido}`;

const sum = (a = 0, b = 0) => a+b;

const info= obtenerInfo('Alejandro', 'Moreno');

console.log(info);
console.log(sum(20,10));