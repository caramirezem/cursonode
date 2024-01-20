const express = require('express')
const ditto = require('./pokemon/ditto.json')
const path = require('path')


const desiredPort = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {

//     if (req.method !== 'POST') return next()
//     if (req.headers['content-type'] !== 'application/json') return next()

//     let body = ''

//     // escuchar el evento data
//     req.on('data', chunk => {
//         body += chunk.toString()
//     })

//     req.on('end', () => {
//         const data = JSON.parse(body)
//         data.timestamp = Date.now().toString()
//         //res.end(JSON.stringify(data))
//         req.body = data
//         next()
//     })


// })

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto)
})

app.post('/pokemon', (req, res) => {
    // let body = ''

    // // escuchar el evento data
    // req.on('data', chunk => {
    //     body += chunk.toString()
    // })

    // req.on('end', () => {
    //     const data = JSON.parse(body)
    //     // llamar a una base de datos para guardar la info
    //     //res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })

    //     data.timestamp = Date.now().toString()
    //     //res.end(JSON.stringify(data))
    res.status(201).json(req.body)
    // })
})

app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(desiredPort, () => {
    console.log(`Hello from EXPRESSS on port http://localhost:${desiredPort}`)
})