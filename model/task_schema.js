const mongoose=require("mongoose")

const task_schema = new mongoose.Schema({
    categorie_id:mongoose.Types.ObjectId,
    what_i_have:String,
    Where:String,
    when:Date,
    radio_type:String,
    status:String
    
})


module.exports=mongoose.model("task",task_schema)