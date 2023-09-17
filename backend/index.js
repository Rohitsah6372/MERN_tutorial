const express = require('express')
const notes = require('./data/notes')
const dotenv = require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send('Hello World')
})

app.get('/notes', (req, res)=>{
    res.send(notes)
})

app.get('/notes/:id', (req, res)=>{
    const note = notes[req.params.id]
    res.send(note)
})

app.listen(port, console.log(`server started on ${port} `))