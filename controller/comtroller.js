const Model=require("../model/model")

const homeController=(req,res,next)=>{
    res.render("home.ejs",{
        title:"home page",
        header:"Welcome Start Shopping"
    })

}

const productController=(req,res,next)=>{
    const prod=Model.fetch()
    res.render("product.ejs",{
        title:"product page",
        product:prod
    })
}


module.exports={
    homeController,
    productController
}