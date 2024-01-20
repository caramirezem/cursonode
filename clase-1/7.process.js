//Imprime los argumentos que le pasamos a un archivo
//console.log(process.argv)

// Ubicación de ejecución del proceso

console.log(`Este es el CWD ${process.cwd()}`)
console.log(`No sé ${process.hrtime()}`)
console.log(`Varibale de entorno ${process.env.PEPE}`)




//Controlar eventos del proceso

process.on('exit',() => {
    console.log(`Proceso cerrado`)
})

process.exit(1)
