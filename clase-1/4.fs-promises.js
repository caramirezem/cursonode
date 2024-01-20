const fs = require('node:fs/promises')


console.log('\n --->     Empezando a leer el archivo 1')
const text = fs.readFile('./archivo.txt', 'utf-8')
    .then((text) => {
        console.log('\n ++++++++++ Iniciando Archivo1: \n', text)
        console.log('\n ++++++++++ Finalizando Archivo1: \n ')
    })

console.log('\n --->     Estoy imprimiendo esto mientras leo el archivo 1')
console.log('\n --->     Empezando a leer el archivo 2')


console.log('\n --->     Leyendo el segundo archivo')

fs.readFile('./archivo2.txt', 'utf-8')
    .then((text) => {
        console.log('\n ++++++++++ Iniciando Archivo2: \n', text)
        console.log('\n ++++++++++ Finalizando Archivo2: \n ')
    })

console.log('\n --->     Terminando de leer el segundo archivo')
