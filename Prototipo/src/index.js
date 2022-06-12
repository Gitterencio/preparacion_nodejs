//npm i express ejs mongoose bcrypt multer express-session nodemailer jsonwebtoken

const express= require('express');
const session= require('express-session');
const bodyParser= require('body-parser');
const path = require('path');
const Mongo = require('./config/mdb.config');


const app = express();

//MIDDLEWARE
app.use(session({
    secret: 'mysecret_key',
    cookie: {
      maxAge: 1000 * 60 * 60 * 1 * 1 //UNA HORA
    },
    rolling: true,
    resave: false,
    saveUninitialized:false
  }));

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
app.use(require('./moduls/routes'));


//SETTINGS
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Servidor iniciado");
});