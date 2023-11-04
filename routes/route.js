const express=require("express")
const route=express.Router()
const {homeController,productController}=require("../controller/comtroller")

route.get("/",homeController)
route.get("/product",productController)




module.exports=route