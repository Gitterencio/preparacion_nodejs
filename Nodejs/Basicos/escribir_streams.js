var fs = require('fs');
const readline = require('readline');

var rl = readline.createInterface(process.stdin,process.stdout);

rl.question('¿Cual es tu nombre?\n',(nombre) => {
    
    let stream = fs.createWriteStream(`./ext/${nombre}.txt`);
    stream.write(`Me llamo ${nombre} : \n`);

   // fs.writeFileSync(`./ext/${nombre}.txt`,`Me llamo ${nombre} : \n`);   
    process.stdout.write("Escribe algo\n");

    rl.on('line',(escrito) =>{
        if(escrito.trim() == 'sl'){
        stream.close();
         rl.close(); 
         }else{
         stream.write(escrito.trim() + '\n');
         //   fs.appendFileSync(`./ext/${nombre}.txt`,escrito.trim() + '\n');
         }
    });
    
});