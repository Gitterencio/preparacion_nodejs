const mysql = require('mysql');




const user = 'bacalao';
const pass = 'mask';

function insertPool(pool, cb) {

    pool.getConnection((err,connection)=>{
        if (err) throw err;
        
    let insertQuery = `INSERT INTO users (user,pass) VALUES ("${user}","${pass}")`;
    connection.query(insertQuery, (err, result) => {
        if (err) throw err;
        cb(result);

        connection.release();
    });
        
    });

  


};

function readPool(conection, cb) {
    conection.query('SELECT * FROM users', (err, result) => {
        if (err) throw err;
        cb(result);

        conection.end();
    });

};

function removePool(conection, data, cb) {
    let removeQuery = "DELETE FROM users WHERE id = ?";
    let query = mysql.format(removeQuery, [data.id]);

    conection.query(query, (err, result) => {
        if (err) throw err;
        cb(result);
        conection.end();
    });


};

function imgSavePool(conection, data, cb) {
    let imgQuery = "UPDATE users SET blo_image= ? ,contentType = ? ";
    let query = mysql.format(imgQuery, [data.img, data.contentType]);

    conection.query(query, (err, result) => {
        if (err) throw err;
        console.log('save');
        cb(result);
        conection.end();
    });
};

function imgreadPool(conection, cb) {
    conection.query('SELECT  blo_image, contentType FROM users', (err, result) => {
        if (err) throw err;
        cb(result);
        conection.end();
    });
};

module.exports = {
    insertPool,
   readPool,
   removePool,
    imgSavePool,
     imgreadPool
};

