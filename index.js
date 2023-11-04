const express=require("express")
const app=express()
require("dotenv").config()

const route=require("./routes/route")
const port=process.env.PORT||3000


// app.use("/",(req,res,next)=>{
//     res.json({message:"server is working"})
// })


app.use(route)

// listen
app.listen(port,()=>{
    console.log("server is on",port)
})
