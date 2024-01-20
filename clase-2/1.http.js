const http = require('node:http')
const fs = require('node:fs')

//const { findAvailablePort } = require('./10.free-ports')

//console.log(process.env)

const desiredPort = process.env.PORT ?? 3000


const processRequest = (req, res) => {

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if (req.url === '/') {
        res.end(`<h1>Bienvenido a mi página</h1>`)
    } else if (req.url === '/gatito') {

        fs.readFile('./gato.jpg', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1>500 Internal Server Error</h1>')
            } else {
                res.setHeader('Content-Type', 'image/jpg')
                res.end(data)
            }
        })
    }
    else if (req.url === '/contactos') {
        res.end(`<h1>Contactos</h1>`)
    } else {
        res.statusCode = 404
        res.end(`<h1>404</h1>`)
    }

}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`)
})
