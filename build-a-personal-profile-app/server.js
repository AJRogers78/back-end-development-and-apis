const express = require('express')
const app = express()
const port = 3000


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

app.get('/', (req, res) => {
    res.status(200).send("Welcome to Camper Bot's homepage!")
})

app.get('/hobbies', (req, res) => {
    res.status(200).send('I cycle, go boating, and play guitar.')
})

app.get('/skills', (req, res) => {
    res.status(200).send('JavaScript, Node.js, and Express.js!')
})

app.get('/api/profile', (req, res) => {
    const name = 'Camper Bot'
    const hobbies = [
        'cycling', 'boating', 'guitar'
    ]
    const skills = [
        'JavaScript', 'Node.js', 'Express.js'
    ]
    const results = JSON.stringify({name, hobbies, skills})

    res.status(200).json({
        name,
        hobbies,
        skills
    }).contentType('application/json')
})
