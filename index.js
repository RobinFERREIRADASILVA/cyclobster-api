const express = require('express')
const app = express()

app.get('/pictures', (req,res) => {
    res.send("Liste des parkings")
})

app.listen(8000, () => {
    console.log("Serveur à l'écoute")
  })