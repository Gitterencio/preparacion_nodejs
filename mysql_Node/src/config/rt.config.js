

const index = async (req,res)=>{

    res.render('index.html',{
        index : 'index'
      });
      
    };




module.exports ={
    index
};