// Requires
const fs = require('fs');
const colors = require('colors');

let data = '';

// se puede inicializar un valor por defecto al momento de recibir los argumentos.
let mostrarTabla = (base, limite = 10) => {

    console.log('============================='.green);
    console.log(`======= Tabla del ${base} =======`.green);
    console.log('============================='.green);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}`);
    }

    console.log('============================='.green);
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No se permiten letras, solo números!`)
            return;
        }

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }


        fs.writeFile(`tablas/tabla-del-${base}-hasta-el-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-del-${base}-hasta-el-${limite}.txt`.green)
        });
    })
}

module.exports = {
    crearArchivo,
    mostrarTabla
}