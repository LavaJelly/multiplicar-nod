const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar.', opciones)
    .command('crear', 'Crea un archivo de texto que muestra la tabla de multiplicar seleccionada.', opciones)
    .help()
    .argv;

module.exports = {
    argv
}