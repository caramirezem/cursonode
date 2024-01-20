const ruta = require('node:path');


const separador = ruta.sep
console.log(separador)

const union = ruta.join('hola','mundo','mudo')
console.log(union)

const base = ruta.basename(`base ${separador} dddd.txt`)
console.log(base)