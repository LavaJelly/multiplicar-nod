// App.js

// Requires
const { crearArchivo, mostrarTabla } = require('./multiplicar/multiplicar');
const { demand } = require('yargs');
const argv = require('./config/yargs').argv;
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        mostrarTabla(argv.base, argv.limite)
        break;

    case 'limite':
        console.log('limite');
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Se ha creado el archivo ${archivo}`))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comando no reconocido');
        break;
}
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(argv.limite);
// console.log(argv.base);
// console.log(argv);
// console.log(argv2);