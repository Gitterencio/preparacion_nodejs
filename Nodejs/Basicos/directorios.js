const fs = require('fs');

//mkdir
//fs.mkdirSync('./ext/img');

/*
fs.mkdir('./ext/css', (err) =>{
    if(err){
         throw('Error' + err);
    }

    console.log('carpeta creada ..');
});
*/

if(fs.existsSync('./ext/css')){
    console.log('la carpeta existe');
}else{

    fs.mkdir('./ext/css', (err) =>{
        if(err){
             throw('Error' + err);
        }
    
        console.log('carpeta creada ..');
    });

}