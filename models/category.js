const mongoose=require("mongoose")
const categorySchema=mongoose.Schema({
    title:{ 
        type:String,
        required:true,
        enum: ['Horror','Mystery']
    },
    
})
module.exports= mongoose.model("category",categorySchema)