const express = require('express');
const bodyParser = require('body-parser');

//npm install pug


//carpeta "views" ->index.pug
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','pug');

app.get('/',(req,res)=>{

    //nombre del 'view', {dinamicos}
    res.render('index',{titulo :'app 1',nombre:'\nargonauta'});
   
});


const port =3002;
app.listen(port,()=>{
    console.log(`Servidor iniciado port: ${port}`);
});