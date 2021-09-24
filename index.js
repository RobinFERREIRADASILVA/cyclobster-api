const express = require('express');
const database = require('./config/database');
const app = express();
const Picture = require('./Models/photos');
const Category = require('./Models/category');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
console.log('Get connection ...');

try {
    database.authenticate();
    console.log('Connecté à la base de données MySQL!');
  } catch (error) {
    console.error('Impossible de se connecter, erreur suivante :', error);
  }

app.get('/pictures', (req,res) => {

    const allPictures = Picture.findAll().then((pictures) => {
    res.send(pictures)

    });

});

app.get('/categories', (req,res) => {

    Category.findAll().then((categories) => {
    res.send(categories)

    });

});

app.listen(8000, () => {
    console.log("Serveur à l'écoute")
  })

  module.exports = app;