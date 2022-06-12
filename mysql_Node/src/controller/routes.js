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
    cb(null,file.originalname);//+'-'+ Date.now() 
  }
});

const upload = multer({
  storage : storage
}); //<--nombre del imput imagen




//mysql
const mysql = require('../config/mysql.config');

const my = require('./mysql');

const rtConfig = require('../config/rt.config');

const router = express.Router();

router.get('/',rtConfig.index);

router.get('/in',(req,res)=>{

    my.insert(mysql.conection, result =>{
      
      console.log('Insert id : '+result.insertId+'  '+'Afect row, osea datos afectados o algo asi : '+result.affectedRows);
      res.render('index.html',{
        index : 'insert'
      });
    });

 

});

router.get('/read',(req,res)=>{

  my.read(mysql.conection, result =>{

     res.render('read.html',{
      index : 'read',
      result
    });

    //res.json(result[0].id);
  });

  router.get('/rm/:id',(req,res)=>{

    my.remove(mysql.conection,{id:req.params.id}, result =>{
      console.log('DELETE Insert id : '+result.insertId+'  '+'Afect row, osea datos afectados o algo asi : '+result.affectedRows);
       res.json(result);
      });
  
     
    });



});


router.get('/img', (req,res)=>{

    my.imgread(mysql.conection,result =>{
        res.render('img.html',{
          index: 'img',
          items: result
        });
    });
    
});

router.post('/img/save',upload.single('image'),(req,res,next)=>{



   my.imgSave(mysql.conection,{img:fs.readFileSync(path.join( __dirname,'..','public','uploads',req.file.filename)),contentType: req.file.mimetype }, result =>{ 
     
  console.log('cargado');
  res.redirect('/img');
      });
  



});



module.exports = router;