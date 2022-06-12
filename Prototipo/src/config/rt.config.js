const hm= 'hola mundo';

const home = async (req,res)=>{

    res.render('index.html',{
        home : hm
      });
      
    };


module.exports ={
    home};