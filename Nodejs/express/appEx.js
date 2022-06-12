//npm install express, instalcion en carpeta
const express = require('express');

var app = express();

//ruta del index
app.use(express.static('./ReadersDesing'));

//puerto
app.listen(3000);

console.log('express iniciado');