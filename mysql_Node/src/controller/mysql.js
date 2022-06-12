const mysql = require('mysql');



const user ='bacalao';
const pass ='mask';

function insert (conection, cb){
    let insertQuery = `INSERT INTO users (user,pass) VALUES ("${user}","${pass}")`
    conection.query(insertQuery,(err,result)=>{
        if(err) throw err;
        cb(result);

  
    });

    
};

function read (conection, cb){
    conection.query('SELECT * FROM users',(err,result)=>{
        if(err) throw err;
        cb(result);
        
 
    });

};

function remove (conection, data,cb){
    let removeQuery ="DELETE FROM users WHERE id = ?";
    let query = mysql.format(removeQuery,[data.id]);

    conection.query(query,(err,result)=>{
        if(err) throw err;
        cb(result);
      
    });

   
};

function imgSave (conection, data,cb){
    let imgQuery ="UPDATE users SET blo_image= ? ,contentType = ? ";
    let query = mysql.format(imgQuery,[data.img , data.contentType]);

    conection.query(query,(err,result)=>{
        if(err) throw err;
        console.log('save');
       
  
        cb(result);
    });
};

function imgread (conection, cb){
    conection.query('SELECT  blo_image, contentType FROM users',(err,result)=>{
        if(err) throw err;
        cb(result);
     
    });
};

module.exports = {
    insert,
    read,
    remove,
    imgSave,
    imgread
};

