const express = require('express')
const movies = require('./movies.json')

const app = express()

app.disable('x-powered-by')

const desiredPort = process.env.PORT ?? 1234

app.get('/movies', (req, res) => {

    const { genre } = req.query
    console.log(genre)
    if (genre) {
        const filteredMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
        )
        return res.json(filteredMovies)
    }

    res.json(movies)
})

app.get('/movies/:id', (req, res) => {
    const { id } = req.params

    const movie = movies.find(movie => movie.id === id)
    if (movie) return res.json(movie)

    res.status(404).json({ "message": "movie not found" })
})


app.listen(desiredPort, () => {
    console.log(`Hello from Express Server on port http://localhost:${desiredPort}`)
})