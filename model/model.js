const database=require("../utilis/utilis")

class Model{
    


    // product list 
    static fetch(){
        database.execute("SELECT * FROM product",function(err,result,field){
            if(err){
                throw err
            }
            return err

        })
    }
}



module.exports=Model
