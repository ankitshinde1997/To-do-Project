const express=require("express")
const app=express()

const bodyparser=require("body-parser")
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/ankit_task").then((err)=>{
 
console.log("connection is established")
})

const routes=require('./routes/routes')
app.use('/',routes)

const port =150
app.listen(port,(err)=>{
    if(err)throw err
 console.log(`server is listening on port http://localhost:${port}`)
})