const express = require('express')
const ditto = require('./pokemon/ditto.json')

const desiredPort = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto)
})

app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body)
})

app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(desiredPort, () => {
    console.log(`Hello from EXPRESSS on port http://localhost:${desiredPort}`)
})