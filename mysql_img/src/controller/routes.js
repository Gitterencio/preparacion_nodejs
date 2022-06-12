const express= require('express');
const path =require('path');

const fs = require('fs');
const multer = require('multer');
//Format Storage
const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,path.join( __dirname,'..','public','uploads'));
  },
  filename: (req,file,cb)=>{
    cb(null,file.originalname+'-'+ Date.now());//+'-'+ Date.now() 
  }
});

const upload = multer({
  storage : storage
}); //<--nombre del imput imagen





//mysql
const mysql = require('../config/mysql.config');

const my = require('./mysql');



const router = express.Router();

const pdfprinter = require('pdfmake');
const styles = require('./styles');
const fonts = require('./fonts');
const { content } = require('./pdfContent');


router.get('/pdf', (req,res)=>{
  
  let docDefinition = {
    content,
    styles
  };
  
  const printer = new pdfprinter(fonts );
  const name = 'pdfTest'+Date.now()+'.pdf';

  let pdfdoc = printer.createPdfKitDocument(docDefinition);
  pdfdoc.pipe(fs.createWriteStream(path.join( __dirname,'..','public','doc',name)));
  pdfdoc.end();

  setTimeout( () => {
    console.log("wait for save")

  const pd = fs.readFileSync(path.join( __dirname,'..','public','doc',name));
 
  res.contentType('application/pdf');
 
  res.send(pd);

}, 100)
 
  
});


router.get('/', (req,res)=>{

    my.imgread(mysql.conection,result =>{
        res.render('index.html',{
          index: 'img',
          items: result
        });
    });
    
});
router.post('/img/save',upload.single('image'),(req,res,next)=>{



    my.imgSave(mysql.conection,{img:fs.readFileSync(path.join( __dirname,'..','public','uploads',req.file.filename)),contentType: req.file.mimetype }, result =>{ 
 
   console.log('cargado');
   fs.unlinkSync((path.join( __dirname,'..','public','uploads',req.file.filename)));
   res.redirect('/');
       });
   
 
 
 
 });

 
 



 module.exports = router;