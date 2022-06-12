//npm install express
const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./public'));

const port =3001;

app.get('/',(req,res)=>{

    res.setHeader('content-type', 'text/html');
    res.sendFile('./public/index.html');
});

app.get('/get-peliculas',(req,res)=>{
    const file = fs.readFileSync('./peliculas.json' , 'UTF-8');
    console.log(file);

    res.setHeader('content-type', 'text/json');
    res.send(file);
});

app.post('/new',(req,res)=>{

    res.setHeader('content-type', 'text/plane');
    const nombre = req.body.nombre;
    const rating=req.body.rating;

    //abrir
    let file = fs.readFileSync('./peliculas.json' , 'UTF-8');

    //a arreglo

    const json = JSON.parse(file);

    //insertar

    json.peliculas.push({"nombre": nombre, "rating": parseInt(rating)});

    //guardar

    file = fs.writeFileSync('./peliculas.json',JSON.stringify(json));

    res.send('guardado');

});

app.listen(port,()=>{
    console.log(`Servidor iniciado port: ${port}`);
});