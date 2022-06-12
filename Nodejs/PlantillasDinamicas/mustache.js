const express = require('express');
const bodyParser = require('body-parser');

//npm install mustache-express

const mustacheExpress = require('mustache-express');

//carpeta "views" ->inicio.mustache
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//
app.engine('.mustache',mustacheExpress());
app.set('view engine', 'mustache');


app.get('/',(req,res)=>{

    const datos=[
        {nombre: 'lena', edad:10},
        {nombre: 'luis', edad:20}
    ];

    //nombre del 'view', {dinamicos}
    res.render('inicio',{
        titulo :'Mustache',
        nombre:'argonauta',
        datos: datos
    });
   
});


const port =3002;
app.listen(port,()=>{
    console.log(`Servidor iniciado port: ${port}`);
});