const mongoose=require("mongoose")
const uniqueValidator = require('mongoose-unique-validator');
const authorSchema=mongoose.Schema({
    lastName:{ 
        type:String,
        required:true,
    },
    firstName: { 
        type:String,
        required:true,
    },
    nathionality: { 
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true
      },
    
})
authorSchema.plugin(uniqueValidator);

module.exports= mongoose.model("author",authorSchema)