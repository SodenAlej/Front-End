
function obtenerInfo(name = 'Ivan', apellido = 'Salas'){
    const info =  `${name} ${apellido}`;

    return info;
}

const info= obtenerInfo('Alejandro', 'Moreno');

console.log(info);