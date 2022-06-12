//npm i express ejs 

//npm i mysql

//npm i pdfmake

const express= require('express');
const bodyParser= require('body-parser');
const path = require('path');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//HTML-> TRATAR COMO PLANTILLA EJS
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

//VIEWS FOLDER
app.set('views',path.join(__dirname,'views'));

//STATIC FOLDER
app.use(express.static(path.join(__dirname,'public')));

//ROUTES
app.use(require('./controller/routes'));


//SETTINGS
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Servidor iniciado");
});