const mongoose = require('mongoose');

//CADENA DE CONEXION
mongoose.connect('mongodb://uvwsk4nzavtd0joejaog:HtzRWfbZnEewHvYMECZz@b8siqpaf1c9sxah-mongodb.services.clever-cloud.com:27017/b8siqpaf1c9sxah',{useNewUrlParser:true,useUnifiedTopology:true});

//ESTADO DE CONEXION
const conection= mongoose.connection;
conection.once('open',()=>{
    console.log('Conexion MongoDB exitosa');
});

conection.on('error', (err)=>{
    console.log('Error de conexion MongoDB', err);
});

module.exports = mongoose;