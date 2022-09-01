const mongoose=require("mongoose")

const Category_schema= new mongoose.Schema({
    type:String
})

module.exports= mongoose.model("category",Category_schema)

// https://github.com/ankitshinde1997/task-vkaps