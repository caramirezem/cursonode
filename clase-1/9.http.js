const http = require('node:http')
const { findAvailablePort } = require('./10.free-ports')

//console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log('Petición recibida')
    res.end('Hola  Mundo')
})

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`)
    })
})