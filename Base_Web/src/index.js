const express= require('express');
const path = require('path');


const app = express();

//HTML -> EJS
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

//VIEWS FOLDER
app.set('views',path.join(__dirname,'views'));

//STATIC FOLDER
app.use(express.static(path.join(__dirname,'public')));

//ROUTES
app.use(require('./extjs/routes.js'));

//CONNECTION MONGODB
const mongoose = require('./extjs/dbconnect.js');


//PRUEBA DE INSERCION A LA BASE DE DATOS/////////////////////////////////
const N_modelo= mongoose.model('N_modelo',{nombre:String,si:Boolean,edad:Number});

const yo_mero=new N_modelo({nombre:"Alberto", si:true, edad:23});
yo_mero.save()
.then(doc =>{
    console.log('dato insertado', doc);})
.catch(err=>{
    console.log('Error al insertar', err.message)});
///////////////////////////////////////////////////////////////////////////



//SETTINGS

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Servidor iniciado");
});