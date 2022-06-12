const express= require('express');
const router = express.Router();

router.get('/',(req,res)=>{

   /* var mundo= 'Thunder';
    res.send(`Hola ${mundo}`)*/
    res.render('index.html',{
        title:"Hola Mundo"
    });

 });



 module.exports = router;