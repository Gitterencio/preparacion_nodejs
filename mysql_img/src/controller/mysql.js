const mysql = require('mysql');
const mys = require('../config/mysql.config');


function imgSave (conection, data,cb){
    let imgQuery ="UPDATE users SET blo_image= ? ,contentType = ? ";
    let query = mysql.format(imgQuery,[data.img , data.contentType]);

    conection.query(query,(err,result)=>{
        if(err) throw err;
        cb(result);
        console.log('save');

       
    });
};

function imgread (conection, cb){
    conection.query('SELECT  blo_image, contentType FROM users',(err,result)=>{
        if(err) throw err;
        cb(result);
      
    });
};

module.exports = {
 
    imgSave,
    imgread
};